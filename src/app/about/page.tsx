import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: "Kara Legal - Excellence in legal and compliance advisory since 1999. Our mission, values, and history.",
};

export default function AboutPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-8">
          About Kara Legal
        </h1>

        <div className="prose prose-slate prose-lg max-w-none space-y-10 text-slate-700">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#1a365d] mb-4">
              Our Story
            </h2>
            <p className="leading-relaxed">
              Kara Legal & Compliance Advisory was founded in 1999 with a simple mission: provide top-tier legal and compliance services with transparency, efficiency, and a client-first approach. What began as a small corporate practice in Amsterdam has grown into a full-service firm serving businesses across Europe and beyond.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#1a365d] mb-4">
              Mission
            </h2>
            <p className="leading-relaxed">
              We help businesses navigate complex legal and regulatory environments so they can focus on growth. Our attorneys combine deep technical expertise with practical judgment, delivering outcomes that advance our clients’ objectives.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#1a365d] mb-4">
              Core Values
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Excellence</strong> — We hold ourselves to the highest standards in every matter.</li>
              <li><strong>Integrity</strong> — Honest advice, even when it’s difficult to deliver.</li>
              <li><strong>Client Focus</strong> — Your goals drive our strategy.</li>
              <li><strong>Innovation</strong> — We use technology and process to deliver better outcomes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#1a365d] mb-4">
              Awards & Recognitions
            </h2>
            <p className="leading-relaxed mb-4">
              Kara Legal has been recognized by leading legal directories and industry publications for excellence in corporate law, litigation, and intellectual property.
            </p>
            <ul className="space-y-1 list-disc pl-6 text-slate-600">
              <li>Legal 500 – Corporate/M&A (2020–2024)</li>
              <li>Chambers Europe – Litigation (2019–2023)</li>
              <li>Best Lawyers – Intellectual Property (2022–2024)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-[#1a365d] mb-4">
              Community
            </h2>
            <p className="leading-relaxed">
              We believe in giving back. Kara Legal supports pro bono initiatives, legal education programs, and local organizations. Our attorneys contribute time and expertise to causes that matter to our community.
            </p>
          </section>
        </div>

        <div className="mt-12 p-8 bg-slate-50 rounded-xl text-center">
          <p className="text-slate-700 font-medium mb-4">
            Ready to work with us?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#1a365d] text-white font-semibold rounded-lg hover:bg-[#0f2744] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
