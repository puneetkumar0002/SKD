"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const primaryCourses = [
    { name: "ACCA Coaching in Chandigarh", href: "/acca-coaching-chandigarh" },
    { name: "CA Foundation Coaching", href: "/ca-foundation-coaching-chandigarh" },
    { name: "CA Intermediate Coaching", href: "/ca-intermediate-coaching-chandigarh" },
    { name: "CA Final Coaching", href: "/ca-final-coaching-chandigarh" },
    { name: "US CMA Coaching (IMA USA)", href: "/us-cma-coaching" },
    { name: "US CPA Coaching (AICPA)", href: "/us-cpa-coaching" },
    { name: "Corporate Finance Training", href: "/corporate-training" },
  ];

  const quickLinks = [
    { name: "About SKD Group", href: "/about-us" },
    { name: "Results & Rank Holders", href: "/results" },
    { name: "Placements & Career Cell", href: "/placements" },
    { name: "Faculty & Mentors", href: "/faculty" },
    { name: "Student Testimonials", href: "/student-testimonials" },
    { name: "Campus Life & Gallery", href: "/gallery" },
    { name: "Admissions & Counselling", href: "/admissions" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Blog & Finance Guides", href: "/blog" },
    { name: "Contact & Directions", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#070E1A] text-slate-300 pt-16 pb-12 border-t border-white/10">
      {/* Top Hiring Partners Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-white/10">
        <div className="text-center mb-8">
          <p className="text-xs uppercase font-bold text-[#E5A835] tracking-widest mb-2 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            World-Class Career Opportunities
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Our Students are Hired by Leading Global Advisory Firms & Big 4
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {siteConfig.hiringPartners.map((partner) => (
            <div
              key={partner.name}
              className="bg-[#13243F]/70 hover:bg-[#182F52] px-4 py-2.5 rounded-xl border border-white/10 flex items-center space-x-2 transition-all hover:scale-105"
            >
              <div className="relative w-20 h-6 sm:w-24 sm:h-7">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} hiring partner`}
                  fill
                  className="object-contain filter brightness-125 contrast-125"
                  sizes="96px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Institution Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-14 bg-white/95 p-2 rounded-2xl shadow">
                <Image
                  src="/assets/brand/logo.png"
                  alt="SKD Group of Institutions"
                  fill
                  className="object-contain p-1"
                  sizes="176px"
                />
              </div>
            </Link>

            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#13243F] border border-[#E5A835]/30 rounded-full text-[#E5A835] text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>Approved ACCA Silver Learning Partner</span>
            </div>

            {/* ACCA Accreditation Logos */}
            <div className="flex items-center gap-3 pt-1">
              {/* Silver Learning Partner — wider/landscape */}
              <div className="relative w-36 h-14 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/assets/images/acca-silver-learning-partner.png"
                  alt="ACCA Silver Learning Partner"
                  fill
                  className="object-contain p-1.5"
                  sizes="144px"
                />
              </div>
              {/* CBE Centre — square */}
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white shadow-md">
                <Image
                  src="/assets/images/acca-cbe-centre.png"
                  alt="ACCA Licensed CBE Centre"
                  fill
                  className="object-contain p-1.5"
                  sizes="56px"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              SKD Group of Institutions is a premier institute for professional accounting and finance education in Chandigarh, preparing students and working professionals for ACCA, CA, US CMA, and US CPA qualifications.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                Verified ACCA Silver Learning Partner (ALP)
              </p>
              <p className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                Computer-Based Exam (CBE) Simulators
              </p>
            </div>
          </div>

          {/* Column 2: Professional Courses */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#2457D6]">
              Professional Courses
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {primaryCourses.map((course) => (
                <li key={course.href}>
                  <Link
                    href={course.href}
                    className="hover:text-white flex items-center group transition-colors text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1 text-[#2457D6] group-hover:translate-x-1 transition-transform" />
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#E5A835]">
              Institution & Support
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white flex items-center group transition-colors text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#E5A835] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#2457D6]">
              Chandigarh Campus
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E5A835] shrink-0 mt-0.5" />
                <p className="text-slate-300 leading-snug">
                  {siteConfig.address.full}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#2457D6] shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                    className="hover:text-white font-semibold text-slate-200"
                  >
                    {siteConfig.contact.primaryPhone}
                  </a>
                  <span className="text-slate-500"> / </span>
                  <a
                    href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                    className="hover:text-white font-semibold text-slate-200"
                  >
                    {siteConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#2457D6] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white text-slate-200 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Godrej+Eternia+Chandigarh+Plot+70+Industrial+Area+Phase+1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#13243F] hover:bg-[#2457D6] text-white text-xs font-semibold rounded-xl transition-colors border border-white/10"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>
            © {currentYear} {siteConfig.name}. All Rights Reserved. Professional qualifications (ACCA, CA, US CMA, US CPA) are awarded by their respective statutory bodies.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin" className="hover:text-white transition-colors text-slate-400">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
