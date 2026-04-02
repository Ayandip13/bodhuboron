import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Event Photography Kolkata | Bodhuboron",
  description: "Capture the spirit of your events with the leading event photography in Kolkata. We cover everything from corporate gatherings to social parties and intimate celebrations.",
  keywords: ["event photography Kolkata", "corporate event photographer Kolkata", "best event photographer Kolkata", "social event photography Kolkata", "birthday party photographer Kolkata"],
};

export default function EventPhotographyPage() {
  return (
    <main className="flex flex-1 w-full flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[400px] pt-10 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <Image
            src="/event-live.png"
            alt="Event Photography Kolkata"
            fill
            className="object-cover object-center opacity-60 brightness-75 scale-105"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-white uppercase mb-6 leading-tight">
            Professional Event <br className="hidden md:block" /> Photographer in Kolkata
          </h1>
          <div className="flex justify-center items-center gap-6">
            <span className="h-px bg-white/20 w-16" />
            <span className="text-white/40 text-[11px] tracking-[0.4em] uppercase">Moments. Memories. More.</span>
            <span className="h-px bg-white/20 w-16" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start font-montserrat">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-light tracking-[0.15em] text-neutral-900 border-l-2 border-neutral-200 pl-8 uppercase">
            Expert Event Coverage
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-xl text-neutral-700 font-light leading-relaxed mb-8">
            From birthdays to engagements and cultural celebrations, every event deserves to be remembered beautifully.
          </p>
          <p className="text-neutral-500 font-light leading-relaxed text-base">
            Bodhuboron offers professional event photography services in Kolkata that capture the energy, emotions, and highlights of your special occasions. We ensure every milestone is preserved with the artistic depth it deserves.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Our Event Photography Services</h2>
            <div className="h-px w-20 bg-neutral-200" />
            <p className="mt-6 text-neutral-500 font-light max-w-2xl">
              We cover a wide range of events:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Birthday parties", desc: "Capturing the joy of one more year." },
              { title: "Rice ceremonies", desc: "Traditional milestones preserved." },
              { title: "Engagements", desc: "The promise of a lifetime." },
              { title: "Anniversaries", desc: "Celebrating years of love." },
              { title: "Corporate Events", desc: "Professional image for your brand." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 border border-neutral-100 hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 rounded-2xl group">
                <div className="text-neutral-300 group-hover:text-neutral-900 transition-colors mb-6 text-xl font-light">0{index + 1}</div>
                <h3 className="text-sm font-semibold text-neutral-800 uppercase tracking-widest mb-3">{service.title}</h3>
                <p className="text-neutral-500 text-xs font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-light tracking-[0.2em] text-neutral-900 uppercase mb-4">What Makes Us Different?</h2>
          <p className="text-neutral-500 font-light max-w-2xl mx-auto font-montserrat">Precision, professionalism, and the art of seeing what others miss.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center mb-8">
              <span className="text-lg font-light text-neutral-400 group-hover:text-neutral-900">01</span>
            </div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase mb-4">Efficient Coverage</h4>
            <p className="text-neutral-500 font-light text-xs leading-6">Fast and efficient coverage ensuring no key moment is missed during your event.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center mb-8">
              <span className="text-lg font-light text-neutral-400">02</span>
            </div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase mb-4">High Quality</h4>
            <p className="text-neutral-500 font-light text-xs leading-6">Superior resolution images and cinematic editing for a premium look.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center mb-8">
              <span className="text-lg font-light text-neutral-400">03</span>
            </div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase mb-4">Candid Focus</h4>
            <p className="text-neutral-500 font-light text-xs leading-6">A primary focus on real, unposed moments and authentic reactions.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center mb-8">
              <span className="text-lg font-light text-neutral-400">04</span>
            </div>
            <h4 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase mb-4">Experienced Team</h4>
            <p className="text-neutral-500 font-light text-xs leading-6">A dedicated team with years of experience across all types of event formats.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden">
        {/* Abstract shapes for design */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/2 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/1 rounded-full translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.25em] uppercase mb-10 leading-tight">Make Every Event Memorable</h2>
          <p className="text-white/40 font-light mx-auto mb-14 text-xl max-w-2xl leading-relaxed">
            No matter the occasion, we make sure your memories last forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/#contact"
              className="group relative flex items-center gap-4 px-12 py-5 bg-white rounded-2xl text-black text-[12px] tracking-[0.4em] uppercase font-bold hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
            >
              👉 Book your event today
            </Link>
            <Link
              href="/"
              className="px-12 rounded-2xl py-5 border border-white/20 text-white text-[12px] tracking-[0.4em] uppercase font-medium hover:bg-white/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}
