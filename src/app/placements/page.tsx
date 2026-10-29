import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/data/siteData";
import { Briefcase, Building, CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Placements & Career Support | SKD Group of Institutions Chandigarh",
  description:
    "Explore placement assistance, resume workshops, Big 4 interview preparation, and corporate hiring partners at SKD Group of Institutions.",
  alternates: {
    canonical: "/placements",
  },
};

export default function PlacementsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Placements & Career Support" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-3 border border-[#2855E8]/20">
              <Briefcase className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>Career Guidance & Industry Connect</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Placements & Career Pathways
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              We prepare candidates not just to pass exams, but to thrive in competitive interview rooms and excel inside global financial institutions.
            </p>
          </div>
        </section>

        {/* Corporate Hiring Partners */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101F3D]">
              Top Employers Hiring ACCA, CA & US CMA Talent
            </h2>
            <p className="text-xs sm:text-sm text-[#66758C] mt-1">
              Our alumni work across leading audit practices, investment banking operations, and global capability centers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {siteConfig.hiringPartners.map((p) => (
              <div
                key={p.name}
                className="bg-white p-6 rounded-2xl border border-[#E2E8F5] shadow-card-blue flex flex-col items-center justify-center space-y-3 hover:border-[#2855E8]/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="relative w-28 h-10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
                <span className="text-xs font-bold text-[#14243D]">{p.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Career Cell Process */}
        <section className="bg-[#EFF6FF]/60 py-16 border-y border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101F3D]">
                How Our Career Cell Supports You
              </h2>
              <p className="text-sm text-[#66758C] mt-2">
                A structured 4-step preparation framework starting from your first exam pass.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] space-y-3 shadow-card-blue">
                <span className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#2855E8] border border-[#2855E8]/20 font-bold text-xs flex items-center justify-center">
                  01
                </span>
                <h3 className="text-base font-bold text-[#101F3D]">CV & LinkedIn Optimization</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Formatting your resume to match international Big 4 ATS standards, highlighting paper clearances, IFRS proficiency, and technical tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] space-y-3 shadow-card-blue">
                <span className="w-8 h-8 rounded-full bg-[#DCA43A]/15 text-[#8F6418] border border-[#DCA43A]/30 font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <h3 className="text-base font-bold text-[#101F3D]">Technical Mock Interviews</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Rigorous 1-on-1 mock interviews conducted by alumni and practicing CAs/ACCAs, testing audit procedures, accounting standards, and financial analysis.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] space-y-3 shadow-card-blue">
                <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold text-xs flex items-center justify-center">
                  03
                </span>
                <h3 className="text-base font-bold text-[#101F3D]">Executive Communication</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Mastering business presentation etiquette, corporate email etiquette, and behavioral case study answers for leadership interviews.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E2E8F5] space-y-3 shadow-card-blue">
                <span className="w-8 h-8 rounded-full bg-[#101F3D] text-[#79B8FF] font-bold text-xs flex items-center justify-center">
                  04
                </span>
                <h3 className="text-base font-bold text-[#101F3D]">Direct Corporate Referrals</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">
                  Connecting qualified candidates directly with HR teams, alumni networks, and recruitment portals of partner organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Placements Page" />
        </section>
      </div>
    </>
  );
}
