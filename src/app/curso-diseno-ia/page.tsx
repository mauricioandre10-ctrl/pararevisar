'use client';

import { CourseDetails } from "@/components/graphic-design-course/course-details";
import { HeroSection } from "@/components/graphic-design-course/hero-section";
import { TargetAudience } from "@/components/graphic-design-course/target-audience";

export default function DisenoIaPage() {
  return (
    <main className="flex-1 w-full relative">
      <HeroSection />
      <CourseDetails />
      <TargetAudience />
    </main>
  );
}
