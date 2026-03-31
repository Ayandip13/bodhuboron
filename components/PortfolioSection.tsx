"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";

type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  category: "Wedding" | "Event" | "Pre-Wedding";
  aspectRatio: string; // To help with masonry feel
};

const portfolioItems: PortfolioItem[] = [
  { id: "1", src: "/wedding-both.png", alt: "Both bride and groom ceremony", category: "Wedding", aspectRatio: "aspect-4/5" },
  { id: "2", src: "/portfolio-1.jpg", alt: "Wedding ceremony moment", category: "Wedding", aspectRatio: "aspect-square" },
  { id: "3", src: "/event-birthday.png", alt: "Birthday party celebration", category: "Event", aspectRatio: "aspect-3/4" },
  { id: "4", src: "/prewedding.jpg", alt: "Pre-wedding romantic session", category: "Pre-Wedding", aspectRatio: "aspect-4/5" },
  { id: "5", src: "/event-rice.png", alt: "Rice ceremony traditional ritual", category: "Event", aspectRatio: "aspect-square" },
  { id: "6", src: "/portfolio-2.jpg", alt: "Grand wedding reception", category: "Wedding", aspectRatio: "aspect-3/4" },
  { id: "7", src: "/event-engagement.png", alt: "Engagement ring exchange", category: "Wedding", aspectRatio: "aspect-4/5" },
  { id: "8", src: "/event-anniversary.png", alt: "Anniversary couple portrait", category: "Event", aspectRatio: "aspect-square" },
  { id: "9", src: "/portfolio-3.jpg", alt: "Cinematic couple portrait", category: "Pre-Wedding", aspectRatio: "aspect-3/2" },
  { id: "10", src: "/event-babyshower.svg", alt: "Baby shower celebration", category: "Event", aspectRatio: "aspect-4/5" },
  { id: "11", src: "/event-live.png", alt: "Live concert performance", category: "Event", aspectRatio: "aspect-square" },
  { id: "12", src: "/wedding-single.png", alt: "Single-sided wedding coverage", category: "Wedding", aspectRatio: "aspect-3/4" },
];

const categories = ["All", "Wedding", "Event", "Pre-Wedding"] as const;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (item: PortfolioItem) => setSelectedItem(item);
  const closeLightbox = useCallback(() => setSelectedItem(null), []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ESC key listener
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, closeLightbox]);

  // Body scroll lock
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedItem]);

  return (
    <>
      <section id="portfolio" className="w-full py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-4 font-medium">
              Gallery
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-8">
              Our Portfolio
            </h2>
            <div className="flex items-center gap-4 mb-10">
              <span className="h-px bg-neutral-200 w-12 block" />
              <span className="text-neutral-300 text-[11px]">✦</span>
              <span className="h-px bg-neutral-200 w-12 block" />
            </div>
          </div>

          {/* Filter System */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 text-[11px] tracking-[0.3em] uppercase transition-all duration-500 font-medium ${
                  activeFilter === category 
                    ? "text-neutral-900" 
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {category}
                <span className={`absolute bottom-0 left-0 h-px bg-neutral-900 transition-all duration-500 ${
                  activeFilter === category ? "w-full opacity-100" : "w-0 opacity-0"
                }`} />
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:brightness-110 hover:rotate-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                }}
                onClick={() => openLightbox(item)}
              >
                {/* Image Container with varying aspect ratio */}
                <div className={`relative w-full ${item.aspectRatio}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-1 font-medium">
                      {item.category}
                    </p>
                    <h4 className="text-white text-xs tracking-widest uppercase font-light">
                      {item.alt}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className={`fixed inset-0 z-60 bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 transition-all duration-500 ${
            selectedItem ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors duration-300 p-2 group"
          >
            <svg className="w-8 h-8 font-thin transition-transform duration-500 group-hover:rotate-90" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Panel */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[80vh] flex flex-col items-center justify-center transition-all duration-500 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Info Legend */}
            <div className="mt-8 text-center">
              <p className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-2 font-light">
                {selectedItem.category}
              </p>
              <h3 className="text-white text-sm tracking-[0.2em] font-light uppercase">
                {selectedItem.alt}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
