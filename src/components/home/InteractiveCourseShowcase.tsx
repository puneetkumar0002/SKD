"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Award,
  BookOpen,
  Sparkles,
  ChevronRight,
  Building,
} from "lucide-react";
import { coursesData, CourseDetail } from "@/data/courses";

export default function InteractiveCourseShowcase() {
  const [selectedCourse, setSelectedCourse] = useState<CourseDetail>(coursesData[0]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Flagship", "Chartered Accountancy", "Global Certification", "Corporate"];

  const filteredCourses = activeCategory === "All"
    ? coursesData
    : coursesData.filter((c) => c.category === activeCategory);

  return (
    <section id="courses-section" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Industry-Aligned Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Our Professional Programs
            </h2>
            <p className="text-sm sm:text-base text-[#66758C]">
              From global credentials (ACCA, US CMA, US CPA) to Indian Chartered Accountancy (CA), explore courses designed for serious finance leadership.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/courses"
              className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#1D3766] transition-colors group"
            >
              <span>View All 7 Programs & Full Syllabus</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                const nextCourse = cat === "All"
                  ? coursesData[0]
                  : coursesData.find((c) => c.category === cat) || coursesData[0];
                setSelectedCourse(nextCourse);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-[#2855E8] text-white shadow-md shadow-[#2855E8]/30 scale-[1.02]"
                  : "bg-[#EFF6FF] text-[#14243D] border border-[#2855E8]/15 hover:bg-[#DDEAFF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Course Selector List */}
          <div className="lg:col-span-5 space-y-2.5">
            {filteredCourses.map((course) => {
              const isSelected = selectedCourse.slug === course.slug;
              return (
                <button
                  key={course.slug}
                  type="button"
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group ${
                    isSelected
                      ? "bg-[#101F3D] text-white border-[#101F3D] shadow-xl shadow-[#101F3D]/15 scale-[1.01]"
                      : "bg-[#F8FAFF] hover:bg-[#EFF6FF] text-[#14243D] border-slate-200/80 hover:border-[#2855E8]/35 hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#DCA43A] text-[#101F3D]"
                          : "bg-[#EFF6FF] text-[#2855E8] border border-[#2855E8]/20"
                      }`}
                    >
                      {course.badge}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? "text-[#DCA43A] translate-x-1" : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#2855E8]"
                      }`}
                    />
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold leading-snug ${isSelected ? "text-white" : "text-[#101F3D]"}`}>
                    {course.title}
                  </h3>

                  <div className={`flex items-center space-x-3 text-xs mt-2 ${isSelected ? "text-slate-300" : "text-[#66758C]"}`}>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#3979FF]" />
                      {course.duration.split("(")[0].trim()}
                    </span>
                    <span>•</span>
                    <span className="truncate max-w-[200px]">{course.awardingBody.split("(")[0].trim()}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Course Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFF] rounded-3xl border border-[#2855E8]/20 overflow-hidden shadow-xl shadow-[#2855E8]/5 p-6 sm:p-8 space-y-6">
              {/* Image & Header Banner */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md bg-[#101F3D]">
                <Image
                  src={selectedCourse.cardImage || selectedCourse.heroImage}
                  alt={selectedCourse.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/95 via-[#101F3D]/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#DCA43A] text-[#101F3D] text-xs font-black uppercase tracking-wider shadow">
                    {selectedCourse.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-slate-300 flex items-center mb-1">
                    <Award className="w-3.5 h-3.5 mr-1 text-[#DCA43A]" />
                    Awarded by: {selectedCourse.awardingBody}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black">{selectedCourse.title}</h3>
                </div>
              </div>

              {/* Course Overview & Tagline */}
              <div>
                <p className="text-xs font-bold text-[#2855E8] uppercase tracking-wider mb-1">
                  {selectedCourse.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#66758C] leading-relaxed line-clamp-3">
                  {selectedCourse.overview}
                </p>
              </div>

              {/* Course Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3 border-y border-slate-200">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-[#66758C]">Duration & Timeline</span>
                  <div className="text-xs sm:text-sm font-bold text-[#14243D] flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" />
                    {selectedCourse.duration}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-[#66758C]">Delivery Modes</span>
                  <div className="text-xs sm:text-sm font-bold text-[#14243D] flex items-center">
                    <Building className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" />
                    {selectedCourse.modes}
                  </div>
                </div>
              </div>

              {/* Curriculum Framework */}
              <div>
                <span className="text-xs font-bold uppercase text-[#14243D] tracking-wider block mb-2">
                  Key Curriculum Framework
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.curriculum.slice(0, 3).map((mod, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-xl bg-white border border-[#2855E8]/20 text-xs font-semibold text-[#14243D] shadow-sm"
                    >
                      {mod.level}
                    </span>
                  ))}
                  {selectedCourse.curriculum.length > 3 && (
                    <span className="px-3 py-1.5 rounded-xl bg-[#EFF6FF] text-[#2855E8] border border-[#2855E8]/25 text-xs font-bold">
                      +{selectedCourse.curriculum.length - 3} More Modules
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  href={`/${selectedCourse.slug}`}
                  className="inline-flex justify-center items-center px-7 py-3.5 bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:from-[#101F3D] hover:to-[#2855E8] text-white font-bold rounded-xl shadow-lg shadow-[#2855E8]/25 text-sm transition-all group"
                >
                  <span>Explore Course & Syllabus</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex justify-center items-center px-6 py-3.5 bg-white hover:bg-[#EFF6FF] text-[#101F3D] font-bold rounded-xl border border-[#2855E8]/30 hover:border-[#2855E8] text-sm transition-all shadow-sm"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-[#DCA43A]" />
                  <span>Request Fee & Schedule</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
