"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import type { ReactNode } from "react";
import type { BlogPost } from "@/src/data/blog.data";

const vertexShader = `
  attribute vec4 position;
  void main() {
    gl_Position = position;
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float u_time;
  uniform vec2 u_resolution;
  
  vec3 hash3(vec2 p) {
    vec3 q = vec3(dot(p, vec2(127.1, 311.7)), 
                  dot(p, vec2(269.5, 183.3)), 
                  dot(p, vec2(419.2, 371.9)));
    return fract(sin(q) * 43758.5453);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
    return mix(mix(dot(hash3(i + vec2(0.0,0.0)).xy, f - vec2(0.0,0.0)), 
                   dot(hash3(i + vec2(1.0,0.0)).xy, f - vec2(1.0,0.0)), u.x),
               mix(dot(hash3(i + vec2(0.0,1.0)).xy, f - vec2(0.0,1.0)), 
                   dot(hash3(i + vec2(1.0,1.0)).xy, f - vec2(1.0,1.0)), u.x), u.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 2.0;
    
    for(int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  float grain(vec2 uv, float time) {
    vec2 seed = uv * time;
    return fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    float time = u_time * 0.1;
    
    // Subtle noise texture
    float noiseValue = fbm(uv * 4.0 + time * 0.2) * 0.5 + 0.5;
    
    // Film grain
    float grainAmount = 0.08;
    float grainValue = grain(uv, time * 0.5) * 2.0 - 1.0;
    
    // Very dark background with subtle noise
    vec3 bgColor = vec3(0.01, 0.01, 0.02);
    vec3 result = bgColor + noiseValue * 0.02 + grainValue * grainAmount;
    
    gl_FragColor = vec4(result, 1.0);
  }
`;

interface TitleLinkProps {
  children: ReactNode;
}

function TitleLink({ children }: TitleLinkProps) {
  const linkRef = useRef<HTMLHeadingElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(link, {
        scale: 1.05,
        rotationX: -2,
        z: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(link, {
        textShadow: "0 5px 20px rgba(255,255,255,0.2)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(link, {
        scale: 1,
        rotationX: 0,
        z: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.to(link, {
        textShadow: "0 0 0px rgba(255,255,255,0)",
        duration: 0.5,
        ease: "power3.out",
      });
    };

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      link.removeEventListener("mouseenter", handleMouseEnter);
      link.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <h1
      ref={linkRef}
      className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl cursor-pointer transition-all duration-300 transform-gpu perspective-1000 ${
        isHovered ? "z-10" : ""
      }`}
      style={{
        background: "linear-gradient(135deg, #ffffff, #cccccc)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        filter: isHovered
          ? "brightness(1.2) saturate(1.3)"
          : "brightness(1) saturate(1)",
      }}
    >
      {children}
    </h1>
  );
}

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

export default function BlogHero({ blog }: { blog: BlogPost }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const bufferRef = useRef<WebGLBuffer | null>(null);
  const positionLocationRef = useRef<number>(0);
  const timeLocationRef = useRef<WebGLUniformLocation | null>(null);
  const resolutionLocationRef = useRef<WebGLUniformLocation | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    glRef.current = gl;

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    bufferRef.current = buffer;

    const positionLocation = gl.getAttribLocation(program, "position");
    positionLocationRef.current = positionLocation;
    const timeLocation = gl.getUniformLocation(program, "u_time");
    timeLocationRef.current = timeLocation;
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    resolutionLocationRef.current = resolutionLocation;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    startTimeRef.current = performance.now();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    let frameId: number;
    const animateFrame = () => {
      const time = (performance.now() - startTimeRef.current) * 0.001;
      const gl = glRef.current;
      const program = programRef.current;
      const buffer = bufferRef.current;
      const positionLocation = positionLocationRef.current;
      const timeLocation = timeLocationRef.current;
      const resolutionLocation = resolutionLocationRef.current;

      if (gl && program && buffer && timeLocation && resolutionLocation) {
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.uniform1f(timeLocation, time);
        gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
      frameId = requestAnimationFrame(animateFrame);
    };

    frameId = requestAnimationFrame(animateFrame);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={blog.heroImage}
          alt={blog.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80" />
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none mix-blend-screen"
        style={{ background: "transparent", opacity: 0.35 }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 md:p-12">
        {/* Top text */}
        <div className="text-left">
          <p className="text-gray-300 text-xs sm:text-sm md:text-base uppercase tracking-wider font-bold mb-2">
            {blog.category}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400">
            <span>{formatDate(blog.publishedAt)}</span>
            <span>•</span>
            <span>{blog.readTimeMinutes} min read</span>
          </div>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="text-left mb-8 md:mb-0 flex-1">
            <TitleLink>{blog.title}</TitleLink>
            {blog.subtitle && (
              <p className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
                {blog.subtitle}
              </p>
            )}
          </div>

          <div className="text-right text-gray-300 text-xs sm:text-sm max-w-xs">
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-end mb-4">
                {blog.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

