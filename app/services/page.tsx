import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Consulting & IT Services",
  description:
    "Business process improvement, strategic planning, technology implementation, AI integration, and operations consulting. Hands-on services built to execute.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl font-bold text-[#111111] mb-4">Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            We help businesses operate better, plan smarter, and implement the
            right technology. Here&apos;s exactly what that looks like.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.num}
                href={`/services/${service.slug}`}
                className="border border-slate-200 rounded-lg p-8 hover:shadow-md hover:border-slate-300 transition-all group block"
              >
                <div className="text-xs font-bold text-[#E05A00] tracking-wider mb-3">
                  {service.num}
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#E05A00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.tagline}
                </p>
                <span className="inline-block mt-4 text-xs font-semibold text-[#E05A00] tracking-wide uppercase">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Not sure where to start?
            </h2>
            <p className="text-[#9CA3AF]">
              We&apos;ll listen first and tell you exactly what we think.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#E05A00] text-white font-semibold px-6 py-3 rounded hover:bg-[#C04A00] transition-colors whitespace-nowrap"
          >
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
