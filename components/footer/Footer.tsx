import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Mail, MapPin, ShieldAlert, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      {/* Emergency Hotline Banner */}
      <div className="bg-[#FF5A36] text-white py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 animate-bounce shrink-0" />
            <span>24/7 Emergency Ambulance Helpline & Dispatch:</span>
          </div>

          <a
            href="tel:108"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-extrabold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-md transition"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>Call 108 Direct</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo wrapped in a rounded light card container to prevent raw light-box bleed on dark navy footer */}
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl border border-slate-200/80 shadow-md group hover:border-[#0D5C53]/40 transition">
              <Image
                src={BRAND_CONFIG.logo.src}
                alt={BRAND_CONFIG.logo.alt}
                width={BRAND_CONFIG.logo.footerWidth}
                height={BRAND_CONFIG.logo.footerHeight}
                className="h-8 w-auto object-contain transition transform group-hover:scale-105"
              />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              KnockMedic is India&apos;s leading consumer healthcare ecosystem, connecting patients with 15,000+ verified doctors, 24/7 ambulance emergency dispatch, home lab diagnostics, and AI symptom triage.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0D5C53]" />
                <span>KnockMedic Healthcare Technologies Pvt Ltd, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0D5C53]" />
                <span>knockmedic@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-[#0D5C53]" />
                <span></span>
              </div>
            </div>
          </div>

          {/* Col 2: Patient Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Patient Care</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Find Doctors &amp; Hospitals
                </Link>
              </li>
              <li>
                <Link href="/services#ambulance-sos" className="hover:text-white transition">
                  24/7 Ambulance SOS Booking Online
                </Link>
              </li>
              <li>
                <Link href="/services#lab-tests" className="hover:text-white transition">
                  Book Home Lab Tests (Ghar Pe Lab Test)
                </Link>
              </li>
              <li>
                <Link href="/services#ai-triage" className="hover:text-white transition">
                  AI Symptom Triage (Turant Doctor Consult)
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition">
                  How KnockMedic Works
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition">
                  Patient Reviews &amp; Ratings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Specialties</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/doctors?specialty=General+Physician" className="hover:text-white transition">
                  General Physician
                </Link>
              </li>
              <li>
                <Link href="/doctors?specialty=Cardiologist" className="hover:text-white transition">
                  Cardiologist
                </Link>
              </li>
              <li>
                <Link href="/doctors?specialty=Pediatrician" className="hover:text-white transition">
                  Pediatrician
                </Link>
              </li>
              <li>
                <Link href="/doctors?specialty=Dermatologist" className="hover:text-white transition">
                  Dermatologist
                </Link>
              </li>
              <li>
                <Link href="/doctors?specialty=Neurologist" className="hover:text-white transition">
                  Neurologist
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Medical Disclaimer & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/nmc-telemedicine-guidelines" className="hover:text-white transition">
                  NMC Telemedicine Guidelines
                </Link>
              </li>
              <li>
                <Link href="/hipaa-disha-data-security" className="hover:text-white transition">
                  DISHA & Data Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-3">
          <p>
            <strong>Medical Disclaimer:</strong> KnockMedic provides a digital marketplace connecting patients with registered medical practitioners and licensed ambulance providers. KnockMedic does not directly render medical advice or treatment. In life-threatening cardiac or trauma emergencies, immediately call national 108 or visit the nearest hospital emergency room.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-900 text-slate-400">
            <div>© {new Date().getFullYear()} KnockMedic Health Technologies Pvt Ltd. All rights reserved.</div>
            <div className="flex items-center space-x-1 mt-2 sm:mt-0">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>for Healthcare in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
