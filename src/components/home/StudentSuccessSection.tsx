"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Quote,
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Building,
} from "lucide-react";
import { testimonialsData, Testimonial } from "@/data/testimonials";

export default function StudentSuccessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial: Testimonial = testimonialsData[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
              <span>Real Student Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              From Aspirations To <br />
              <span className="font-editorial text-[#2855E8]">Verified Career Milestones</span>
            </h2>
            <p className="text-sm sm:text-base text-[#66758C]">
              Read how students and working professionals achieved first-attempt success and placed into leading advisory firms with SKD guidance.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous story"
              className="w-12 h-12 rounded-full border border-[#2855E8]/25 bg-white hover:bg-[#EFF6FF] text-[#14243D] flex items-center justify-center transition-all shadow-sm hover:border-[#2855E8] hover:text-[#2855E8]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next story"
              className="w-12 h-12 rounded-full border border-[#2855E8]/25 bg-[#101F3D] hover:bg-[#2855E8] text-white flex items-center justify-center transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Large Alumni Story Card */}
        <div className="bg-[#101F3D] rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white p-6 sm:p-12 relative">
          <Quote className="absolute top-8 right-8 w-28 h-28 text-[#DCA43A]/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Student Portrait with Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 w-full bg-[#132445] shadow-xl border-2 border-white/10">
                <Image
                  src={activeTestimonial.image || "/assets/images/Teach-Img-2.jpg"}
                  alt={activeTestimonial.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D] via-transparent to-transparent" />

                {/* Overlaid Placed At Pill */}
                {activeTestimonial.placedAt && (
                  <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/20">
                    <span className="text-[10px] font-bold text-[#DCA43A] uppercase tracking-wider block">
                      Placed At
                    </span>
                    <span className="text-sm font-bold text-white flex items-center">
                      <Building className="w-3.5 h-3.5 mr-1.5 text-[#DCA43A]" />
                      {activeTestimonial.placedAt}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Testimonial Narrative with Champagne Accents */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex text-[#DCA43A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#DCA43A]/20 text-[#DCA43A] border border-[#DCA43A]/30 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Verified Student Alumni
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed font-editorial italic">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Student Metadata */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{activeTestimonial.name}</h3>
                  <p className="text-xs text-slate-300">
                    {activeTestimonial.course} • {activeTestimonial.city}
                  </p>
                </div>

                <div className="bg-[#132445] px-4 py-2 rounded-xl border border-white/10">
                  <span className="text-[10px] uppercase font-bold text-[#DCA43A] block">
                    Achievement
                  </span>
                  <span className="text-xs font-bold text-white">
                    {activeTestimonial.achievement}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8 pt-4 border-t border-white/10">
            {testimonialsData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === dotIdx ? "w-8 bg-[#DCA43A]" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Testimonials CTA */}
        <div className="mt-8 text-center">
          <Link
            href="/student-testimonials"
            className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#101F3D] transition-colors"
          >
            <span>Read all student success stories & video reviews</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
