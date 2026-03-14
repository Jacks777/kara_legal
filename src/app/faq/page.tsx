"use client";

import { useState } from "react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "How do I schedule a consultation?",
        a: "Use our contact form, email info@karalegal.com, or call +31 20 123 4567. We respond within one business day and can arrange a video or in-person consultation.",
      },
      {
        q: "What areas of law does Kara Legal practice?",
        a: "We focus on corporate law (M&A, governance, compliance), litigation and arbitration, and intellectual property (trademarks, patents, copyrights, trade secrets).",
      },
      {
        q: "Do you work with clients outside the Netherlands?",
        a: "Yes. We advise clients across Europe and internationally, including cross-border M&A, arbitration, and IP matters.",
      },
    ],
  },
  {
    category: "Fees & Billing",
    questions: [
      {
        q: "How are legal fees structured?",
        a: "We offer retainer arrangements, project-based fees, and hourly billing depending on the matter. We provide fee estimates and updates throughout the engagement.",
      },
      {
        q: "Do you offer fixed-fee options?",
        a: "Yes, for many transactional and advisory matters we offer fixed-fee arrangements. We discuss options during the initial consultation.",
      },
    ],
  },
  {
    category: "Confidentiality",
    questions: [
      {
        q: "Is my information kept confidential?",
        a: "Absolutely. Attorney-client privilege and client confidentiality are fundamental. All communications and documents are protected in accordance with applicable rules.",
      },
      {
        q: "Do you use conflict checks before taking on new matters?",
        a: "Yes. We conduct conflict checks before accepting any new engagement to ensure we can represent you fully and ethically.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const toggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered = faqs.map((cat) => ({
    ...cat,
    questions: cat.questions.filter(
      (q) =>
        !search ||
        q.q.toLowerCase().includes(search.toLowerCase()) ||
        q.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.questions.length > 0);

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 mb-8">
          Find answers to common questions. Can&apos;t find what you need? Contact us.
        </p>

        <div className="mb-10">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="search"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none"
          />
        </div>

        <div className="space-y-8">
          {filtered.map((cat) => (
            <section key={cat.category}>
              <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-4">
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.questions.map((item, i) => {
                  const key = `${cat.category}-${i}`;
                  const isOpen = open[key];
                  return (
                    <div
                      key={key}
                      className="border border-slate-200 rounded-lg overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        className="w-full px-4 py-3 text-left font-medium text-[#1a365d] flex justify-between items-center hover:bg-slate-50"
                        aria-expanded={isOpen}
                      >
                        {item.q}
                        <svg
                          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-4 py-3 bg-slate-50 text-slate-700 border-t border-slate-200">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {filtered.length === 0 && search && (
          <p className="text-slate-600 text-center py-8">
            No FAQs match your search. Try different keywords or contact us directly.
          </p>
        )}
      </div>
    </div>
  );
}
