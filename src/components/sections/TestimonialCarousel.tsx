"use client";

import Image from "next/image";
import { MessageSquareQuote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Testimonial {
  customerName: string;
  designation: string;
  reviewText: string;
  imageUrl?: string;
}

interface TestimonialCarouselProps {
  title: string;
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ title, testimonials }: TestimonialCarouselProps) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="mb-24 max-w-4xl w-full mx-auto px-4 lg:px-8">
      <h2 className="font-heading text-3xl font-bold text-[#051d40] dark:text-white mb-12 text-center">{title}</h2>
      <Carousel 
        className="w-full"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i}>
              <div className="flex flex-col md:flex-row md:items-center bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-blue-900/10 overflow-hidden border border-slate-100 dark:border-slate-700 border-t-4 border-t-[#D71920] mx-1">
                {/* Left Column (Customer Photo) */}
                {testimonial.imageUrl && (
                  <div className="w-full md:w-[30%] relative min-h-[300px] aspect-square">
                    <Image 
                      src={testimonial.imageUrl} 
                      alt={testimonial.customerName} 
                      fill
                      className="object-cover" 
                    />
                  </div>
                )}
                {/* Right Column (Content) */}
                <div className={`w-full ${testimonial.imageUrl ? "md:w-[70%]" : ""} p-5 md:p-8 flex flex-col justify-center`}>
                  <MessageSquareQuote className="text-[#D71920] w-8 h-8 mb-3" />
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 italic mb-4 leading-normal line-clamp-4">
                    &ldquo;{testimonial.reviewText}&rdquo;
                  </p>
                  <div>
                    <div className="text-lg font-bold text-[#051d40] dark:text-white leading-tight">{testimonial.customerName}</div>
                    <div className="text-xs font-semibold uppercase text-[#D71920] mt-0.5">{testimonial.designation}</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#051d40] dark:text-white hover:bg-[#D71920] hover:text-white hover:border-[#D71920] translate-y-0 h-12 w-12 transition-all shadow-md" />
          <CarouselNext className="static bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#051d40] dark:text-white hover:bg-[#D71920] hover:text-white hover:border-[#D71920] translate-y-0 h-12 w-12 transition-all shadow-md" />
        </div>
      </Carousel>
    </div>
  );
}
