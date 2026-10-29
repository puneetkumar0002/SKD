"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Video,
  Laptop,
  MessageSquare,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

export default function LearningExperienceSection() {
  const features = [
    {
      icon: Laptop,
      title: "Interactive CBE Simulation",
      desc: "Replicate official ACCA CBE & Prometric screens with built-in financial formulas, exhibit splitters, and word processor responses.",
    },
    {
      icon: Video,
      title: "HD Live Online + 24/7 Archives",
      desc: "Attend interactive face-to-face classes at Godrej Eternia or join live from home with instant voice questions and complete lecture backups.",
    },
    {
      icon: FileSpreadsheet,
      title: "Real-World Financial Models",
      desc: "Go beyond textbook theory with real audited balance sheets, Ind AS/IFRS disclosures, Excel financial forecasting, and taxation filings.",
    },
    {
      icon: MessageSquare,
      title: "1-on-1 Academic Diagnosis",
      desc: "Regular chapter milestone tests followed by individualized feedback to systematically plug knowledge gaps before exam session deadlines.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFF] relative overflow-hidden border-b border-slate-200/80">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3979FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DCA43A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photographic Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#101F3D] group">
              <div className="relative h-[420px] sm:h-[500px] w-full">
                <Image
                  src="/assets/images/group-1.jpg"
                  alt="SKD Group Classroom & Students Cohort"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/90 via-transparent to-transparent" />
              </div>

              {/* Floating Overlaid Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#2855E8] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5 text-[#DCA43A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#101F3D]">Concept-First Pedagogy</h4>
                    <p className="text-xs text-[#66758C]">
                      Zero rote memorization. Master the logic behind global IFRS and US GAAP standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Narrative (Deep Navy Typography) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>The SKD Learning Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101F3D] leading-tight">
              An Immersive Environment <br />
              <span className="font-editorial text-[#2855E8]">Engineered for First-Attempt Success</span>
            </h2>

            <p className="text-sm sm:text-base text-[#66758C] leading-relaxed">
              We design every cohort around computer-simulated exam drills, intimate batch sizes, and practical case studies. Whether you are aiming for ACCA, CA, US CMA, or US CPA, you learn the exact mechanics that international evaluators look for.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-[#2855E8]/15 shadow-sm hover:border-[#2855E8]/40 hover:shadow-lg transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#2855E8]/20 text-[#2855E8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-[#2855E8]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#101F3D] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#66758C] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#101F3D] transition-colors group"
              >
                <span>Read more about our institutional philosophy</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
