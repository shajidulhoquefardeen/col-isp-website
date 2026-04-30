import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { InfiniteScrollTicker } from "@/components/sections/InfiniteScrollTicker";
import { PackagesOverview } from "@/components/sections/PackagesOverview";
import { FeaturedNews } from "@/components/sections/FeaturedNews";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { QuickContactGrid } from "@/components/sections/QuickContactGrid";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

const GENERAL_FAQS = [
  {
    question: "Where do you provide coverage?",
    answer: "We provide comprehensive high-speed internet coverage across the entire Metropolitan area of Chittagong and major parts of Cox's Bazar.",
  },
  {
    question: "How quickly can I get connected?",
    answer: "Once you place an order, our team typically completes the installation and activation within 24 to 48 hours.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer: "Yes, we have a dedicated 24/7 technical support team available via phone, email, and WhatsApp to assist you with any connectivity issues.",
  },
];

export default async function HomePage() {
  const pageData = await client.fetch(
    `*[_type == "landingPage"][0] { 
      "heroImages": heroImages[].asset->url 
    }`
  );

  const testimonials = await client.fetch(
    `*[_type == "testimonial" && "landing" in displayPage] {
      customerName,
      designation,
      reviewText,
      "imageUrl": image.asset->url
    }`
  );

  const liveNews = await client.fetch(
    `*[_type == "newsArticle"] | order(publishedAt desc)[0...3] {
      title,
      excerpt,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      "slug": slug.current,
      category
    }`
  );

  return (
    <>
      <HeroCarousel heroImages={pageData?.heroImages} />
      <InfiniteScrollTicker />
      <PackagesOverview />
      <FeaturedNews news={liveNews} />
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel title="Why Chittagong Trusts COL" testimonials={testimonials} />
          <FaqAccordion title="Common Questions" faqs={GENERAL_FAQS} />
          <div className="mt-16">
            <QuickContactGrid />
          </div>
        </div>
      </section>
    </>
  );
}
