import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Building,
  Users,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "About SKD Group of Institutions | Best ACCA & Finance Coaching Chandigarh",
  description:
    "Learn about SKD Group of Institutions: Approved ACCA Silver Learning Partner in Chandigarh. Discover our academic mission, leadership, Godrej Eternia campus, and placement record.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "About Us" }]} />

      <div className="space-y-16 sm:space-y-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#101F3D] text-white rounded-full text-xs sm:text-sm font-semibold shadow-xs">
                  <Award className="w-4 h-4 text-[#DCA43A]" />
                  <span className="text-[#DCA43A]">Approved ACCA Silver Learning Partner</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight leading-[1.15]">
                  Empowering Careers in <span className="bg-gradient-to-r from-[#2855E8] to-[#3979FF] bg-clip-text text-transparent">Global Accounting & Finance</span>
                </h1>

                <p className="text-base sm:text-lg text-[#66758C] leading-relaxed">
                  SKD Group of Institutions is an elite financial training institution based at Godrej Eternia, Chandigarh. We prepare undergraduate students, commerce graduates, and working professionals for globally recognized qualifications including ACCA, CA, US CMA, and US CPA.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white rounded-xl border border-[#E2E8F5] shadow-card-blue">
                    <span className="text-2xl font-extrabold text-[#2855E8] block">14+ Years</span>
                    <span className="text-xs text-[#66758C]">Academic Mentorship Legacy</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E2E8F5] shadow-card-blue">
                    <span className="text-2xl font-extrabold text-[#DCA43A] block">85%+</span>
                    <span className="text-xs text-[#66758C]">Consistent Exam Pass Rate</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-card-blue border-4 border-white">
                  <Image
                    src="/assets/images/event12.png"
                    alt="SKD Group of Institutions student seminar"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#2855E8] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#101F3D]">Our Mission</h2>
              <p className="text-sm text-[#66758C] leading-relaxed">
                To bridge the gap between academic university education and the demands of modern global employers by delivering practical, concept-first training for international accounting bodies like ACCA, ICAI, IMA, and AICPA.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#DCA43A] flex items-center justify-center border border-[#DCA43A]/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#101F3D]">Our Vision</h2>
              <p className="text-sm text-[#66758C] leading-relaxed">
                To establish North India's benchmark center of excellence for professional finance qualifications, empowering every committed student to achieve first-attempt passes and secure placements in Big 4 and Fortune 500 corporations.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional Pillars */}
        <section className="bg-[#EFF6FF]/60 py-16 border-y border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101F3D]">
                What Sets SKD Apart
              </h2>
              <p className="text-sm sm:text-base text-[#66758C] mt-2">
                We believe in genuine accountability, authentic student guidance, and transparent learning benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
                <CheckCircle2 className="w-6 h-6 text-[#2855E8]" />
                <h3 className="text-base font-bold text-[#101F3D]">ACCA Silver Learning Partner</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Regularly audited by ACCA Global (UK) for faculty credentials, classroom infrastructure, student feedback, and ethical admissions practices.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
                <Building className="w-6 h-6 text-[#DCA43A]" />
                <h3 className="text-base font-bold text-[#101F3D]">Prime Chandigarh Location</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Situated at Godrej Eternia, Industrial Area Phase 1—Chandigarh’s premier corporate hub, offering secure access, air-conditioned lecture theaters, and dedicated computer labs.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
                <Users className="w-6 h-6 text-emerald-600" />
                <h3 className="text-base font-bold text-[#101F3D]">Direct Mentor Access</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Unlike mega commercial institutes where students cannot speak to faculties, our mentors conduct direct 1-on-1 doubt clinics before and after class.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Location Card & Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#101F3D] text-white p-8 rounded-2xl space-y-4 shadow-xl border border-white/10">
                <h3 className="text-xl font-bold text-white">Visit Our Chandigarh Campus</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We welcome students and parents to visit our premises, inspect our computer-based exam lab, review study materials, and meet our faculty in person.
                </p>

                <div className="space-y-3 pt-2 text-sm text-slate-200">
                  <p className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-[#DCA43A] shrink-0 mt-0.5" />
                    <span>{siteConfig.address.full}</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-[#79B8FF] shrink-0" />
                    <span>{siteConfig.contact.primaryPhone} / {siteConfig.contact.secondaryPhone}</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-[#79B8FF] shrink-0" />
                    <span>{siteConfig.contact.email}</span>
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="https://maps.google.com/?q=Godrej+Eternia+Chandigarh+Plot+70+Industrial+Area+Phase+1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white rounded-xl text-xs font-bold hover:brightness-110 shadow-md transition-all"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EnquiryForm source="About Us Page" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
