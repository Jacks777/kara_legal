import Link from "next/link";

export const metadata = {
  title: "Litigation",
  description: "Commercial litigation, arbitration, and dispute resolution. Strong representation when it matters most.",
};

export default function LitigationPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-slate-600">
          <Link href="/services" className="hover:text-[#b8860b]">
            ← Back to Services
          </Link>
        </nav>
        <span className="text-4xl mb-4 block">⚖️</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-6">
          Litigation
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Our litigation team handles complex commercial disputes, arbitration, employment matters, and insurance defense. We focus on strategies that protect your interests and achieve favorable outcomes.
        </p>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Commercial Disputes
            </h2>
            <p>
              Breach of contract, business torts, partnership disputes, and shareholder litigation. We analyze risk and build compelling cases.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Arbitration & ADR
            </h2>
            <p>
              Arbitration, mediation, and alternative dispute resolution. We help clients resolve conflicts efficiently without protracted court battles when appropriate.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Employment Litigation
            </h2>
            <p>
              Wrongful termination, discrimination, wage disputes, and restrictive covenant enforcement. Defense and plaintiff-side representation for employers and executives.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Insurance Coverage
            </h2>
            <p>
              Coverage disputes, bad faith claims, and policy interpretation. We advocate for policyholders to maximize recovery.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <h3 className="font-serif text-lg font-semibold text-[#1a365d] mb-2">
            Case Evaluation
          </h3>
          <p className="text-slate-600 mb-4">
            We provide initial case assessments and litigation strategy consultations. Contact us to discuss your matter.
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
