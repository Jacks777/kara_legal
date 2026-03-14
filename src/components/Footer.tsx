import Link from "next/link";

const services = [
  { href: "/services/corporate", label: "Corporate Law" },
  { href: "/services/litigation", label: "Litigation" },
  { href: "/services/ip", label: "Intellectual Property" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
];

const legal = [
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <span className="font-serif text-2xl font-bold">Kara</span>
            <p className="text-slate-300 mt-3 text-sm leading-relaxed max-w-xs">
              Trusted legal and compliance advisory for businesses. Excellence in counsel since 1999.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-[#d4a84b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-[#d4a84b] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Amsterdam, Netherlands</li>
              <li>
                <a href="tel:+31201234567" className="hover:text-[#d4a84b]">+31 20 123 4567</a>
              </li>
              <li>
                <a href="mailto:info@karalegal.com" className="hover:text-[#d4a84b]">info@karalegal.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Kara Legal & Compliance Advisory. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-300 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-300 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
