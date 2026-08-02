'use client';

import React from 'react';
import { UserCheck, Building2, Ambulance, Star, ShieldCheck, Award } from 'lucide-react';

export function TrustStrip() {
  const stats = [
    {
      icon: UserCheck,
      number: '15,000+',
      label: 'Verified Doctors',
      sublabel: 'Across 30+ Specialties',
    },
    {
      icon: Ambulance,
      number: '< 10 Mins',
      label: 'Average SOS ETA',
      sublabel: 'GPS Ambulance Dispatch',
    },
    {
      icon: Building2,
      number: '50+ Cities',
      label: 'PAN India Coverage',
      sublabel: 'Tier 1 & Tier 2 Hubs',
    },
    {
      icon: Star,
      number: '4.9 / 5.0',
      label: 'Patient Rating',
      sublabel: 'From 50,000+ Consultations',
    },
  ];

  const partners = [
    'Apollo Hospitals',
    'Fortis Healthcare',
    'Max Healthcare',
    'Manipal Hospitals',
    'Narayana Health',
    'Medanta',
    'Thyrocare Labs',
    'Dr. Lal PathLabs',
  ];

  return (
    <section className="bg-[#063B35] text-white py-12 border-y border-emerald-950/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E6F4F1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-emerald-800/60">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-900/30 border border-emerald-800/40 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-emerald-700/40 text-emerald-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-emerald-200 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-emerald-400/80">{stat.sublabel}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee Partner Strip */}
        <div className="pt-8">
          <div className="flex items-center justify-center space-x-2 text-center text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-[#FF5A36]" />
            <span>Trusted By India&apos;s Leading Hospital & Lab Networks</span>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm sm:text-base font-bold text-emerald-100/80 hover:text-white transition cursor-default"
                >
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
