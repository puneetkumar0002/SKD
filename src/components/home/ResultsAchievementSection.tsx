"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Award,
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Medal,
} from "lucide-react";
import { resultsData, ExamResultRecord } from "@/data/testimonials";

export default function ResultsAchievementSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const currentResult: ExamResultRecord = resultsData[activeTab];

  return (
    <section className="py-20 sm:py-28 bg-[linear-gradient(135deg,#101F3D_0%,#162E5B_50%,#0E1B36_100%)] text-white relative overflow-hidden border-b border-[#2855E8]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(40,85,232,0.22)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(220,164,58,0.18)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#132445] text-[#DCA43A] rounded-full text-xs font-bold border border-[#DCA43A]/30">
              <Trophy className="w-3.5 h-3.5 text-[#DCA43A]" />
              <span>Verified Examination Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Proven Results. <br />
              <span className="font-editorial text-[#DCA43A]">Uncompromising Academic Rigor.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Our students consistently beat global and national benchmarks through structured mock drills, faculty mentoring, and disciplined preparation.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/results"
              className="inline-flex items-center text-sm font-bold text-[#DCA43A] hover:text-white transition-colors group"
            >
              <span>View Full Results Archive & Rank Holders</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Tab Switcher for Exam Sessions */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {resultsData.map((res, index) => (
            <button
              key={res.id}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeTab === index
                  ? "bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white shadow-lg shadow-[#2855E8]/35 ring-2 ring-[#79B8FF]/40"
                  : "bg-[#132445]/85 text-slate-300 hover:bg-[#182C54] hover:text-white border border-white/10"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>{res.qualification}</span>
            </button>
          ))}
        </div>

        {/* Selected Result Showcase Card */}
        <div className="bg-[#132445]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
            {/* Left Result Highlight */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-[#DCA43A] uppercase tracking-wider">
                {currentResult.examSession}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {currentResult.qualification}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {currentResult.highlight}
              </p>
            </div>

            {/* Right Stat Metric Pill */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <div className="bg-[#101F3D] border border-[#2855E8]/40 p-5 sm:p-6 rounded-2xl text-center shadow-inner">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Verified Batch Outcome
                </span>
                <span className="text-3xl sm:text-4xl font-black text-[#DCA43A]">
                  {currentResult.passPercentage}
                </span>
                <span className="text-xs text-slate-300 block mt-1">
                  Exceeding standard global averages
                </span>
              </div>
            </div>
          </div>

          {/* Top Scorers Grid */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Medal className="w-4 h-4 text-[#DCA43A]" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Distinction Scorers & Subject Highlights
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentResult.topScorers.map((scorer, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#101F3D]/80 border border-white/10 hover:border-[#DCA43A]/40 rounded-2xl p-4 transition-all hover:bg-[#182C54] group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-400">Score Achieved</span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#DCA43A]/20 text-[#DCA43A] border border-[#DCA43A]/30">
                      {scorer.score}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white mb-1">{scorer.studentName}</h5>
                  <p className="text-xs text-slate-400 line-clamp-1">{scorer.paper}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
