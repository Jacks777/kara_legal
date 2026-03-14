import Link from "next/link";

const posts = [
  {
    slug: "corporate-compliance-2024",
    title: "Corporate Compliance in 2024: Key Updates",
    excerpt: "Regulatory changes affecting businesses this year and how to stay ahead.",
    category: "Compliance",
    date: "2024-03-05",
  },
  {
    slug: "protecting-trade-secrets",
    title: "Protecting Trade Secrets in the Digital Age",
    excerpt: "Best practices for safeguarding confidential information and trade secrets.",
    category: "Intellectual Property",
    date: "2024-02-28",
  },
  {
    slug: "merger-checklist",
    title: "M&A Due Diligence: A Practical Checklist",
    excerpt: "Essential steps and considerations when evaluating a merger or acquisition.",
    category: "Corporate Law",
    date: "2024-02-15",
  },
  {
    slug: "litigation-alternatives",
    title: "When to Choose Arbitration Over Litigation",
    excerpt: "Factors to consider when deciding between court and arbitration.",
    category: "Litigation",
    date: "2024-02-01",
  },
];

const categories = ["All", "Compliance", "Corporate Law", "Litigation", "Intellectual Property"];

export const metadata = {
  title: "Blog & Resources",
  description: "Legal insights, compliance updates, and thought leadership from Kara Legal.",
};

export default function BlogPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a365d] mb-4">
            Blog & Resources
          </h1>
          <p className="text-slate-600 text-lg">
            Legal insights, compliance updates, and practical guidance from our attorneys.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-[#1a365d] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="text-xs font-semibold text-[#b8860b] uppercase tracking-wider">
                  {post.category}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#1a365d] mt-2 mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#b8860b] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <time className="text-sm text-slate-500" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
