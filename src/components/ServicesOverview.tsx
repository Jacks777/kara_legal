import Link from "next/link";

const services = [
  {
    href: "/services/corporate",
    icon: "🏛️",
    title: "Corporate Law",
    description: "M&A, corporate governance, compliance, and strategic transactions for businesses of all sizes.",
  },
  {
    href: "/services/litigation",
    icon: "⚖️",
    title: "Litigation",
    description: "Commercial disputes, arbitration, and court representation with a track record of successful outcomes.",
  },
  {
    href: "/services/ip",
    icon: "©️",
    title: "Intellectual Property",
    description: "Trademarks, patents, copyrights, and trade secrets protection and enforcement.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
            Practice Areas
          </h2>
          <p className="text-slate-600 text-lg">
            Comprehensive legal services tailored to your business needs. From formation to dispute resolution—we cover it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-[#b8860b]/50 hover:shadow-lg hover:bg-white transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-[#1a365d] mb-2 group-hover:text-[#b8860b] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center text-[#b8860b] font-medium group-hover:gap-2 transition-all gap-1">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
