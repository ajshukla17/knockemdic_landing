import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { fetchDoctors } from '@/lib/api';
import { FullDoctorListing } from '@/components/doctors/FullDoctorListing';
import { DoctorsSkeleton } from '@/components/doctors/DoctorsSkeleton';
import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import { UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find & Book Top Verified Doctors India | KnockMedic',
  description:
    'Search and book appointments with 15,000+ verified cardiologists, pediatricians, dermatologists, physicians, and specialists across India.',
};

export default async function DoctorsPage() {
  const doctors = await fetchDoctors(20);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        {/* Page Header */}
        <div className="bg-white border-b border-slate-200/80 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>NMC / State Council Verified Practitioners</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Find Doctors Near You
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with top practitioners across 30+ medical specialties. Filter by city, consultation mode (video or in-clinic), and real patient ratings.
              </p>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Suspense fallback={<DoctorsSkeleton />}>
            <FullDoctorListing initialDoctors={doctors} />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
