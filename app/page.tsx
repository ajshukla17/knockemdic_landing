import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/nav/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { TrustStrip } from '@/components/trust/TrustStrip';
import { DoctorsSection } from '@/components/doctors/DoctorsSection';
import { DoctorsSkeleton } from '@/components/doctors/DoctorsSkeleton';
import { HowItWorks } from '@/components/how-it-works/HowItWorks';
import { FeatureGrid } from '@/components/features/FeatureGrid';
import { Testimonials } from '@/components/testimonials/Testimonials';
import { FaqSection } from '@/components/faq/FaqSection';
import { Footer } from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'KnockMedic – Doctors, Hospitals, Lab Tests & Ambulance Booking Online in India',
  description:
    'Book doctor appointments online, request 24/7 emergency ambulance SOS, and schedule home lab tests across India on KnockMedic.',
};

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

        <FaqSection />

        <Footer />
      </main>
  );
}
