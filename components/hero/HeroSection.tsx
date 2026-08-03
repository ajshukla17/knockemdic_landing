'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, ShieldAlert, Star, CheckCircle, Clock, Video, Activity, Sparkles } from 'lucide-react';
import { EmergencyModal } from '../sos/EmergencyModal';
import { CityDropdown } from '../doctors/CityDropdown';

const HERO_CITIES = ['Mumbai', 'New Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune'];

export function HeroSection() {
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#E6F4F1]/60 via-[#FAFAFA] to-[#FAFAFA]">
        {/* Subtle Background Glows */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#0D5C53]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-32 right-10 w-80 h-80 bg-[#FF5A36]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Prop & CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Trust Tag */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0D5C53]/20 shadow-sm text-xs font-bold text-[#0D5C53]">
                <Sparkles className="w-4 h-4 text-[#FF5A36]" />
                <span>India&apos;s 24/7 Connected Healthcare Network</span>
              </div>

              {/* One-Line Value Prop Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Rapid Care, Right there .
              </h1>

              {/* Subline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
                Book top-rated verified specialists, request instant emergency ambulance dispatch with live GPS tracking, and get home lab diagnostics anywhere across India.
              </p>

              {/* Search Bar Widget */}
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 max-w-xl relative z-30">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 relative z-30">
                  <div className="sm:col-span-5 relative z-30">
                    <CityDropdown
                      selectedCity={selectedCity}
                      onSelectCity={setSelectedCity}
                      cities={HERO_CITIES}
                    />
                  </div>

                  <div className="sm:col-span-7 flex items-center px-3.5 py-3 bg-slate-50 rounded-2xl border border-slate-200/60 focus-within:border-[#0D5C53]/40 transition-colors">
                    <Search className="w-4 h-4 text-slate-400 shrink-0 mr-2.5" />
                    <input
                      type="text"
                      placeholder="Specialty (e.g. Cardiologist, Fever)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/doctors?search=${encodeURIComponent(searchQuery)}${selectedCity ? `&city=${encodeURIComponent(selectedCity)}` : ''}`}
                    className="flex-1 py-3 px-6 rounded-2xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-sm text-center shadow-md transition transform hover:scale-[1.01]"
                  >
                    Find a Doctor Near You
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsSosOpen(true)}
                    className="py-3 px-5 rounded-2xl bg-[#FF5A36] hover:bg-[#E04322] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-[#FF5A36]/30 animate-sos-pulse transition"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>How SOS Works</span>
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle className="w-4 h-4 text-[#0D5C53]" />
                  <span>100% MCI/NMC Verified Doctors</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#0D5C53]" />
                  <span>&lt; 10 Min Ambulance Dispatch</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>4.9/5 Rating (50,000+ Reviews)</span>
                </div>
              </div>
            </div>

            {/* Right Column: App Mockup Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Phone Glass Container */}
                <div className="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800 text-white overflow-hidden transform lg:rotate-1 hover:rotate-0 transition duration-500">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-4 py-2 text-[10px] text-slate-400 font-mono">
                    <span>9:41 AM</span>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>5G LIVE</span>
                    </div>
                  </div>

                  {/* App Header Inside Mockup */}
                  <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/50 mb-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-[#0D5C53] flex items-center justify-center font-bold text-xs text-white">
                        KM
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Welcome back, Rahul</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> Bandra West, Mumbai
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-[#FF5A36]/20 text-[#FF5A36] border border-[#FF5A36]/30">
                      SOS Active
                    </span>
                  </div>

                  {/* Floating Action Card 1: SOS Dispatch Card */}
                  <div className="bg-gradient-to-r from-[#FF5A36] to-[#E04322] p-4 rounded-2xl mb-3 shadow-lg text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                          Emergency SOS
                        </span>
                        <div className="text-base font-black mt-1">ICU Ambulance Unit #402</div>
                      </div>
                      <span className="text-xs font-mono font-bold bg-white/20 px-2 py-1 rounded-lg">
                        ETA 5m
                      </span>
                    </div>
                    <div className="mt-3 flex items-center text-xs space-x-2 text-white/90">
                      <Activity className="w-4 h-4 animate-pulse" />
                      <span>Live Paramedic Tracking Enabled</span>
                    </div>
                  </div>

                  {/* Floating Doctor Booking Card 2 */}
                  <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-700/40 border border-emerald-500/30 overflow-hidden flex items-center justify-center font-bold text-emerald-300">
                          DS
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Dr. Ananya Sharma</div>
                          <div className="text-[10px] text-slate-400">Cardiologist • Apollo Mumbai</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                        <Video className="w-3 h-3" /> Online Now
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-1 border-t border-slate-700/40 text-[11px]">
                      <span className="text-slate-400">Consultation Fee</span>
                      <span className="font-bold text-white">₹500</span>
                    </div>
                  </div>

                  {/* Bottom App Navigation */}
                  <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-4 text-center text-[10px] text-slate-400">
                    <div className="text-[#0D5C53] font-bold">Home</div>
                    <div>Doctors</div>
                    <div>Ambulance</div>
                    <div>Reports</div>
                  </div>
                </div>

                {/* Floating Badge Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float hidden sm:flex">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0D5C53] flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">AI Symptom Triage</div>
                    <div className="text-[10px] text-slate-500">Free 60-second health check</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Modal */}
      <EmergencyModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
    </>
  );
}
