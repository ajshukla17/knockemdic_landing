import React from 'react';
import Image from 'next/image';
import { Star, MapPin, Video, Building, Calendar, CheckCircle2 } from 'lucide-react';
import { Doctor } from '@/lib/types';

interface DoctorCardProps {
  doctor: Doctor;
}

const PLACEHOLDER_PHOTO = '/images/doctor-placeholder.png';

function resolvePhotoSrc(photoUrl?: string): string {
  if (typeof photoUrl !== 'string') {
    return PLACEHOLDER_PHOTO;
  }

  const trimmedUrl = photoUrl.trim();
  if (!trimmedUrl || trimmedUrl.startsWith('/')) {
    return trimmedUrl || PLACEHOLDER_PHOTO;
  }

  try {
    const parsedUrl = new URL(trimmedUrl);
    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return trimmedUrl;
    }
  } catch {
    // Fall back to local placeholder for malformed URLs.
  }

  return PLACEHOLDER_PHOTO;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const [prevPhoto, setPrevPhoto] = React.useState(doctor.profilePhoto);
  const [photoSrc, setPhotoSrc] = React.useState(() => resolvePhotoSrc(doctor.profilePhoto));

  if (doctor.profilePhoto !== prevPhoto) {
    setPrevPhoto(doctor.profilePhoto);
    setPhotoSrc(resolvePhotoSrc(doctor.profilePhoto));
  }

  const handleImageError = () => {
    setPhotoSrc(PLACEHOLDER_PHOTO);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#0D5C53]/30 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Header: Image & Badges */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-100 group-hover:scale-105 transition transform">
            <Image
              src={photoSrc}
              alt={doctor.name}
              fill
              sizes="80px"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4="
              onError={handleImageError}
              unoptimized={photoSrc === PLACEHOLDER_PHOTO}
            />
            {doctor.isOnline && (
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1.5 text-xs text-[#0D5C53] font-semibold mb-0.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Specialist</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 truncate group-hover:text-[#0D5C53] transition">
              {doctor.name}
            </h3>

            <p className="text-xs font-semibold text-slate-600 truncate mt-0.5">
              {doctor.specialization}
            </p>

            <p className="text-[11px] text-slate-400 mt-0.5">
              {doctor.qualifications?.join(', ') || 'MBBS'} • {doctor.experience} yrs exp.
            </p>
          </div>
        </div>

        {/* Location & Rating row */}
        <div className="flex items-center justify-between py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">{doctor.clinicAddress?.city || 'India'}</span>
          </div>

          <div className="flex items-center space-x-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/50">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-bold text-slate-900">{doctor.averageRating.toFixed(1)}</span>
            <span className="text-[10px] text-slate-400">({doctor.totalReviews})</span>
          </div>
        </div>

        {/* Modes */}
        <div className="flex items-center space-x-2 text-[11px] text-slate-500 mb-4">
          {doctor.consultationModes?.video && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-medium">
              <Video className="w-3 h-3" />
              <span>Video Consult</span>
            </span>
          )}
          {doctor.consultationModes?.clinic && (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-medium">
              <Building className="w-3 h-3" />
              <span>In-Clinic</span>
            </span>
          )}
        </div>
      </div>

      {/* Footer: Fee & CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block">Consultation Fee</span>
          <span className="text-base font-extrabold text-slate-900">
            ₹{doctor.fees?.video || doctor.fees?.clinic || 500}
          </span>
        </div>

        <a
          href="#doctors"
          className="py-2.5 px-4 rounded-xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-xs flex items-center space-x-1 shadow-sm transition transform hover:scale-[1.02]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </a>
      </div>
    </div>
  );
}
