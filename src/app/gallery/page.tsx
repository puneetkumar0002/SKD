"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { galleryData, GalleryItem } from "@/data/gallery";
import { Building, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ["All", "Classroom", "Seminars & Events", "Campus Life", "Corporate Workshops"];

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <Breadcrumb items={[{ label: "Campus Life & Gallery" }]} />

      <div className="space-y-12 pb-20">
        <section className="bg-gradient-to-b from-[#F8FAFF] via-[#EFF6FF]/60 to-white py-14 border-b border-[#E2E8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-semibold mb-3 border border-[#2855E8]/20">
              <Building className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>Godrej Eternia Campus Life</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Life at SKD Group of Institutions
            </h1>
            <p className="text-base text-[#66758C] mt-3 leading-relaxed">
              Explore authentic glimpses into our daily classroom lectures, computer-based exam practice sessions, student seminars, and ranker celebrations in Chandigarh.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[#2855E8] to-[#467FFF] text-white shadow-md shadow-blue-500/25"
                      : "bg-white text-[#66758C] hover:bg-[#EFF6FF] border border-[#E2E8F5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden shadow-card-blue bg-white border border-[#E2E8F5] hover:border-[#2855E8]/40 h-72 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/90 via-[#101F3D]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DCA43A] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full bg-[#101F3D] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="relative h-[320px] sm:h-[480px] w-full bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="p-6 text-white bg-[#101F3D] space-y-1">
                <span className="text-xs font-bold text-[#DCA43A] uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
