import Link from "next/link";

const services = [
  {
    href: "/services/corporate",
    icon: "🏛️",
    title: "Corporate Law",
    description: "Mergers & acquisitions, corporate governance, compliance, entity formation, and strategic transactions.",
    highlights: ["M&A", "Governance", "Compliance", "Formation"],
  },
  {
    href: "/services/litigation",
    icon: "⚖️",
    title: "Litigation",
    description: "Commercial disputes, arbitration, employment litigation, and court representation with proven results.",
    highlights: ["Commercial", "Arbitration", "Employment", "Insurance"],
  },
  {
    href: "/services/ip",
    icon: "©️",
    title: "Intellectual Property",
    description: "Trademarks, patents, copyrights, trade secrets, licensing, and enforcement across all IP rights.",
    highlights: ["Trademarks", "Patents", "Copyrights", "Licensing"],
  },
];

export const metadata = {
  title: "Legal Services",
  description: "Corporate law, litigation, intellectual property, and more. Expert legal services tailored to your business.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-4">
            Our Practice Areas
          </h1>
          <p className="text-slate-600 text-lg">
            We provide comprehensive legal and compliance advisory services to businesses, executives, and institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.href}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h2 className="font-serif text-2xl font-bold text-[#1a365d] mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-[#b8860b] font-semibold hover:gap-2 transition-all gap-1"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
