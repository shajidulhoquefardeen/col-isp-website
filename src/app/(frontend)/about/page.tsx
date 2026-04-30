import type { Metadata } from "next";
import { 
  Users, 
  Target, 
  Eye, 
  History, 
  Home, 
  Briefcase, 
  CheckCircle2, 
  UserCheck, 
  Handshake, 
  ShieldCheck, 
  Award, 
  TrendingUp,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us — Chittagong Online Limited",
  description:
    "Learn about Chittagong Online Limited, the first and most trusted ISP in Chittagong, Bangladesh since 2002.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      {/* 1. Page Hero */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            About Chittagong Online Limited
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Providing reliable connectivity and technological excellence in Chittagong for over two decades.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-accent">
              <History className="h-6 w-6" />
              <h2 className="font-heading text-3xl font-bold text-primary">Who We Are</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                <span className="font-semibold text-primary">Chittagong Online Limited (COL)</span> - a registered trade name - is a Licensed ISP & IPTSP by Bangladesh Telecommunication Regulatory Commission providing Internet, Internet Telephony and many other IT related services and solutions.
              </p>
              <p>
                COL was formed in <span className="font-semibold text-primary">February 2002</span> and has since shown the fastest growth and attained a high level of customer confidence to become the preferred and the leading ISP in Chittagong. This milestone has been achieved through a focused and dedicated approach to provide an efficient and unmatched level of customer support.
              </p>
              <p>
                COL has deployed a high quality Network infrastructure backbone that consists of a City Wide optical fiber and Wide Area Network (WAN). This Network has constantly been improved and extended over the years to comply with our objective of extending our outreach.
              </p>
            </div>
          </div>
          <div className="hidden flex-1 md:block">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <Globe className="h-32 w-32 animate-pulse text-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Stats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { label: "Houses Served", value: "10,000+", icon: Home },
              { label: "Fiverr Gigs", value: "5,000+", icon: Globe },
              { label: "Businesses Served", value: "5,000+", icon: Briefcase },
            ].map((stat, i) => (stat.icon && (
              <Card key={i} className="border-none bg-card text-center shadow-lg transition-transform hover:-translate-y-2">
                <CardHeader className="pb-2">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <stat.icon className="h-6 w-6" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            )))}
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="relative overflow-hidden border-none bg-primary text-primary-foreground shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Eye className="h-24 w-24" />
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-3xl font-bold">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl leading-relaxed text-primary-foreground/90">
                Helping people communicate easily with technological excellence.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden border-none bg-accent text-accent-foreground shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="h-24 w-24" />
            </div>
            <CardHeader>
              <CardTitle className="font-heading text-3xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl leading-relaxed text-accent-foreground/90">
                Committed to provide quality ICT services by implementing next generation technologies with the strongest network coverage & innovative team for ultimate customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary">Our Core Values</h2>
          <p className="mt-4 text-muted-foreground">The principles that guide our everyday interactions and decisions.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Customer Focus",
              desc: "Our mission is Customer 1st. We treat the client as our assets. Provide the best service without any compromise. We make things simple.",
              icon: UserCheck
            },
            {
              title: "Commitment",
              desc: "We say what we do and we do what we say. We act in the interest of our client and the company.",
              icon: Handshake
            },
            {
              title: "Respect Guides Our Behavior",
              desc: "We respect and value the diversity of opinions and other people's individuality.",
              icon: Users
            },
            {
              title: "Integrity",
              desc: "We act ethically and fair in our daily job and in all our decisions. We do not tolerate unethical and irresponsible behavior.",
              icon: ShieldCheck
            },
            {
              title: "Teamwork",
              desc: "We share our opinion openly and make our views known. We address issues not individuals. We fully stand behind the team decision.",
              icon: Award
            },
            {
              title: "Win-Win",
              desc: "We approach our customers, suppliers, colleagues and business partners with the intent of creating value for all of us.",
              icon: TrendingUp
            }
          ].map((value, i) => (
            <Card key={i} className="border-border/50 shadow-sm transition-all hover:border-accent/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <value.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 font-heading text-lg font-bold text-primary">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Why COL */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary">Why COL?</h2>
            <p className="mt-2 text-muted-foreground">What sets us apart as your preferred connectivity partner.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              "Always driven by Customer focus and excellent Customer service.",
              "Always there to support you through our dedicated, responsive and efficient team.",
              "Robust fiber optical and wireless Network to provide you with reliable and 24 hour service.",
              "Optical fiber broadband connection to the International global networks with lowest latency providing the highest and fastest bandwidth speeds.",
              "Very fast transmission of your data enabled by the most modern technology.",
              "Customized Corporate solutions specifically designed to meet all your IT requirements."
            ].map((point, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <p className="text-lg leading-relaxed text-foreground/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
