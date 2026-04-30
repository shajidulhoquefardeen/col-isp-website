import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Building2, Check } from "lucide-react";

export function PackagesOverview() {
  return (
    <section className="py-20 bg-white dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-accent/30 text-accent"
          >
            Internet Packages
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#051d40] dark:text-white sm:text-4xl">
            Our Packages
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Reliable internet solutions tailored for homes and enterprises. Choose
            the plan that fits your needs with Chittagong&apos;s most trusted ISP.
          </p>
        </div>

        <div className="space-y-24">
          {/* Row 1: Home Broadband (Text Left, Image Right) */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-[45%] flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#051d40]/10 dark:bg-primary/20 text-[#051d40] dark:text-blue-400">
                  <Home className="h-5 w-5" />
                </div>
                <span className="font-semibold uppercase tracking-wider text-[#051d40] dark:text-blue-300">
                  Residential
                </span>
              </div>
              
              <h3 className="font-heading text-4xl font-bold text-[#051d40] dark:text-white">
                Home Broadband
              </h3>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Ultra-fast fiber optic internet for your home. Stream, game, and connect with the whole family on a network built for reliability.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Speeds up to 300 Mbps",
                  "Unlimited data usage",
                  "Free Wi-Fi router included",
                  "24/7 customer support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D71920]/10 text-[#D71920]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Link 
                  href="/for-family"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-[#D71920] transition-colors duration-200 hover:text-[#D71920]/80 group"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-[55%]">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/packages/hom.png"
                  alt="Home Broadband"
                  fill
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-blue-900/10"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Enterprise Solutions (Image Left, Text Right) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-[45%] flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#051d40]/10 dark:bg-primary/20 text-[#051d40] dark:text-blue-400">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="font-semibold uppercase tracking-wider text-[#051d40] dark:text-blue-300">
                  Business
                </span>
              </div>
              
              <h3 className="font-heading text-4xl font-bold text-[#051d40] dark:text-white">
                Enterprise Solutions
              </h3>
              
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Dedicated bandwidth with SLA guarantees for businesses that demand uninterrupted connectivity. Powered by our metro fiber backbone.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Dedicated bandwidth up to 1 Gbps",
                  "99.9% uptime SLA guarantee",
                  "Static IP addresses",
                  "Priority technical support",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D71920]/10 text-[#D71920]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Link 
                  href="/for-enterprise"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-[#D71920] transition-colors duration-200 hover:text-[#D71920]/80 group"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-[55%]">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/packages/enterprise-solutions.png"
                  alt="Enterprise Solutions"
                  fill
                  className="w-full h-full object-cover rounded-2xl shadow-2xl shadow-blue-900/10"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

