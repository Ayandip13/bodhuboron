"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import { PackageModal, type PackageCard } from "./PackageModal";

const weddingCards: PackageCard[] = [
  {
    id: "both",
    title: "Both (Bride & Groom)",
    description:
      "A complete story told from both sides — beautifully choreographed moments of the bride and groom together.",
    image: "/wedding-both.png",
    badge: "Most Popular",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: [
          "8 hours of coverage",
          "1 professional photographer",
          "500+ edited digital photos",
          "Online gallery delivery",
          "Print-ready files included",
        ],
      },
      {
        name: "Gold",
        icon: "◆",
        features: [
          "12 hours of coverage",
          "2 professional photographers",
          "800+ edited digital photos",
          "Cinematic highlight reel",
          "Premium album (40 pages)",
          "Priority delivery in 3 weeks",
        ],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: [
          "Full-day coverage (unlimited)",
          "3 photographers + assistant",
          "1200+ edited digital photos",
          "Cinematic film + drone shots",
          "Luxury album (60 pages)",
          "Pre-wedding shoot included",
          "Dedicated photo concierge",
        ],
      },
    ],
  },
  {
    id: "single",
    title: "Single Side Coverage",
    description:
      "Focused, intimate coverage for one side of the ceremony — ideal for solo portraits with artistic depth.",
    image: "/wedding-single.png",
    badge: "Intimate",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: [
          "5 hours of coverage",
          "1 professional photographer",
          "300+ edited digital photos",
          "Online gallery delivery",
          "Print-ready files included",
        ],
      },
      {
        name: "Gold",
        icon: "◆",
        features: [
          "8 hours of coverage",
          "2 professional photographers",
          "500+ edited digital photos",
          "Highlight reel video",
          "Standard album (30 pages)",
          "Delivery in 4 weeks",
        ],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: [
          "Full single-side coverage",
          "2 photographers + assistant",
          "700+ edited digital photos",
          "Short cinematic film",
          "Premium album (50 pages)",
          "Pre-wedding shoot included",
        ],
      },
    ],
  },
];

// ─── Main Section ────────────────────────────────────────────────────────────

export default function WeddingSection() {
  const [selectedCard, setSelectedCard] = useState<PackageCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (card: PackageCard) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300); // clear after animation
  }, []);

  return (
    <>
      <section id="wedding" className="w-full py-24 px-6 md:px-12 bg-[#fdfdfd]">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-4 font-medium">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-5">
              Wedding Photography
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px bg-neutral-300 w-10 block" />
              <span className="text-neutral-300 text-[11px]">✦</span>
              <span className="h-px bg-neutral-300 w-10 block" />
            </div>
            <p className="text-sm text-neutral-500 font-light tracking-wide max-w-md leading-relaxed">
              Choose how you want your special day captured — every detail, every emotion, perfectly preserved.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weddingCards.map((card) => (
              <div
                key={card.id}
                className="group relative h-[500px] md:h-[560px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                onClick={() => openModal(card)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] tracking-[0.3em] uppercase font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/15">
                    {card.badge}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-xl sm:text-2xl font-light tracking-widest text-white uppercase mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6 max-w-xs">
                      {card.description}
                    </p>
                    <div className="h-px bg-white/20 mb-6 transition-all duration-500 group-hover:bg-white/40" />

                    {/* View Packages Button */}
                    <button
                      type="button"
                      onClick={() => openModal(card)}
                      className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-medium text-white/80 hover:text-white transition-colors duration-300"
                    >
                      View Packages
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Package Modal */}
      <PackageModal card={selectedCard} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
