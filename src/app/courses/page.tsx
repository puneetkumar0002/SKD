import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { coursesData } from "@/data/courses";
import Breadcrumb from "@/components/Breadcrumb";
import { BookOpen, Clock, Compass, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Professional Accounting & Finance Courses in Chandigarh | SKD Group",
  description:
    "Explore professional finance qualifications at SKD Group of Institutions: ACCA, CA Foundation, CA Intermediate, CA Final, US CMA, and US CPA with expert faculty and CBE testing.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Professional Courses" }]} />

      <div className="space-y-16 pb-20">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-12 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-3 border border-[#2855E8]/20">
              <Award className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>International & National Qualifications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Professional Finance & Accounting Courses
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Accelerate your accounting career with premier qualifications recognized by top multinational enterprises, Big 4 firms, and statutory regulatory bodies.
            </p>
          </div>
        </section>

        {/* All Courses Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
              <div
                key={course.slug}
                className="bg-white rounded-2xl border border-[#E2E8F5] overflow-hidden shadow-card-blue hover:border-[#2855E8]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-100">
                    <Image
                      src={course.cardImage}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#101F3D]/95 backdrop-blur-md text-white text-[11px] font-bold rounded-lg border border-white/20 shadow-sm">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h2 className="text-lg font-bold text-[#101F3D] leading-snug">
                      {course.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#66758C] line-clamp-3 leading-relaxed">
                      {course.overview}
                    </p>

                    <div className="pt-2 border-t border-[#E2E8F5] space-y-1.5 text-xs text-[#14243D]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" /> Duration:
                        </span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#66758C] flex items-center">
                          <Compass className="w-3.5 h-3.5 mr-1.5 text-[#DCA43A]" /> Mode:
                        </span>
                        <span className="font-semibold">{course.modes.split("&")[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${course.slug}`}
                    className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md transition-all group"
                  >
                    <span>View Complete Syllabus & Exam Pattern</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admissions Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Courses Directory Page" />
        </section>
      </div>
    </>
  );
}
