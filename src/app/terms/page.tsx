export const metadata = {
  title: "Terms of Service",
  description: "Kara Legal Terms of Service. Legal terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-8">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-8">Last updated: March 2024</p>

        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">1. Agreement</h2>
            <p>
              By accessing or using the Kara Legal website and services, you agree to these Terms of Service. If you do not agree, do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">2. No Legal Advice</h2>
            <p>
              Content on this website is for informational purposes only and does not constitute legal advice. An attorney-client relationship is formed only by a written engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">3. Confidentiality</h2>
            <p>
              Do not send confidential information through our website contact form without prior arrangement. For sensitive matters, contact us directly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">4. Intellectual Property</h2>
            <p>
              All content on this website is owned by Kara Legal and protected by intellectual property laws. You may not reproduce, distribute, or use it without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">6. Contact</h2>
            <p>
              For questions about these terms: info@karalegal.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
