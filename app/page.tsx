import Hero from "@/components/Hero";
import WeddingSection from "@/components/WeddingSection";
import EventSection from "@/components/EventSection";
import PreWeddingSection from "@/components/PreWeddingSection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import Link from "next/link";

import PortfolioSection from "@/components/PortfolioSection";
import YoutubeSection from "@/components/YoutubeSection";

export const metadata: Metadata = {
  title: "Bodhuboron | Best Wedding & Event Photographer in Kolkata",
  description: "Bodhuboron is a premium photography studio in Kolkata specializing in wedding photography, pre-wedding shoots, and corporate event photography. Capturing your special moments with artistic depth.",
  keywords: ["wedding photographer Kolkata", "best wedding photographer in Kolkata", "pre wedding shoot Kolkata", "event photography Kolkata", "candid photography Kolkata", "affordable wedding photographer kolkata"],
};

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      {/* Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bodhuboron",
            "image": "https://bodhuboron.com/logo.png", // Assuming a logo exists
            "@id": "",
            "url": "https://bodhuboron.com",
            "telephone": "+91-XXXXXXXXXX", // Update with actual phone
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kolkata",
              "addressLocality": "Kolkata",
              "addressRegion": "WB",
              "postalCode": "700001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.5726,
              "longitude": 88.3639
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/bodhuboron",
              "https://www.instagram.com/bodhuboron"
            ]
          }),
        }}
      />

      <Hero />
      <WeddingSection />
      <EventSection />
      <PreWeddingSection />
      <PortfolioSection />
      <YoutubeSection />
      <ContactSection />

      {/* Blog & Resources Section */}
      <section className="py-24 px-6 md:px-12 bg-white font-montserrat">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-4">Latest from our journal</h2>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-900 uppercase leading-tight">Photography Tips & Guides</h3>
            </div>
            <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="px-10 py-4 border border-neutral-200 rounded-2xl text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-neutral-50 transition-colors">
              Read All Guides
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Best Wedding Locations in Kolkata", link: "/blog/best-wedding-photography-locations-kolkata", desc: "Explore the most iconic and heritage backdrops for your big day." },
              { title: "Choosing Your Photographer", link: "/blog/how-to-choose-wedding-photographer-kolkata", desc: "A comprehensive guide to finding the right match for your wedding story." },
              { title: "Pre-Wedding Shoot Ideas", link: "/blog/pre-wedding-shoot-ideas", desc: "Creative themes and cinematic approaches for your upcoming session." }
            ].map((blog, i) => (
              <Link key={i} href={blog.link} className="group p-10 bg-neutral-50 rounded-3xl border border-neutral-100 hover:border-neutral-200 hover:shadow-2xl hover:shadow-neutral-200/40 transition-all duration-500">
                <h4 className="text-xl font-medium text-neutral-900 uppercase tracking-wider mb-4 group-hover:text-black transition-colors">{blog.title}</h4>
                <p className="text-neutral-500 font-light text-sm leading-relaxed mb-8">{blog.desc}</p>
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-400 group-hover:text-black transition-colors italic">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950 text-white font-montserrat rounded-[4rem] mx-4 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/1.5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl font-light tracking-[0.35em] text-white/40 uppercase mb-12 italic">Expert Photography Services in Kolkata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white mb-6">Explore our wedding photography services in Kolkata</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
                Bodhuboron is dedicated to providing the highest quality <strong>wedding photography in Kolkata</strong>. Our team captures the essence of your love story with a blend of candid and artistic styles. Whether you are looking for the <strong>best wedding photographer in Kolkata</strong> or a creative team for your <strong>pre-wedding shoot in Kolkata</strong>, we ensure every moment is preserved beautifully.
              </p>
              <Link href="/wedding-photographer-kolkata" className="text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:underline transition-all underline-offset-8 decoration-white/20">Explore Wedding Photography →</Link>
            </div>
            <div className="p-8 border border-white/5 rounded-3xl bg-white/[0.02]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white mb-6">Professional event photography in Kolkata</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
                Beyond weddings, we are leaders in <strong>event photography in Kolkata</strong>. We cover corporate seminars, social parties, and cultural celebrations with professional precision. Check our <Link href="/pre-wedding-shoot-kolkata" className="text-white hover:underline">pre-wedding shoot packages</Link> and find the perfect match for your milestone event across West Bengal.
              </p>
              <Link href="/event-photography-kolkata" className="text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:underline transition-all underline-offset-8 decoration-white/20">Event Photography Services →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
