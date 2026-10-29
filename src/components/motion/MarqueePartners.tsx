"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";

interface MarqueePartnersProps {
  dark?: boolean;
}

export default function MarqueePartners({ dark = false }: MarqueePartnersProps) {
  const partners = siteConfig.hiringPartners;
  // Duplicate list to achieve continuous infinite ticker
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Gradient fade on left and right edges */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-r from-[#101F3D] to-transparent"
            : "bg-gradient-to-r from-white to-transparent"
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
          dark
            ? "bg-gradient-to-l from-[#101F3D] to-transparent"
            : "bg-gradient-to-l from-white to-transparent"
        }`}
      />

      <div className="animate-marquee flex items-center space-x-6 sm:space-x-10">
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className={`flex items-center justify-center px-5 py-3 rounded-xl border transition-all duration-300 ${
              dark
                ? "bg-[#16294C]/80 border-white/10 hover:border-white/25 hover:bg-[#1C3663]"
                : "bg-white border-[#E2E8F5] shadow-xs hover:shadow-card-blue hover:border-[#2855E8]/40"
            }`}
          >
            <div className="relative w-24 h-7 sm:w-28 sm:h-8">
              <Image
                src={partner.logo}
                alt={`${partner.name} recruiter`}
                fill
                className={`object-contain transition-all duration-300 ${
                  dark ? "filter brightness-125 contrast-125" : "filter grayscale hover:grayscale-0"
                }`}
                sizes="112px"
              />
            </div>
            <span
              className={`ml-3 text-xs font-semibold whitespace-nowrap ${
                dark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
