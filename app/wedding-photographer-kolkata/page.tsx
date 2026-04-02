import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Wedding Photographer in Kolkata | Bodhuboron",
  description: "Experience the magic of your special day with the best wedding photographer in Kolkata. Bodhuboron captures every emotion and detail with artistic depth.",
  keywords: ["wedding photographer Kolkata", "candid wedding photography Kolkata", "best wedding photographer in Kolkata", "wedding photography packages Kolkata"],
};

export default function WeddingPhotographyPage() {
  return (
    <main className="flex flex-1 w-full flex-col bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding-both.png"
            alt="Wedding Photography in Kolkata"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest text-white uppercase mb-4">
            Best Wedding Photographer in Kolkata
          </h1>
          <div className="flex justify-center items-center gap-4 pt-10">
            <span className="h-px bg-white/40 w-12" />
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Premium Wedding Shoots</span>
            <span className="h-px bg-white/40 w-12" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center font-montserrat">
        <h2 className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-8 font-medium">
          The Art of Storytelling
        </h2>
        <p className="text-lg md:text-xl text-neutral-800 font-light leading-relaxed mb-8">
          Your wedding day is not just an event — it’s a story filled with emotions, traditions, and unforgettable moments. At <strong>Bodhuboron</strong>, we specialize in capturing weddings in Kolkata with a perfect blend of candid emotions and cinematic storytelling.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-base">
          Whether it’s the laughter, the rituals, or those quiet emotional moments, we ensure every frame reflects your unique journey. We don't just take photos; we preserve your story forever.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Wedding Photography Services in Kolkata</h2>
            <div className="h-px w-20 bg-neutral-300" />
            <p className="mt-6 text-neutral-500 font-light max-w-2xl">
              We offer complete wedding photography solutions tailored to your needs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Complete Coverage</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">Full wedding coverage for both the Bride & Groom, ensuring every shared moment is documented.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Single-Side Packages</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">Ideal for smaller ceremonies or when you need focused coverage for one side of the family.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Mixed Styles</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">A perfect harmony of traditional rituals and modern candid photography.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Cinematic Films</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">High-definition wedding films that look and feel like a motion picture.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Premium Albums</h3>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">High-quality edited albums that serve as a physical heirloom for generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-8">Why Choose Bodhuboron?</h2>
            <p className="text-neutral-600 font-light mb-10 text-sm leading-relaxed">
              Choosing the right photographer can make all the difference. Here's why couples trust us:
            </p>
            <ul className="space-y-8">
              {[
                { title: "Storytelling approach", desc: "We focus on the narrative of your day, not just the poses." },
                { title: "Real emotions and details", desc: "Attention to the fleeting glances and small touches that matter." },
                { title: "Premium editing", desc: "A cinematic feel that elevates your photos to a work of art." },
                { title: "Personalized experience", desc: "Customized attention for every couple's unique vision." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6 border-b border-neutral-100 pb-6 last:border-0 last:pb-0">
                  <span className="text-2xl font-extralight text-neutral-400">0{i + 1}</span>
                  <div>
                    <h4 className="font-medium text-neutral-800 uppercase tracking-wide text-sm mb-1">{item.title}</h4>
                    <p className="text-neutral-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/wedding-single.png"
              alt="Bodhuboron Wedding Photographer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-900 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-10 leading-tight">Capture Your Special Day</h2>
        <p className="text-white/60 font-light max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Every wedding is unique, and your memories deserve to be preserved beautifully. Let's create something timeless together.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/#contact"
            className="px-12 py-5 bg-white rounded-2xl text-black text-[12px] tracking-[0.4em] uppercase font-bold hover:bg-neutral-200 transition-all transform hover:-translate-y-1"
          >
            👉 Book your wedding photography
          </Link>
          <Link
            href="/#wedding"
            className="px-12 rounded-2xl py-5 border border-white/20 text-white text-[12px] tracking-[0.4em] uppercase font-medium hover:bg-white/10 transition-colors"
          >
            Explore our packages
          </Link>
        </div>
      </section>
    </main>
  );
}
