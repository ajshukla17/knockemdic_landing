import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Search, CalendarCheck, Video, FileText, Ambulance, Navigation, ShieldAlert, TestTube2, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Patient User Journeys',
  description:
    'Learn how to book online doctor consultations, request emergency 24/7 ambulance dispatch, and order home lab test packages on KnockMedic.',
};

export default function HowItWorksPage() {
  const doctorSteps = [
    {
      number: '01',
      icon: Search,
      title: 'Search & Choose Specialist',
      description: 'Filter 15,000+ verified doctors by specialty, city, clinic location, fees, or instant video call availability.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Select Time Slot & Book',
      description: 'Choose your preferred date and slot for video or in-clinic consultation. Pay transparent upfront fees via UPI or cards.',
    },
    {
      number: '03',
      icon: Video,
      title: 'Consult via HD Video or In-Clinic',
      description: 'Join an encrypted HD video call or visit the clinic. Past medical history and reports are auto-synced securely.',
    },
    {
      number: '04',
      icon: FileText,
      title: 'Digital E-Prescription & Follow-up',
      description: 'Receive an official NMC-compliant e-prescription valid at all Indian pharmacies, with instant follow-up scheduling.',
    },
  ];

  const sosSteps = [
    {
      number: '01',
      icon: ShieldAlert,
      title: 'One-Tap SOS Trigger',
      description: 'Press the SOS button on the app or website. Select Advanced ICU or Basic Life Support ambulance requirement.',
    },
    {
      number: '02',
      icon: Navigation,
      title: 'Satellite GPS Coordinate Lock',
      description: 'Your location is transmitted directly to the national 108 emergency network and nearby paramedic dispatch units.',
    },
    {
      number: '03',
      icon: Ambulance,
      title: 'Live Paramedic Dispatch (< 10 min ETA)',
      description: 'Track the incoming ambulance vehicle in real-time. Paramedics contact you with pre-arrival medical instructions.',
    },
    {
      number: '04',
      icon: CheckCircle2,
      title: 'Priority ER Hospital Admission',
      description: 'Paramedics transfer patient medical vitals to destination hospital ER staff for immediate care upon arrival.',
    },
  ];

  const labSteps = [
    {
      number: '01',
      icon: TestTube2,
      title: 'Select Diagnostic Package',
      description: 'Choose from single blood tests or full body health packages from NABL-accredited labs (Thyrocare, Dr. Lal PathLabs).',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Schedule Home Sample Collection',
      description: 'Pick a convenient morning slot for a certified phlebotomist to visit your home with sterile collection kits.',
    },
    {
      number: '03',
      icon: FileText,
      title: 'Smart Digital Report Delivery',
      description: 'Receive verified digital lab reports on your phone in 6 to 12 hours, complete with AI health biomarker highlights.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        {/* Page Header */}
        <div className="bg-white border-b border-slate-200/80 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#FF5A36]" />
                <span>Seamless Patient Journeys</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                How KnockMedic Works
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Step-by-step guides for booking verified doctors, triggering 24/7 emergency ambulance dispatch, and ordering doorstep diagnostic tests.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          {/* Journey 1: Booking a Doctor */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
              <div>
                <span className="text-xs font-bold text-[#0D5C53] uppercase tracking-wider">Journey 01</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Booking a Doctor Appointment
                </h2>
              </div>
              <Link
                href="/doctors"
                className="inline-flex items-center space-x-1 text-xs font-bold text-[#0D5C53] hover:underline"
              >
                <span>Find Doctors Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctorSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#0D5C53] text-white flex items-center justify-center font-bold">
                          <Icon className="w-6 h-6 text-emerald-300" />
                        </div>
                        <span className="text-2xl font-black text-slate-300 font-mono">{step.number}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Journey 2: Emergency SOS */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF5A36] uppercase tracking-wider">Journey 02</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  24/7 Emergency Ambulance SOS
                </h2>
              </div>
              <a
                href="tel:108"
                className="inline-flex items-center space-x-1 text-xs font-bold text-[#FF5A36] hover:underline"
              >
                <span>Call 108 Direct</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sosSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900 text-white rounded-3xl p-6 border border-red-950/60 shadow-lg space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#FF5A36] text-white flex items-center justify-center font-bold">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black text-slate-700 font-mono">{step.number}</span>
                      </div>
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Journey 3: Home Lab Tests */}
          <section className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">Journey 03</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Home Lab Sample Collection
                </h2>
              </div>
              <Link
                href="/services#lab-tests"
                className="inline-flex items-center space-x-1 text-xs font-bold text-cyan-700 hover:underline"
              >
                <span>View Lab Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {labSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold">
                          <Icon className="w-6 h-6 text-cyan-700" />
                        </div>
                        <span className="text-2xl font-black text-slate-300 font-mono">{step.number}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
