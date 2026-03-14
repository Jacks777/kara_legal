import Link from "next/link";

export const metadata = {
  title: "Corporate Law",
  description: "M&A, corporate governance, compliance, and entity formation. Expert corporate legal services from Kara Legal.",
};

export default function CorporateLawPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-slate-600">
          <Link href="/services" className="hover:text-[#b8860b]">
            ← Back to Services
          </Link>
        </nav>
        <span className="text-4xl mb-4 block">🏛️</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-6">
          Corporate Law
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Our corporate practice advises businesses on mergers and acquisitions, governance, compliance, and strategic transactions. We combine transactional expertise with regulatory insight.
        </p>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Mergers & Acquisitions
            </h2>
            <p>
              End-to-end support for buy-side and sell-side M&A: due diligence, structuring, negotiation, documentation, and closing. We handle domestic and cross-border deals.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Corporate Governance
            </h2>
            <p>
              Board advisory, committee formation, bylaws, shareholder agreements, and governance best practices for public and private companies.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Compliance & Regulatory
            </h2>
            <p>
              Regulatory compliance programs, risk assessments, training, and responses to regulators. We help you stay ahead of evolving requirements.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Entity Formation & Restructuring
            </h2>
            <p>
              Formation of corporations, LLCs, and partnerships; restructuring; capital raises; and equity and incentive plans.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <h3 className="font-serif text-lg font-semibold text-[#1a365d] mb-2">
            Engagement Options
          </h3>
          <p className="text-slate-600 mb-4">
            We offer retainer arrangements, project-based billing, and strategic advisory packages tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1a365d] text-white font-semibold rounded-lg hover:bg-[#0f2744] transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
