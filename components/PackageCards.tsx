"use client";

import React from "react";
import Link from "next/link";

export type PackageTier = {
  name: string;
  description: string;
  features: string[];
  isPopular?: boolean;
};

interface PackageCardsProps {
  title: string;
  packages: PackageTier[];
}

export const PackageCards: React.FC<PackageCardsProps> = ({ title, packages }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-widest text-neutral-900 uppercase mb-6">
            {title}
          </h2>
          <div className="h-px w-24 bg-neutral-200 mx-auto mb-8" />
          <p className="text-neutral-500 font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Transparent packages designed to capture every detail of your special day. 
            Choose the one that best fits your story.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 w-full md:max-w-sm ${
                pkg.isPopular
                  ? "border-neutral-900 shadow-2xl shadow-neutral-200 bg-neutral-50 scale-105 z-10"
                  : "border-neutral-100 shadow-xl shadow-neutral-100 bg-white hover:border-neutral-200"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] tracking-[0.3em] uppercase font-bold py-2 px-6 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-light tracking-[0.2em] uppercase text-neutral-900 mb-4">
                  {pkg.name}
                </h3>
                <p className="text-neutral-500 text-sm font-light leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="h-px w-full bg-neutral-100 mb-8" />

              <ul className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-neutral-600 font-light leading-relaxed">
                    <span className="text-neutral-300 mt-1">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-neutral-100">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-400 mb-6 text-center">
                  Contact to know pricing
                </p>
                <Link
                  href="/#contact"
                  className={`block w-full py-4 text-center text-[11px] tracking-[0.3em] uppercase font-bold rounded-xl transition-all duration-300 ${
                    pkg.isPopular
                      ? "bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg shadow-neutral-200"
                      : "bg-neutral-50 text-neutral-900 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
