import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const reviews = [
    {
      name: 'Ritu Sen',
      city: 'Kolkata',
      role: 'Patient Family Member',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      comment:
        'When my father experienced acute chest tightness at 2 AM, the KnockMedic Ambulance SOS dispatched an ICU vehicle with an O2 paramedic within 7 minutes. It saved critical time before reaching the hospital. Incredible service!',
    },
    {
      name: 'Dr. Vivek Deshpande',
      city: 'Mumbai',
      role: 'Consultant Cardiologist',
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      comment:
        'As a practicing doctor, KnockMedic’s app simplifies my video consult schedules immensely. Patient records and lab history are pre-loaded cleanly so I can provide accurate care without administrative hassle.',
    },
    {
      name: 'Karthik Ramanathan',
      city: 'Bengaluru',
      role: 'IT Professional',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      comment:
        'Booking a pediatrician for my toddler used to mean waiting 2 hours in a crowded clinic. With KnockMedic, we had an HD video consultation with Dr. Priya in 10 minutes from home. Prescriptions were sent instantly.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F4F1] text-[#0D5C53] text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Trusted By Millions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Real Stories from Real Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how KnockMedic is transforming healthcare accessibility across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#0D5C53]/20" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &quot;{review.comment}&quot;
                </p>
              </div>

              {/* User Info */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center space-x-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D5C53]" />
                  </div>
                  <div className="text-xs text-slate-500">
                    {review.role} • {review.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
