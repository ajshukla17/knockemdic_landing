import React from 'react';
import { Search, CalendarCheck, Video, FileText, Sparkles } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Search & Choose',
      description: 'Filter 15,000+ verified doctors by specialty, city, experience, or instant video availability.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Book Instantly',
      description: 'Select your preferred time slot for video consultation or in-clinic visit with transparent upfront fees.',
    },
    {
      number: '03',
      icon: Video,
      title: 'Consult & Diagnose',
      description: 'Join encrypted HD video call or visit clinic with full medical history auto-synced securely.',
    },
    {
      number: '04',
      icon: FileText,
      title: 'Digital Prescription',
      description: 'Receive digital prescriptions, order prescribed lab tests, and track follow-ups directly in the app.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FF5A36]" />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How KnockMedic Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Designed for stress-free healthcare access — get expert care in less than 3 minutes.
          </p>
        </div>

        {/* Horizontal Process Flow on Desktop */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#0D5C53]/20 via-[#0D5C53] to-[#0D5C53]/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAFAFA] rounded-3xl p-6 border border-slate-200/80 hover:border-[#0D5C53]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#0D5C53] text-white flex items-center justify-center shadow-md shadow-[#0D5C53]/20 group-hover:scale-110 transition transform">
                        <Icon className="w-6 h-6 text-emerald-300" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 font-mono">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0D5C53] transition">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-[#0D5C53] flex items-center space-x-1">
                    <span>Step {step.number} of 04</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
