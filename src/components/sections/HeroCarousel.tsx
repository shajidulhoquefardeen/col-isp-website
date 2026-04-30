"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    src: "/images/heromain.png",
    alt: "Chittagong Online Limited — Connecting Chittagong, Empowering Tomorrow",
  },
  {
    src: "/images/hero/herobg2.jpg",
    alt: "Two decades of trusted internet service across Chittagong",
  },
  {
    src: "/images/hero/herobg3.jpg",
    alt: "Best internet offers up to 300 Mbps in Chittagong and Cox's Bazar",
  },
] as const;

interface HeroCarouselProps {
  heroImages?: string[];
}

export function HeroCarousel({ heroImages }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Use dynamic images from Sanity if available, otherwise fallback to local defaults
  const slides = heroImages && heroImages.length > 0 
    ? heroImages.map(url => ({ src: url, alt: "COL Internet - Chittagong's Trusted ISP" }))
    : HERO_SLIDES;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    const id = requestAnimationFrame(() => onSelect());
    return () => {
      cancelAnimationFrame(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={slide.src} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              selectedIndex === i
                ? "w-8 bg-white"
                : "w-2.5 bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </section>
  );
}
