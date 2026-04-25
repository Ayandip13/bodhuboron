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
        name: "Silver (70k)",
        icon: "◈",
        features: [
          "Wedding both side coverage",
          "2 indigo luxury album for 15 sheets",
          "1 full HD video 20 - 25 minute",
          "Digital invitation and cinematic treasures",
          "2 reels",
          "3 days coverup",
          "50 edited photos and all new copies",
        ],
      },
      {
        name: "Gold (85k)",
        icon: "◆",
        features: [
          "Wedding both side coverage",
          "2 indigo luxury album for 20 sheets",
          "1 full HD video 25 - 30 minute",
          "Digital invitation and cinematic treasures",
          "Pre wedding and post wedding",
          "100 edited photos and all raw copies",
          "4 reels",
          "3 days wedding coverup",
        ],
      },
      {
        name: "Platinum (1 lakh)",
        icon: "✦",
        features: [
          "2 Canberra luxury album for 20 sheets",
          "1 full HD video 25 to 30 minute",
          "Digital invitation and cinematic treasures",
          "Pre wedding and post wedding video (Choose for your criteria)",
          "1 day drone coverup",
          "1 photo frame",
          "100 edited picture and all raw copies",
          "4 days wedding full coverup",
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
        name: "Silver (40k)",
        icon: "◈",
        features: [
          "1 indigo luxury album for 15 sheets",
          "1 full HD video 20 - 25 minute",
          "Digital invitation and cinematic treasures",
          "50 edited photos and all raw copies",
          "2 reels",
          "3 days wedding coverup",
        ],
      },
      {
        name: "Gold (50k)",
        icon: "◆",
        features: [
          "1 luxury album for 20 sheets",
          "1 full HD video 25 to 30 minute",
          "Digital invitation and cinematic treasures",
          "Pre wedding and post wedding",
          "100 edited photos and all raw copies",
          "4 reels",
          "3 days wedding coverup",
        ],
      },
      {
        name: "Platinum (65k)",
        icon: "✦",
        features: [
          "1 Camera setup coverage",
          "1 full HD video 25 to 30 minute",
          "Digital invitation and cinematic treasures",
          "pre wedding and post wedding (Choose for your criteria)",
          "1 day drone coverup",
          "1 photo frame",
          "100 edited picture and all raw copies",
          "4 days wedding full coverup",
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
            <p className="text-[15px] tracking-[0.45em] uppercase text-neutral-400 mb-4 font-medium">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-5">
              Wedding Photography
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px bg-neutral-300 w-90 block" />
              <span className="text-neutral-300 text-[11px]">✦</span>
              <span className="h-px bg-neutral-300 w-90 block" />
            </div>
            <p className="text-md text-neutral-500 font-light tracking-wide max-w-md leading-relaxed mb-6">
              Choose how you want your special day captured — every detail, every emotion, perfectly preserved.
            </p>
            <div className="flex justify-center">
              <a
                href="/wedding-photographer-kolkata"
                className="inline-block mt-4 px-6 py-3 rounded-lg bg-black text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.03]"
              >
                Learn More About Wedding Photography
              </a>
            </div>
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
                    alt={`${card.title} Photography in Kolkata - Professional Event Coverage by Bodhuboron`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={65}
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                {/* Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase font-medium text-white bg-white/20 border border-white/20">
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
