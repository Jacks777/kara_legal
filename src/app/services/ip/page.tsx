import Link from "next/link";

export const metadata = {
  title: "Intellectual Property",
  description: "Trademarks, patents, copyrights, trade secrets. Protect and enforce your intellectual property with Kara Legal.",
};

export default function IPLawPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-slate-600">
          <Link href="/services" className="hover:text-[#b8860b]">
            ← Back to Services
          </Link>
        </nav>
        <span className="text-4xl mb-4 block">©️</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-6">
          Intellectual Property
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          From registration to enforcement, our IP practice helps businesses protect and monetize their trademarks, patents, copyrights, and trade secrets.
        </p>

        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Trademarks
            </h2>
            <p>
              Search, registration, and portfolio management. Enforcement and defense in opposition, cancellation, and infringement matters.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Patents
            </h2>
            <p>
              Utility and design patent prosecution, freedom-to-operate analysis, licensing, and litigation support for patent disputes.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Copyrights
            </h2>
            <p>
              Registration, licensing, and enforcement of copyrights in software, media, and creative works. DMCA and international protection.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
              Trade Secrets & Licensing
            </h2>
            <p>
              Trade secret protection programs, NDA drafting, and IP licensing agreements. Technology transfer and collaboration structures.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <h3 className="font-serif text-lg font-semibold text-[#1a365d] mb-2">
            IP Audit & Strategy
          </h3>
          <p className="text-slate-600 mb-4">
            We offer IP audits and strategy sessions to help you understand and strengthen your intellectual property portfolio.
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
