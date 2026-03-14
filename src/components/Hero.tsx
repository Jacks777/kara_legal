import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/95 via-[#1a365d]/90 to-[#0f2744]/95 z-10" />
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80')] bg-cover bg-center z-0 opacity-30"
        aria-hidden="true"
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[#d4a84b] font-semibold tracking-wider uppercase text-sm mb-4">
            Trusted Legal Excellence Since 1999
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Expert Legal & Compliance Advisory When You Need It Most
          </h1>
          <p className="text-slate-200 text-lg lg:text-xl mb-8 max-w-2xl">
            Kara Legal combines deep industry expertise with a client-first approach. From corporate law to litigation and IP—we deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#b8860b] text-white font-semibold rounded-lg hover:bg-[#d4a84b] transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 text-white/90">
            <div>
              <span className="block font-serif text-3xl font-bold text-[#d4a84b]">25+</span>
              <span className="text-sm">Years in Practice</span>
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-[#d4a84b]">98%</span>
              <span className="text-sm">Case Success Rate</span>
            </div>
            <div>
              <span className="block font-serif text-3xl font-bold text-[#d4a84b]">500+</span>
              <span className="text-sm">Clients Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
