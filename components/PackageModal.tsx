"use client";

import { useEffect } from "react";

export type PackageTier = {
  name: string;
  icon: string;
  features: string[];
};

export type PackageCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  packages: PackageTier[];
};

const packageStyles: Record<string, { accent: string; border: string; bg: string }> = {
  Silver: { accent: "text-neutral-200", border: "border-neutral-500/50", bg: "hover:bg-white/5" },
  Gold: { accent: "text-amber-300", border: "border-amber-400/40", bg: "hover:bg-amber-900/20" },
  Platinum: { accent: "text-violet-300", border: "border-violet-400/40", bg: "hover:bg-violet-900/20" },
};

interface PackageModalProps {
  card: PackageCard | null;
  isOpen: boolean;
  onClose: () => void;
  headerLabel?: string;
}

export function PackageModal({
  card,
  isOpen,
  onClose,
  headerLabel = "Packages",
}: PackageModalProps) {
  // ESC key closes modal
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!card) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-60 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Packages for ${card.title}`}
        className={`fixed inset-0 z-70 flex items-center justify-center p-4 sm:p-8 transition-all duration-300 pointer-events-none ${isOpen ? "opacity-100" : "opacity-0 invisible"
          }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-2xl bg-neutral-800 border border-white/15 rounded-2xl shadow-2xl pointer-events-auto transition-all duration-300 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-6"
            }`}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-white/15">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-1.5 font-medium">
                {headerLabel}
              </p>
              <h3 className="text-lg sm:text-xl font-light tracking-widest text-neutral-100 uppercase">
                {card.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-neutral-600 hover:text-white transition-colors duration-200 p-1 mt-0.5 shrink-0 ml-4"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Packages */}
          <div className="overflow-y-auto max-h-[65vh] px-7 py-6 space-y-4 scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-neutral-800">
            {card.packages.map((pkg) => {
              const style = packageStyles[pkg.name] || packageStyles.Silver;
              return (
                <div
                  key={pkg.name}
                  className={`rounded-xl border p-5 transition-colors duration-300 bg-white/5 ${style.border} ${style.bg}`}
                >
                  {/* Package header */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`text-base leading-none ${style.accent}`}>{pkg.icon}</span>
                    <h4 className={`text-sm tracking-[0.3em] uppercase font-medium ${style.accent}`}>
                      {pkg.name}
                    </h4>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs text-neutral-300 font-light leading-relaxed"
                      >
                        <span className={`mt-0.5 shrink-0 text-[10px] ${style.accent} opacity-60`}>—</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Contact CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <p className={`text-[10px] tracking-[0.3em] uppercase font-medium cursor-pointer transition-colors duration-300 ${style.accent} opacity-50 hover:opacity-100`}>
                      Contact to know more →
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal Footer */}
          <div className="px-7 py-5 border-t border-white/15 flex items-center justify-between">
            <p className="text-[10px] text-neutral-400 tracking-wide font-light">
              All packages are customizable upon request
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-white transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
