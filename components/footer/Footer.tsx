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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 12-Column Responsive Grid distributing content evenly across full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand Info & Transparent Logo (Span 4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block group py-0.5">
              <Image
                src={BRAND_CONFIG.logo.src}
                alt={BRAND_CONFIG.logo.alt}
                width={BRAND_CONFIG.logo.footerWidth}
                height={BRAND_CONFIG.logo.footerHeight}
                className="h-9 w-auto object-contain transition transform group-hover:scale-105"
              />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              KnockMedic is India&apos;s leading consumer healthcare ecosystem, connecting patients with 15,000+ verified doctors, 24/7 ambulance emergency dispatch, home lab diagnostics, and AI symptom triage.
            </p>

            <div className="pt-1 space-y-2 text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>KnockMedic Healthcare </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0D5C53] shrink-0" />
                <span>knockmedic@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Patient Services (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Patient Care</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="/services#ambulance-sos" className="hover:text-white transition">
                  Ambulance SOS
                </Link>
              </li>
              <li>
                <Link href="/services#lab-tests" className="hover:text-white transition">
                  Book Home Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/services#ai-triage" className="hover:text-white transition">
                  AI Symptom Checker
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Specialties</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  General Physician
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Cardiologist
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Pediatrician
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Dermatologist
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition">
                  Neurologist
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Medical Disclaimer & Legal Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
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
              <li>
                <Link href="/reviews" className="hover:text-white transition">
                  Patient Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect with Us (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect with Us</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Follow our health updates & network announcements.
            </p>

            {/* Social SVG Icons */}
            <div className="flex items-center space-x-2.5 text-slate-400 pt-1">
              <a href="https://www.instagram.com/knockmedic" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#0D5C53] hover:text-white transition" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/knockmedic" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#0D5C53] hover:text-white transition" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              
            </div>
          </div>
        </div>

        {/* Medical Disclaimer with High Contrast Legibility */}
        <div className="mt-12 pt-8 border-t border-slate-900 space-y-3">
          <p className="text-xs text-slate-300 leading-relaxed max-w-5xl">
            <strong className="text-white">Medical Disclaimer:</strong> KnockMedic provides a digital marketplace connecting patients with registered medical practitioners and licensed ambulance providers. KnockMedic does not directly render medical advice or treatment. In life-threatening cardiac or trauma emergencies, immediately call national 108 or visit the nearest hospital emergency room.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-900/80 text-slate-400">
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
