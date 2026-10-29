"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Building,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CareerPathwaysSection() {
  const [activePathway, setActivePathway] = useState(0);

  const pathways = [
    {
      title: "Global Audit & Assurance",
      role: "Audit Senior / Assurance Manager",
      employers: "Deloitte, PwC, EY, KPMG, BDO, Grant Thornton",
      description:
        "Lead statutory audits, evaluate internal controls, and audit international subsidiaries under IFRS and US GAAP standards.",
      skills: ["IFRS & Ind AS", "PCAOB Audit Methodology", "Internal Financial Controls", "ERP Audit Tools"],
    },
    {
      title: "Financial Planning & Analysis (FP&A)",
      role: "Senior Financial Analyst / FP&A Manager",
      employers: "Barclays, Citibank, Amazon, Genpact, Capgemini",
      description:
        "Shape organizational strategy through annual budgeting, rolling forecasts, variance analysis, and executive board reporting.",
      skills: ["Budgeting & Forecasting", "Financial Modeling", "Variance Analysis", "Power BI & Excel"],
    },
    {
      title: "International Corporate Taxation",
      role: "Tax Specialist / Transfer Pricing Consultant",
      employers: "Big 4 Tax Practices, Global Delivery Centers, MNCs",
      description:
        "Navigate cross-border transactions, transfer pricing documentation, international treaties, and corporate tax compliance.",
      skills: ["Cross-Border Taxation", "Transfer Pricing", "BEPS Guidelines", "Direct & Indirect Taxes"],
    },
    {
      title: "Executive Financial Leadership",
      role: "Finance Director / Controller / Chief Financial Officer (CFO)",
      employers: "Public Corporations, High-Growth Startups, Conglomerates",
      description:
        "Steer corporate capital structure, investor relations, risk management, and strategic M&A growth as a chartered leader.",
      skills: ["Strategic Capital Allocation", "M&A Advisory", "Corporate Governance", "Boardroom Communication"],
    },
  ];

  const milestones = [
    {
      step: "01",
      title: "Enrollment & Diagnostic Mapping",
      desc: "Counselors evaluate your 12th/Graduation/CA Inter status to calculate optimal exemptions and study trajectory.",
    },
    {
      step: "02",
      title: "Concept Mastery & CBE Simulation",
      desc: "Attend structured faculty lectures, solve case exhibits, and master computer-based mock exams.",
    },
    {
      step: "03",
      title: "Credential Certification",
      desc: "Clear international exams under official exam windows with high first-attempt probability.",
    },
    {
      step: "04",
      title: "Big 4 Placement & Career Launch",
      desc: "Placement cell connects your profile with hiring partners for articleship or full-time corporate roles.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
            Your Journey From Classroom <br />
            <span className="font-editorial text-[#2855E8]">To Global Boardrooms</span>
          </h2>
          <p className="text-sm sm:text-base text-[#66758C]">
            We don't just teach for exam day. We prepare you for tangible careers across the world's most demanding accounting and finance disciplines.
          </p>
        </div>

        {/* 4-Step Progressive Timeline with Visual Blue Progression Line */}
        <div className="relative mb-16">
          {/* Subtle connecting blue accent line on desktop */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#2855E8] via-[#79B8FF] to-[#2855E8] opacity-30 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#2855E8]/15 hover:border-[#2855E8] transition-all hover:bg-white hover:shadow-xl shadow-[#2855E8]/5 relative group"
              >
                <div className="text-xs font-black text-[#2855E8] bg-[#EFF6FF] border border-[#2855E8]/20 w-9 h-9 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {m.step}
                </div>
                <h3 className="text-base font-bold text-[#101F3D] mb-2">{m.title}</h3>
                <p className="text-xs text-[#66758C] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Career Domain Explorer */}
        <div className="bg-[#101F3D] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle atmospheric glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(40,85,232,0.2),transparent_70%)] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
            <span className="text-xs font-bold text-[#DCA43A] uppercase tracking-wider block mb-1">
              Select A Target Domain
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Explore High-Growth Financial Specializations</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 relative z-10">
            {pathways.map((path, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePathway(idx)}
                className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                  activePathway === idx
                    ? "bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white shadow-lg shadow-[#2855E8]/35 ring-2 ring-[#79B8FF]/40"
                    : "bg-[#132445] text-slate-300 hover:bg-[#182C54] hover:text-white border border-white/10"
                }`}
              >
                {path.title}
              </button>
            ))}
          </div>

          {/* Active Pathway Details Card */}
          <div className="bg-[#132445]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 sm:p-8 space-y-4 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs text-[#DCA43A] font-bold uppercase tracking-wider block">
                  Typical Target Designation
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {pathways[activePathway].role}
                </h4>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs text-slate-400 block">Leading Hiring Employers</span>
                <span className="text-xs font-semibold text-[#79B8FF]">
                  {pathways[activePathway].employers}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {pathways[activePathway].description}
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase text-slate-400 block mb-2">
                Core Competencies Acquired at SKD:
              </span>
              <div className="flex flex-wrap gap-2">
                {pathways[activePathway].skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-white border border-white/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
