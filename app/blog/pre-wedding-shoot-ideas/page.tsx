import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 Creative Pre-Wedding Shoot Ideas in Kolkata (2022) | Bodhuboron Blog",
  description: "Get creative pre-wedding shoot ideas for your upcoming session in Kolkata. From cinematic themes to heritage looks, we help you plan your perfect pre-wedding film.",
  keywords: ["pre wedding shoot ideas", "pre wedding shoot kolkata", "cinematic pre wedding shoot kolkata", "budget pre wedding shoot kolkata", "best pre wedding photoshoot locations in kolkata"],
};

export default function PreWeddingShootIdeas() {
  return (
    <main className="flex flex-col min-h-screen bg-white font-montserrat">
      {/* Blog Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/prewedding.jpg"
          alt="10 Creative Pre-Wedding Shoot Ideas in Kolkata"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase mb-6 leading-tight">
            10 Creative Pre-Wedding Shoot Ideas in Kolkata
          </h1>
          <div className="text-white/60 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-4">
            <span>By Bodhuboron</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>April 2022</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-24 px-6 md:px-12 max-w-4xl mx-auto prose prose-neutral prose-lg">
        <p className="text-xl text-neutral-600 font-light leading-relaxed mb-12 italic">
          If you're planning a <Link href="/pre-wedding-shoot-kolkata" className="text-black font-semibold underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors">pre-wedding shoot in Kolkata</Link>, you're in the right place. Beyond the traditional poses, it's the creative themes that make your story truly unique. At <strong>Bodhuboron</strong>, we believe every couple has a unique chemistry that deserves its own cinematic approach.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">1. The Vintage Heritage Look</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Kolkata is full of grand <em>Rajbari</em> (palaces) and heritage buildings. Dressed in classic silk and dhotis, you can create a <Link href="/pre-wedding-shoot-kolkata" className="text-black font-medium hover:underline">cinematic pre-wedding shoot in Kolkata</Link> that feels like a scene from a period drama. Locations like Jorasanko or private Rajbaris near the city are perfect for this.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">2. The "Boat Ride" Romance</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          A sunrise boat ride on the Hooghly river near Princep Ghat or James Princep memorial is one of the most romantic <Link href="/pre-wedding-shoot-kolkata" className="text-black font-medium hover:underline">budget pre-wedding shoot Kolkata</Link> ideas. The reflection of the sun on the water and the bridge in the backdrop create a magical setting for your pre-wedding film.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">3. Urban Casual & Modern</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          For couples who want something more modern, the streets of Salt Lake or Newtown with their sleek glass buildings and clean roads provide a perfect contrast. It's a great choice for those looking for a contemporary <Link href="/event-photography-kolkata" className="text-black font-medium hover:underline tracking-tight italic">event photographer in Kolkata</Link> for their pre-wedding moments.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">4. The "Old-World" Charm of Tram Rides</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Kolkata is the only city in India with a tram network. A photoshoot inside a tram or by the tram lines captures the soulful essence of the city. It’s an unconventional yet iconic <Link href="/blog/best-wedding-photography-locations-kolkata" className="text-black font-medium hover:underline">wedding photography location in Kolkata</Link>.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">5. A Picnic in the Maidan</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Sometimes, simplicity is key. A casual picnic setup in the Maidan with a basket, some flowers, and basic props creates a light-hearted, natural vibe that shows off your personality without any artificiality.
        </p>

        <div className="my-20 p-12 bg-neutral-900 text-white rounded-3xl text-center">
          <h3 className="text-2xl font-light uppercase tracking-[0.2em] mb-6 tracking-wide">Plan Your Dream Shoot</h3>
          <p className="text-white/60 font-light mb-10 text-sm">Let’s discuss your vision and create something timeless together.</p>
          <Link href="/#contact" className="inline-block px-10 py-4 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase rounded-2xl hover:bg-neutral-200 transition-colors">Book Now</Link>
        </div>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">Conclusion</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Your pre-wedding shoot is a chance to document your love in its most raw and romantic form. Whether it's the iconic landmarks or hidden corners of Kolkata, the key is to choose a theme that represents you both. At <strong>Bodhuboron</strong>, we specialize in bringing these ideas to life with our artistic and professional approach.
        </p>
      </article>

      {/* Internal Links for SEO */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8 font-medium">Read More</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/best-wedding-photography-locations-kolkata" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">10 Best Photography Locations in Kolkata</h5>
              <p className="text-neutral-500 text-sm font-light">Explore iconic and heritage backdrops for your wedding shoot.</p>
            </Link>
            <Link href="/blog/how-to-choose-wedding-photographer-kolkata" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">How to Choose Photography Professional</h5>
              <p className="text-neutral-500 text-sm font-light">A guide to finding the right photographer for your budget and style.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
