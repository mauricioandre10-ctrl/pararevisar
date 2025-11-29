'use client';

import { AboutMentor } from '@/components/about-mentor';
import { Faq } from '@/components/faq';
import { HeroSection } from '@/components/no-code-course/hero-section';
import { WhatYouWillAchieveSection } from '@/components/no-code-course/what-you-will-achieve-section';
import { ForWhoSection } from '@/components/no-code-course/for-who-section';
import { WhatWeDoSection } from '@/components/no-code-course/what-we-do-section';
import { MethodSection } from '@/components/no-code-course/method-section';
import { PracticalInfoSection } from '@/components/no-code-course/practical-info-section';
import { FinalCTASection } from '@/components/no-code-course/final-cta-section';


export default function NoCodePage() {
  return (
    <main className="flex-1 w-full relative">
      <HeroSection />
      <WhatYouWillAchieveSection />
      <ForWhoSection />
      <WhatWeDoSection />
      <MethodSection />
      <AboutMentor id="mentor" />
      <PracticalInfoSection />
      <Faq />
      <FinalCTASection />
    </main>
  );
}
