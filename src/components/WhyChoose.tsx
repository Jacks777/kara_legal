const benefits = [
  {
    title: "Industry Expertise",
    description: "Our attorneys specialize in specific practice areas, bringing deep knowledge and proven strategies to every matter.",
    metric: "15+",
    metricLabel: "Specialized Practice Areas",
  },
  {
    title: "Client-First Approach",
    description: "Transparent communication, fixed-fee options, and dedicated relationship managers ensure you always know where you stand.",
    metric: "4.9/5",
    metricLabel: "Client Satisfaction",
  },
  {
    title: "Results That Matter",
    description: "From multi-million dollar M&A deals to high-stakes litigation, we focus on outcomes that advance your objectives.",
    metric: "98%",
    metricLabel: "Success Rate",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mb-4">
            Why Choose Kara
          </h2>
          <p className="text-slate-600 text-lg">
            We combine traditional legal excellence with modern efficiency. Here’s what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="font-serif text-2xl font-bold text-[#b8860b] mb-2">
                {benefit.metric}
              </div>
              <p className="text-sm text-slate-500 mb-4">{benefit.metricLabel}</p>
              <h3 className="font-serif text-xl font-semibold text-[#1a365d] mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
