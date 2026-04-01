
import Hero from "@/components/Hero";
import WeddingSection from "@/components/WeddingSection";
import EventSection from "@/components/EventSection";
import PreWeddingSection from "@/components/PreWeddingSection";
import PortfolioSection from "@/components/PortfolioSection";
import YoutubeSection from "@/components/YoutubeSection";
import ContactSection from "@/components/ContactSection";

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
    </main>
  );
}
