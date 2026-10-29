"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, ArrowRight, BookOpen, Clock, Users } from "lucide-react";
import { facultyData } from "@/data/faculty";

export default function FacultySection() {
  return (
    <section className="py-20 sm:py-28 bg-[#EEF4FB] border-b border-[#2855E8]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-white text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20 shadow-sm">
              <Users className="w-3.5 h-3.5" />
              <span>Practising Academic Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Learn From Certified <br />
              <span className="font-editorial text-[#2855E8]">Finance Veterans</span>
            </h2>
            <p className="text-sm sm:text-base text-[#66758C]">
              Our faculty members bring active industry experience from Big 4 firms, corporate treasury, and multinational audits directly into the classroom.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/faculty"
              className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#101F3D] transition-colors group"
            >
              <span>Meet All Mentors & Bios</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Faculty Grid - Premium Pure White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-3xl border border-[#2855E8]/15 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#2855E8]/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col"
            >
              {/* Image Container with zoom effect */}
              <div className="relative h-64 w-full bg-[#101F3D] overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/85 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Experience Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#101F3D] shadow border border-[#2855E8]/15">
                  {faculty.experience.split(" ")[0]} Experience
                </div>

                {/* Name Overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-[#DCA43A] block">
                    {faculty.qualifications}
                  </span>
                  <h3 className="text-base font-bold leading-tight drop-shadow-sm">
                    {faculty.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#2855E8] block mb-1">
                    {faculty.designation}
                  </span>
                  <p className="text-xs text-[#66758C] leading-relaxed line-clamp-3">
                    {faculty.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-[#66758C] block mb-1.5">
                    Papers & Programs:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {faculty.coursesTaught.slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#EFF6FF] text-[10px] font-semibold text-[#14243D] border border-[#2855E8]/10"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
