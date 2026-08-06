import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Stethoscope, Ambulance, TestTube2, Bot, ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Clock, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Services | Doctor Consults, Ambulance SOS & Home Labs',
  description:
    'Explore KnockMedic healthcare services: instant doctor booking app, 24/7 ambulance booking online, doorstep lab tests at home & AI triage.',
};

export default function ServicesPage() {
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
                <span>Integrated Healthcare Suite</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Our Healthcare Services
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Everything you and your family need for routine consultations, emergency dispatch, doorstep diagnostics, and health guidance — in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Service Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Section 1: Doctor Consultations */}
          <section id="doctor-consultations" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F4F1] text-[#0D5C53] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D5C53]">Telemedicine & Clinic Visit</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">Doctor Consultations</h2>
                </div>
              </div>

              <Link
                href="/doctors"
                className="inline-flex items-center space-x-2 py-3 px-6 rounded-2xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-xs shadow-md transition self-start md:self-auto"
              >
                <span>Find & Book Doctors</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-100 text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">What It Does</h3>
                <p className="text-slate-600 leading-relaxed">
                  Connects you with NMC-registered medical practitioners across 30+ specialties for instant HD video consults or guaranteed clinic appointment slots.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How To Use It</h3>
                <p className="text-slate-600 leading-relaxed">
                  Search by specialty or city, select your preferred time slot, pay transparent upfront fees, and join the encrypted call or visit the clinic.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Who It&apos;s For</h3>
                <p className="text-slate-600 leading-relaxed">
                  Patients seeking second opinions, routine health checkups, chronic disease management, fever consultations, or pediatric care without clinic queues.
                </p>
              </div>
            </div>

            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0D5C53]">Key Features & Safeguards</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                  <span>NMC verified doctor credentials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                  <span>Valid digital e-prescriptions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                  <span>100% money-back no-show guarantee</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Ambulance SOS */}
          <section id="ambulance-sos" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-red-950/60 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF5A36] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#FF5A36]/30 animate-sos-pulse">
                  <Ambulance className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">Emergency Response</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">24/7 Ambulance SOS</h2>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="tel:108"
                  className="py-3 px-5 rounded-2xl bg-[#FF5A36] hover:bg-[#E04322] text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 108 Direct</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-800 text-sm text-slate-300">
              <div className="space-y-2">
                <h3 className="font-bold text-white text-base">What It Does</h3>
                <p className="leading-relaxed">
                  Dispatches nearby Advanced ICU or Basic Life Support (BLS) ambulances using real-time satellite GPS tracking integrated with the national 108 network.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-white text-base">How To Use It</h3>
                <p className="leading-relaxed">
                  Tap the SOS button in the app or website header, select your vehicle requirement, and GPS coordinates are auto-transmitted to the nearest paramedic unit.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-white text-base">Who It&apos;s For</h3>
                <p className="leading-relaxed">
                  Critical medical emergencies including chest pain, stroke symptoms, acute trauma, severe respiratory distress, or urgent hospital transfers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/60 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">Emergency Performance Metrics</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-200">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#FF5A36]" />
                  <span>Average ETA under 10 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-[#FF5A36]" />
                  <span>Ventilator & oxygen paramedic crew</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A36]" />
                  <span>Direct hospital ER admission coordination</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Lab Tests */}
          <section id="lab-tests" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                  <TestTube2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">Doorstep Diagnostics</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">Lab Tests & Reports</h2>
                </div>
              </div>

              <Link
                href="/doctors"
                className="inline-flex items-center space-x-2 py-3 px-6 rounded-2xl bg-slate-900 hover:bg-cyan-700 text-white font-bold text-xs shadow-md transition self-start md:self-auto"
              >
                <span>Book Diagnostic Test</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-100 text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">What It Does</h3>
                <p className="text-slate-600 leading-relaxed">
                  Offers NABL-accredited blood, urine, and pathology lab packages with certified phlebotomists visiting your home for painless sample collection.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How To Use It</h3>
                <p className="text-slate-600 leading-relaxed">
                  Select a test package (e.g. Full Body Checkup, Diabetes, Thyroid), choose a morning time slot, and receive digital smart reports in 6-12 hours.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Who It&apos;s For</h3>
                <p className="text-slate-600 leading-relaxed">
                  Elderly family members, busy working professionals, or anyone requiring periodic routine blood monitoring without visiting crowded lab centers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: AI Symptom Triage */}
          <section id="ai-triage" className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Digital Health Assistant</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">AI Symptom Triage</h2>
                </div>
              </div>

              <Link
                href="/doctors"
                className="inline-flex items-center space-x-2 py-3 px-6 rounded-2xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-xs shadow-md transition self-start md:self-auto"
              >
                <span>Try AI Symptom Check</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-slate-100 text-sm">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">What It Does</h3>
                <p className="text-slate-600 leading-relaxed">
                  Evaluates your symptoms in 60 seconds using clinically validated decision trees to advise whether home care, doctor consult, or emergency SOS is required.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">How To Use It</h3>
                <p className="text-slate-600 leading-relaxed">
                  Answer a few simple questions in Hindi or English regarding your chief complaint, duration, and severity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Who It&apos;s For</h3>
                <p className="text-slate-600 leading-relaxed">
                  Anyone feeling unwell who wants quick, confidential guidance on whether their symptoms require immediate medical attention.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
