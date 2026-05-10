import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | C7 Consulting & IT Services`,
      description: service.metaDescription,
      url: `https://c7-cits.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: "C7 Consulting & IT Services",
      url: "https://c7-cits.com",
    },
    url: `https://c7-cits.com/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-3">
            {service.num} — Services
          </p>
          <h1 className="text-4xl font-bold text-[#111111] mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      {/* Problem / Approach */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold text-[#111111] mb-4">
              The Problem
            </h2>
            <p className="text-slate-600 leading-relaxed">{service.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#111111] mb-4">
              Our Approach
            </h2>
            <p className="text-slate-600 leading-relaxed">{service.approach}</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#111111] mb-8">
            What You Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.outcomes.map((outcome, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-1 bg-[#E05A00] rounded flex-shrink-0 mt-1" style={{ minHeight: "1rem" }} />
                <p className="text-slate-700 text-sm leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + Details */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold text-[#111111] mb-4">
              Who This Is For
            </h2>
            <p className="text-slate-600 leading-relaxed">{service.whoFor}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#111111] mb-4">
              What&apos;s Included
            </h2>
            <ul className="space-y-2">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#E05A00] font-bold text-sm mt-0.5">—</span>
                  <span className="text-slate-600 text-sm leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to get started?
            </h2>
            <p className="text-[#9CA3AF]">
              Free consultation. No pitch, no fluff — just a straight answer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#E05A00] text-white font-semibold px-6 py-3 rounded hover:bg-[#C04A00] transition-colors whitespace-nowrap text-center"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-slate-600 text-slate-300 font-semibold px-6 py-3 rounded hover:border-slate-400 hover:text-white transition-colors whitespace-nowrap text-center"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
