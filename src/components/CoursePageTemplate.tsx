"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Clock,
  Compass,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Building,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Phone,
} from "lucide-react";
import { CourseDetail, coursesData } from "@/data/courses";
import { testimonialsData } from "@/data/testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";

interface CoursePageTemplateProps {
  course: CourseDetail;
}

export default function CoursePageTemplate({ course }: CoursePageTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const relatedCourses = coursesData.filter((c) => c.slug !== course.slug).slice(0, 3);
  const relevantTestimonial = testimonialsData.find((t) =>
    t.course.toLowerCase().includes(course.shortTitle.toLowerCase().split(" ")[0])
  ) || testimonialsData[0];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      sameAs: "https://skdgroupofinstitutions.com",
    },
    educationalCredentialAwarded: course.awardingBody,
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["Blended", "Onsite", "Online"],
        courseWorkload: course.duration,
        location: {
          "@type": "Place",
          name: "SKD Group Campus",
          address: siteConfig.address.full,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <Breadcrumb
        items={[
          { label: "Courses", href: "/courses" },
          { label: course.shortTitle },
        ]}
      />

      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-b from-[#F5F8FC] to-white pt-6 pb-14 border-b border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#09121F] text-white rounded-full text-xs sm:text-sm font-semibold border border-white/10 shadow-sm">
                  <Award className="w-4 h-4 text-[#E5A835]" />
                  <span className="text-[#E5A835]">{course.badge}</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-slate-200">{course.awardingBody}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#09121F] tracking-tight leading-[1.15]">
                  {course.title}
                </h1>

                <p className="text-base sm:text-lg text-[#66758C] leading-relaxed">
                  {course.tagline}
                </p>

                {/* Course Metadata Pill Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white p-3 rounded-xl border border-[#E5EBF2] shadow-sm">
                    <span className="text-[11px] text-[#66758C] block flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-[#2457D6]" /> Duration
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#10213B]">
                      {course.duration}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#E5EBF2] shadow-sm">
                    <span className="text-[11px] text-[#66758C] block flex items-center">
                      <Compass className="w-3 h-3 mr-1 text-[#D9A441]" /> Learning Modes
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#10213B]">
                      Classroom & Online
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-[#E5EBF2] shadow-sm col-span-2 sm:col-span-1">
                    <span className="text-[11px] text-[#66758C] block flex items-center">
                      <Building className="w-3 h-3 mr-1 text-emerald-600" /> Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#10213B]">
                      Godrej Eternia, Chd
                    </span>
                  </div>
                </div>

                {/* Primary Action Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                  <a
                    href="#enquiry-section"
                    className="inline-flex justify-center items-center px-7 py-3.5 bg-gradient-to-r from-[#2457D6] to-[#1943B0] hover:from-[#1943B0] hover:to-[#122F7F] text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all text-sm group"
                  >
                    <span>Enquire for Upcoming Batches</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                    className="inline-flex justify-center items-center px-6 py-3.5 bg-white text-[#09121F] font-bold rounded-xl border border-slate-200 hover:border-[#2457D6] hover:text-[#2457D6] transition-all text-sm shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2 text-[#2457D6]" />
                    <span>Call Mentors</span>
                  </a>
                </div>
              </div>

              {/* Right Hero Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src={course.cardImage}
                    alt={course.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09121F]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs text-[#E5A835] font-bold block mb-1">
                      SKD Professional Training Division
                    </span>
                    <p className="text-sm font-semibold">
                      Complete exam preparation with CBE simulation & mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2 & 3. OVERVIEW & WHO SHOULD ENROLL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10213B] mb-4">
                  Course Overview & Professional Scope
                </h2>
                <p className="text-base text-[#66758C] leading-relaxed">
                  {course.overview}
                </p>
              </div>

              {/* Who Should Enroll */}
              <div className="bg-[#F5F8FC] p-6 sm:p-8 rounded-2xl border border-[#E5EBF2]">
                <h3 className="text-lg font-bold text-[#10213B] mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-[#2457D6]" />
                  Who Should Enroll?
                </h3>
                <ul className="space-y-3">
                  {course.whoShouldEnroll.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-[#172B45]">
                      <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility & Exemptions */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#10213B] mb-3 flex items-center">
                    <FileCheck className="w-5 h-5 mr-2 text-[#D9A441]" />
                    Eligibility Requirements
                  </h3>
                  <div className="space-y-2">
                    {course.eligibility.map((el, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-white rounded-xl border border-[#E5EBF2] text-sm text-[#172B45] flex items-start space-x-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#2457D6] shrink-0 mt-2" />
                        <span>{el}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {course.exemptions && course.exemptions !== "Not applicable for entry-level exam." && (
                  <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h4 className="text-sm font-bold text-[#2457D6] mb-1 flex items-center">
                      <Sparkles className="w-4 h-4 mr-1.5 text-[#D9A441]" />
                      Exemption Opportunities for Graduates & CAs
                    </h4>
                    <p className="text-xs sm:text-sm text-[#172B45] leading-relaxed">
                      {course.exemptions}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Lead Form Side Column */}
            <div className="lg:col-span-5">
              <div className="sticky top-28" id="enquiry-section">
                <EnquiryForm defaultCourse={course.title} source={`Course Page: ${course.shortTitle}`} />
              </div>
            </div>
          </div>
        </section>

        {/* 5 & 6. DETAILED CURRICULUM & SYLLABUS */}
        <section className="bg-[#F5F8FC] py-16 border-y border-[#E5EBF2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-blue-100 text-[#2457D6] rounded-full text-xs font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Comprehensive Syllabus</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#10213B] tracking-tight">
                Curriculum & Examination Structure
              </h2>
              <p className="text-sm sm:text-base text-[#66758C] mt-2">
                Structured module-by-module preparation aligned with official body guidelines.
              </p>
            </div>

            <div className="space-y-8">
              {course.curriculum.map((level, lIdx) => (
                <div key={lIdx} className="bg-white rounded-2xl border border-[#E5EBF2] p-6 sm:p-8 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-[#10213B] mb-6 pb-3 border-b border-gray-100 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#2457D6] mr-3" />
                    {level.level}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {level.papers.map((paper, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-5 rounded-xl border border-[#E5EBF2] bg-[#F5F8FC]/50 hover:bg-white hover:border-[#2457D6] transition-all space-y-2"
                      >
                        <span className="text-xs font-bold text-[#2457D6] bg-blue-50 px-2 py-1 rounded inline-block">
                          {paper.code}
                        </span>
                        <h4 className="text-sm font-bold text-[#10213B]">{paper.name}</h4>
                        <p className="text-xs text-[#66758C] leading-relaxed">
                          {paper.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Exam Format & Study Kit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5EBF2]">
                <h3 className="text-base font-bold text-[#10213B] mb-4 flex items-center">
                  <FileCheck className="w-5 h-5 mr-2 text-[#2457D6]" />
                  Official Exam Structure
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B45]">
                  {course.examStructure.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5EBF2]">
                <h3 className="text-base font-bold text-[#10213B] mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-[#D9A441]" />
                  Study Materials & Resources Provided
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#172B45]">
                  {course.studyMaterials.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. TEACHING METHODOLOGY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10213B]">
              Our Proven Teaching Methodology
            </h2>
            <p className="text-sm text-[#66758C] mt-2">
              How SKD ensures higher pass rates and genuine conceptual clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.teachingMethodology.map((meth, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-[#E5EBF2] shadow-sm space-y-2">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#2457D6] font-bold text-xs flex items-center justify-center">
                  0{i + 1}
                </span>
                <p className="text-xs sm:text-sm text-[#172B45] leading-relaxed font-medium">
                  {meth}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 12. CAREER PATHWAYS */}
        <section className="bg-[#10213B] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#D9A441] uppercase tracking-wider block mb-2">
                Employment & Opportunities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Career Pathways After {course.shortTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {course.careerPathways.map((path, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#183155] border border-white/10 space-y-3">
                  <Briefcase className="w-6 h-6 text-[#D9A441]" />
                  <h3 className="text-base font-bold text-white leading-snug">{path.role}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{path.description}</p>
                  <p className="text-[11px] text-[#D9A441] pt-2 border-t border-white/10 font-semibold">
                    Top Employers: {path.employers}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. VERIFIED STUDENT SUCCESS SPOTLIGHT */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-amber-50/50 rounded-3xl p-8 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <Image
                src={relevantTestimonial.image || "/assets/images/Teach-Img-2.jpg"}
                alt={relevantTestimonial.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-1 text-[#D9A441]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D9A441]" />
                ))}
                <span className="text-xs font-bold text-gray-700 ml-2">Verified Student Success</span>
              </div>
              <p className="text-sm sm:text-base text-[#172B45] italic leading-relaxed">
                &ldquo;{relevantTestimonial.quote}&rdquo;
              </p>
              <div>
                <h4 className="text-sm font-bold text-[#10213B]">{relevantTestimonial.name}</h4>
                <p className="text-xs text-[#2457D6] font-medium">
                  {relevantTestimonial.course} • {relevantTestimonial.achievement}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10213B]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#66758C] mt-2">
              Got queries regarding syllabus, exemptions, or examination windows?
            </p>
          </div>

          <div className="space-y-3">
            {course.faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E5EBF2] rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#10213B]">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2457D6] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#66758C] leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 17. RELATED COURSES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#10213B]">
              Related Professional Programs
            </h3>
            <Link href="/courses" className="text-xs sm:text-sm font-bold text-[#2457D6] hover:underline">
              View All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white rounded-2xl border border-[#E5EBF2] p-6 hover:border-[#2457D6] transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#2457D6] uppercase tracking-wider block mb-1">
                    {rel.badge}
                  </span>
                  <h4 className="text-base font-bold text-[#10213B] mb-2">{rel.title}</h4>
                  <p className="text-xs text-[#66758C] line-clamp-2">{rel.overview}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <Link
                    href={`/${rel.slug}`}
                    className="text-xs font-bold text-[#2457D6] hover:underline flex items-center"
                  >
                    <span>View course syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
