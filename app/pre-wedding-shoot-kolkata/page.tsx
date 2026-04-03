import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PackageCards } from "@/components/PackageCards";
import { preWeddingPackages } from "@/lib/packageData";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Best Pre-Wedding Shoot in Kolkata | Cinematic & Romantic | Bodhuboron",
  description: "Capture your romantic journey with the best pre-wedding shoot in Kolkata. We offer artistic storytelling, cinematic films, and budget pre-wedding shoot packages.",
  keywords: ["pre wedding shoot kolkata", "pre-wedding photographer kolkata", "cinematic pre wedding shoot kolkata", "budget pre wedding shoot kolkata", "best pre wedding photoshoot locations in kolkata", "pre wedding photography packages kolkata"],
};

export default function PreWeddingShootPage() {
  const faqItems = [
    {
      question: "What are the best pre-wedding photoshoot locations in Kolkata?",
      answer: "Kolkata offers a variety of stunning locations including Princep Ghat, Victoria Memorial, Maidan, Kumartuli, and various heritage Rajbaris. At Bodhuboron, we help you choose the location that best fits your theme and style."
    },
    {
      question: "Do you provide outfits for the pre-wedding shoot?",
      answer: "While we don't directly provide outfits, we offer extensive styling and theme guidance to help you choose the perfect attire that complements the location and the story we're telling."
    },
    {
      question: "What is included in a pre-wedding photography package?",
      answer: "Our pre-wedding packages typically include 4-8 hours of coverage, professional editing, a cinematic highlight film, and high-resolution digital images. Some packages also include drone shots for a more cinematic feel."
    },
    {
      question: "What is the cost of a pre-wedding shoot in Kolkata?",
      answer: "The cost depends on the duration, locations, and whether you want a cinematic film. We offer budget pre-wedding shoot Kolkata packages that represent great value without compromising on quality."
    },
    {
      question: "How early should we book our pre-wedding session?",
      answer: "We recommend booking your pre-wedding shoot at least 2-3 months in advance to ensure we have enough time for location planning and scheduling, especially if you want a specific season or time of day."
    }
  ];

  return (
    <main className="flex flex-1 w-full flex-col bg-[#fcf9f6]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pre-Wedding Shoot Kolkata",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bodhuboron",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kolkata",
                "addressLocality": "Kolkata",
                "addressRegion": "West Bengal",
                "postalCode": "700001",
                "addressCountry": "IN"
              }
            },
            "areaServed": "Kolkata",
            "description": "Professional pre-wedding photography and cinematography services in Kolkata featuring beautiful locations and romantic storytelling."
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prewedding.jpg"
            alt="Romantic pre-wedding shoot in Kolkata featuring a couple at sunset"
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
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Cinematic Romantic Storytelling</span>
            <span className="h-px bg-white/40 w-12" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center font-montserrat">
        <h2 className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-10 font-medium">
          Your Love, Our Vision
        </h2>
        <p className="text-xl md:text-2xl text-neutral-800 font-light leading-relaxed mb-12">
          A <Link href="/blog/pre-wedding-shoot-ideas" className="text-black font-semibold underline underline-offset-4 decoration-stone-200">pre-wedding shoot in Kolkata</Link> is more than just a set of photos; it's a celebration of the chemistry that makes your bond unique. At <strong>Bodhuboron</strong>, we specialize in creating cinematic experiences that document your journey before the big day begins.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-lg mb-8">
          Kolkata provides a magnificent canvas for pre-wedding stories. Whether it's the vintage charm of the heritage alleys of North Kolkata, the serene boat rides at Princep Ghat, or the modern, sleek aesthetic of Eco Park, we know exactly how to blend the backdrop with your personality.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-lg">
          We don't believe in forced poses. Our approach is to create a fun, relaxed environment where you can just be yourselves. We capture the spontaneous laughter, the quiet glances, and the deep connection that defines your love, resulting in images and films that feel authentic and timeless.
        </p>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Our pre-wedding shoot experience</h2>
            <div className="h-px w-20 bg-neutral-200" />
            <p className="mt-8 text-neutral-500 font-light max-w-3xl text-lg italic leading-relaxed">
              We focus on creating moments that you'll look back on for a lifetime. Explore our <Link href="/blog/best-wedding-photography-locations-kolkata" className="text-black font-medium hover:underline">favored locations</Link> and styles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { id: "01", title: "Natural Candid Storytelling", desc: "We capture you as you are—free from artificiality, focusing on the real connection between you two." },
              { id: "02", title: "Cinematic Video Shoots", desc: "Our pre-wedding films are shot like a trailer for your big day, complete with professional editing and music." },
              { id: "03", title: "Creative Location Planning", desc: "From finding hidden heritage gems to iconic landmarks, we plan every shoot location carefully." },
              { id: "04", title: "Outfit and Theme Guidance", desc: "We help you coordinate your wardrobe with the locations to ensure a cohesive and artistic look." }
            ].map((exp, i) => (
              <div key={i} className="p-12 rounded-3xl bg-[#fdfaf8] border border-stone-100 hover:shadow-2xl hover:shadow-stone-200/50 transition-all group">
                <div className="text-xs font-semibold text-neutral-400 mb-4 uppercase tracking-[0.2em] group-hover:text-neutral-900 transition-colors">Phase {exp.id}</div>
                <h4 className="text-2xl font-light text-neutral-800 mb-4 uppercase tracking-wider">{exp.title}</h4>
                <p className="text-neutral-500 font-light text-base leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row gap-20 items-center">
          <div className="flex-1 relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/prewedding.jpg"
              alt="Bodhuboron pre-wedding shoot capturing a romantic moment in Kolkata"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-10 leading-snug">Why couples love our pre wedding shoots?</h2>
            <div className="space-y-10">
              {[
                { title: "Comfortable and relaxed experience", desc: "We understand that being in front of a camera can be intimidating. We make the process light-hearted and fun." },
                { title: "Artistic Creative direction", desc: "We don't just 'take photos'. We provide creative direction that aligns with your personality and vision." },
                { title: "High-end Cinematic editing", desc: "Every frame is meticulously edited to give it a premium, motion-picture quality that stands the test of time." },
                { title: "Unique storytelling approach", desc: "We offer <Link href='/blog/pre-wedding-shoot-ideas' className='text-black font-medium underline'>creative pre-wedding ideas</Link> that are tailored specifically to your love story." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 border-b border-neutral-100 pb-8 last:border-0 last:pb-0">
                  <span className="text-4xl font-extralight text-neutral-300 italic">0{i + 1}</span>
                  <div>
                    <h4 className="font-semibold text-neutral-800 uppercase tracking-wide text-sm mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-neutral-500 font-light text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking for SEO */}
      <section className="py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <Link href="/wedding-photographer-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Main wedding photography</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/event-photography-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Event photography Kolkata</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/blog/best-wedding-photography-locations-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Best photoshoot locations</Link>
        </div>
      </section>

      {/* Packages Section */}
      <div id="packages">
        <PackageCards
          title="Pre Wedding Shoot Packages in Kolkata"
          packages={preWeddingPackages}
        />
      </div>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* CTA Section */}
      <section className="py-28 px-6 md:px-12 bg-neutral-900 border-t border-white/5 text-white text-center rounded-[3rem] mx-4 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-500/[0.03] pointer-events-none" />
        <h2 className="text-3xl md:text-6xl font-light tracking-widest uppercase mb-12 leading-tight">Let’s Tell Your Love Story</h2>
        <p className="text-white/50 font-light max-w-4xl mx-auto mb-16 text-xl leading-relaxed italic">
          Before the wedding celebrations begin, let’s capture the magic of how it all started. Your journey deserves to be documented beautifully.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center relative z-10">
          <Link
            href="/#contact"
            className="px-14 py-6 bg-stone-100 rounded-2xl text-stone-900 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
          >
            👉 Get a Quote for your shoot
          </Link>
          <Link
            href="/#contact"
             className="px-14 py-6 border border-white/20 rounded-2xl text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white/10 transition-all"
          >
            Book Now
          </Link>
          <Link
           href="/"
            className="px-14 rounded-2xl py-6 border border-white/10 text-white/40 text-[11px] tracking-[0.4em] uppercase font-medium hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
