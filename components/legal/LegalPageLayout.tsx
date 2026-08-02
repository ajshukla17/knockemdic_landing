'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldAlert, Mail, ChevronRight, List, ArrowLeft, Lock, FileText, CheckCircle } from 'lucide-react';
import { LegalDocument } from '@/content/legal/types';
import { Navbar } from '../nav/Navbar';
import { Footer } from '../footer/Footer';

interface LegalPageLayoutProps {
  document: LegalDocument;
}

export function LegalPageLayout({ document }: LegalPageLayoutProps) {
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  const legalLinks = [
    { slug: 'privacy-policy', label: 'Privacy Policy' },
    { slug: 'terms-of-service', label: 'Terms of Service' },
    { slug: 'nmc-telemedicine-guidelines', label: 'NMC Telemedicine Guidelines' },
    { slug: 'hipaa-disha-data-security', label: 'DISHA & Data Security' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar />

      <div className="pt-28 pb-20 flex-1">
        {/* Top Banner: DRAFT Notice */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-3 px-4 text-xs text-amber-900">
          <div className="max-w-7xl mx-auto flex items-start space-x-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-medium">
              <strong className="font-extrabold uppercase tracking-wide mr-1.5 text-amber-700">
                Notice:
              </strong>
              {document.draftNotice}
            </div>
          </div>
        </div>

        {/* Page Header */}
        <header className="bg-white border-b border-slate-200/80 py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#0D5C53] uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Legal & Trust Center</span>
                <span>•</span>
                <span className="text-slate-500 font-normal">Last Updated: {document.lastUpdated}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {document.title}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {document.subtitle}
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          {/* Mobile TOC Accordion Toggle */}
          <div className="lg:hidden mb-8">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full py-3 px-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between text-xs font-bold text-slate-800"
            >
              <div className="flex items-center space-x-2">
                <List className="w-4 h-4 text-[#0D5C53]" />
                <span>Table of Contents ({document.sections.length} Sections)</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition ${isMobileTocOpen ? 'rotate-90' : ''}`} />
            </button>

            {isMobileTocOpen && (
              <div className="mt-2 p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs font-semibold text-slate-700 animate-in fade-in duration-150">
                {document.sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setIsMobileTocOpen(false)}
                    className="block py-1.5 px-2 rounded-lg hover:bg-slate-100 hover:text-[#0D5C53] transition"
                  >
                    {sec.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Desktop Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                  <List className="w-4 h-4 text-[#0D5C53]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1 text-xs font-semibold text-slate-600">
                  {document.sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-2 px-3 rounded-xl hover:bg-[#E6F4F1] hover:text-[#0D5C53] transition text-slate-700 leading-snug"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Cross Links to Other Legal Pages */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-3">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Legal & Compliance Suite</span>
                </div>
                <div className="space-y-2 text-xs">
                  {legalLinks.map((item) => {
                    const isActive = item.slug === document.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/${item.slug}`}
                        className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg transition ${
                          isActive
                            ? 'bg-[#0D5C53] text-white font-bold'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Document Content Column */}
            <main className="lg:col-span-8 space-y-10">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-10">
                {document.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-32 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3 flex items-center justify-between">
                      <span>{section.title}</span>
                    </h2>

                    <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans space-y-3">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Persistent Contact Block */}
              <div className="bg-gradient-to-r from-[#0D5C53] to-[#063B35] text-white rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                    <Mail className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Questions about this policy?</h3>
                    <p className="text-xs text-emerald-100">
                      Our Data Protection Officer and compliance team are available to assist you.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 gap-3 border-t border-emerald-800/60 text-xs">
                  <span className="font-semibold text-emerald-200">
                    Direct Email: <a href="mailto:privacy@knockmedic.com" className="underline font-bold text-white">privacy@knockmedic.com</a>
                  </span>

                  <a
                    href="mailto:privacy@knockmedic.com"
                    className="py-2.5 px-4 rounded-xl bg-[#FF5A36] hover:bg-[#E04322] text-white font-bold shadow-md transition"
                  >
                    Contact Compliance Office
                  </a>
                </div>
              </div>

              {/* Cross-Link Bar at Bottom */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold text-slate-600">
                <span className="text-slate-400">Other Legal Documents:</span>
                {legalLinks
                  .filter((l) => l.slug !== document.slug)
                  .map((link) => (
                    <Link
                      key={link.slug}
                      href={`/${link.slug}`}
                      className="text-[#0D5C53] hover:underline flex items-center space-x-1"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  ))}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
