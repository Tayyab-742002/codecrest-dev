"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Slide {
  type: "image" | "video";
  src: string;
  text: string[];
}

const slides: Slide[] = [
  {
    type: "video",
    src: "/background-video-2.mp4",
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548",
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },

  {
    type: "image",
    src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    type: "video",
    src: "/background-video.mp4",
    text: ["MOTION IN", "STILLNESS"],
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Preload images and setup video refs
  useEffect(() => {
    slides.forEach((slide) => {
      if (slide.type === "image") {
        const img = new Image();
        img.src = slide.src;
      }
    });
  }, []);

  // Handle video playback
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current && slides[index].type === "video") {
          video.play().catch((err) => console.log("Video play error:", err));
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [current]);

  const changeSlide = (newIndex: number): void => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrent(newIndex);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const startAutoScroll = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => {
        const newIndex = (prev + 1) % slides.length;
        return newIndex;
      });
    }, 5000);
  };

  const nextSlide = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const newIndex = (current + 1) % slides.length;
    changeSlide(newIndex);
    startAutoScroll();
  };

  const prevSlide = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const newIndex = (current - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
    startAutoScroll();
  };

  const goToSlide = (index: number): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    changeSlide(index);
    startAutoScroll();
  };

  // Auto-scroll functionality
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 ${
            i === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{
            transition: "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {slide.type === "image" ? (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ) : (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.src}
              muted
              loop
              playsInline
              preload="auto"
            />
          )}

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50" />

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="text-center space-y-4 px-4">
              {slide.text.map((t, j) => (
                <h2
                  key={j}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight animate-fade-in"
                  style={{
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)",
                    fontFamily:
                      '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  }}
                >
                  {t}
                </h2>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full cursor-pointer text-white text-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={prevSlide}
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full cursor-pointer text-white text-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={nextSlide}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => goToSlide(i)}
            disabled={isTransitioning}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-6 md:top-8 right-6 md:right-8 z-30 text-white text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>

      {/* GET IN TOUCH Button */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-30">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          GET IN TOUCH
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
