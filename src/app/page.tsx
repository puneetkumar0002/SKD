import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CredibilityMarqueeSection from "@/components/home/CredibilityMarqueeSection";
import InteractiveCourseShowcase from "@/components/home/InteractiveCourseShowcase";
import WhyChooseStorytelling from "@/components/home/WhyChooseStorytelling";
import LearningExperienceSection from "@/components/home/LearningExperienceSection";
import ResultsAchievementSection from "@/components/home/ResultsAchievementSection";
import CareerPathwaysSection from "@/components/home/CareerPathwaysSection";
import FacultySection from "@/components/home/FacultySection";
import StudentSuccessSection from "@/components/home/StudentSuccessSection";
import CampusGalleryPreview from "@/components/home/CampusGalleryPreview";
import KnowledgeHubPreview from "@/components/home/KnowledgeHubPreview";
import PremiumCounsellingCTA from "@/components/home/PremiumCounsellingCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: CINEMATIC HERO */}
      <HeroSection />

      {/* SECTION 2: BRAND CREDIBILITY & HIRING PARTNERS MARQUEE */}
      <CredibilityMarqueeSection />

      {/* SECTION 3: IMMERSIVE INTERACTIVE COURSE SHOWCASE */}
      <InteractiveCourseShowcase />

      {/* SECTION 4: WHY STUDENTS CHOOSE SKD (STORYTELLING) */}
      <WhyChooseStorytelling />

      {/* SECTION 5: THE SKD LEARNING EXPERIENCE (CLASSROOM & LAB IMMERSION) */}
      <LearningExperienceSection />

      {/* SECTION 6: RESULTS AND VERIFIED ACHIEVEMENTS */}
      <ResultsAchievementSection />

      {/* SECTION 7: INTERACTIVE CAREER PATHWAYS */}
      <CareerPathwaysSection />

      {/* SECTION 8: FACULTY EXPERIENCE & LEAD MENTORS */}
      <FacultySection />

      {/* SECTION 9: STUDENT SUCCESS STORIES & TESTIMONIALS */}
      <StudentSuccessSection />

      {/* SECTION 10: CAMPUS LIFE & ENVIRONMENT GALLERY */}
      <CampusGalleryPreview />

      {/* SECTION 11: KNOWLEDGE HUB & FINANCE GUIDES */}
      <KnowledgeHubPreview />

      {/* SECTION 12: PREMIUM COUNSELLING CTA & ADMISSIONS FORM */}
      <PremiumCounsellingCTA />
    </div>
  );
}
