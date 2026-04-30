import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Contact C7 Consulting & IT Services. Free consultation — no pitch, no fluff. Tell us what you're working on and we'll give you a straight answer.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
