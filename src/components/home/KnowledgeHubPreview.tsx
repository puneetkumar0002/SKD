"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import { blogPostsData, BlogPost } from "@/data/blog";

export default function KnowledgeHubPreview() {
  const featuredPost = blogPostsData[0];
  const secondaryPosts = blogPostsData.slice(1, 3);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#EFF6FF] text-[#2855E8] rounded-full text-xs font-bold border border-[#2855E8]/20 shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#2855E8]" />
              <span>Articles & Industry Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101F3D] tracking-tight">
              Knowledge Hub & <br />
              <span className="font-editorial text-[#2855E8]">Career Intelligence</span>
            </h2>
            <p className="text-sm sm:text-base text-[#66758C]">
              Read authoritative guides on exam strategies, Big 4 career roadmaps, syllabus updates, and global accounting salaries.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-bold text-[#2855E8] hover:text-[#3979FF] transition-colors group"
            >
              <span>Explore All Articles & Guides</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Editorial Layout: 1 Featured + 2 Secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Article (7 cols) */}
          {featuredPost && (
            <div className="lg:col-span-7 flex">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="w-full bg-[#F8FAFF] rounded-3xl overflow-hidden border border-[#E2E8F5] hover:border-[#2855E8]/40 shadow-xs hover:shadow-card-blue transition-all duration-300 hover:-translate-y-1 group flex flex-col"
              >
                <div className="relative h-64 sm:h-80 w-full bg-[#101F3D] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101F3D]/85 via-[#101F3D]/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#DCA43A] text-[#101F3D] text-xs font-bold uppercase tracking-wider shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-3 text-xs text-slate-200 mb-1">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-[#79B8FF]" />
                        {featuredPost.date}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-[#79B8FF]" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#101F3D] group-hover:text-[#2855E8] transition-colors leading-snug">
                      {featuredPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#66758C] mt-2 line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F5] flex items-center text-sm font-bold text-[#2855E8]">
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Secondary Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {secondaryPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-[#F8FAFF] rounded-3xl p-6 border border-[#E2E8F5] hover:border-[#2855E8]/40 shadow-xs hover:shadow-card-blue transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between flex-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2855E8] border border-[#2855E8]/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#66758C] flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-[#66758C]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#101F3D] group-hover:text-[#2855E8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#66758C] mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F5] flex items-center justify-between text-xs font-bold text-[#14243D] mt-4">
                  <span className="text-[#66758C] font-medium">{post.date}</span>
                  <span className="text-[#2855E8] group-hover:translate-x-1 transition-transform flex items-center">
                    Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
