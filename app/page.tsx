
import Hero from "@/components/Hero";
import WeddingSection from "@/components/WeddingSection";
import EventSection from "@/components/EventSection";
import PreWeddingSection from "@/components/PreWeddingSection";
import PortfolioSection from "@/components/PortfolioSection";
import YoutubeSection from "@/components/YoutubeSection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bodhuboron | Best Wedding & Event Photographer in Kolkata",
  description: "Bodhuboron is a premium photography studio in Kolkata specializing in wedding photography, pre-wedding shoots, and corporate event photography. Capturing your special moments with artistic depth.",
  keywords: ["wedding photographer Kolkata", "best wedding photographer in Kolkata", "pre wedding shoot Kolkata", "event photography Kolkata", "candid photography Kolkata"],
};

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      <Hero />
      <WeddingSection />
      <EventSection />
      <PreWeddingSection />
      <PortfolioSection />
      <YoutubeSection />
      <ContactSection />
      
      {/* SEO Text Block */}
      <section className="py-20 px-6 md:px-12 bg-neutral-50 border-t border-neutral-100 font-montserrat">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-xl font-light tracking-[0.2em] text-neutral-400 uppercase mb-8">Professional Photography in Kolkata</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Capturing Eternal Stories</h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4">
                  Bodhuboron is dedicated to providing the highest quality <strong>wedding photography in Kolkata</strong>. Our team captures the essence of your love story with a blend of candid and artistic styles. Whether you are looking for the <strong>best wedding photographer in Kolkata</strong> or a creative team for your <strong>pre-wedding shoot in Kolkata</strong>, we ensure every moment is preserved beautifully.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-800 mb-4">Events & Beyond</h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Beyond weddings, we are leaders in <strong>event photography in Kolkata</strong>. We cover corporate seminars, social parties, and cultural celebrations with professional precision. Based in the heart of the city, Bodhuboron is your trusted partner for all professional photography services across West Bengal.
                </p>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
