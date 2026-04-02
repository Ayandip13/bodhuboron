"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Wedding", href: "/#wedding" },
  { name: "Events", href: "/#events" },
  { name: "Pre-Wedding", href: "/#pre-wedding" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Films", href: "/#videos" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar background change
      setIsScrolled(window.scrollY > 50);

      // 2. Scroll Spy Logic
      const sections = navLinks.map((link) => link.href.split("#")[1]);
      const scrollPosition = window.scrollY + 120; // 120px offset for fixed navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    // If we are on the homepage, do smooth scroll
    if (window.location.pathname === "/" || window.location.pathname === "") {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
        setActiveSection(targetId);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4 border-b border-neutral-100"
        : "bg-transparent py-5 sm:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/#home"
          onClick={(e) => handleLinkClick(e, "/#home")}
          className={`text-xl sm:text-2xl font-light tracking-[0.25em] uppercase transition-all duration-300 ${isScrolled ? "text-neutral-900" : "text-white"
            }`}
        >
          Bodhuboron
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const sectionTarget = link.href.split("#")[1];
            const isActive = activeSection === sectionTarget;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-[11px] tracking-[0.3em] uppercase transition-all duration-300 font-medium group ${isScrolled
                  ? isActive ? "text-neutral-950" : "text-neutral-400 hover:text-neutral-950"
                  : isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
              >
                {link.name}
                {/* Underline Animation */}
                <span className={`absolute -bottom-1.5 left-0 h-[1.5px] transition-all duration-500 ease-out ${isActive ? "w-full opacity-100 scale-x-100" : "w-0 opacity-0 scale-x-0 group-hover:w-full group-hover:opacity-50 group-hover:scale-x-100"
                  } ${isScrolled ? "bg-neutral-950" : "bg-white"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${isScrolled ? "text-neutral-950" : "text-white"
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
        className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-500 overflow-hidden shadow-2xl ${mobileMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <div className="flex flex-col items-center py-12 space-y-8 bg-neutral-50/50">
          {navLinks.map((link) => {
            const sectionTarget = link.href.split("#")[1];
            const isActive = activeSection === sectionTarget;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] tracking-[0.4em] uppercase transition-all duration-300 ${isActive
                  ? "text-neutral-950 font-bold"
                  : "text-neutral-400 hover:text-neutral-900"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
