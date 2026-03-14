"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission - replace with actual API call
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
              Contact Us
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              Schedule a consultation or send us an inquiry. We respond within one business day.
            </p>

            <div className="space-y-6 text-slate-700">
              <div>
                <h3 className="font-semibold text-[#1a365d] mb-2">Office</h3>
                <p>Kara Legal & Compliance Advisory</p>
                <p>Amsterdam, Netherlands</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] mb-2">Phone</h3>
                <a href="tel:+31201234567" className="hover:text-[#b8860b]">
                  +31 20 123 4567
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-[#1a365d] mb-2">Email</h3>
                <a href="mailto:info@karalegal.com" className="hover:text-[#b8860b]">
                  info@karalegal.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-8">
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-6">
              Schedule a Consultation
            </h2>

            {status === "sent" ? (
              <div className="p-6 bg-green-50 text-green-800 rounded-lg">
                <p className="font-medium">Thank you for reaching out.</p>
                <p className="text-sm mt-1">We will respond within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Litigation</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#1a365d] focus:border-[#1a365d] outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-6 py-3 bg-[#1a365d] text-white font-semibold rounded-lg hover:bg-[#0f2744] disabled:opacity-70 transition-colors"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
