"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { generateQuotePDF } from "@/lib/generateQuotePDF";

export interface PackageType {
  name: string;
  category: "Home" | "Enterprise" | string;
  speed: string;
  price: string | number;
  features: string[];
  isPopular?: boolean;
  displayOrder?: number;
}

interface PackageGridProps {
  packages: PackageType[];
}

/**
 * Sort packages by displayOrder ascending, then move the
 * "Most Popular" card to index 1 (center of the first 3-col row).
 */
function sortPackages(packages: PackageType[]): PackageType[] {
  // Rule A: sort by displayOrder (missing → 999)
  const sorted = [...packages].sort(
    (a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999)
  );

  // Rule B: pull the popular card out and insert at index 1
  const popularIndex = sorted.findIndex((p) => p.isPopular);
  if (popularIndex !== -1 && sorted.length >= 2) {
    const [popular] = sorted.splice(popularIndex, 1);
    sorted.splice(1, 0, popular);
  }

  return sorted;
}

export function PackageGrid({ packages }: PackageGridProps) {
  const [showAll, setShowAll] = useState(false);
  const sortedPackages = sortPackages(packages);
  const displayedPackages = showAll ? sortedPackages : sortedPackages.slice(0, 3);

  const handleGetQuote = async (pkg: PackageType) => {
    // In the future, sanitySettings will be fetched from the quoteSettings schema
    const dummySanitySettings = {
      companyName: "Chittagong Online Limited (COL)",
      companyAddress: "House-24, Road-1, Lane-2, Block-L, Halishahar H/E, Chattogram",
      supportEmail: "info@colbd.com",
      termsAndConditions: "This quote is valid for 30 days. Installation charges may apply based on location.",
    };

    await generateQuotePDF({
      name: pkg.name,
      speed: pkg.speed,
      price: pkg.price,
      features: pkg.features,
    }, dummySanitySettings);
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 space-y-8">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {displayedPackages.map((pkg, index) => {
          const isHome = pkg.category.toLowerCase() === "home";
          const isEnterprise = pkg.category.toLowerCase() === "enterprise";

          return (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-800 text-[#051d40] dark:text-white rounded-2xl ${
                pkg.isPopular
                  ? "md:scale-105 z-10 relative shadow-2xl border-2 border-[#D71920]"
                  : "z-0 shadow-lg border border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-xl shadow-blue-900/5"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 left-0 flex justify-center">
                  <Badge className="rounded-b-lg rounded-t-none bg-[#D71920] text-white hover:bg-[#D71920]">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className={`p-8 ${pkg.isPopular ? "pt-12" : ""}`}>
                <div className="mb-4">
                  <Badge variant="outline" className="mb-2 text-muted-foreground capitalize dark:border-slate-700 dark:text-slate-400">
                    {pkg.category}
                  </Badge>
                  <h3 className="font-heading text-2xl font-bold text-[#051d40] dark:text-white">
                    {pkg.name}
                  </h3>
                  {isHome && (
                    <div className="mt-2 flex items-baseline text-3xl font-bold text-[#051d40] dark:text-white">
                      BDT {pkg.price}
                      <span className="ml-1 text-sm font-normal text-slate-500 dark:text-slate-400">
                        /month
                      </span>
                    </div>
                  )}
                  <div className={`${isHome ? "mt-1" : "mt-4"} font-semibold text-[#051d40] dark:text-slate-200`}>
                    {pkg.speed}
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700 dark:text-slate-300">
                      <div className="mr-3 h-1.5 w-1.5 rounded-full bg-[#D71920]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {isHome ? (
                    <a
                      href={`https://wa.me/8801647465507?text=Hello,%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                        pkg.name
                      )}%20package%20at%20${pkg.price}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center text-sm font-semibold bg-[#051d40] text-white rounded-xl py-3 px-6 hover:bg-[#051d40]/90 transition"
                    >
                      Order via WhatsApp
                    </a>
                  ) : (
                    <button
                      onClick={() => handleGetQuote(pkg)}
                      className="block w-full text-center text-sm font-semibold bg-[#051d40] text-white rounded-xl py-3 px-6 hover:bg-[#051d40]/90 transition"
                    >
                      Get Quote
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {packages.length > 3 && (
        <div className="flex justify-center pt-4">
            <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-[#D71920] px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[#D71920]/90"
          >
            {showAll ? "Show Less" : "View All Packages"}
          </button>
        </div>
      )}
    </div>
  );
}
