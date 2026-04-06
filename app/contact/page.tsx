"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mykblvrd");

  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-widest text-[#E05A00] uppercase mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl font-bold text-[#111111] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Tell us what you&apos;re working on. We&apos;ll give you a straight
            answer.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2 className="text-xl font-bold text-[#111111] mb-6">
              What to expect
            </h2>
            <div className="space-y-6">
              <div>
                <div className="w-6 h-1 bg-[#E05A00] mb-3" />
                <h3 className="font-semibold text-[#111111] mb-1">
                  A real conversation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  No sales pitch, no canned responses. We listen to what
                  you&apos;re dealing with and tell you what we actually think.
                </p>
              </div>
              <div>
                <div className="w-6 h-1 bg-[#E05A00] mb-3" />
                <h3 className="font-semibold text-[#111111] mb-1">
                  Quick response
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We respond to every inquiry within one business day. If
                  we&apos;re not the right fit, we&apos;ll tell you that too.
                </p>
              </div>
              <div>
                <div className="w-6 h-1 bg-[#E05A00] mb-3" />
                <h3 className="font-semibold text-[#111111] mb-1">
                  No commitment required
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The first conversation is free. We earn your business by being
                  useful, not by locking you in.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500">
                  Prefer email?{" "}
                  <a
                    href="mailto:operations@c7-cits.com"
                    className="text-[#E05A00] font-medium hover:underline"
                  >
                    operations@c7-cits.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {state.succeeded ? (
              <div className="border border-green-200 bg-green-50 rounded-lg p-8 text-center">
                <div className="text-green-700 font-semibold text-lg mb-2">
                  Message sent.
                </div>
                <p className="text-sm text-green-600">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Name <span className="text-[#E05A00]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent"
                      placeholder="Your name"
                    />
                    <ValidationError field="name" errors={state.errors} className="text-xs text-red-600 mt-1" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1"
                    >
                      Email <span className="text-[#E05A00]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent"
                      placeholder="you@company.com"
                    />
                    <ValidationError field="email" errors={state.errors} className="text-xs text-red-600 mt-1" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    What are you working on?{" "}
                    <span className="text-[#E05A00]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent resize-none"
                    placeholder="Tell us what's going on and what you need help with."
                  />
                  <ValidationError field="message" errors={state.errors} className="text-xs text-red-600 mt-1" />
                </div>

                <ValidationError errors={state.errors} className="text-sm text-red-600" />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#E05A00] text-white font-semibold py-3 rounded hover:bg-[#C04A00] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
