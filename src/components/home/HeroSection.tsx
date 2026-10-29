"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";
import MagneticButton from "@/components/motion/MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#F8FAFF_0%,#EAF2FF_55%,#DDEAFF_100%)] pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[#2855E8]/15">
      {/* Subtle radial blue atmospheric lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_75%_25%,rgba(57,121,255,0.18),transparent_60%)] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(220,164,58,0.12),transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Credibility Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#101F3D] text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-[#101F3D]/10 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#DCA43A] animate-ping" />
              <Award className="w-4 h-4 text-[#DCA43A]" />
              <span className="text-[#DCA43A] font-bold">Approved ACCA Silver Learning Partner</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-200 font-medium">Chandigarh</span>
            </div>

            {/* Cinematic Headline with Midnight Navy & Royal Blue Highlight */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#101F3D] tracking-tight leading-[1.12]">
              Your Ambition. <br />
              Our Expertise. <br />
              <span className="font-editorial text-[#2855E8] bg-gradient-to-r from-[#2855E8] via-[#3979FF] to-[#1D3766] bg-clip-text text-transparent">
                Your Global Future.
              </span>
            </h1>

            {/* Editorial Description */}
            <p className="text-base sm:text-lg text-[#66758C] leading-relaxed max-w-2xl font-normal">
              Build your future in professional accounting, corporate finance, and global business with premier{" "}
              <strong className="text-[#101F3D] font-bold">ACCA, CA, US CMA</strong>, and{" "}
              <strong className="text-[#101F3D] font-bold">US CPA</strong> training at SKD Group of Institutions in Chandigarh.
            </p>

            {/* Institutional Advantage Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#14243D] font-medium pt-1">
              <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/90 border border-[#2855E8]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2855E8] shrink-0" />
                <span>Approved CBE Exam Practice Platform</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/90 border border-[#2855E8]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2855E8] shrink-0" />
                <span>Classroom at Godrej Eternia & Live Online</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/90 border border-[#2855E8]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2855E8] shrink-0" />
                <span>Mentorship by Qualified CAs, ACCAs & CMAs</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-white/90 border border-[#2855E8]/15 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2855E8] shrink-0" />
                <span>Dedicated Big 4 & Corporate Placement Cell</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-3">
              <MagneticButton>
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:from-[#101F3D] hover:to-[#2855E8] text-white font-bold rounded-2xl shadow-xl shadow-[#2855E8]/30 transition-all text-base group"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/admissions"
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white/90 hover:bg-white text-[#101F3D] font-bold rounded-2xl border border-[#2855E8]/30 hover:border-[#2855E8] hover:text-[#2855E8] transition-all text-base shadow-sm hover:shadow-md backdrop-blur-md"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-[#DCA43A]" />
                  <span>Book Free Counselling</span>
                </Link>
              </MagneticButton>
            </div>

            {/* Immediate Enquiry Call Bar */}
            <div className="pt-2 flex items-center space-x-3 text-xs sm:text-sm text-[#66758C]">
              <span>Have immediate questions?</span>
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="font-bold text-[#101F3D] hover:text-[#2855E8] flex items-center underline transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-[#2855E8]" />
                Call {siteConfig.contact.primaryPhone}
              </a>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Radial blue glow behind hero visual */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#3979FF]/20 to-[#79B8FF]/20 rounded-3xl blur-2xl -z-10" />

              {/* Main Visual Image Card with subtle border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#101F3D] group">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/assets/images/acca-coaching-chandigarh-.png"
                    alt="SKD Group of Institutions Classroom Learning"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/85 via-transparent to-black/20" />
                </div>

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#DCA43A] text-[#101F3D] text-[11px] font-bold tracking-wide uppercase">
                    Chandigarh Executive Campus
                  </div>
                  <h3 className="text-lg font-bold">Godrej Eternia, Phase 1</h3>
                  <p className="text-xs text-slate-200">
                    State-of-the-art computer exam lab and lecture amphitheater.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Pass Rate (Top Right) */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl shadow-[#2855E8]/10 border border-[#2855E8]/20 flex items-center space-x-3.5 animate-in fade-in zoom-in-75 duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2855E8] flex items-center justify-center shrink-0 border border-[#2855E8]/20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#101F3D]">85%+</div>
                  <div className="text-[11px] font-medium text-[#66758C]">
                    Consistent Batch Pass Rate
                  </div>
                </div>
              </div>

              {/* Floating Accreditation Card 2: Silver Partner (Bottom Left) */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-[#101F3D] text-white p-4 rounded-2xl shadow-2xl border border-[#DCA43A]/30 flex items-center space-x-3.5 max-w-[280px]">
                <div className="w-11 h-11 rounded-xl bg-[#DCA43A]/15 border border-[#DCA43A]/40 text-[#DCA43A] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#DCA43A] tracking-wide uppercase">
                    Official Accreditation
                  </div>
                  <div className="text-xs font-semibold text-white">
                    ACCA Silver Learning Partner
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Audited academic standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-20 flex justify-center items-center">
          <a
            href="#credibility-section"
            className="flex flex-col items-center text-xs font-semibold text-[#66758C] hover:text-[#2855E8] transition-colors group"
          >
            <span className="tracking-widest uppercase text-[10px] mb-1">
              Scroll To Explore
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#2855E8]" />
          </a>
        </div>
      </div>
    </section>
  );
}
