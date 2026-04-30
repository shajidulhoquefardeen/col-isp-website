import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Server, ShieldCheck, Zap, PhoneCall, CheckCircle2 } from "lucide-react";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PackageGrid, PackageType } from "@/components/sections/PackageGrid";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "For Enterprise — Chittagong Online Limited",
  description:
    "Dedicated bandwidth with SLA guarantees for businesses that demand uninterrupted connectivity.",
};

export const revalidate = 0;



const BENEFITS = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Symmetrical Speeds",
    description: "Equal upload and download speeds ensuring smooth video conferencing and rapid data transfers.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "Unmatched Reliability",
    description: "Metro fiber rings with automatic failover routes for a guaranteed 99.9% uptime SLA.",
  },
  {
    icon: <Server className="h-8 w-8 text-accent" />,
    title: "Scalable Infrastructure",
    description: "Seamlessly upgrade your bandwidth capacity within hours, not days, as your business grows.",
  },
];

const FAQS = [
  {
    question: "What is the installation time for enterprise connections?",
    answer: "Standard installations typically take 3-5 business days. Expedited deployment is available depending on existing fiber proximity to your commercial building.",
  },
  {
    question: "Do you provide BGP routing and own ASN support?",
    answer: "Yes, our Enterprise Backbone plans fully support BGP configurations for clients possessing their own Autonomous System Numbers (ASN).",
  },
  {
    question: "How does the SLA credit system work?",
    answer: "If uptime falls below the guaranteed 99.9% within a billing cycle, automatic service credits are applied to your account according to our transparent SLA tier matrix.",
  },
  {
    question: "Can we get redundant physical paths?",
    answer: "Absolutely. We offer dual-path fiber entries to your premises originating from completely different POPs to eliminate single points of failure.",
  },
];

export default async function ForEnterprisePage() {
  const testimonials = await client.fetch(
    `*[_type == "testimonial" && "enterprise" in displayPage] {
      customerName,
      designation,
      reviewText,
      "imageUrl": image.asset->url
    }`
  );

  const query = `*[_type == "internetPackage" && category == "enterprise"] | order(order asc) {
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
            src="/images/officenew.png"
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

      {/* 2. Trusted Brands Marquee */}
      <section className="border-y border-border/40 bg-muted/50 py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted By Industry Leaders
        </div>
        <div className="relative flex w-full">
          <div className="flex w-fit animate-[marquee-right_30s_linear_infinite]">
            {/* Duplicated 3 times for seamless scrolling */}
            {[1, 2, 3].map((set) => (
              <div key={set} className="flex items-center gap-16 px-8">
                <span className="text-2xl font-bold text-muted-foreground/40 font-heading">TECHCORP</span>
                <span className="text-2xl font-bold text-muted-foreground/40 font-heading">FINANCEBD</span>
                <span className="text-2xl font-bold text-muted-foreground/40 font-heading">PORTLOGISTICS</span>
                <span className="text-2xl font-bold text-muted-foreground/40 font-heading">GLOBALNET</span>
                <span className="text-2xl font-bold text-muted-foreground/40 font-heading">APEX</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Enterprise Packages */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground">Dedicated Connectivity Plans</h2>
            <p className="mt-4 text-muted-foreground">Uncontended bandwidth with guaranteed performance metrics.</p>
          </div>
          <div className="mt-16">
            <PackageGrid packages={livePackages} />
          </div>
        </div>
      </section>

      {/* 4. CTA Card */}
      <section className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <Card className="border-none bg-gradient-to-r from-[#051d40] to-blue-900 text-white shadow-xl">
            <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
              <div className="text-center md:text-left space-y-2">
                <h3 className="font-heading text-2xl font-bold">Need a custom network architecture?</h3>
                <p className="text-white/80">Our enterprise engineers are ready to design a solution for your exact requirements.</p>
              </div>
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 shrink-0 gap-2">
                <PhoneCall className="h-4 w-4" />
                Call +880-31-2850085
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Why Choose COL */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground">The Enterprise Advantage</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Why Chittagong&apos;s leading organizations trust us with their critical data flow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/5 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ & 7. Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel title="Hear From Our Customers" testimonials={testimonials} />
          <FaqAccordion title="Frequently Asked Questions" faqs={FAQS} />
        </div>
      </section>
    </div>
  );
}
