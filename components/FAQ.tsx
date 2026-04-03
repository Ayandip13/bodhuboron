import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest text-neutral-900 uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-px w-20 bg-neutral-300 mx-auto" />
          <p className="mt-6 text-neutral-500 font-light italic">
            Everything you need to know about our photography services
          </p>
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-neutral-100 pb-8 last:border-0"
              id={`faq-item-${index}`}
            >
              <h3 className="text-lg md:text-xl font-medium text-neutral-800 mb-4 hover:text-neutral-500 transition-colors cursor-default">
                {item.question}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema Markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": items.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};
