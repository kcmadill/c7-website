import Link from "next/link";

// Dark hero variant — identical content/layout to homepage, dark hero section only

const featuredServices = [
  {
    num: "01",
    title: "Business Process Improvement",
    description:
      "Evaluate how your business operates, identify waste and inefficiency, and build a better way forward.",
  },
  {
    num: "02",
    title: "Strategic Planning & Roadmapping",
    description:
      "Define where you're going, build the plan to get there, and execute with discipline.",
  },
  {
    num: "03",
    title: "Technology & IT Services",
    description:
      "Implement the right technology for your business — from infrastructure to software to AI integration.",
  },
  {
    num: "04",
    title: "AI Integration & Adoption",
    description:
      "Identify where AI creates real value in your business and implement it practically and effectively.",
  },
];

const differentiators = [
  {
    title: "Results-focused",
    desc: "Every engagement is measured against real outcomes, not hours billed.",
  },
  {
    title: "We execute with you",
    desc: "We don't hand off a report and disappear. We're in it until it's done.",
  },
  {
    title: "AI-native approach",
    desc: "We leverage AI tools throughout our work to move faster and think sharper.",
  },
];

export default function HeroA() {
  return (
    <>
      {/* Hero — dark */}
      <section className="bg-[#111111] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-6">
              C7 Consulting & IT Services
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
              Strategy.
              <br />
              Technology.
              <br />
              Results.
            </h1>
            <p className="text-xl text-[#9CA3AF] font-medium mb-6">
              Built to execute.
            </p>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-xl">
              We help businesses operate better, plan smarter, and implement the
              right technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#E05A00] text-white font-semibold px-6 py-3 rounded hover:bg-[#C04A00] transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="border border-[#333] text-[#9CA3AF] font-semibold px-6 py-3 rounded hover:border-white hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-3">
              What We Do
            </h2>
            <p className="text-slate-600 max-w-xl">
              From operations to technology to strategy — we cover the full
              scope of what it takes to run and grow a business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-xs font-bold text-[#E05A00] tracking-wider mb-3">
                  {service.num}
                </div>
                <h3 className="font-semibold text-[#111111] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-[#E05A00] font-semibold hover:underline text-sm"
            >
              See all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why C7 */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-12">Why C7?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((item) => (
              <div key={item.title}>
                <div className="w-8 h-1 bg-[#E05A00] mb-4" />
                <h3 className="font-semibold text-[#111111] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to get started?
            </h2>
            <p className="text-[#9CA3AF]">
              Tell us what you&apos;re working on. We&apos;ll be direct with
              you.
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
