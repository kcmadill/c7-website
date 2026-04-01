import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "C7 Consulting & IT Services — built around practical results, honest advice, and real execution.",
};

const values = [
  {
    title: "Directness",
    desc: "We tell you what we actually think. No fluff, no padding — just a clear picture of where you are and what to do about it.",
  },
  {
    title: "Execution over advice",
    desc: "Consulting that stops at the recommendation isn't worth much. We stay in the work until the result is real.",
  },
  {
    title: "Practical use of technology",
    desc: "We don't chase trends. We identify where technology — including AI — creates genuine leverage in your specific business.",
  },
  {
    title: "Accountability",
    desc: "We own our work. If something isn't working, we say so and we fix it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-3">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold text-[#111111] mb-4">About C7</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Built around practical results, honest advice, and real execution.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                C7 Consulting and IT Services was built on a simple premise:
                most businesses don&apos;t need more advice. They need someone
                who will actually get in and do the work.
              </p>
              <p>
                We partner with businesses to fix what&apos;s holding them back
                — whether that&apos;s inefficient operations, a lack of
                strategic direction, the wrong technology, or all three. We come
                in, assess honestly, build a clear plan, and execute it
                alongside you.
              </p>
              <p>
                We are AI-native by design. That means we use the best available
                tools — including artificial intelligence — to move faster and
                think sharper on every engagement. Not because it&apos;s a
                buzzword, but because it makes our work better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111111] mb-10">
            Leadership
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start max-w-2xl">
            <div className="w-20 h-20 rounded-full bg-[#111111] flex items-center justify-center text-white text-2xl font-bold shrink-0 border-2 border-[#E05A00]">
              KC
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111] mb-1">
                K.C. Madill
              </h3>
              <p className="text-sm font-semibold text-[#E05A00] mb-4">
                Founder & Principal
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                K.C. brings a background in business operations, technology
                implementation, and strategic planning. He founded C7 to deliver
                the kind of consulting he always wished existed — direct,
                execution-focused, and built for real results. He leads every
                engagement personally and holds the work to a high standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111111] mb-10">
            How We Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-8 h-1 bg-[#E05A00] mb-4" />
                <h3 className="font-semibold text-[#111111] mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {v.desc}
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
              Let&apos;s work together.
            </h2>
            <p className="text-[#9CA3AF]">
              Tell us what&apos;s holding your business back.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#E05A00] text-white font-semibold px-6 py-3 rounded hover:bg-[#C04A00] transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
