"use client";

import React from "react";
import Image from "next/image";
import { Award, TrendingUp, Users, Briefcase, ShieldCheck, Sparkles } from "lucide-react";
import CountUp from "@/components/motion/CountUp";
import MarqueePartners from "@/components/motion/MarqueePartners";

export default function CredibilityMarqueeSection() {
  const metrics = [
    {
      icon: Award,
      valueNumber: null,
      customValue: "Silver Partner",
      title: "Approved ACCA Status",
      desc: "Audited & officially certified learning institution",
      accent: "text-[#DCA43A]",
      borderAccent: "border-[#DCA43A]/40",
      bgIcon: "bg-[#DCA43A]/15",
    },
    {
      icon: TrendingUp,
      valueNumber: 85,
      suffix: "%+",
      title: "Global Pass Rate",
      desc: "Consistently outperforms worldwide exam averages",
      accent: "text-[#3979FF]",
      borderAccent: "border-[#3979FF]/40",
      bgIcon: "bg-[#3979FF]/15",
    },
    {
      icon: Users,
      valueNumber: 100,
      suffix: "%",
      title: "Qualified Mentors",
      desc: "Direct guidance by practising CAs, ACCAs & CMAs",
      accent: "text-emerald-400",
      borderAccent: "border-emerald-400/40",
      bgIcon: "bg-emerald-400/15",
    },
    {
      icon: Briefcase,
      valueNumber: 100,
      suffix: "% Support",
      title: "Placement Assistance",
      desc: "Mock interviews, resume clinics & Big 4 drives",
      accent: "text-[#79B8FF]",
      borderAccent: "border-[#79B8FF]/40",
      bgIcon: "bg-[#79B8FF]/15",
    },
  ];

  return (
    <section
      id="credibility-section"
      className="py-16 sm:py-24 bg-[linear-gradient(135deg,#101F3D_0%,#152B52_50%,#0E1A33_100%)] text-white relative overflow-hidden border-b border-[#2855E8]/20"
    >
      {/* Subtle royal-blue illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(40,85,232,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-20 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(220,164,58,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Metric Cards Grid - Rich Dark Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#132445]/85 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl shadow-black/20 hover:border-[#3979FF]/50 hover:bg-[#182C54] transition-all duration-300 hover:-translate-y-1.5 group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgIcon} border ${item.borderAccent} flex items-center justify-center transition-all group-hover:scale-110`}
                  >
                    <Icon className={`w-6 h-6 ${item.accent}`} />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#DCA43A]/20 text-[#DCA43A] border border-[#DCA43A]/30 uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">
                  {item.valueNumber !== null ? (
                    <CountUp end={item.valueNumber} suffix={item.suffix} />
                  ) : (
                    <span className="text-[#DCA43A]">{item.customValue}</span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-slate-200 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Corporate Recruiters Title */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#132445] text-[#DCA43A] rounded-full text-xs font-bold mb-3 border border-[#DCA43A]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
            <span>Big 4 & Global Career Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Our Students are Hired by Premier Financial Hubs
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Top multinational accounting firms and investment corporations actively recruit SKD-trained professionals.
          </p>
        </div>

        {/* Infinite Corporate Marquee (Dark Theme) */}
        <MarqueePartners dark={true} />
      </div>
    </section>
  );
}
