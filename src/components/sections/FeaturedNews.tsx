import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";

export interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
  slug: string;
}

function NewsCard({ title, excerpt, imageUrl, publishedAt, category, slug }: NewsCardProps) {
  // Format the date if it's a valid string
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="group overflow-hidden border-border/60 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image */}
      <Link href={`/news/${slug}`} className="block relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground hover:bg-primary">
          {category}
        </Badge>
      </Link>

      {/* Content */}
      <CardContent className="space-y-3 p-5">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <time>{formattedDate}</time>
        </div>

        {/* Title */}
        <Link href={`/news/${slug}`}>
          <h3 className="font-heading text-lg font-bold leading-snug text-foreground line-clamp-2 hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        {/* Read more */}
        <Link 
          href={`/news/${slug}`}
          className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent/80"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

interface FeaturedNewsProps {
  news: NewsCardProps[];
}

export function FeaturedNews({ news = [] }: FeaturedNewsProps) {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-accent/30 text-accent"
          >
            Latest Updates
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest News
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Stay updated with company announcements, infrastructure updates, and
            community initiatives from Chittagong Online Limited.
          </p>
        </div>

        {/* News cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.slug} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
