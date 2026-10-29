"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  MonitorCheck,
  Building2,
  Briefcase,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function WhyChooseStorytelling() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stories = [
    {
      id: "mentorship",
      number: "01",
      icon: Users,
      title: "Mentorship That Moves You Forward",
      subtitle: "Learn directly from qualified Chartered Accountants and ACCA leaders",
      description:
        "At SKD, you are never lost in impersonal crowds. Our faculty consists of active practitioners with decades of audit and FP&A leadership. Every student receives a personalized progress diagnosis, 1-on-1 doubt resolution, and tailored exam strategy before every exam window.",
      keyPoints: [
        "1-on-1 personal doubt clearing sessions after every class",
        "Faculty who have themselves cleared ACCA, CA & CMA credentials",
        "Study plan customized to student's academic background",
      ],
      image: "/assets/images/Teach-Img-4.jpg",
      badge: "Pedagogy & Faculty",
    },
    {
      id: "cbe-simulation",
      number: "02",
      icon: MonitorCheck,
      title: "Real Exam CBE Simulation Platform",
      subtitle: "Practice on computer-based exam interfaces replicating official tests",
      description:
        "Global exams like ACCA and US CMA are 100% computer-based. We train students on dedicated exam software replicating ACCA Practice Platform spreadsheets, word processors, and IMA Prometric engines. On exam day, the software feels completely familiar.",
      keyPoints: [
        "Identical UI, spreadsheet formulas, and split-screen exhibit tools",
        "Time-tracked mock exams with detailed faculty scoring breakdown",
        "Instant diagnosis on weak technical areas and answer formatting",
      ],
      image: "/assets/images/Teach-Img-2.jpg",
      badge: "Exam Simulation",
    },
    {
      id: "campus-hybrid",
      number: "03",
      icon: Building2,
      title: "Executive Godrej Eternia Campus & Live Online",
      subtitle: "Modern learning infrastructure in the commercial heart of Chandigarh",
      description:
        "Situated at Godrej Eternia, Phase 1 Industrial Business Park, our executive campus offers world-class classrooms, high-speed computer labs, and quiet study lounges. Outstation or working students can join via crystal-clear interactive live streams with 24/7 recorded lecture backups.",
      keyPoints: [
        "Centrally located at Godrej Eternia, Tower B, Phase 1 Chandigarh",
        "Seamless live interactive broadcasts with instant microphone Q&A",
        "Unlimited recording archive available until exam completion",
      ],
      image: "/assets/images/h2.jpg",
      badge: "Campus & Technology",
    },
    {
      id: "career-support",
      number: "04",
      icon: Briefcase,
      title: "Career Support Beyond the Classroom",
      subtitle: "A dedicated placement cell connecting you with Big 4 and MNCs",
      description:
        "Education is complete only when it opens global doors. Our corporate relations cell grooms students through ATS-compliant resume building, technical accounting mock interviews, LinkedIn branding, and exclusive placement drives with Deloitte, KPMG, Barclays, Citibank, and leading MNCs.",
      keyPoints: [
        "Technical & HR interview preparation by industry veterans",
        "Direct referral tie-ups with multinational audit & advisory firms",
        "Career guidance on articleship and permanent employment pathways",
      ],
      image: "/assets/images/cma-students-1920x750-1.webp",
      badge: "Placement & Growth",
    },
  ];

  const current = stories[activeStoryIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#EFF6FF] border-b border-[#2855E8]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DCA43A]" />
            <span>The Institutional Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
            Why Ambitious Finance Students <br />
            <span className="font-editorial text-[#2855E8]">Choose SKD Group</span>
          </h2>
          <p className="text-sm sm:text-base text-[#66758C]">
            We combine academic rigor with genuine mentorship, providing students in Chandigarh and across India with a dependable launchpad to international accounting careers.
          </p>
        </div>

        {/* Interactive Desktop Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Story Selectors */}
          <div className="lg:col-span-6 space-y-3.5">
            {stories.map((story, index) => {
              const isActive = activeStoryIndex === index;
              const Icon = story.icon;
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveStoryIndex(index)}
                  className={`cursor-pointer p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#2855E8] shadow-xl shadow-[#2855E8]/10 ring-2 ring-[#2855E8]/30 scale-[1.01]"
                      : "bg-white/80 hover:bg-white border-slate-200/90 hover:border-[#2855E8]/40 shadow-sm"
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-sm transition-colors ${
                        isActive
                          ? "bg-[#2855E8] text-white shadow-md shadow-[#2855E8]/30"
                          : "bg-[#DDEAFF] text-[#14243D]"
                      }`}
                    >
                      {story.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors ${
                            isActive ? "text-[#101F3D]" : "text-[#14243D]"
                          }`}
                        >
                          {story.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#66758C]">
                          {story.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[#66758C] mt-1 line-clamp-1">
                        {story.subtitle}
                      </p>

                      {/* Expanded Content on Active */}
                      {isActive && (
                        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-3 animate-in fade-in duration-200">
                          <p className="text-xs sm:text-sm text-[#14243D] leading-relaxed">
                            {story.description}
                          </p>

                          <div className="space-y-1.5 pt-1">
                            {story.keyPoints.map((point, pIdx) => (
                              <div key={pIdx} className="flex items-center space-x-2 text-xs text-[#14243D] font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#2855E8] shrink-0" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Showcase Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#101F3D]">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/95 via-[#101F3D]/25 to-transparent" />
              </div>

              {/* Story Overlay Banner */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#DCA43A] text-[#101F3D] text-xs font-bold uppercase tracking-wider">
                  {current.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{current.title}</h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                  {current.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
