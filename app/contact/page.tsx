"use client";

import { useState } from "react";

// TODO: Replace with your Formspree endpoint (free at formspree.io)
// e.g. https://formspree.io/f/your-form-id
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

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
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {state === "success" ? (
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
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent"
                      placeholder="Your name"
                    />
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
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent"
                      placeholder="you@company.com"
                    />
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
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
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
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E05A00] focus:border-transparent resize-none"
                    placeholder="Tell us what's going on and what you need help with."
                  />
                </div>

                {state === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full bg-[#E05A00] text-white font-semibold py-3 rounded hover:bg-[#C04A00] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
