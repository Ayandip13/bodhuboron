"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { PackageModal, type PackageCard } from "./PackageModal";

const preWeddingPackage: PackageCard = {
  id: "pre-wedding-packages",
  title: "Pre-Wedding Packages",
  description: "Romantic and cinematic storytelling of your love before the big day.",
  image: "/prewedding.jpg",
  packages: [
    {
      name: "Silver",
      icon: "◈",
      features: [
        "3 hours of outdoor session",
        "1 curated location",
        "20 high-end edited photos",
        "Online gallery delivery (1 year access)",
        "Styling consultation included",
      ],
    },
    {
      name: "Gold",
      icon: "◆",
      features: [
        "6 hours of coverage",
        "2 beautiful locations",
        "40 high-end edited photos",
        "Cinematic pre-wedding teaser (2 mins)",
        "1 premium canvas print (12x18)",
        "All raw files provided",
      ],
    },
    {
      name: "Platinum",
      icon: "✦",
      features: [
        "Full day sunrise to sunset session",
        "Unlimited location changes",
        "70 high-end edited photos",
        "Luxury cinematic story film (4 mins)",
        "2 premium canvas prints",
        "Professional hair & makeup artist",
        "Drone cinematography included",
      ],
    },
  ],
};

export default function PreWeddingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <section id="pre-wedding" className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[15px] tracking-[0.45em] uppercase text-neutral-400 mb-4 font-medium">
              Specialized
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-5">
              Pre-Wedding Shoot
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px bg-neutral-300 w-10 block" />
              <span className="text-neutral-300 text-[11px]">✦</span>
              <span className="h-px bg-neutral-300 w-10 block" />
            </div>
            <p className="text-md text-neutral-500 font-light tracking-wide max-w-md leading-relaxed mb-6">
              Timeless moments before your big day.
            </p>
            <div className="flex justify-center">
              <a
                href="/pre-wedding-shoot-kolkata"
                className="inline-block mt-4 px-6 py-3 rounded-lg bg-black text-white text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.03]"
              >
                Learn More About Pre-Wedding Photography
              </a>
            </div>
          </div>

          {/* Main Card */}
          <div className="max-w-4xl mx-auto">
            <div
              className="group relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700"
              onClick={openModal}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                <Image
                  src={preWeddingPackage.image}
                  alt={preWeddingPackage.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase mb-4">
                    {preWeddingPackage.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 font-light max-w-md mb-8 leading-relaxed">
                    {preWeddingPackage.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal();
                    }}
                    className="group/btn relative inline-flex items-center px-8 py-3 overflow-hidden text-xs tracking-[0.3em] uppercase font-medium text-white border border-white/30 rounded-full transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <span className="relative z-10">View Packages</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Modal */}
      <PackageModal
        card={preWeddingPackage}
        isOpen={isModalOpen}
        onClose={closeModal}
        headerLabel="Pre-Wedding Packages"
      />
    </>
  );
}
