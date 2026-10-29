"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowUp, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <>
      {/* Floating Action Buttons (Desktop & Mobile) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col space-y-3">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-12 h-12 bg-white/90 backdrop-blur-md text-[#10213B] rounded-full shadow-lg border border-[#E5EBF2] hover:bg-[#10213B] hover:text-white transition-all flex items-center justify-center animate-in fade-in zoom-in-75 duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Direct Chat Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 group relative"
        >
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
            Chat on WhatsApp
          </span>
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (Always Accessible for High Conversions) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 flex items-center space-x-2 shadow-2xl">
        <a
          href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
          className="flex-1 py-2.5 px-3 bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#2457D6]" />
          <span>Call Mentors</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/admissions"
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#2457D6] to-[#1943B0] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1 shadow-md shadow-blue-500/25"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Apply Now</span>
        </Link>
      </div>
    </>
  );
}
