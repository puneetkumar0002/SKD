import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { resultsData } from "@/data/testimonials";
import { Award, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "ACCA & Finance Exam Results | SKD Group of Institutions Chandigarh",
  description:
    "Explore verified examination results and pass rates at SKD Group of Institutions. Consistently outperforming ACCA and professional global averages.",
  alternates: {
    canonical: "/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Results & Achievements" }]} />

      <div className="space-y-16 pb-20">
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-[#DCA43A]/15 text-[#8F6418] border border-[#DCA43A]/30 rounded-full text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#DCA43A]" />
              <span>Verified Examination Performance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              SKD Results: Proof, Not Promises
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              We publish verified batch clearances and subject performance from recent ACCA, CA, and US CMA examination sessions.
            </p>
          </div>
        </section>

        {/* Global vs SKD Comparison */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#101F3D] via-[#162E5B] to-[#0E1B36] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2855E8]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <span className="text-xs font-bold text-[#DCA43A] uppercase tracking-wider block mb-2">
                  Performance Benchmark
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Consistently Outperforming Global Pass Rates
                </h2>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  While global ACCA pass rates typically average between 45% and 53% for Applied Skills and Strategic Professional levels, SKD students achieve an 85%+ overall batch pass rate through rigorous mock drills and individualized mentorship.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <span className="text-3xl sm:text-5xl font-extrabold text-slate-400 block mb-1">
                    ~50%
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">Global ACCA Average</span>
                </div>
                <div className="p-6 bg-gradient-to-br from-[#2855E8] to-[#3979FF] rounded-2xl border border-blue-400/40 shadow-lg shadow-blue-900/40">
                  <span className="text-3xl sm:text-5xl font-extrabold text-[#DCA43A] block mb-1">
                    85%+
                  </span>
                  <span className="text-xs text-white font-bold">SKD Batch Average</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Result Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resultsData.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl border border-[#E2E8F5] p-8 shadow-card-blue hover:border-[#2855E8]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#2855E8] bg-[#EFF6FF] border border-[#2855E8]/20 px-2.5 py-1 rounded-full">
                      {res.examSession}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {res.passPercentage}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#101F3D] mb-2">{res.qualification}</h3>
                  <p className="text-xs sm:text-sm text-[#66758C] leading-relaxed mb-6">
                    {res.highlight}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-[#E2E8F5]">
                    <p className="text-xs font-bold text-[#101F3D] uppercase tracking-wider">
                      Top Paper Scorers:
                    </p>
                    {res.topScorers.map((scorer, i) => (
                      <div key={i} className="flex justify-between items-center text-xs py-1 border-b border-gray-50 last:border-0">
                        <span className="text-[#14243D] font-medium">{scorer.paper}</span>
                        <span className="font-bold text-[#2855E8]">{scorer.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F5] flex items-center text-[11px] text-[#66758C]">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
                  <span>Verified institutional exam record</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm source="Results Page" />
        </section>
      </div>
    </>
  );
}
