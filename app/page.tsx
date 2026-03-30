import Hero from "@/components/Hero";
import WeddingSection from "@/components/WeddingSection";

export default function Home() {
  return (
    <main className="flex flex-1 w-full flex-col">
      <Hero />
      <WeddingSection />
    </main>
  );
}
