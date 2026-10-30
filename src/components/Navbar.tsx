"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const courseLinks = [
    {
      name: "ACCA (Global Chartered Accountant)",
      href: "/acca-coaching-chandigarh",
      badge: "Silver ALP",
      desc: "UK qualification recognized in 180+ countries",
    },
    {
      name: "CA Foundation",
      href: "/ca-foundation-coaching-chandigarh",
      badge: "ICAI Entry",
      desc: "Comprehensive 4-subject entry foundation",
    },
    {
      name: "CA Intermediate",
      href: "/ca-intermediate-coaching-chandigarh",
      badge: "Both Groups",
      desc: "In-depth corporate accounting & taxation",
    },
    {
      name: "CA Final",
      href: "/ca-final-coaching-chandigarh",
      badge: "Advanced",
      desc: "Final frontier mastery for fellow CAs",
    },
    {
      name: "US CMA",
      href: "/us-cma-coaching",
      badge: "6-9 Months",
      desc: "Fastest global finance & FP&A credential",
    },
    {
      name: "US CPA",
      href: "/us-cpa-coaching",
      badge: "AICPA USA",
      desc: "Gold standard American accounting license",
    },
    {
      name: "Corporate Training",
      href: "/corporate-training",
      badge: "Enterprise",
      desc: "Customized IFRS & financial workshops",
    },
  ];

  return (
    <>
      {/* Top Credibility & Contact Bar - Midnight Navy with Champagne Gold */}
      <div className="bg-[#101F3D] text-slate-300 text-xs border-b border-white/10 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center text-[#DCA43A] font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#DCA43A] animate-pulse mr-2" />
              <Award className="w-3.5 h-3.5 mr-1 text-[#DCA43A]" />
              Approved ACCA Silver Learning Partner
            </span>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 mr-1.5 text-[#3979FF]" />
              {siteConfig.contact.primaryPhone}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 mr-1.5 text-[#3979FF]" />
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="flex items-center space-x-5">
            <span className="inline-flex items-center text-slate-300">
              <MapPin className="w-3 h-3 mr-1.5 text-[#DCA43A]" />
              Godrej Eternia, Phase 1, Chandigarh
            </span>
            <Link
              href="/admin"
              className="text-slate-400 hover:text-white text-[11px] font-medium border-b border-dotted border-slate-500 pb-0.5"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8FAFF]/95 backdrop-blur-xl shadow-lg shadow-[#2855E8]/5 py-3 border-b border-[#2855E8]/15"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-200/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo + ACCA Accreditation Badges */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center group">
              <div className="relative w-36 h-12 sm:w-44 sm:h-13 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/assets/brand/logo.png"
                  alt="SKD Group of Institutions"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 144px, 176px"
                />
              </div>
            </Link>
            {/* ACCA Accreditation Logos */}
            <div className="hidden sm:flex items-center space-x-2 border-l border-slate-200 pl-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/assets/images/acca-silver-learning-partner.png"
                  alt="ACCA Silver Learning Partner"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shadow-sm border border-slate-100">
                <Image
                  src="/assets/images/acca-cbe-centre.png"
                  alt="ACCA Licensed CBE Centre"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-[14px] text-[#14243D]">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl transition-all relative ${
                pathname === "/"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/about-us"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              About Us
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`px-3.5 py-2 rounded-xl inline-flex items-center space-x-1.5 transition-all ${
                  pathname.includes("coaching") || pathname === "/courses"
                    ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                    : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
                }`}
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                aria-expanded={coursesDropdownOpen}
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    coursesDropdownOpen ? "rotate-180 text-[#2855E8]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-88 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 mt-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1.5 flex justify-between items-center">
                    <span className="text-[11px] font-bold text-[#66758C] uppercase tracking-wider">
                      Professional Qualifications
                    </span>
                    <Link
                      href="/courses"
                      className="text-xs text-[#2855E8] font-bold hover:underline flex items-center"
                    >
                      <span>All Programs</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {courseLinks.map((course) => (
                      <Link
                        key={course.href}
                        href={course.href}
                        className="block p-2.5 rounded-xl hover:bg-[#EFF6FF] transition-all group border border-transparent hover:border-[#2855E8]/20"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-[#14243D] group-hover:text-[#2855E8] transition-colors">
                            {course.name}
                          </span>
                          <span className="text-[10px] font-bold bg-[#EFF6FF] text-[#2855E8] px-2 py-0.5 rounded-full border border-[#2855E8]/25">
                            {course.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#66758C] mt-0.5 line-clamp-1">
                          {course.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/results"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/results"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Results
            </Link>

            <Link
              href="/placements"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/placements"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Placements
            </Link>

            <Link
              href="/faculty"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/faculty"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Faculty
            </Link>

            <Link
              href="/gallery"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/gallery"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Gallery
            </Link>

            <Link
              href="/blog"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname.startsWith("/blog")
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact-us"
              className={`px-3.5 py-2 rounded-xl transition-all ${
                pathname === "/contact-us"
                  ? "text-[#2855E8] font-bold bg-[#EFF6FF] border border-[#2855E8]/20"
                  : "hover:text-[#2855E8] hover:bg-[#EFF6FF]/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#14243D] bg-white border border-[#2855E8]/25 rounded-xl hover:border-[#2855E8] hover:text-[#2855E8] hover:bg-[#EFF6FF]/50 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" />
              Call Mentors
            </a>

            <Link
              href="/admissions"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#2855E8] to-[#467FFF] hover:from-[#1D3766] hover:to-[#2855E8] rounded-xl shadow-lg shadow-[#2855E8]/25 transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#DCA43A]" />
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
              className="p-2.5 text-[#2855E8] bg-[#EFF6FF] rounded-xl border border-[#2855E8]/20"
              aria-label="Call SKD"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#14243D] hover:bg-slate-100 rounded-xl focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#101F3D]" />
              ) : (
                <Menu className="w-6 h-6 text-[#101F3D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            {/* Accreditation Badge */}
            <div className="bg-[#101F3D] text-white p-3 rounded-xl flex items-center justify-between text-xs border border-white/10">
              <span className="flex items-center text-[#DCA43A] font-semibold">
                <Award className="w-4 h-4 mr-1.5 text-[#DCA43A]" />
                ACCA Silver Learning Partner
              </span>
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8 rounded overflow-hidden border border-white/20">
                  <Image
                    src="/assets/images/acca-silver-learning-partner.png"
                    alt="ACCA Silver Learning Partner"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
                <div className="relative w-8 h-8 rounded overflow-hidden border border-white/20">
                  <Image
                    src="/assets/images/acca-cbe-centre.png"
                    alt="ACCA Licensed CBE Centre"
                    fill
                    className="object-contain"
                    sizes="32px"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-medium text-sm">
              <Link
                href="/"
                className="px-3 py-2.5 rounded-xl bg-[#EFF6FF] text-[#2855E8] font-bold"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                All Courses
              </Link>
              <Link
                href="/results"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Results & Ranks
              </Link>
              <Link
                href="/placements"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Placements
              </Link>
              <Link
                href="/faculty"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Faculty
              </Link>
              <Link
                href="/student-testimonials"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Testimonials
              </Link>
              <Link
                href="/gallery"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Campus Life
              </Link>
              <Link
                href="/scholarships"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Scholarships
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2.5 rounded-xl bg-slate-50 text-[#14243D] hover:bg-[#EFF6FF] hover:text-[#2855E8]"
              >
                Blog
              </Link>
            </div>

            {/* Course Shortcuts */}
            <div className="pt-2 border-t border-slate-100">
              <p className="text-xs font-bold text-[#66758C] uppercase tracking-wider mb-2">
                Flagship Qualifications
              </p>
              <div className="space-y-1.5">
                <Link
                  href="/acca-coaching-chandigarh"
                  className="block px-3.5 py-2.5 rounded-xl bg-[#EFF6FF] text-[#2855E8] font-bold text-xs flex justify-between items-center border border-[#2855E8]/20"
                >
                  <span>ACCA Coaching Chandigarh</span>
                  <span className="text-[10px] bg-[#2855E8] text-white px-2 py-0.5 rounded-full font-bold">
                    Silver ALP
                  </span>
                </Link>
                <Link
                  href="/us-cma-coaching"
                  className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 text-[#14243D] font-semibold text-xs"
                >
                  US CMA Coaching (6-9 Months Fast-Track)
                </Link>
                <Link
                  href="/us-cpa-coaching"
                  className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 text-[#14243D] font-semibold text-xs"
                >
                  US CPA Coaching (AICPA Evolution)
                </Link>
                <Link
                  href="/ca-intermediate-coaching-chandigarh"
                  className="block px-3.5 py-2 rounded-xl hover:bg-slate-50 text-[#14243D] font-semibold text-xs"
                >
                  CA Intermediate Coaching (Both Groups)
                </Link>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                href="/admissions"
                className="w-full inline-flex justify-center items-center py-3 bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white rounded-xl font-bold text-sm shadow-md shadow-[#2855E8]/25"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#DCA43A]" />
                Book Free Counselling & Apply Now
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${siteConfig.contact.primaryPhoneRaw}`}
                  className="inline-flex justify-center items-center py-2.5 bg-slate-100 text-[#14243D] rounded-xl font-semibold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-[#2855E8]" />
                  Call: {siteConfig.contact.primaryPhoneRaw}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center py-2.5 bg-[#25D366] text-white rounded-xl font-semibold text-xs shadow-sm"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
