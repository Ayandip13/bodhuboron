"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Wedding", href: "#wedding" },
  { name: "Events", href: "#events" },
  { name: "Pre-Wedding", href: "#pre-wedding" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Films", href: "#videos" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4"
          : "bg-transparent py-5 sm:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className={`text-xl sm:text-2xl font-semibold tracking-widest uppercase transition-colors duration-300 ${isScrolled ? "text-[#171717]" : "text-white"
            }`}
        >
          Bodhuboron
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${isScrolled
                  ? activeSection === link.href.substring(1)
                    ? "text-black font-semibold"
                    : "text-neutral-400 hover:text-black"
                  : activeSection === link.href.substring(1)
                    ? "text-white font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${isScrolled ? "text-[#171717]" : "text-white"
            }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-lg border-t border-black/5 ${mobileMenuOpen ? "max-h-[400px]" : "max-h-0 border-t-0"
          }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm tracking-widest uppercase transition-colors ${activeSection === link.href.substring(1)
                  ? "text-black font-medium"
                  : "text-neutral-500 hover:text-black"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
