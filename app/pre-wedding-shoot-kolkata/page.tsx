import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PackageCards } from "@/components/PackageCards";
import { preWeddingPackages } from "@/lib/packageData";

export const metadata: Metadata = {
  title: "Best Pre-Wedding Shoot in Kolkata | Bodhuboron",
  description: "Capture your romantic moments with the best pre-wedding shoot in Kolkata. Bodhuboron offers stunning locations and artistic storytelling for your love story.",
  keywords: ["pre wedding shoot Kolkata", "pre-wedding photographer Kolkata", "best pre wedding photoshoot locations in Kolkata", "pre wedding photography packages Kolkata"],
};

export default function PreWeddingShootPage() {
  return (
    <main className="flex flex-1 w-full flex-col bg-[#fcf9f6]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prewedding.jpg"
            alt="Pre-Wedding Shoot in Kolkata"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest text-white uppercase mb-4 leading-tight">
            Pre Wedding Shoot in Kolkata
          </h1>
          <div className="flex justify-center items-center gap-4 pt-10">
            <span className="h-px bg-white/40 w-12" />
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Romantic Storytelling</span>
            <span className="h-px bg-white/40 w-12" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 pt-10 md:px-12 max-w-4xl mx-auto text-center font-montserrat">
        <h2 className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-8 font-medium">
          Capturing Your Chemistry
        </h2>
        <p className="text-lg md:text-xl text-neutral-800 font-light leading-relaxed mb-6">
          A pre-wedding shoot is more than just photos — it’s about capturing your chemistry, your story, and your journey before the big day.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-base">
          At **Bodhuboron**, we create cinematic pre-wedding shoots in Kolkata that feel natural, romantic, and unforgettable. Let us document the pure magic that exists between the two of you.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Our Pre Wedding Shoot Experience</h2>
            <div className="h-px w-20 bg-neutral-200" />
            <p className="mt-6 text-neutral-500 font-light max-w-2xl">
              We focus on creating moments, not poses:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-[#fdfaf8] border border-stone-100 hover:border-stone-200 transition-colors group">
              <h3 className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">Experience 01</h3>
              <h4 className="text-xl font-medium text-neutral-800 mb-4 uppercase tracking-wider">Natural Candid Storytelling</h4>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                We capture the spontaneous laughter and quiet glances that happen naturally when you're just being yourselves.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-[#fdfaf8] border border-stone-100 hover:border-stone-200 transition-colors group">
              <h3 className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">Experience 02</h3>
              <h4 className="text-xl font-medium text-neutral-800 mb-4 uppercase tracking-wider">Cinematic Video Shoots</h4>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                Poetic films that feel like a trailer for your big day, featuring high-end cinematography and professional editing.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-[#fdfaf8] border border-stone-100 hover:border-stone-200 transition-colors group">
              <h3 className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">Experience 03</h3>
              <h4 className="text-xl font-medium text-neutral-800 mb-4 uppercase tracking-wider">Creative Location Planning</h4>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                From heritage landmarks to hidden gems in Kolkata, we help you find the perfect vibe for your shoot.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-[#fdfaf8] border border-stone-100 hover:border-stone-200 transition-colors group">
              <h3 className="text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">Experience 04</h3>
              <h4 className="text-xl font-medium text-neutral-800 mb-4 uppercase tracking-wider">Outfit and Theme Guidance</h4>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">
                Personalized styling advice to ensure your look complements the location and the story we're telling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
          <div className="flex-1 relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/prewedding.jpg"
              alt="Bodhuboron Pre-Wedding Shoot"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-8 leading-snug">Why Couples Love Our Pre Wedding Shoots</h2>
            <div className="space-y-8">
              {[
                { title: "Comfortable and relaxed experience", desc: "Most people are camera-shy; we make the process light, fun, and effortless." },
                { title: "Creative direction tailored to you", desc: "Every couple has a different personality. We adapt our direction to match yours." },
                { title: "High-end cinematic editing", desc: "Our post-production team ensures every frame is a masterpiece." },
                { title: "Unique storytelling approach", desc: "We don't do cookie-cutter shoots. Every pre-wedding film and photo set is original." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-b border-neutral-100 pb-6 last:border-0 last:pb-0">
                  <span className="text-3xl font-extralight text-neutral-400">0{i + 1}</span>
                  <div>
                    <h4 className="font-medium text-neutral-800 uppercase tracking-wide text-sm mb-2">{item.title}</h4>
                    <p className="text-neutral-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <PackageCards
        title="Pre Wedding Shoot Packages in Kolkata"
        packages={preWeddingPackages}
      />

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-900 border-t border-white/5 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-10 leading-tight">Let’s Tell Your Story</h2>
        <p className="text-white/50 font-light max-w-3xl mx-auto mb-12 text-lg">
          Before the wedding begins, let’s capture the story that started it all.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link
            href="/#contact"
            className="px-12 py-5 bg-stone-100 rounded-2xl text-stone-900 text-[12px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all transform hover:-translate-y-1"
          >
            👉 Contact us to plan your shoot
          </Link>
          <Link
            href="/"
            className="px-12 py-5 border border-white/10 rounded-2xl text-white text-[12px] tracking-[0.4em] uppercase font-medium hover:bg-white/5 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/#portfolio"
            className="px-12 rounded-2xl py-5 border border-white/10 text-white text-[12px] tracking-[0.4em] uppercase font-medium hover:bg-white/10 transition-colors"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
