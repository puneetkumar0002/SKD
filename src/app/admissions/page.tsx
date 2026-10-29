import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/data/siteData";
import { Sparkles, Calendar, CheckCircle2, Phone, Mail, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions & Counselling | SKD Group of Institutions Chandigarh",
  description:
    "Apply for ACCA, CA, US CMA, or US CPA courses at SKD Group of Institutions Chandigarh. Book free 1-on-1 academic counselling and evaluate exemptions.",
  alternates: {
    canonical: "/admissions",
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Admissions & Counselling" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-[#DCA43A]/15 text-[#8F6418] border border-[#DCA43A]/30 rounded-full text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
              <span>Admissions Open for 2026-27 Batches</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Admissions & Academic Counselling
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Step forward into world-class accounting education. Receive personalized roadmap guidance from senior mentors and verify your paper exemptions.
            </p>
          </div>
        </section>

        {/* 4-Step Admission Journey */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F3D]">
              Your 4-Step Admission Journey
            </h2>
            <p className="text-sm text-[#66758C] mt-2">
              A transparent, supportive process with zero pressure or hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
              <span className="w-9 h-9 rounded-full bg-[#EFF6FF] text-[#2855E8] border border-[#2855E8]/20 font-extrabold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-[#101F3D]">Profile Assessment</h3>
              <p className="text-xs text-[#66758C] leading-relaxed">
                Submit your 10+2, B.Com, or CA Inter marksheets. Our team evaluates your eligibility and calculates maximum allowable paper exemptions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
              <span className="w-9 h-9 rounded-full bg-[#DCA43A]/15 text-[#8F6418] border border-[#DCA43A]/30 font-extrabold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-[#101F3D]">1-on-1 Counselling</h3>
              <p className="text-xs text-[#66758C] leading-relaxed">
                Meet senior faculties face-to-face at Godrej Eternia or via video call to discuss paper sequence, exam windows, and career goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
              <span className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-extrabold text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="text-base font-bold text-[#101F3D]">Batch & Schedule</h3>
              <p className="text-xs text-[#66758C] leading-relaxed">
                Select your preferred learning mode (Classroom Chandigarh or Live Online) and timetable (weekday morning or weekend professional).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] shadow-card-blue space-y-3">
              <span className="w-9 h-9 rounded-full bg-[#101F3D] text-[#79B8FF] font-extrabold text-sm flex items-center justify-center">
                4
              </span>
              <h3 className="text-base font-bold text-[#101F3D]">Registration & Kits</h3>
              <p className="text-xs text-[#66758C] leading-relaxed">
                Receive your official study texts, access to the CBE exam practice portal, and batch orientation details.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Form and Immediate Phone Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#101F3D] text-white p-8 rounded-3xl space-y-4 shadow-xl border border-white/10">
                <span className="text-xs font-bold text-[#DCA43A] uppercase tracking-wider block">
                  Direct Admission Hotline
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Speak Directly With An Academic Counsellor
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Have questions about upcoming intake deadlines or scholarship eligibility? Our team is available Monday to Saturday, 9:00 AM to 7:00 PM.
                </p>

                <div className="space-y-3 pt-2 text-sm">
                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                    className="flex items-center text-white hover:text-[#DCA43A] font-bold"
                  >
                    <Phone className="w-4 h-4 mr-3 text-[#79B8FF]" />
                    <span>{siteConfig.contact.primaryPhone}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                    className="flex items-center text-white hover:text-[#DCA43A] font-bold"
                  >
                    <Phone className="w-4 h-4 mr-3 text-[#79B8FF]" />
                    <span>{siteConfig.contact.secondaryPhone}</span>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center text-slate-300 hover:text-white"
                  >
                    <Mail className="w-4 h-4 mr-3 text-[#79B8FF]" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#EFF6FF]/60 p-6 rounded-2xl border border-[#E2E8F5] space-y-2">
                <h4 className="text-sm font-bold text-[#101F3D] flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-[#2855E8]" />
                  Upcoming Batch Intakes
                </h4>
                <ul className="text-xs text-[#66758C] space-y-1.5">
                  <li>• ACCA March & June Exam Sessions (New Cohorts Enrolling)</li>
                  <li>• US CMA Part 1 & 2 Fast-Track (Evening Batches)</li>
                  <li>• CA Foundation & Inter Post-Results Batches</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm source="Admissions Page Main Form" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
