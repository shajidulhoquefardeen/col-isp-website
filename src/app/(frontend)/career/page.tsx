import type { Metadata } from "next";
import Link from "next/link";
import { 
  HeartPulse, 
  BookOpen, 
  MonitorSmartphone, 
  Users, 
  MapPin, 
  ArrowDown,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Careers — Chittagong Online Limited",
  description:
    "Join Chittagong's leading ISP. We're looking for passionate problem-solvers to shape the digital landscape of Bangladesh.",
};

const PERKS = [
  {
    title: "Health & Wellbeing",
    description: "Comprehensive medical coverage for you and your family.",
    icon: HeartPulse,
  },
  {
    title: "Growth & Learning",
    description: "Continuous learning budgets and certification sponsorships.",
    icon: BookOpen,
  },
  {
    title: "Top-Tier Equipment",
    description: "Tech gear (MacBooks, dual monitors) to do your best work.",
    icon: MonitorSmartphone,
  },
  {
    title: "Vibrant Culture",
    description: "Inclusive, collaborative environment with regular team-building events.",
    icon: Users,
  },
];

export default async function CareerPage() {
  const query = `*[_type == "careerJob"] | order(_createdAt desc) {
    _id,
    title,
    department,
    location,
    employmentType,
    "slug": slug.current
  }`;
  
  const liveJobs = await client.fetch(query);

  return (
    <main className="flex flex-col gap-20 pb-20">
      {/* 1. Hero Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90 border-none px-4 py-1 text-sm">
            We are hiring
          </Badge>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build the Future of <span className="text-accent">Connectivity</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">
            Join Chittagong's leading ISP. We're looking for passionate problem-solvers to help us connect homes, empower businesses, and shape the digital landscape of Bangladesh.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 shadow-lg shadow-accent/20">
              <Link href="#openings" className="flex flex-row items-center justify-center gap-2">
                View Openings <ArrowDown className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Perks & Benefits */}
      <section className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary dark:text-white md:text-4xl">Why Join Us?</h2>
          <p className="mt-4 text-muted-foreground dark:text-slate-400 md:text-lg">We invest in our people so they can do their best work.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk, i) => (
            <Card key={i} className="border-border/50 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400">
                  <perk.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-heading text-xl font-bold text-primary dark:text-white">
                  {perk.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground dark:text-slate-300">{perk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Open Positions */}
      <section id="openings" className="container mx-auto max-w-5xl px-4 scroll-mt-24">
        <div className="mb-10 flex items-center justify-between border-b border-border dark:border-slate-800 pb-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary dark:text-white md:text-4xl">Current Openings</h2>
            <p className="mt-2 text-muted-foreground dark:text-slate-400">Find the role that fits your passion and skills.</p>
          </div>
          <Badge variant="outline" className="hidden sm:inline-flex border-primary dark:border-slate-600 text-primary dark:text-slate-300 px-3 py-1">
            {liveJobs.length} Positions
          </Badge>
        </div>
        
        <div className="flex flex-col gap-4">
          {liveJobs.length > 0 ? (
            liveJobs.map((job: any) => (
              <Card key={job._id} className="group overflow-hidden border-border/60 dark:border-slate-700 bg-white dark:bg-slate-800 transition-all hover:border-primary/30 hover:shadow-lg sm:flex sm:items-center sm:justify-between">
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className="bg-primary/5 dark:bg-slate-700 text-primary dark:text-blue-300 hover:bg-primary/10 font-semibold rounded-md">
                      {job.department}
                    </Badge>
                    <Badge variant="outline" className="text-muted-foreground dark:text-slate-400 rounded-md border-border dark:border-slate-600">
                      {job.employmentType || "Full-Time"}
                    </Badge>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5">
                      <Briefcase className="h-4 w-4" />
                      {job.employmentType || "Full-Time"}
                    </span>
                  </div>
                </div>
                <div className="bg-slate-50/50 dark:bg-slate-900/50 p-6 sm:bg-transparent sm:p-8 sm:pl-0 flex justify-end items-center border-t border-border/50 dark:border-slate-700 sm:border-t-0">
                  <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 shadow-sm">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-xl border-2 border-dashed border-border/50 dark:border-slate-800">
              <p className="text-muted-foreground dark:text-slate-400 text-lg">No open positions at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Cannot find your role? */}
      <section className="container mx-auto px-4">
        <Card className="border-accent/20 bg-accent/5 text-center shadow-none">
          <CardContent className="py-12">
            <h3 className="font-heading text-2xl font-bold text-primary">Don't see a perfect fit?</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              We're always looking for talented individuals. Send your resume to{" "}
              <a href="mailto:careers@col.net.bd" className="font-medium text-accent hover:underline underline-offset-4">
                careers@col.net.bd
              </a>{" "}
              and we'll keep you in mind for future roles.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
