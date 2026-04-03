"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { PackageModal, type PackageCard } from "./PackageModal";

type EventItem = PackageCard & {
  subtitle: string;
  objectPosition?: string;
};

const events: EventItem[] = [
  {
    id: "birthday",
    title: "Birthday",
    subtitle: "Milestone moments",
    description: "Capturing the joy and laughter of your special day with cinematic flair.",
    image: "/event-birthday.png",
    objectPosition: "object-center",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["3 hours coverage", "1 Photographer", "50 Edited photos", "Online Gallery"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["5 hours coverage", "1 Photographer + 1 Assistant", "100 Edited photos", "Highlight Video (1 min)"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["8 hours coverage", "2 Photographers", "200 Edited photos", "Cinematic Film (3 mins)", "Premium Photo Album"],
      },
    ],
  },
  {
    id: "rice-ceremony",
    title: "Rice Ceremony",
    subtitle: "Sacred first meal",
    description: "Documenting the traditional significance and family warmth of this sacred milestone.",
    image: "/event-rice.png",
    objectPosition: "object-center",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["4 hours coverage", "1 Photographer", "60 Edited photos", "Traditional editing style"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["6 hours coverage", "1 Photographer + 1 Assistant", "120 Edited photos", "Cinematic highlights"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["Full event coverage", "2 Photographers", "Unlimited raw files", "Luxury album", "Family portraits included"],
      },
    ],
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "The promise of forever",
    description: "The beginning of your journey together, captured in beautiful, intimate portraits.",
    image: "/event-engagement.png",
    objectPosition: "object-center",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["2 hours coverage", "1 Photographer", "30 Edited photos", "Quick turnaround"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["4 hours coverage", "1 Photographer", "70 Edited photos", "Engagement teaser video"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["6 hours coverage", "2 Photographers", "120 Edited photos", "Cinematic story film", "Printed portraits"],
      },
    ],
  },
  {
    id: "anniversary",
    title: "Anniversary",
    subtitle: "Years of love",
    description: "Celebrating the enduring beauty of your love story with elegant photography.",
    image: "/event-anniversary.png",
    objectPosition: "object-top",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["2 hours coverage", "1 Photographer", "25 Edited photos", "Digital delivery"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["4 hours coverage", "1 Photographer", "60 Edited photos", "Anniversary highlight reel"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["Full celebration coverage", "2 Photographers", "150 Edited photos", "Cinematic documentary", "Commemorative album"],
      },
    ],
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "A new beginning",
    description: "Soft, beautiful moments celebrating the upcoming arrival of your little one.",
    image: "/event-babyshower.svg",
    objectPosition: "object-center",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["3 hours coverage", "1 Photographer", "40 Edited photos", "Thematic editing"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["5 hours coverage", "1 Photographer", "80 Edited photos", "Baby shower teaser"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["Full event coverage", "1 Photographer + assistant", "150 Edited photos", "Cinematic film", "Maternity shoot add-on available"],
      },
    ],
  },
  {
    id: "Live-Event",
    title: "Live Event",
    subtitle: "Live Event",
    description: "Dynamic and high-energy coverage for concerts, festivals, and cultural gatherings.",
    image: "/event-live.png",
    objectPosition: "object-center",
    packages: [
      {
        name: "Silver",
        icon: "◈",
        features: ["4 hours coverage", "1 Lead Photographer", "100 Action shots", "Next-day delivery"],
      },
      {
        name: "Gold",
        icon: "◆",
        features: ["8 hours coverage", "2 Photographers", "250 Action shots", "Social media highlight edits"],
      },
      {
        name: "Platinum",
        icon: "✦",
        features: ["Full day/Festival coverage", "3 Photographers", "Unlimited action shots", "Pro video highlights", "Live feed photography snippets"],
      },
    ],
  },
];

export default function EventSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  }, []);

  return (
    <>
      <section id="events" className="w-full py-24 px-6 md:px-12 bg-neutral-950">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-500 mb-4 font-medium">
              What We Cover
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-white uppercase mb-5">
              Event Photography
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px bg-neutral-700 w-10 block" />
              <span className="text-neutral-600 text-[11px]">✦</span>
              <span className="h-px bg-neutral-700 w-10 block" />
            </div>
            <p className="text-sm text-neutral-500 font-light tracking-wide max-w-md leading-relaxed mb-6">
              Capturing every special occasion with the same artistry and dedication we bring to weddings.
            </p>
            <div className="flex justify-center">
              <a
                href="/event-photography-kolkata"
                className="inline-block mt-4 px-6 py-3 rounded-lg bg-white text-black text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.03]"
              >
                Learn More About Event Photography
              </a>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => openModal(event)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Background Image — zoom on hover */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={event.image}
                    alt={`${event.title} Photography in Kolkata - Professional Event Coverage by Bodhuboron`}
                    fill
                    className={`object-cover ${event.objectPosition ?? "object-center"}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Base gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />

                {/* Hover overlay — darkens on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                {/* "Explore" hover indicator — fades in */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] tracking-[0.35em] uppercase font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20">
                    Explore
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="text-[9px] tracking-[0.35em] uppercase text-white/50 mb-1.5 font-medium">
                      {event.subtitle}
                    </p>
                    <h3 className="text-lg sm:text-xl font-light tracking-widest text-white uppercase leading-tight group-hover:text-white transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Thin bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/0 group-hover:bg-white/20 transition-colors duration-500" />
              </div>
            ))}

            {/* Decorative "More Coming" filler card to balance the grid on lg */}
            <div className="hidden lg:flex relative h-72 sm:h-80 rounded-2xl overflow-hidden items-center justify-center border border-dashed border-neutral-800 group cursor-default">
              <div className="text-center px-6">
                <span className="text-neutral-700 text-2xl mb-3 block group-hover:text-neutral-500 transition-colors duration-300">✦</span>
                <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-700 font-medium group-hover:text-neutral-500 transition-colors duration-300">
                  More Events
                </p>
                <p className="text-[9px] text-neutral-800 mt-1 tracking-wide group-hover:text-neutral-600 transition-colors duration-300">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Package Modal */}
      <PackageModal
        card={selectedEvent}
        isOpen={isModalOpen}
        onClose={closeModal}
        headerLabel="Event Packages"
      />
    </>
  );
}
