'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { EmergencyModal } from '../sos/EmergencyModal';
import { BRAND_CONFIG } from '@/lib/constants';
import { getDoctorPortalUrl } from '@/lib/config';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);

  const doctorPortalUrl = getDoctorPortalUrl();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Transparent KnockMedic Logo */}
            <Link href="/" className="flex items-center group shrink-0 py-0.5">
              <Image
                src={BRAND_CONFIG.logo.src}
                alt={BRAND_CONFIG.logo.alt}
                width={BRAND_CONFIG.logo.navWidth}
                height={BRAND_CONFIG.logo.navHeight}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain transition transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links pointing to dedicated page routes */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
              <Link href="/doctors" className="hover:text-[#0D5C53] transition">
                Find Doctors
              </Link>
              <Link href="/services" className="hover:text-[#0D5C53] transition">
                Services
              </Link>
              <Link href="/how-it-works" className="hover:text-[#0D5C53] transition">
                How It Works
              </Link>
              <Link href="/reviews" className="hover:text-[#0D5C53] transition">
                Reviews
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Secondary Doctor & Lab Login Link */}
              <a
                href={doctorPortalUrl}
                className="text-xs font-semibold text-slate-600 hover:text-[#0D5C53] transition-colors px-2.5 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D5C53]/30"
                aria-label="Doctor and Lab Partner Portal Login"
              >
                Doctor &amp; Lab Login &rarr;
              </a>

              {/* Always visible Emergency SOS button */}
              <button
                type="button"
                onClick={() => setIsSosOpen(true)}
                className="relative group px-4 py-2.5 rounded-xl bg-[#FF5A36] hover:bg-[#E04322] text-white font-extrabold text-xs tracking-wider uppercase flex items-center space-x-2 shadow-lg shadow-[#FF5A36]/30 animate-sos-pulse transition transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShieldAlert className="w-4 h-4 text-white animate-bounce" />
                <span>Ambulance SOS</span>
              </button>

              <Link
                href="/doctors"
                className="px-5 py-2.5 rounded-xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-sm flex items-center space-x-1.5 shadow-md shadow-[#0D5C53]/20 transition transform hover:scale-[1.02]"
              >
                <span>Book a Doctor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu & SOS Trigger */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                type="button"
                onClick={() => setIsSosOpen(true)}
                className="px-3 py-2 rounded-xl bg-[#FF5A36] text-white font-extrabold text-xs uppercase flex items-center space-x-1.5 shadow-md animate-sos-pulse"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>SOS</span>
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
              <Link
                href="/doctors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#0D5C53]"
              >
                Find Doctors
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#0D5C53]"
              >
                Services
              </Link>
              <Link
                href="/how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#0D5C53]"
              >
                How It Works
              </Link>
              <Link
                href="/reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#0D5C53]"
              >
                Patient Reviews
              </Link>
              <a
                href={doctorPortalUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 text-xs font-bold text-[#0D5C53] hover:underline flex items-center space-x-1"
                aria-label="Doctor and Lab Partner Portal Login"
              >
                <span>Doctor &amp; Lab Portal Login &rarr;</span>
              </a>
            </nav>

            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSosOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF5A36] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg"
              >
                <ShieldAlert className="w-5 h-5" />
                <span>Dispatch Emergency Ambulance</span>
              </button>

              <Link
                href="/doctors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-[#0D5C53] text-white font-bold text-sm flex items-center justify-center space-x-2 text-center"
              >
                <span>Book Appointment Now</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* SOS Emergency Modal */}
      <EmergencyModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
    </>
  );
}
