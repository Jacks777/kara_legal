const team = [
  {
    name: "Alexandra Chen",
    title: "Managing Partner",
    practice: "Corporate Law, M&A",
    bar: "New York, California, Amsterdam Bar",
    credentials: "J.D. Harvard Law School, B.A. Yale University",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Marcus van der Berg",
    title: "Senior Partner",
    practice: "Litigation, Arbitration",
    bar: "Amsterdam Bar, International Arbitration",
    credentials: "LL.M. Leiden University, B.A. University of Amsterdam",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Sophie Lindqvist",
    title: "Partner",
    practice: "Intellectual Property",
    bar: "European Patent Attorney, Amsterdam Bar",
    credentials: "J.D. Stockholm University, M.Sc. Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
];

export const metadata = {
  title: "Our Team",
  description: "Meet the attorneys and advisors at Kara Legal. Experienced professionals across corporate, litigation, and IP.",
};

export default function TeamPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-4">
            Our Team
          </h1>
          <p className="text-slate-600 text-lg">
            Meet the attorneys and advisors behind Kara Legal. Deep expertise and a commitment to client success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member) => (
            <article
              key={member.name}
              className="group rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-bold text-[#1a365d] mb-1">
                  {member.name}
                </h2>
                <p className="text-[#b8860b] font-medium text-sm mb-2">{member.title}</p>
                <p className="text-slate-600 text-sm mb-3">{member.practice}</p>
                <p className="text-slate-500 text-xs mb-2">{member.bar}</p>
                <p className="text-slate-500 text-xs">{member.credentials}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
