import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; category: string; date: string; content: string }
> = {
  "corporate-compliance-2024": {
    title: "Corporate Compliance in 2024: Key Updates",
    category: "Compliance",
    date: "2024-03-05",
    content: `
Regulatory changes continue to accelerate. Here are key updates affecting businesses in 2024.

**New Reporting Requirements**

Several jurisdictions have introduced or expanded reporting obligations. ESG and sustainability disclosures are now mandatory for many public companies. Supply chain due diligence requirements are also tightening.

**Data and Privacy**

GDPR enforcement remains robust. New data localization and cross-border transfer rules are in effect in multiple regions. Ensure your data processing agreements and privacy policies reflect current law.

**Anti-Corruption**

Anti-bribery enforcement has intensified. Robust compliance programs—including policies, training, and due diligence on third parties—are essential.

If your organization needs help staying ahead of these changes, we can assist with compliance audits, policy updates, and training.
    `,
  },
  "protecting-trade-secrets": {
    title: "Protecting Trade Secrets in the Digital Age",
    category: "Intellectual Property",
    date: "2024-02-28",
    content: `
Trade secrets—confidential business information that provides a competitive advantage—require careful protection. Here are best practices.

**Identification and Classification**

Identify what qualifies as a trade secret: formulas, processes, customer lists, algorithms. Classify information and limit access on a need-to-know basis.

**Technical Safeguards**

Use encryption, access controls, and audit logs. Implement clean desk and secure disposal policies. Monitor for unauthorized access or exfiltration.

**Contractual Protections**

NDAs, non-compete agreements, and confidentiality provisions in employment and vendor contracts create contractual barriers and remedies if information is misused.

**Legal Frameworks**

Understand the EU Trade Secrets Directive and national laws. Trade secret misappropriation can give rise to injunctive relief and damages, but you must demonstrate reasonable steps to maintain secrecy.
    `,
  },
  "merger-checklist": {
    title: "M&A Due Diligence: A Practical Checklist",
    category: "Corporate Law",
    date: "2024-02-15",
    content: `
Effective due diligence helps you understand what you are buying and where the risks lie. Here is a practical checklist.

**Corporate and Structure**

Articles of association, capitalization, shareholder agreements, organizational charts. Confirm authority to enter the transaction.

**Financial and Tax**

Audited financials, tax returns, material contracts, contingent liabilities. Understand revenue recognition and any aggressive positions.

**Legal and Regulatory**

Litigation, regulatory matters, compliance history. Review material permits and licenses. Assess exposure to environmental, employment, and data protection issues.

**Commercial**

Key customer and supplier contracts, pipeline, IP, and technology. Identify material dependencies and change-of-control provisions.

**Integration Planning**

Assess cultural and operational fit. Plan for employee retention, systems integration, and customer transition.
    `,
  },
  "litigation-alternatives": {
    title: "When to Choose Arbitration Over Litigation",
    category: "Litigation",
    date: "2024-02-01",
    content: `
Arbitration and litigation each have advantages. Here are factors to consider when drafting dispute resolution clauses or deciding how to resolve a dispute.

**Speed and Cost**

Arbitration can be faster than court litigation, especially in complex cases, though costs can be significant. Courts offer judicial economy for smaller disputes and appeals.

**Confidentiality**

Arbitration is typically confidential; court proceedings are usually public. For sensitive commercial disputes, confidentiality may favor arbitration.

**Enforceability**

Arbitral awards are widely enforceable under the New York Convention. Court judgments have more limited international enforcement.

**Expertise and Process**

You can select arbitrators with industry or technical expertise. Courts provide built-in procedural guarantees and appellate review.

**Contract Language**

Careful drafting of arbitration clauses—seat, rules, language, number of arbitrators—is essential. We can help you design the right clause for your situation.
    `,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <article className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm text-slate-600">
          <Link href="/blog" className="hover:text-[#b8860b]">
            ← Back to Blog
          </Link>
        </nav>
        <span className="text-xs font-semibold text-[#b8860b] uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a365d] mt-2 mb-4">
          {post.title}
        </h1>
        <time className="text-slate-500" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="mt-8 prose prose-slate prose-lg max-w-none text-slate-700">
          {post.content.split("\n").map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <h2 key={i} className="font-serif text-xl font-semibold text-[#1a365d] mt-8 mb-2">
                  {para.replace(/\*\*/g, "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}
