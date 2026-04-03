import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose the Best Wedding Photographer in Kolkata | Bodhuboron Blog",
  description: "Learn how to choose the right wedding photographer for your big day. We cover budget, portfolio, experience, and style tips for couples in Kolkata.",
  keywords: ["best wedding photographer in kolkata with price", "how to choose wedding photographer kolkata", "affordable wedding photographer kolkata", "best candid wedding photographer in kolkata"],
};

export default function ChoosingWeddingPhotographer() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Blog Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/wedding-single.png"
          alt="How to Choose Wedding Photographer in Kolkata"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white uppercase mb-6 leading-tight">
            How to Choose Your Wedding Photographer in Kolkata
          </h1>
          <div className="text-white/60 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-4">
            <span>By Bodhuboron</span>
            <span className="w-1 h-1 bg-white/40 rounded-full" />
            <span>April 2026</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-24 px-6 md:px-12 max-w-4xl mx-auto font-montserrat prose prose-neutral prose-lg">
        <p className="text-xl text-neutral-600 font-light leading-relaxed mb-12 italic">
          Finding the <Link href="/wedding-photographer-kolkata" className="text-black font-semibold underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-colors">best wedding photographer in Kolkata with price</Link> that fits your budget can be a daunting task. Your wedding photos are the only memories that will last a lifetime, so choosing the right professional is one of the most important decisions you'll make for your big day.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">1. Define Your Style</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Wedding photography styles have evolved. Are you looking for traditional photography, or do you prefer <Link href="/wedding-photographer-kolkata" className="text-black font-medium hover:underline">candid wedding photography in Kolkata</Link>? Candid photography focuses on real emotions and unposed moments, while traditional photography is about standard poses and family group shots. Most modern photographers, like <strong>Bodhuboron</strong>, provide a mix of both.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">2. Review the Portfolio</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Don't just look at the highlights on social media. Ask for full wedding galleries. This will give you a better idea of how the photographer covers a whole event, from the morning preparations to the nighttime rituals. Look for consistency in color, lighting, and composition across all photos.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">3. Budget vs. Quality</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          While searching for an <Link href="/wedding-photographer-kolkata" className="text-black font-medium hover:underline">affordable wedding photographer in Kolkata</Link>, remember that quality comes at a price. High-end equipment, professional editing software, and experience are part of the value you're paying for. Look for transparency in <Link href="/wedding-photographer-kolkata#packages" className="text-black font-medium hover:underline tracking-tight italic">wedding photography packages in Kolkata</Link> and ensure there are no hidden costs.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">4. Cultural Experience Matters</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          A photographer who understands the nuances of a Bengali wedding is invaluable. Whether it's the <em>Gaaye Holud</em>, the <em>Subho Drishti</em>, or the <em>Sindoor Daan</em>, these moments happen fast. Knowing exactly when and where to be is crucial for capturing the perfect shot.
        </p>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">5. Meet Them in Person</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Your wedding photographer will be with you throughout the day. It's important to build a rapport with them. A comfortable connection will make you more relaxed in front of the camera, resulting in better <Link href="/pre-wedding-shoot-kolkata" className="text-black font-medium hover:underline">pre-wedding shoot in Kolkata</Link> and wedding photos.
        </p>

        <div className="my-20 p-12 bg-neutral-900 text-white rounded-3xl text-center">
          <h3 className="text-2xl font-light uppercase tracking-[0.2em] mb-6">Need Professional Advice?</h3>
          <p className="text-white/60 font-light mb-10 text-sm">Let’s discuss your vision and see how we can bring your wedding story to life.</p>
          <Link href="/#contact" className="inline-block px-10 py-4 bg-white text-black text-[10px] tracking-[0.3em] font-bold uppercase rounded-2xl hover:bg-neutral-200 transition-colors">Contact Bodhuboron</Link>
        </div>

        <h2 className="text-3xl font-light text-neutral-900 uppercase tracking-widest mb-10 mt-20">Conclusion</h2>
        <p className="text-neutral-500 font-light leading-relaxed mb-10">
          Choosing your <Link href="/event-photography-kolkata" className="text-black font-medium hover:underline">event photographer in Kolkata</Link> or wedding professional isn't just about the price tag. It's about finding someone who understands your dream and has the skill to make it a reality. At <strong>Bodhuboron</strong>, we pride ourselves on being more than just photographers; we are storytellers of your love.
        </p>
      </article>

      {/* Internal Links for SEO */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">Related Guides</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/best-wedding-photography-locations-kolkata" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">10 Best Photography Locations in Kolkata</h5>
              <p className="text-neutral-500 text-sm font-light">Explore the most iconic and heritage backdrops for your wedding shoot.</p>
            </Link>
            <Link href="/blog/pre-wedding-shoot-ideas" className="p-8 bg-white rounded-2xl border border-neutral-100 hover:shadow-xl transition-shadow group">
              <h5 className="text-lg font-medium text-neutral-800 uppercase tracking-wider mb-2 group-hover:text-black">Pre-Wedding Shoot Ideas</h5>
              <p className="text-neutral-500 text-sm font-light">Creative themes and ideas for your upcoming session with us.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
