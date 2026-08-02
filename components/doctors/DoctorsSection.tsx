import React from 'react';
import { fetchDoctors } from '@/lib/api';
import { DoctorFilterTabs } from './DoctorFilterTabs';
import { UserCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export async function DoctorsSection() {
  const doctors = await fetchDoctors(8);

  return (
    <section id="doctors" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>Live Verified Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Consult Top Doctors Online or In-Person
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              Connect with India&apos;s leading practitioners with verified credentials, real patient ratings, and transparent fees.
            </p>
          </div>

          <Link
            href="#doctors"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-[#0D5C53] hover:text-[#063B35] group"
          >
            <span>View All 15,000+ Doctors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Filter Tabs & Grid */}
        <DoctorFilterTabs initialDoctors={doctors} />
      </div>
    </section>
  );
}
