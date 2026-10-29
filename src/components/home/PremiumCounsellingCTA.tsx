"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  Award,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";
import EnquiryForm from "@/components/EnquiryForm";

export default function PremiumCounsellingCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <section id="counselling-form" className="py-20 sm:py-28 bg-[#09121F] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2457D6]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#E5A835]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Advising Information */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#13243F] text-[#E5A835] rounded-full text-xs font-bold border border-[#E5A835]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for Next Exam Windows</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Your Global Finance <br />
              <span className="font-editorial text-[#E5A835]">Career Starts Here.</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-xl">
              Get an individualized study roadmap, paper exemption calculation, fee structure breakdown, and batch schedule from certified academic mentors at SKD Group of Institutions.
            </p>

            {/* Quick Guarantees */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                <span>100% Free academic counselling session (In-Person or Video)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                <span>Exemption check based on 12th, B.Com, M.Com, or CA Inter results</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#2457D6] shrink-0" />
                <span>Approved ACCA Silver Learning Partner institution credentials</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                className="p-4 rounded-2xl bg-[#13243F]/80 border border-white/10 hover:border-white/30 transition-all flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Call Helpline</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#E5A835] transition-colors">
                    {siteConfig.contact.primaryPhone}
                  </span>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#13243F]/80 border border-white/10 hover:border-emerald-500/50 transition-all flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Instant Chat</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Advisory
                  </span>
                </div>
              </a>
            </div>

            {/* Campus Address Pill */}
            <div className="flex items-start space-x-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-[#E5A835] shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </div>
          </div>

          {/* Right Column: Live Embedded Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-9 text-slate-900 shadow-2xl border-4 border-white/10 relative">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#2457D6] uppercase tracking-wider block mb-1">
                  Admissions Office • Fast Response
                </span>
                <h3 className="text-2xl font-black text-[#09121F]">Book Academic Counselling</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. Our senior academic director will contact you within 2 business hours.
                </p>
              </div>

              {/* Working Native Enquiry Form */}
              <EnquiryForm source="Homepage Cinematic CTA" compact={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
