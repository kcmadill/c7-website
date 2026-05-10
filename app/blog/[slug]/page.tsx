import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, formatDate } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} | C7 Consulting & IT Services`,
      description: post.metaDescription,
      url: `https://c7-cits.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderBody(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#111111] mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[#111111] mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      elements.push(
        <p key={i} className="font-semibold text-[#111111] mt-4 mb-1">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#E05A00] font-bold text-sm mt-0.5 flex-shrink-0">—</span>
              <span className="text-slate-600 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p key={i} className="text-slate-600 leading-relaxed mb-4">
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "C7 Consulting & IT Services",
      url: "https://c7-cits.com",
    },
    publisher: {
      "@type": "Organization",
      name: "C7 Consulting & IT Services",
      url: "https://c7-cits.com",
    },
    url: `https://c7-cits.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/blog"
              className="text-xs font-bold text-[#E05A00] uppercase tracking-wider hover:underline"
            >
              {post.category}
            </Link>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500">{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-[#111111] leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom">{renderBody(post.body)}</div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#E05A00] hover:underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Want a straight assessment of your business?
            </h2>
            <p className="text-[#9CA3AF]">
              Free consultation. No pitch, no fluff.
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
