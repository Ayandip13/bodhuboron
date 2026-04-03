import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Best Wedding Photography Locations in Kolkata (2022 Guide) | Bodhuboron",
  description: "Explore the most stunning and iconic wedding photography locations in Kolkata. From heritage buildings to modern landmarks, finding the perfect backdrop for your big day.",
  keywords: ["wedding photography locations Kolkata", "best photoshoot locations in Kolkata", "Kolkata wedding photoshoot", "heritage wedding locations Kolkata"],
};

export default function BestWeddingLocationsKolkata() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/wedding-both.png"
          alt="Best Wedding Photography Locations in Kolkata"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] tracking-[0.2em] uppercase font-medium">Wedding Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase mb-6 leading-tight">
            10 Best Wedding Photography Locations in Kolkata
          </h1>
          <div className="text-white/60 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-4">
            <span>By Bodhuboron</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>April 2022</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-24 px-6 md:px-12 max-w-4xl mx-auto font-montserrat prose prose-neutral prose-lg">
        <p className="text-xl text-neutral-600 font-light leading-relaxed mb-12 italic">
          Kolkata, the City of Joy, is a living museum of heritage, culture, and architecture. For a <Link href="/wedding-photographer-kolkata" className="text-black font-semibold underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors">wedding photographer in Kolkata</Link>, the city offers an endless palette of moods, from the grand colonial architecture to the serene banks of the Hooghly River.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">1. Princep Ghat: The Eternal Classic</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          No list of <Link href="/pre-wedding-shoot-kolkata" className="text-black font-medium hover:underline">pre-wedding shoot locations in Kolkata</Link> is complete without Princep Ghat. With the majestic Vidyasagar Setu (Second Hooghly Bridge) in the background and the Grecian pillars of the memorial, it offers a timeless, romantic aura. Whether it's a sunset shoot or a misty morning session, Princep Ghat captures the soul of Kolkata like no other place.
        </p>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          <strong>Pro Tip:</strong> Arrive early in the morning to avoid the crowd and get that perfect soft golden hour light reflecting off the river.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">2. Victoria Memorial: Grandeur and Elegance</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          The white marble monument is the epitome of elegance. Its sprawling gardens and intricate architectural details provide a regal backdrop for <Link href="/wedding-photographer-kolkata" className="text-black font-medium hover:underline">candid wedding photography in Kolkata</Link>. While shooting inside the monument might have restrictions, the surrounding gardens and the view from outside are breathtaking.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">3. Kumartuli: The Cultural Heritage</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          For couples who want their wedding story rooted in the deep culture of Bengal, Kumartuli is the place. The narrow alleys filled with half-finished clay idols and the rustic atmosphere create a unique, artistic vibe that truly represents the heart of Kolkata.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">4. Maidan: The Lungs of Kolkata</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          The vast green expanse of Maidan, with its lone trees, grazing horses, and the distant view of the Victoria Memorial, is perfect for those who love minimal and natural aesthetics. It's an ideal spot for a <Link href="/pre-wedding-shoot-kolkata" className="text-black font-medium hover:underline">cinematic pre-wedding shoot in Kolkata</Link>.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">5. Jorasanko Thakur Bari: The Poetic Charm</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          The ancestral home of Rabindranath Tagore is a haven for those seeking a heritage look. The red-hued corridors and the classic Bengali courtyard architecture are perfect for couples who appreciate art and literature.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">How to Choose the Right Location?</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Choosing a location depends on your personality and the story you want to tell. Do you want something majestic and royal or something rustic and culturally rich? Your <Link href="/wedding-photographer-kolkata" className="text-black font-medium hover:underline">affordable wedding photographer in Kolkata</Link> can help you decide based on your outfits and the theme of your wedding.
        </p>

        <div className="my-20 p-12 bg-neutral-900 text-white rounded-3xl text-center">
          <h3 className="text-2xl font-light uppercase tracking-[0.2em] mb-6">Ready to Capture Your Story?</h3>
          <p className="text-white/60 font-light mb-10">Let Bodhuboron help you find the perfect location and capture your most precious moments.</p>
          <Link href="/#contact" className="inline-block px-10 py-4 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase rounded-2xl hover:bg-neutral-200 transition-colors">Book Now</Link>
        </div>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">Conclusion</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Kolkata offers a blend of the old and the new. Whether it's the iconic Howrah Bridge or the modern Eco Park, every corner has a story to tell. Your wedding photos are memories for a lifetime, so choose a location that resonates with your journey.
        </p>
      </article>

      {/* Internal Links for SEO */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">Related Guides</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">How to Choose the Best Wedding Photographer</h5>
              <p className="text-neutral-500 text-sm font-light">A comprehensive guide to finding the right photographer for your big day.</p>
            </Link>
            <Link href="/blog/pre-wedding-shoot-ideas" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">Pre-Wedding Shoot Ideas</h5>
              <p className="text-neutral-500 text-sm font-light">Creative themes and ideas for your upcoming pre-wedding session.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
