"use client";

import { useEffect, useState } from "react";

const youtubeVideos = [
  { id: "YqdAEdkHrwo", title: "Cinematic Wedding Highlight" },
  { id: "Y_Pbt_Nf4O0", title: "Pre-Wedding Dreamscape" },
  { id: "S_Wv7eM2Ghk", title: "Traditional Ceremony Film" },
  { id: "8-5X0V_3y_s", title: "Luxury Event Coverage" },
];

export default function YoutubeSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="videos" className="w-full py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-[10px] tracking-[0.45em] uppercase text-neutral-400 mb-4 font-medium">
            Motion Stories
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-8">
            Our Films
          </h2>
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px bg-neutral-200 w-12 block" />
            <span className="text-neutral-300 text-[11px]">✦</span>
            <span className="h-px bg-neutral-200 w-12 block" />
          </div>
          <p className="text-sm text-neutral-500 font-light tracking-wide max-w-md leading-relaxed">
            Experience our storytelling through motion. Cinematic films that bring your memories back to life.
          </p>
        </div>

        {/* Featured Video */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 group">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideos[0].id}?rel=0`}
              title={youtubeVideos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-sm tracking-[0.3em] uppercase text-neutral-900 font-light">
              Featured Film: {youtubeVideos[0].title}
            </h3>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {youtubeVideos.slice(1).map((video, index) => (
            <div
              key={video.id}
              className={`transition-all duration-1000 ease-out`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`relative aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-neutral-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-500`}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
