import React, { Suspense } from 'react';
import { Navbar } from '@/components/nav/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { DoctorsSection } from '@/components/doctors/DoctorsSection';
import { DoctorsSkeleton } from '@/components/doctors/DoctorsSkeleton';
import { HowItWorks } from '@/components/how-it-works/HowItWorks';
import { FeatureGrid } from '@/components/features/FeatureGrid';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { Footer } from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <HeroSection />

      <TrustStrip />

      <Suspense fallback={
        <div className="py-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DoctorsSkeleton />
          </div>
        </div>
      }>
        <DoctorsSection />
      </Suspense>

      <HowItWorks />

      <FeatureGrid />

      <Testimonials />

      <Footer />
    </main>
  );
}
