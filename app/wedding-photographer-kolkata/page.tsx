import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PackageCards } from "@/components/PackageCards";
import { weddingPackages } from "@/lib/packageData";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Best Wedding Photographer in Kolkata | Candid & Cinematic | Bodhuboron",
  description: "Experience the magic of your special day with the best wedding photographer in Kolkata. Bodhuboron offers affordable wedding photography packages, candid storytelling, and cinematic films.",
  keywords: ["wedding photographer kolkata", "candid wedding photographer kolkata", "affordable wedding photographer kolkata", "best wedding photographer in kolkata with price", "professional wedding photography kolkata", "wedding photography packages kolkata"],
};

export default function WeddingPhotographyPage() {
  const faqItems = [
    {
      question: "What is the cost of wedding photography in Kolkata?",
      answer: "The cost of wedding photography in Kolkata varies depending on the number of days, hours of coverage, and whether you opt for both photography and cinematography. At Bodhuboron, we offer affordable wedding photography packages starting from basic coverage to high-end cinematic films. Contact us for a personalized quote tailored to your budget."
    },
    {
      question: "How early should I book a wedding photographer in Kolkata?",
      answer: "We recommend booking at least 6 to 12 months in advance, especially for popular dates in the peak wedding season (November to February). This ensures our availability and gives us enough time to plan and coordinate with you for a seamless experience."
    },
    {
      question: "Do you offer cinematic wedding films along with photography?",
      answer: "Yes, we specialize in both candid wedding photography and cinematic wedding films. Our team captures your story in a motion-picture style that you can cherish forever."
    },
    {
      question: "What is included in your wedding photography packages?",
      answer: "Our standard packages typically include event coverage by senior photographers, high-resolution edited images, a premium wedding album, and a cinematic highlight film. We also offer customization to fit your specific requirements."
    },
    {
      question: "Do you travel for destination weddings?",
      answer: "Yes, while we are primarily based as a wedding photographer in Kolkata, we love to travel across India for destination weddings. Travel and accommodation charges are applicable for outstation shoots."
    }
  ];

  return (
    <main className="flex flex-1 w-full flex-col bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wedding Photography Kolkata",
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
            "description": "Professional wedding photography services in Kolkata including candid shots and cinematic films."
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding-both.png"
            alt="Candid wedding photographer in Kolkata capturing bride and groom"
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
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">Artistic Candid Storytelling</span>
            <span className="h-px bg-white/40 w-12" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center font-montserrat">
        <h2 className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-10 font-medium">
          The Soul of Your Wedding
        </h2>
        <p className="text-xl md:text-2xl text-neutral-800 font-light leading-relaxed mb-10">
          Your wedding day is more than just an event; it's a tapestry of emotions, laughter, and timeless traditions. At <strong>Bodhuboron</strong>, we take pride in being the <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="text-black font-semibold underline underline-offset-4 decoration-stone-200">candid wedding photographer in Kolkata</Link> that you can trust to preserve these fleeting moments forever.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-lg mb-8">
          Every culture has its unique rhythm, and specifically in a Bengali wedding, the rituals are filled with deep meaning and vibrant colors. From the morning preparations of <em>Dadhi Mangal</em> to the emotional <em>Subho Drishti</em> and the final <em>Sindoor Daan</em>, our lenses capture the heart of every ritual with artistic depth and precision.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed text-lg">
          We believe in storytelling that goes beyond fixed poses. Our approach is to blend into the celebration, documenting the real emotions of you and your loved ones. Whether it's a grand banquet hall or an intimate garden ceremony, we ensure your wedding story is told with the same passion and love that went into planning it.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Professional wedding photography Kolkata</h2>
            <div className="h-px w-20 bg-neutral-300" />
            <p className="mt-8 text-neutral-500 font-light max-w-3xl text-lg leading-relaxed italic">
              We offer comprehensive and <Link href="/blog/best-wedding-photography-locations-kolkata" className="text-black font-medium hover:underline">best wedding photography solutions</Link> tailored to your unique journey:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Candid Photography", desc: "Capturing those unscripted, raw emotional moments that make your wedding unique." },
              { title: "Cinematic Wedding Films", desc: "Creating high-definition movies that tell your love story with a motion-picture feel." },
              { title: "Traditional Photography", desc: "Expertly documented rituals and group portraits that preserve every heritage detail." },
              { title: "Pre-Wedding Shoots", desc: "Artistic sessions in iconic locations to celebrate your chemistry before the big day." },
              { title: "Premium Wedding Albums", desc: "High-quality, handcrafted heirlooms that you'll cherish for generations." },
              { title: "Drone Cinematography", desc: "Stunning aerial perspectives that capture the grandeur of your celebration from above." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-neutral-400 group-hover:text-neutral-900 text-2xl font-light mb-6">0{index + 1}</div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-10">Why couples trust us?</h2>
            <p className="text-neutral-600 font-light mb-12 text-lg leading-relaxed">
              Choosing the right photographer is about finding someone who sees the world the way you do. Here's why we are often considered the <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="text-black font-semibold hover:underline">best wedding photographer in Kolkata with price</Link> that makes sense:
            </p>
            <ul className="space-y-10">
              {[
                { title: "Personalized Storytelling", desc: "We don't do 'copy-paste' photography. Every couple's story is unique, and so is our creative approach." },
                { title: "Attention to Detail", desc: "From the intricate designs of your jewelry to the slight tear in a parent's eye, we miss nothing." },
                { title: "Advanced Equipment", desc: "We use top-tier cameras and lenses to ensure every frame is of the highest cinematic quality." },
                { title: "Professional Post-Production", desc: "Our editors work tirelessly to give your photos a refined, timeless look that never goes out of style." }
              ].map((item, i) => (
                <li key={i} className="flex gap-8 border-b border-neutral-100 pb-8 last:border-0 last:pb-0">
                  <span className="text-3xl font-extralight text-neutral-400 italic">0{i + 1}</span>
                  <div>
                    <h4 className="font-semibold text-neutral-800 uppercase tracking-wide text-sm mb-2">{item.title}</h4>
                    <p className="text-neutral-500 font-light text-base leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/wedding-single.png"
              alt="Professional wedding photographer in Kolkata capturing moments"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Internal Linking for SEO */}
      <section className="py-12 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <Link href="/pre-wedding-shoot-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Check pre-wedding packages</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/event-photography-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Event photography in Kolkata</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors">Photography Blog</Link>
        </div>
      </section>

      {/* Packages Section */}
      <div id="packages">
        <PackageCards
          title="Wedding Photography Packages in Kolkata"
          packages={weddingPackages}
        />
      </div>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* CTA Section */}
      <section className="py-28 px-6 md:px-12 bg-[#0a0a0a] text-white text-center rounded-[3rem] mx-4 mb-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-12 leading-tight">Preserve Your Forever Moments</h2>
        <p className="text-white/50 font-light max-w-4xl mx-auto mb-16 text-xl leading-relaxed italic">
          Every wedding represents a new chapter. Let's work together to make your memories look and feel as magical as the day itself.
        </p>
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center relative z-10">
          <Link
            href="/#contact"
            className="px-14 py-6 bg-white rounded-2xl text-black text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-neutral-200 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20"
          >
            👉 Get a Free Quote
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
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}
