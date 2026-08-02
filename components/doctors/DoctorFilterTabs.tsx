'use client';

import React, { useState } from 'react';
import { Doctor } from '@/lib/types';
import { DoctorCard } from './DoctorCard';
import { Filter, Stethoscope } from 'lucide-react';

interface DoctorFilterTabsProps {
  initialDoctors: Doctor[];
}

const SPECIALTIES = [
  'All',
  'General Physician',
  'Cardiologist',
  'Pediatrician',
  'Neurologist',
  'Dermatologist',
  'Orthopedic',
];

export function DoctorFilterTabs({ initialDoctors }: DoctorFilterTabsProps) {
  const [activeSpecialty, setActiveSpecialty] = useState('All');

  const filteredDoctors =
    activeSpecialty === 'All'
      ? initialDoctors
      : initialDoctors.filter(
          (doc) => doc.specialization.toLowerCase() === activeSpecialty.toLowerCase()
        );

  return (
    <div className="space-y-8">
      {/* Specialty Pill Filters */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center space-x-2 shrink-0 pr-2 border-r border-slate-200">
          <Filter className="w-4 h-4 text-[#0D5C53]" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Specialty:</span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto py-1">
          {SPECIALTIES.map((spec) => {
            const isActive = activeSpecialty === spec;
            return (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-sm ${
                  isActive
                    ? 'bg-[#0D5C53] text-white shadow-md shadow-[#0D5C53]/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {spec}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Doctor Cards */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-[#0D5C53] rounded-2xl flex items-center justify-center mx-auto">
            <Stethoscope className="w-7 h-7" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">
            No doctors found for &quot;{activeSpecialty}&quot;
          </h4>
          <p className="text-xs text-slate-500">
            We are onboarding specialists in this category every day. Book an appointment or request an emergency consult with top hospital doctors.
          </p>
          <button
            onClick={() => setActiveSpecialty('All')}
            className="px-5 py-2.5 rounded-xl bg-[#0D5C53] text-white font-bold text-xs hover:bg-[#063B35] transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
