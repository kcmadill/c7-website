import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Operations, Strategy & Technology Insights",
  description:
    "Practical insights on business process improvement, strategic planning, technology selection, and AI adoption for growing businesses.",
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-3">
            Insights
          </p>
          <h1 className="text-4xl font-bold text-[#111111] mb-4">Blog</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Practical thinking on operations, strategy, technology, and AI —
            written for business owners and leaders who want straight answers.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="divide-y divide-slate-200">
            {sorted.map((post) => (
              <article key={post.slug} className="py-10 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#E05A00] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#E05A00] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-[#E05A00]">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to fix what&apos;s holding you back?
            </h2>
            <p className="text-[#9CA3AF]">
              Free consultation. We&apos;ll tell you exactly what we think.
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
