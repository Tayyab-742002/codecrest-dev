"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Slide = {
  img?: string;
  video?: string;
  text: string[];
};

const slides: Slide[] = [
  {
    video: "/background-video-2.mp4",
    text: ["BUILDING TOMORROW", "TODAY"],
  },
  {
    video: "/background-video-3.mp4",
    text: ["CODE MEETS", "CREATIVITY"],
  },
  {
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1640",
    text: ["YOUR VISION", "OUR EXPERTISE"],
  },
  {
    img: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740",
    text: ["SHIPPING EXCELLENCE", "EVERY DAY"],
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Preload all images and videos immediately
  useEffect(() => {
    const loadMedia = () => {
      slides.forEach((slide) => {
        if (slide.img) {
          const img = new Image();
          img.src = slide.img;
          // Images will be cached by the browser
        } else if (slide.video) {
          const video = document.createElement("video");
          video.src = slide.video;
          video.preload = "auto";
          // Videos will be cached by the browser
        }
      });
    };

    loadMedia();
  }, []);

  // Handle video playback when slides change
  useEffect(() => {
    const videos = videoRefs.current;

    videos.forEach((video, index) => {
      if (!video) return;

      if (index === current) {
        // Play the current video
        video.play().catch((error) => {
          // Autoplay may be blocked by browser policy
          console.warn("Video autoplay failed:", error);
        });
      } else {
        // Pause all other videos
        video.pause();
        video.currentTime = 0; // Reset to start for better UX
      }
    });

    // Cleanup: pause all videos when component unmounts
    return () => {
      videos.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, [current]);

  const nextSlide = () => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrent((prev) => (prev + 1) % slides.length);
    // Restart auto-scroll after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const prevSlide = () => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    // Restart auto-scroll after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const goToSlide = (index: number) => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrent(index);
    // Restart auto-scroll after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ marginTop: 0 }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 ${
            i === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{
            ...(slide.img && {
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }),
            willChange:
              i === current ||
              i === (current + 1) % slides.length ||
              i === (current - 1 + slides.length) % slides.length
                ? "opacity"
                : "auto",
            transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            WebkitTransform: "translateZ(0)",
            isolation: "isolate",
          }}
        >
          {/* Video element for video slides */}
          {slide.video && (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="absolute inset-0 w-full h-full object-cover"
              src={slide.video}
              loop
              muted
              playsInline
              preload="auto"
              style={{
                willChange: "opacity",
              }}
            />
          )}

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Slide Text Content */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
            style={{
              willChange: "opacity",
            }}
          >
            <div className="text-center space-y-4 px-4">
              {slide.text.map((t, j) => (
                <h2
                  key={j}
                  className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight ${
                    j === 0 ? "text-white" : ""
                  }`}
                  style={{
                    ...(j === 0
                      ? {
                          color: "#FFFFFF",
                          textShadow:
                            "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.2)",
                          filter:
                            "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                          fontWeight: 900,
                          letterSpacing: "-0.02em",
                        }
                      : {
                          color: "#FC2947",
                          textShadow:
                            "0 0 15px rgba(252, 41, 71, 0.4), 0 0 30px rgba(252, 41, 71, 0.2), 0 1px 5px rgba(0, 0, 0, 0.15)",
                          filter: "drop-shadow(0 0 6px rgba(252, 41, 71, 0.3))",
                          fontFamily:
                            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif',
                          fontWeight: 300,
                          letterSpacing: "0.05em",
                          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                        }),
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm cursor-pointer text-white text-2xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm cursor-pointer text-white text-2xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>

      {/* Slide Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-8 z-30 text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>

      {/* GET IN TOUCH Button - Static, always visible */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          GET IN TOUCH
        </Link>
      </div>
    </div>
  );
}
