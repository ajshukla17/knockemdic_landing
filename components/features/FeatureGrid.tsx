'use client';

import React, { useState } from 'react';
import { Stethoscope, Ambulance, TestTube2, Bot, ArrowUpRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { EmergencyModal } from '../sos/EmergencyModal';

export function FeatureGrid() {
  const [isSosOpen, setIsSosOpen] = useState(false);

  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
              <span>Complete Healthcare Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One Platform for Your Entire Care Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Integrated medical services designed specifically for Indian patients and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Doctor Consultations (Teal Accent) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D5C53]/5 rounded-bl-full transition group-hover:bg-[#0D5C53]/10" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E6F4F1] text-[#0D5C53] flex items-center justify-center mb-6">
                  <Stethoscope className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C53] bg-[#E6F4F1] px-3 py-1 rounded-full">
                  Telemedicine & Clinic
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                  Doctor Consultations
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Use India&apos;s leading doctor appointment booking app. Book instant video calls or clinic visits with top specialists and find nearby hospital doctors with zero waiting times.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                    <span>Instant video consults within 15 minutes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                    <span>Verified hospital doctors from Apollo, Max & Fortis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                    <span>Digital e-prescriptions valid nationwide</span>
                  </li>
                </ul>
              </div>

              <a
                href="#doctors"
                className="inline-flex items-center justify-between py-3 px-5 rounded-2xl bg-slate-900 hover:bg-[#0D5C53] text-white text-xs font-bold transition"
              >
                <span>Find Doctors Near You</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 2: Ambulance SOS (Emergency Coral Accent) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 border border-red-950/60 shadow-xl relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A36]/10 rounded-bl-full transition group-hover:bg-[#FF5A36]/20" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FF5A36] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#FF5A36]/30 animate-sos-pulse">
                  <Ambulance className="w-7 h-7" />
                </div>

                <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-[#FF5A36] px-3 py-1 rounded-full">
                  24/7 Emergency Dispatch
                </span>

                <h3 className="text-2xl font-bold text-white mt-3 mb-2 flex items-center gap-2">
                  <span>Ambulance SOS</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  One-tap emergency ambulance dispatch integrated with national 108 network. Satellite live GPS tracking with Advanced ICU and BLS options.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-200 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A36]" />
                    <span>Average response time under 10 minutes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A36]" />
                    <span>Ventilator & ICU paramedic support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A36]" />
                    <span>Direct priority hospital admission coordination</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsSosOpen(true)}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#FF5A36] hover:bg-[#E04322] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-[#FF5A36]/40 transition transform active:scale-98"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Test Ambulance SOS Dispatch</span>
              </button>
            </div>

            {/* Card 3: Lab Tests & Reports (Indigo/Cyan Accent) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full transition group-hover:bg-cyan-500/10" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-6">
                  <TestTube2 className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full">
                  Diagnostics at Home
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                  Lab Tests & Diagnostics
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Schedule certified phlebotomists for doorstep sample collection. Get NABL-accredited smart digital lab reports in 6 to 12 hours.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>Free home sample collection across 50+ cities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>Thyrocare & Dr. Lal PathLabs partners</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    <span>AI report summary highlighting key health biomarkers</span>
                  </li>
                </ul>
              </div>

              <a
                href="#services"
                className="inline-flex items-center justify-between py-3 px-5 rounded-2xl bg-slate-900 hover:bg-cyan-700 text-white text-xs font-bold transition"
              >
                <span>Book Lab Test Package</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Card 4: AI Symptom Triage (Emerald/Purple Accent) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full transition group-hover:bg-emerald-500/10" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                  <Bot className="w-7 h-7" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Instant AI Assistant
                </span>

                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                  AI Symptom Triage
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Check symptoms in Hindi or English within 60 seconds. Our medical AI analyzes your condition and recommends whether you need self-care, a doctor consult, or SOS emergency attention.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Multilingual support (Hindi, English, Tamil, Telugu)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Clinically validated decision triage engine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>100% Private & Confidential</span>
                  </li>
                </ul>
              </div>

              <a
                href="#services"
                className="inline-flex items-center justify-between py-3 px-5 rounded-2xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold transition"
              >
                <span>Try AI Health Checker</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Modal */}
      <EmergencyModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
    </>
  );
}
