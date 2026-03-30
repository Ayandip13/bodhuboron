import Image from "next/image";

const weddingCards = [
  {
    id: "both",
    title: "Both (Bride & Groom)",
    description:
      "A complete story told from both sides — beautifully choreographed moments of the bride and groom together.",
    image: "/wedding-both.png",
    badge: "Most Popular",
  },
  {
    id: "single",
    title: "Single Side Coverage",
    description:
      "Focused, intimate coverage for one side of the ceremony — ideal for solo portraits with artistic depth.",
    image: "/wedding-single.png",
    badge: "Intimate",
  },
];

export default function WeddingSection() {
  return (
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
              className="group relative h-[500px] md:h-[580px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background Image with zoom effect */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Cinematic gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[9px] tracking-[0.3em] uppercase font-medium text-white/80 bg-white/10 backdrop-blur-sm border border-white/15">
                  {card.badge}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-light tracking-widest text-white uppercase mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6 max-w-xs">
                    {card.description}
                  </p>

                  {/* Divider line that grows on hover */}
                  <div className="h-px bg-white/20 mb-6 transition-all duration-500 group-hover:bg-white/40" />

                  <button
                    type="button"
                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase font-medium text-white/80 hover:text-white transition-colors duration-300"
                    aria-label={`View packages for ${card.title}`}
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
  );
}
