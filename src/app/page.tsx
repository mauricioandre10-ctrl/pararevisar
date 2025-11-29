import { Hero } from '@/components/hero';
import { CourseShowcase } from '@/components/course-showcase';
import { Investment } from '@/components/investment';
import { Testimonials } from '@/components/testimonials';
import { ImageSlider } from '@/components/image-slider';
import { EnrollmentProcess } from '@/components/enrollment-process';
import { AboutMentor } from '@/components/about-mentor';
import { ForCompanies } from '@/components/for-companies';
import { Faq } from '@/components/faq';
import { InspiringClosing } from '@/components/inspiring-closing';

export default function Home() {
  return (
    <main className="flex-1 w-full">
      <Hero />
      <CourseShowcase />
      <Investment />
      <Testimonials />
      <ImageSlider />
      <EnrollmentProcess />
      <AboutMentor />
      <ForCompanies />
      <Faq />
      <InspiringClosing />
    </main>
  );
}
