"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Camera, ArrowRight, Sparkles } from "lucide-react";
import { galleryData } from "@/data/gallery";

export default function CampusGalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Classroom", "Campus", "Events", "Workshop"];

  const filteredItems = selectedCategory === "All"
    ? galleryData.slice(0, 4)
    : galleryData.filter((item) => item.category === selectedCategory).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20">
              <Camera className="w-3.5 h-3.5" />
              <span>Campus Life & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              A Vibrant Space for <br />
              <span className="font-editorial text-[#2855E8]">Focused Financial Learning</span>
            </h2>
            <p className="text-sm sm:text-base text-[#66758C]">
              Take a look inside our high-tech computer exam facilities, interactive lecture amphitheaters, and academic workshops at Godrej Eternia.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/gallery"
              className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#101F3D] transition-colors group"
            >
              <span>Explore Complete Campus Gallery</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#2855E8] text-white shadow-md shadow-[#2855E8]/25"
                  : "bg-white text-[#14243D] hover:bg-[#EFF6FF] border border-slate-200/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden border-2 border-white bg-[#101F3D] shadow-lg shadow-[#2855E8]/5 group ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 h-72 sm:h-96 lg:h-[480px]" : "h-72 sm:h-[228px]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/90 via-[#101F3D]/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#101F3D]/85 backdrop-blur-md text-[#DCA43A] border border-[#DCA43A]/30 text-[11px] font-bold shadow">
                  {item.category}
                </span>
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-bold leading-tight">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
