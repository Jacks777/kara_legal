"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Kara Legal guided us through a complex merger with precision and professionalism. Their corporate team is exceptional.",
    author: "M.C.",
    role: "CEO, Technology Corp",
    rating: 5,
  },
  {
    quote: "We turned to Kara for IP protection and enforcement. They understood our business and delivered results beyond our expectations.",
    author: "S.L.",
    role: "Founder, Design Studio",
    rating: 5,
  },
  {
    quote: "During a difficult litigation, the Kara team was our steady partner. Clear advice, strong representation, successful outcome.",
    author: "J.K.",
    role: "Managing Director",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-600 text-lg">
            Confidential client testimonials from businesses we’ve helped succeed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="font-serif text-xl sm:text-2xl text-slate-700 mb-6 leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex justify-center gap-1 mb-4" aria-hidden="true">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-[#b8860b]">★</span>
              ))}
            </div>
            <footer>
              <cite className="not-italic font-semibold text-[#1a365d]">
                {t.author}
              </cite>
              <p className="text-slate-500 text-sm mt-1">{t.role}</p>
            </footer>
          </blockquote>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-[#b8860b]" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
