'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag?: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'doctor-booking',
    tag: 'Doctor Booking App',
    question: 'How do I book a doctor appointment online on KnockMedic (doctor appointment kaise kare)?',
    answer:
      'Booking a doctor appointment on KnockMedic takes less than 60 seconds. Search by medical specialty (e.g. Cardiologist, Dermatologist, General Physician) or city, filter by instant video consultation or clinic visit, select your convenient time slot, and pay transparent fees online via UPI or card. You will instantly receive booking confirmation with a direct join link or clinic directions.',
  },
  {
    id: 'ambulance-sos',
    tag: '24/7 Ambulance Online',
    question: 'How does 24/7 online ambulance booking and emergency SOS work (ambulance booking online)?',
    answer:
      'In medical emergencies, tap the red SOS button in the KnockMedic app or website header. Using satellite GPS tracking, your location is immediately routed to the nearest paramedic dispatch team and national emergency network (108). Our average ambulance arrival ETA is under 10 minutes, with options for ICU life-support ventilators or Basic Life Support (BLS).',
  },
  {
    id: 'home-lab-tests',
    tag: 'Home Diagnostics',
    question: 'Can I get lab tests collected at home with digital reports (ghar pe lab test)?',
    answer:
      'Yes! KnockMedic offers NABL-accredited diagnostic lab packages with doorstep sample collection across 50+ Indian cities. Certified phlebotomists collect blood or urine samples at your scheduled morning slot, and smart digital reports highlighting key health biomarkers are delivered to your phone in 6 to 12 hours.',
  },
  {
    id: 'verified-doctors',
    tag: 'NMC Verification',
    question: 'Are all doctors and hospitals on KnockMedic verified?',
    answer:
      'Absolutely. Every practitioner on KnockMedic is cross-verified against National Medical Commission (NMC) and State Medical Council official databases before joining. We partner exclusively with accredited clinics and top hospital networks including Apollo, Fortis, Max, and Manipal.',
  },
  {
    id: 'ai-triage',
    tag: 'Instant Consultation',
    question: 'How does AI Symptom Triage help with instant health guidance (turant doctor consultation)?',
    answer:
      'KnockMedic\'s AI Symptom Triage analyzes your symptoms in Hindi or English using clinically validated decision pathways in just 60 seconds. It helps you understand whether your condition requires home rest, a routine doctor consult, or urgent emergency ambulance dispatch.',
  },
  {
    id: 'hospital-finder',
    tag: 'Hospital Finder',
    question: 'How do I locate a nearby hospital finder with ER availability?',
    answer:
      'KnockMedic connects directly with partner hospital emergency rooms (ERs). When requesting an emergency ambulance, the app automatically alerts destination hospital ER staff to prepare trauma, ICU, or cardiac care bays prior to patient arrival.',
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('doctor-booking');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#FF5A36]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Know About KnockMedic
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Clear answers about online doctor appointments, emergency 24/7 ambulance dispatch, home lab test bookings, and AI health triage across India.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FAFAFA] rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C53]"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {faq.tag && (
                      <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#E6F4F1] text-[#0D5C53]">
                        {faq.tag}
                      </span>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0D5C53] text-white border-[#0D5C53]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#E6F4F1]/60 border border-[#0D5C53]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-[#FF5A36]" />
              <span>Have more healthcare questions?</span>
            </div>
            <p className="text-xs text-slate-600">
              Our medical support desk is active 24/7 across India.
            </p>
          </div>

          <a
            href="mailto:knockmedic@gmail.com"
            className="py-2.5 px-5 rounded-xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-xs shadow-sm transition shrink-0"
          >
            Contact Health Support
          </a>
        </div>
      </div>
    </section>
  );
}
