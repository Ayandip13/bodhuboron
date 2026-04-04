"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToWedding = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("wedding");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#wedding");
    } else {
      window.location.hash = "#wedding";
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background image with slow ken-burns zoom */}
      <div
        className={`absolute inset-0 z-0 transition-transform duration-3000 ease-out ${isLoaded ? "scale-100" : "scale-110"
          }`}
      >
        <Image
          src="/hero-bg.png"
          alt="Bodhuboron Wedding Photography"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/85 via-black/50 to-black/25" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/35 via-transparent to-transparent" />

      {/* Hero content */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center px-6 sm:px-10 py-14 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Glassmorphism depth layer */}
        <div className="mt-5 absolute inset-4 sm:inset-0 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl pointer-events-none" />

        {/* Eyebrow label */}
        <p
          className={`relative z-10 text-[10px] sm:text-xs tracking-[0.45em] uppercase text-white/45 mb-7 font-medium transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          Professional Photography
        </p>

        {/* Main heading */}
        <h1
          className={`relative z-10 text-3xl sm:text-6xl md:text-7xl font-light tracking-widest sm:tracking-[0.18em] text-white uppercase mb-5 leading-tight transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            transitionDelay: "350ms",
            textShadow: "0 4px 40px rgba(0,0,0,0.6)",
          }}
        >
          Bodhuboron
        </h1>

        {/* Ornamental divider */}
        <div
          className={`relative z-10 flex items-center justify-center gap-4 mb-5 w-full transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}
          style={{ transitionDelay: "500ms" }}
        >
          <span className="h-px bg-white/25 w-50 block" />
          <span className="text-white/35 text-[11px]">✦</span>
          <span className="h-px bg-white/25 w-50 block" />
        </div>

        {/* Subtitle */}
        <h2
          className={`relative z-10 text-[10px] sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white/70 mb-8 font-light transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "550ms" }}
        >
          Capturing Your Special Moments
        </h2>

        {/* Description */}
        <p
          className={`relative z-10 text-xs sm:text-[13px] text-white/45 font-light max-w-md mx-auto mb-11 leading-loose tracking-wide transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "650ms" }}
        >
          We craft timeless visual stories of your most treasured days — weddings, pre-wedding portraits, and events — with an eye for raw emotion and elegant detail.
        </p>

        {/* CTA Button — pill shape, glassmorphic */}
        <a
          href="#wedding"
          onClick={handleScrollToWedding}
          className={`relative z-10 group inline-flex items-center justify-center gap-3 px-8 sm:px-11 py-3 sm:py-4 rounded-full text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.35em] uppercase font-medium text-white border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black hover:border-white hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: "750ms" }}
        >
          Explore Services
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-700 ${isLoaded ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        style={{ transitionDelay: "950ms" }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/50">Scroll</span>
        <div className="w-px h-10 bg-linear-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
