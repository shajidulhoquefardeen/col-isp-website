import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Chittagong Online Limited",
  description:
    "Get in touch with Chittagong Online Limited for sales inquiries, technical support, and general information.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Get in touch with our team for sales, support, or general inquiries.
        Coming soon.
      </p>
    </div>
  );
}
