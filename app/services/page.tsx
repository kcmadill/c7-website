import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "C7 offers business process improvement, strategic planning, technology, AI integration, and more.",
};

const services = [
  {
    num: "01",
    title: "Business Process Improvement",
    description:
      "Evaluate how your business operates, identify waste and inefficiency, and help you build a better way forward. We map your current state, find the gaps, and deliver actionable improvements — not just recommendations.",
  },
  {
    num: "02",
    title: "Strategic Planning & Roadmapping",
    description:
      "Define where you're going, build the plan to get there, and execute with discipline. Whether you're setting annual priorities or navigating a major shift, we build the roadmap and hold the line.",
  },
  {
    num: "03",
    title: "Technology & IT Services",
    description:
      "Implement the right technology for your business — from infrastructure to software to AI integration. We assess your current stack, identify gaps, and build or source the right solutions.",
  },
  {
    num: "04",
    title: "Project Planning & Execution",
    description:
      "We don't just hand you a plan and walk away. We stay in it and execute alongside you. From kickoff to completion, we manage timelines, dependencies, and deliverables so things actually get done.",
  },
  {
    num: "05",
    title: "Operations Consulting",
    description:
      "Finance, HR, sales, marketing — no matter the function, we assess how it's operating and build a better version of it. Whether you're scaling fast or fixing what's broken, we bring structure and discipline to every part of your business.",
  },
  {
    num: "06",
    title: "Procurement & Vendor Solutions",
    description:
      "Find, evaluate, and onboard the right business and technology solutions for your needs. We manage the vendor process so you get the right fit at the right price — without the guesswork.",
  },
  {
    num: "07",
    title: "Asset & Systems Integration",
    description:
      "Acquired a new business or platform? We manage the integration so nothing falls through the cracks. From data migration to workflow alignment, we ensure your systems and teams work as one.",
  },
  {
    num: "08",
    title: "AI Integration & Adoption",
    description:
      "Identify where AI creates real value in your business and implement it practically and effectively. We cut through the noise and help you adopt AI in ways that actually move the needle.",
  },
];

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
              <div
                key={service.num}
                className="border border-slate-200 rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-bold text-[#E05A00] tracking-wider mb-3">
                  {service.num}
                </div>
                <h2 className="text-xl font-bold text-[#111111] mb-3">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
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
