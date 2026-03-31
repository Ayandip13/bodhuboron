import Image from "next/image";

type EventItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  objectPosition?: string;
};

const events: EventItem[] = [
  {
    id: "birthday",
    title: "Birthday",
    subtitle: "Milestone moments",
    image: "/event-birthday.png",
    objectPosition: "object-center",
  },
  {
    id: "rice-ceremony",
    title: "Rice Ceremony",
    subtitle: "Sacred first meal",
    image: "/event-rice.png",
    objectPosition: "object-center",
  },
  {
    id: "engagement",
    title: "Engagement",
    subtitle: "The promise of forever",
    image: "/event-engagement.png",
    objectPosition: "object-center",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    subtitle: "Years of love",
    image: "/event-anniversary.png",
    objectPosition: "object-top",
  },
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "A new beginning",
    image: "/event-babyshower.svg",
    objectPosition: "object-center",
  },
  {
    id: "Live-Event",
    title: "Live Event",
    subtitle: "Live Event",
    image: "/event-live.png",
    objectPosition: "object-center",
  },
];

export default function EventSection() {
  return (
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
          <p className="text-sm text-neutral-500 font-light tracking-wide max-w-md leading-relaxed">
            Capturing every special occasion with the same artistry and dedication we bring to weddings.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background Image — zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <Image
                  src={event.image}
                  alt={event.title}
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
  );
}
