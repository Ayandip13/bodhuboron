"use client";

import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappNumber = "916295530167";
    const messageLines = [
      "*New Inquiry from Bodhuboron Website*",
      "",
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Event Type:* ${formData.eventType}`,
      `*Message:* ${formData.message}`,
    ];
    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", eventType: "Wedding", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`w-full py-24 px-6 md:px-12 bg-neutral-50 transition-all duration-1000 delay-100 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest text-[#171717] uppercase mb-4">
            Let's Capture Your Story
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 font-light tracking-wide max-w-lg mx-auto">
            Get in touch and let’s create something beautiful together
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="h-px bg-neutral-200 w-12 block" />
            <span className="text-neutral-300 text-[11px]">✦</span>
            <span className="h-px bg-neutral-200 w-12 block" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Quick Contact & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-sm tracking-[0.3em] uppercase font-medium text-neutral-900 mb-8">
                Quick Connect
              </h3>
              <div className="flex flex-col gap-4">
                {/* Call Now */}
                <a
                  href="tel:+916295530167"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium lowercase-none">
                      Call Us
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                      +91 6295530167
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916295530167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.594 3.397 1.502 5.266l-.994 3.63 3.731-.977h.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium">
                      WhatsApp
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                      Chat with us
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:bodhuboron2k22@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium">
                      Email
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                      bodhuboron2k22@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium">
                      Location
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                      Based in Kolkata, serving all West Bengal
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium">
                      Business Hours
                    </p>
                    <p className="text-sm text-neutral-800 font-medium">
                      Monday - Sunday: 9:00 AM - 9:00 PM
                    </p>
                    <p className="text-[9px] text-amber-600 font-bold uppercase tracking-widest pt-0.5">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="space-y-6">
              <h3 className="text-sm tracking-[0.3em] uppercase font-medium text-neutral-900">
                Follow Our Journey
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com/bodhuboron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/20 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/bodhuboron_2k22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 
                  hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] 
                  hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-[#dd2a7b]/30 
                  transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/916295530167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.594 3.397 1.502 5.266l-.994 3.63 3.731-.977h.25z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@bodhuboron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/20 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/40">
            <h3 className="text-sm tracking-[0.3em] uppercase font-medium text-neutral-900 mb-8">
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm focus:outline-none focus:border-neutral-900 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm focus:outline-none focus:border-neutral-900 transition-colors duration-300"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="eventType" className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium ml-1">
                  Event Type
                </label>
                <div className="relative">
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm focus:outline-none focus:border-neutral-900 appearance-none cursor-pointer transition-colors duration-300"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Event">Event</option>
                    <option value="Pre-Wedding">Pre-Wedding</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-widest uppercase text-neutral-400 font-medium ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-neutral-50 border border-neutral-100 text-sm focus:outline-none focus:border-neutral-900 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"} w-full py-5 rounded-xl text-[11px] tracking-[0.4em] uppercase font-semibold transition-all duration-500 shadow-lg shadow-black/5 active:scale-[0.98] ${submitted
                  ? "bg-green-600 text-white shadow-green-200"
                  : "bg-[#171717] text-white hover:bg-neutral-800"
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : submitted ? (
                  "Inquiry Sent ✓"
                ) : (
                  "Send Inquiry"
                )}
              </button>

              {submitted && (
                <p className="text-center text-[11px] text-green-600 font-medium animate-pulse">
                  Thank you! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
