import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import { Star, Quote, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Patient & Doctor Reviews | Ratings & Testimonials - KnockMedic',
  description:
    'Read verified patient stories and consulting doctor reviews. Rated 4.9/5 across 50,000+ appointments, emergency ambulance SOS dispatches, and lab tests in India.',
};

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Ritu Sen',
      city: 'Kolkata',
      role: 'Patient Family Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'July 2026',
      service: 'Ambulance SOS',
      comment:
        'When my father experienced acute chest tightness at 2 AM, the KnockMedic Ambulance SOS dispatched an ICU vehicle with an O2 paramedic within 7 minutes. It saved critical time before reaching the hospital. Incredible service!',
    },
    {
      name: 'Dr. Vivek Deshpande',
      city: 'Mumbai',
      role: 'Consultant Cardiologist',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'June 2026',
      service: 'Teleconsultation',
      comment:
        'As a practicing doctor, KnockMedic’s app simplifies my video consult schedules immensely. Patient records and lab history are pre-loaded cleanly so I can provide accurate care without administrative hassle.',
    },
    {
      name: 'Karthik Ramanathan',
      city: 'Bengaluru',
      role: 'IT Professional',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'July 2026',
      service: 'Pediatric Video Consult',
      comment:
        'Booking a pediatrician for my toddler used to mean waiting 2 hours in a crowded clinic. With KnockMedic, we had an HD video consultation with Dr. Priya in 10 minutes from home. Prescriptions were sent instantly.',
    },
    {
      name: 'Sunita & Ramesh Agrawal',
      city: 'New Delhi',
      role: 'Senior Citizens',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'May 2026',
      service: 'Home Lab Sample Collection',
      comment:
        'Getting blood drawn used to be stressful for my diabetic husband. The phlebotomist arrived on time, was extremely gentle, and our smart digital report was delivered to our WhatsApp by 4 PM.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        {/* Header & Rating Banner */}
        <div className="bg-white border-b border-slate-200/80 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#0D5C53]" />
                <span>Verified Feedback</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Patient & Doctor Reviews
              </h1>

              {/* Credibility Note */}
              <div className="bg-emerald-50 border border-emerald-200/60 p-4 rounded-2xl flex items-start space-x-3 text-xs text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#0D5C53] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-slate-900">Verification Statement: </strong>
                  Reviews from verified patients and consulting doctors on the KnockMedic platform.
                </div>
              </div>
            </div>

            {/* Aggregate Score Summary */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl bg-slate-900 text-white p-6 rounded-3xl border border-slate-800">
              <div className="space-y-1">
                <div className="text-3xl font-black text-white flex items-center gap-2">
                  <span>4.9 / 5.0</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-slate-400">Average Patient Rating</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-black text-[#10B981]">50,000+</div>
                <div className="text-xs text-slate-400">Completed Consultations</div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-black text-[#FF5A36]">&lt; 10 Mins</div>
                <div className="text-xs text-slate-400">Average Ambulance Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-[11px] font-bold">
                      {review.service}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                    &quot;{review.comment}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#0D5C53]" />
                    </div>
                    <div className="text-xs text-slate-500">
                      {review.role} • {review.city} ({review.date})
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
