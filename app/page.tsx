import Hero from "@/components/Hero";
import WeddingSection from "@/components/WeddingSection";
import EventSection from "@/components/EventSection";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      <Hero />
      <WeddingSection />
      <EventSection />
    </main>
  );
}
