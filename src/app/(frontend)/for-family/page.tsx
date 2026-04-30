import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PackageGrid } from "@/components/sections/PackageGrid";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "For Family — Chittagong Online Limited",
  description:
    "Fast, reliable, and secure broadband internet for your entire family.",
};

export const revalidate = 0;



const FAQS = [
  {
    question: "Do I need to pay an installation fee?",
    answer: "Our standard installation fee is ৳ 1,500, which includes basic cable laying and configuration. Router costs are separate.",
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes, you can upgrade your package at any time by calling our support line. The new billing cycle will be adjusted accordingly.",
  },
  {
    question: "What is BDIX connectivity?",
    answer: "BDIX allows you to access local Bangladeshi servers, streaming platforms, and FTPs at much higher speeds than your standard internet package bandwidth.",
  },
  {
    question: "Do you provide routers?",
    answer: "We offer high-quality dual-band routers for purchase during installation, or you can use your own compatible router.",
  },
];

export default async function ForFamilyPage() {
  const testimonials = await client.fetch(
    `*[_type == "testimonial" && "home" in displayPage] {
      customerName,
      designation,
      reviewText,
      "imageUrl": image.asset->url
    }`
  );

  const query = `*[_type == "internetPackage" && category == "home"] | order(order asc) {
    name,
    category,
    speed,
    price,
    features,
    isPopular,
    "displayOrder": order
  }`;
  const livePackages = await client.fetch(query);

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-[#051d40]">
        <div className="w-full bg-[#051d40] flex justify-center">
          <Image 
            src="/images/homenew.png"
            alt="Hero Banner"
            width={1920}
            height={1080}
            priority={true}
            className="w-full max-h-[65vh] object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={85}
          />
        </div>
      </section>

      {/* 2. Family Packages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground">Home Broadband Plans</h2>
            <p className="mt-4 text-muted-foreground">High-speed internet tailored for every household size.</p>
          </div>
          <div className="mt-16">
            <PackageGrid packages={livePackages} />
          </div>
        </div>
      </section>

      {/* 3. CTA Card (Reused from Enterprise) */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <Card className="border-none bg-gradient-to-r from-[#051d40] to-blue-900 text-white shadow-xl">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
              <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-2xl font-bold">Have any questions?</h3>
                <p className="text-white/80">Our support team is ready to help you choose the perfect plan for your home.</p>
              </div>
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 shrink-0 gap-2">
                <PhoneCall className="h-4 w-4" />
                Call +880-31-2850085
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Testimonials & 5. FAQ */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel title="Hear From Local Families" testimonials={testimonials} />
          <FaqAccordion title="Home Internet FAQs" faqs={FAQS} />
        </div>
      </section>
    </div>
  );
}
