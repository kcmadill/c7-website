import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Logo className="h-8 w-auto mb-3" />
            <div className="text-[#9CA3AF] text-sm mb-4">
              Consulting & IT Services
            </div>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Strategy. Technology. Results.
              <br />
              Built to execute.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase text-[#9CA3AF]">
              Services
            </div>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li>Business Process Improvement</li>
              <li>Strategic Planning & Roadmapping</li>
              <li>Technology & IT Services</li>
              <li>AI Integration & Adoption</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase text-[#9CA3AF]">
              Company
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-[#6B7280] hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#6B7280] hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#6B7280] hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
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
