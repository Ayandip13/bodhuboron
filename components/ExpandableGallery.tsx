"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioImage {
  src: string;
  alt: string;
}

interface ExpandableGalleryProps {
  images: PortfolioImage[];
  title?: string;
}

export function ExpandableGallery({ images, title = "Explore Our Work" }: ExpandableGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-white flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        {/* Toggle Button / Header */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-neutral-900 uppercase mb-8">
            {title}
          </h2>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              group relative flex items-center justify-center gap-4 px-12 py-5 rounded-full text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-500 overflow-hidden ${isExpanded
                ? "bg-neutral-600 text-white shadow-2xl shadow-neutral-200"
                : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-600 shadow-sm hover:shadow-xl hover:-translate-y-1"
              }`}
          >
            {/* Animated Background for hover */}
            <div className={`absolute inset-0 transition-transform duration-700 ease-out translate-y-full group-hover:translate-y-0 ${isExpanded ? "bg-white/10" : "bg-neutral-900"
              }`} />

            <span className={`relative z-10 transition-colors duration-500 ${!isExpanded && "group-hover:text-white"}`}>
              {isExpanded ? "Hide Samples" : "View Sample Work"}
            </span>

            <div className={`relative z-10 w-5 h-5 flex items-center justify-center rounded-full transition-all duration-500 ${isExpanded
              ? "bg-white/20 rotate-45"
              : "bg-neutral-100 group-hover:bg-white/20 rotate-0"
              }`}>
              <svg
                className={`w-3 h-3 transition-colors duration-500 ${!isExpanded && "group-hover:text-white"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
        </div>

        {/* Expandable Content */}
        <div
          className={`w-full overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[2000px] opacity-100 mt-12" : "max-h-0 opacity-0"
            }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 transition-all duration-1000 transform ${isExpanded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {isExpanded && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-8">
            <Link
              href="/#portfolio"
              className="px-10 py-4 border border-neutral-200 rounded-xl text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-neutral-50 hover:text-neutral-900 transition-all"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
