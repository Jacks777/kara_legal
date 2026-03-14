export const metadata = {
  title: "Privacy Policy",
  description: "Kara Legal Privacy Policy. How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-8">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-8">Last updated: March 2024</p>

        <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-6">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">1. Introduction</h2>
            <p>
              Kara Legal & Compliance Advisory (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">2. Information We Collect</h2>
            <p>
              We may collect personal data you provide when contacting us, scheduling consultations, or using our services, including name, email, phone number, and other information relevant to your legal matter.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">3. How We Use Your Information</h2>
            <p>
              We use your information to provide legal services, communicate with you, manage our relationship, and comply with legal obligations. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">4. Legal Basis (GDPR)</h2>
            <p>
              For individuals in the EEA, we process personal data based on contractual necessity, legitimate interests, or your consent, as applicable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">5. Your Rights</h2>
            <p>
              You have the right to access, correct, delete, or restrict processing of your personal data. You may also object to processing and lodge a complaint with a supervisory authority. Contact us at info@karalegal.com.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d]">6. Contact</h2>
            <p>
              For privacy-related questions: info@karalegal.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
