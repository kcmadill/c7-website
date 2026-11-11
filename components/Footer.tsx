import Link from "next/link";
import Logo from "@/components/Logo";

const serviceLinks = [
  { href: "/services/business-process-improvement", label: "Business Process Improvement" },
  { href: "/services/strategic-planning", label: "Strategic Planning & Roadmapping" },
  { href: "/services/technology-it-services", label: "Technology & IT Services" },
  { href: "/services/project-planning-execution", label: "Project Planning & Execution" },
  { href: "/services/operations-consulting", label: "Operations Consulting" },
  { href: "/services/procurement-vendor-solutions", label: "Procurement & Vendor Solutions" },
  { href: "/services/asset-systems-integration", label: "Asset & Systems Integration" },
  { href: "/services/ai-integration-adoption", label: "AI Integration & Adoption" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo className="h-8 w-auto mb-3" />
            <div className="text-[#9CA3AF] text-sm mb-4">
              Consulting & IT Services
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
              Strategy. Technology. Results.
              <br />
              Built to execute.
            </p>
            <a
              href="mailto:operations@c7-cits.com"
              className="text-sm text-[#E05A00] hover:underline"
            >
              operations@c7-cits.com
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase text-[#9CA3AF]">
              Services
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B7280] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase text-[#9CA3AF]">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6B7280] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/c7-cits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#222] text-center text-sm text-[#4B5563]">
          &copy; {new Date().getFullYear()} C7 Consulting and IT Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
