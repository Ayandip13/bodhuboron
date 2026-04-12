import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PackageCards } from "@/components/PackageCards";
import { eventPackages } from "@/lib/packageData";
import { FAQ } from "@/components/FAQ";
import { ExpandableGallery } from "@/components/ExpandableGallery";

export const metadata: Metadata = {
  title: "Professional Event Photographer in Kolkata | Parties & Corporate | Bodhuboron",
  description: "Capture the spirit of your celebration with the leading event photography in Kolkata. We cover birthdays, engagements, and corporate events with professional depth.",
  keywords: ["event photography kolkata", "event photographer kolkata", "best event photographer kolkata", "professional event photography kolkata", "corporate event photographer kolkata", "social event photography kolkata", "birthday party photographer kolkata"],
};

export default function EventPhotographyPage() {
  const faqItems = [
    {
      question: "What types of events do you cover in Kolkata?",
      answer: "We cover a wide range of events in Kolkata including birthday parties, rice ceremonies (Annaprashan), engagement ceremonies, anniversaries, social gatherings, and professional corporate events."
    },
    {
      question: "How long does it take to get the edited event photos?",
      answer: "We understand that you're excited to see your event memories. Typically, we deliver the final edited high-resolution images within 7 to 15 working days after the event."
    },
    {
      question: "Can you provide same-day photo highlights?",
      answer: "Yes, we offer a 'Quick Edits' service for events where we provide 15-20 highlight photos on the same day or within 24 hours for social media sharing."
    },
    {
      question: "Do you offer cinematic event films along with photography?",
      answer: "Absolutely. We provide high-definition event highlight films that capture the energy and emotions of your celebration in a cinematic format."
    },
    {
      question: "What is included in an event photography package?",
      answer: "Our event packages include coverage by professional photographers, high-resolution edited images, and digital delivery via an online gallery. Albums and cinematic films can be added based on your preference."
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
            "name": "Event Photography Kolkata",
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
            "description": "Professional event photography services in Kolkata for birthdays, corporate events, and social celebrations."
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[400px] pt-10 w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <Image
            src="/event-live.png"
            alt="Professional event photographer in Kolkata capturing group celebration"
            fill
            className="object-cover object-center opacity-60 brightness-75 scale-105"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-white uppercase mb-6 leading-tight">
            Professional Event <br className="hidden md:block" /> Photography in Kolkata
          </h1>
          <div className="flex justify-center items-center gap-6">
            <span className="h-px bg-white/20 w-16" />
            <span className="text-white/40 text-[11px] tracking-[0.4em] uppercase">Moments. Memories. More.</span>
            <span className="h-px bg-white/20 w-16" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col md:flex-row gap-20 items-start font-montserrat">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl font-light tracking-[0.15em] text-neutral-900 border-l-2 border-neutral-200 pl-8 uppercase leading-tight">
            Comprehensive Event Coverage
          </h2>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-xl md:text-2xl text-neutral-700 font-light leading-relaxed mb-10 italic">
            From milestones to celebrations, every event is a story worth telling.
          </p>
          <p className="text-neutral-500 font-light leading-relaxed text-lg mb-8">
            At <strong>Bodhuboron</strong>, we understand that every event is unique. Whether it's a child's first birthday (Annaprashan), a romantic engagement ceremony, a milestone anniversary, or a professional corporate gathering, we offer the <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="text-black font-semibold hover:underline">professional event photography in Kolkata</Link> that preserves these moments with clarity and artistic depth.
          </p>
          <p className="text-neutral-500 font-light leading-relaxed text-lg">
            We don't just 'cover' events; we capture the energy, the laughter, and the spirit of the occasion. Our team blends into the background to document candid reactions while ensuring all the key highlights are perfectly framed. We ensure that you can relive your celebration time and again through our lens.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 md:px-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20 whitespace-normal">
            <h2 className="text-3xl font-light tracking-widest text-neutral-900 uppercase mb-4">Our event photographer kolkata expertise</h2>
            <div className="h-px w-20 bg-neutral-300" />
            <p className="mt-8 text-neutral-500 font-light max-w-2xl text-lg italic italic">
              We cover a diverse range of milestones across Kolkata:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Birthday parties", desc: "Capturing the pure joy and spontaneous laughter of your child's special day." },
              { title: "Rice ceremonies", desc: "Expert documentation of traditional milestones like 'Annaprashan' with cultural depth." },
              { title: "Engagement shoots", desc: "Documenting the promise of a lifetime with romantic and cinematic shots." },
              { title: "Anniversaries", desc: "Celebrating years of love and togetherness with your family and friends." },
              { title: "Corporate Events", desc: "Professional image for your brand, including seminars, award ceremonies, and galas." }
            ].map((service, index) => (
              <div key={index} className="bg-white p-10 border border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500 rounded-3xl group">
                <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors mb-8 text-2xl font-light italic">0{index + 1}</div>
                <h3 className="text-sm font-semibold text-neutral-800 uppercase tracking-widest mb-4 leading-tight">{service.title}</h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <ExpandableGallery 
        title="View Our Event Portfolio"
        images={[
          { src: "/event-birthday.png", alt: "Birthday party photography in Kolkata" },
          { src: "/event-rice.png", alt: "Rice ceremony photography in Kolkata Annaprashan" },
          { src: "/event-anniversary.png", alt: "Anniversary celebration photography in Kolkata" },
          { src: "/event-live.png", alt: "Corporate event photography in Kolkata live show" },
          { src: "/event-babyshower.png", alt: "Baby shower event photography in Kolkata" },
          { src: "/event-engagement.png", alt: "Engagement event photography in Kolkata" }
        ]}
      />

      {/* Internal Linking for SEO */}
      <section className="py-12 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          <Link href="/wedding-photographer-kolkata" className="text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-white">Wedding photography</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/pre-wedding-shoot-kolkata" className="text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-white">Pre-wedding photography</Link>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <Link href="/blog/pre-wedding-shoot-ideas" className="text-white/50 hover:text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-white">Photography ideas blog</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-light tracking-[0.2em] text-neutral-900 uppercase mb-6 leading-tight">What makes our event photography unique?</h2>
          <p className="text-neutral-500 font-light max-w-2xl mx-auto font-montserrat text-lg italic">Precision, professionalism, and the art of seeing what others miss.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          {[
            { id: "01", title: "Efficient Coverage", desc: "We ensure fast and professional coverage so that no key moment or highlight of your event is missed." },
            { id: "02", title: "High Quality Edits", desc: "Superior resolution images combined with high-end cinematic editing for a premium and polished look." },
            { id: "03", title: "Candid Storytelling", desc: "A primary focus on documenting real, unposed reactions and authentic emotions throughout the event." },
            { id: "04", title: "Experienced Team", desc: "Our photographers have years of experience across social and corporate event formats in Kolkata." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full border border-neutral-100 flex items-center justify-center mb-10 group-hover:border-neutral-900 transition-all duration-500 group-hover:-translate-y-2">
                <span className="text-xl font-light text-neutral-400 group-hover:text-neutral-900 italic transition-colors">{item.id}</span>
              </div>
              <h4 className="text-sm font-semibold tracking-widest text-neutral-800 uppercase mb-4 leading-tight">{item.title}</h4>
              <p className="text-neutral-500 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <div id="packages">
        <PackageCards
          title="Event Photography Packages in Kolkata"
          packages={eventPackages}
        />
      </div>

      {/* FAQ Section */}
      <FAQ items={faqItems} />

      {/* CTA Section */}
      <section className="relative py-32 px-6 md:px-12 bg-[#050505] text-white overflow-hidden rounded-[4rem] mx-4 mb-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/[0.015] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.005] rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.25em] uppercase mb-12 leading-tight">Make Every Celebration Timeless</h2>
          <p className="text-white/40 font-light mx-auto mb-16 text-xl max-w-3xl leading-relaxed italic">
            Whether it's a small family gathering or a large corporate gala, we ensure your memories are preserved with the artistic depth they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <Link
              href="/#contact"
              className="group relative flex items-center gap-6 px-14 py-6 bg-white rounded-2xl text-black text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-neutral-200 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20"
            >
              👉 Get a Quotation for event
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
        </div>
      </section>
    </main >
  );
}
