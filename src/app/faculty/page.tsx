import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { facultyData } from "@/data/faculty";
import { Users, Award, BookOpen, CheckCircle2 } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Faculty & Mentors | SKD Group of Institutions Chandigarh",
  description:
    "Meet our qualified Chartered Accountants, ACCA members, and US CMAs. Learn from experienced industry faculties at SKD Group Chandigarh.",
  alternates: {
    canonical: "/faculty",
  },
};

export default function FacultyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Faculty & Mentors" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-3 border border-[#2855E8]/20">
              <Users className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>Qualified Accounting & Finance Educators</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Our Faculty & Mentors
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              We believe great mentors make difficult professional concepts effortless. Every faculty member at SKD brings genuine subject mastery, statutory credentials, and a passion for teaching.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyData.map((f) => (
              <div
                key={f.id}
                className="bg-white rounded-3xl border border-[#E2E8F5] p-8 shadow-card-blue hover:border-[#2855E8]/40 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="relative w-36 h-36 rounded-2xl overflow-hidden shrink-0 shadow-md bg-slate-100 border border-slate-200">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#2855E8] uppercase tracking-wider block mb-1">
                      {f.qualifications}
                    </span>
                    <h3 className="text-xl font-bold text-[#101F3D]">{f.name}</h3>
                    <p className="text-xs font-semibold text-[#66758C]">{f.designation}</p>
                    <p className="text-xs text-[#DCA43A] font-semibold mt-0.5">{f.experience}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#14243D] leading-relaxed">
                    {f.bio}
                  </p>

                  <div className="pt-2 border-t border-[#E2E8F5]">
                    <p className="text-[11px] font-bold text-[#66758C] uppercase tracking-wider mb-1">
                      Subject Specializations:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {f.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-[#EFF6FF] border border-[#2855E8]/20 text-[11px] font-medium text-[#14243D] rounded-full"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Faculty Page" />
        </section>
      </div>
    </>
  );
}
