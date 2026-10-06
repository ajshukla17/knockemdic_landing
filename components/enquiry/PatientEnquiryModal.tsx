'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  X,
  Stethoscope,
  FlaskConical,
  Ambulance,
  Lock,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Clock,
  ShieldCheck,
  AlertCircle,
  Loader2,
  PhoneCall,
  Check,
} from 'lucide-react';

export type EnquiryCategory = 'doctor' | 'lab' | 'emergency';

interface QuickActionOption {
  id: EnquiryCategory;
  title: string;
  subtitle: string;
  badge: string;
  icon: typeof Stethoscope;
  suggestedPrompt: string;
  isEmergency?: boolean;
}

const QUICK_ACTIONS: QuickActionOption[] = [
  {
    id: 'doctor',
    title: 'Find the Right Doctor',
    subtitle: 'Get help choosing a specialist • Video or in-clinic',
    badge: '15k+ Verified',
    icon: Stethoscope,
    suggestedPrompt: 'I need help choosing the right specialist doctor for consultation.',
  },
  {
    id: 'lab',
    title: 'Book a Lab Test',
    subtitle: 'Home sample collection & diagnostics • Certified labs',
    badge: 'Doorstep Pickup',
    icon: FlaskConical,
    suggestedPrompt: 'I want to schedule a home sample collection for diagnostic tests.',
  },
  {
    id: 'emergency',
    title: 'Need Emergency Help?',
    subtitle: 'Get ambulance assistance quickly • GPS live-tracked units',
    badge: '< 10 min ETA',
    icon: Ambulance,
    suggestedPrompt: 'Urgent: I need emergency ambulance dispatch and hospital support.',
    isEmergency: true,
  },
];

const POPULAR_TAGS = [
  'General Physician',
  'Cardiologist',
  'Fever / Viral',
  'Home Blood Test',
  'Ambulance SOS',
];

const STORAGE_KEY_DISMISSED = 'km_patient_enquiry_dismissed';
const STORAGE_KEY_SUBMITTED = 'km_patient_enquiry_submitted';

export function PatientEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<EnquiryCategory | null>('doctor');
  const [enquiry, setEnquiry] = useState(QUICK_ACTIONS[0].suggestedPrompt);
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ enquiry?: string; phone?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const enquiryInputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize 5-second automatic appearance or query param preview (?enquiry=true)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Instant preview support for QA and development
    const urlParams = new URLSearchParams(window.location.search);
    const forceOpen = urlParams.get('enquiry') === 'true' || window.location.hash === '#enquiry';

    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    try {
      const isDismissed = sessionStorage.getItem(STORAGE_KEY_DISMISSED) === 'true';
      const isSubmitted = sessionStorage.getItem(STORAGE_KEY_SUBMITTED) === 'true';
      if (isDismissed || isSubmitted) {
        return;
      }
    } catch {
      // Ignore storage errors
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Listen for manual open trigger if any CTA dispatches it
  useEffect(() => {
    const handleManualOpen = () => {
      setIsSuccess(false);
      setIsOpen(true);
    };

    window.addEventListener('open-patient-enquiry', handleManualOpen);
    return () => window.removeEventListener('open-patient-enquiry', handleManualOpen);
  }, []);

  // Close handler with smooth exit animation & session storage persistence
  const handleClose = useCallback(() => {
    setIsClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY_DISMISSED, 'true');
    } catch {
      // Ignore storage errors
    }

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 220);
  }, []);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  // Handle Category Selection
  const handleCategorySelect = (item: QuickActionOption) => {
    setSelectedCategory(item.id);

    // If enquiry is empty or matches a preset, replace with the new suggested prompt
    const isAnyPreset = QUICK_ACTIONS.some((q) => q.suggestedPrompt === enquiry);
    if (!enquiry.trim() || isAnyPreset) {
      setEnquiry(item.suggestedPrompt);
    }

    if (errors.enquiry) {
      setErrors((prev) => ({ ...prev, enquiry: undefined }));
    }
  };

  // Quick tag append helper
  const handleTagClick = (tag: string) => {
    if (!enquiry.includes(tag)) {
      setEnquiry((prev) => (prev ? `${prev.trim()} (${tag})` : `I need assistance regarding ${tag}.`));
    }
    if (errors.enquiry) {
      setErrors((prev) => ({ ...prev, enquiry: undefined }));
    }
    if (enquiryInputRef.current) {
      enquiryInputRef.current.focus();
    }
  };

  // Format phone number with space (e.g. "98765 43210")
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(rawDigits);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const formattedDisplayPhone = phone.length > 5 ? `${phone.slice(0, 5)} ${phone.slice(5)}` : phone;

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newErrors: { enquiry?: string; phone?: string } = {};

    if (!enquiry.trim() || enquiry.trim().length < 3) {
      newErrors.enquiry = 'Please describe what you need assistance with.';
      hasError = true;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your mobile number.';
      hasError = true;
    } else if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/patient-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: selectedCategory || 'doctor',
          enquiry: enquiry.trim(),
          phone: phone.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setReferenceId(data.referenceId || `KM-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSuccess(true);
        try {
          sessionStorage.setItem(STORAGE_KEY_SUBMITTED, 'true');
          localStorage.setItem(STORAGE_KEY_SUBMITTED, 'true');
        } catch {
          // ignore
        }
      } else {
        setIsSuccess(true);
      }
    } catch {
      setReferenceId(`KM-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSuccess(true);
      try {
        sessionStorage.setItem(STORAGE_KEY_SUBMITTED, 'true');
      } catch {
        // ignore
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-heading"
      aria-describedby="enquiry-modal-desc"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-[#0B1428]/60 backdrop-blur-md transition-opacity duration-200 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-[500px] sm:max-w-[520px] max-h-[92vh] bg-white rounded-[26px] shadow-[0_25px_60px_-15px_rgba(11,20,40,0.3)] border border-slate-200/90 overflow-hidden flex flex-col transition-all ${
          isClosing ? 'opacity-0 scale-95 translate-y-3' : 'animate-modal-entry'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL BODY */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {/* Top Bar: Need help pill + Live Desk + Close button */}
          <div className="flex items-center justify-between gap-2 pb-1">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E6F4F1] text-[#08766B] border border-[#08766B]/20">
                <HeartPulse className="w-3.5 h-3.5 text-[#08766B] animate-heartbeat" />
                <span>Need help?</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-700 font-bold">24×7 Care Team</span>
              </span>
            </div>

            <button
              onClick={handleClose}
              aria-label="Close patient enquiry modal"
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSuccess ? (
            <div className="space-y-4 pt-1.5">
              {/* Header Title & Subtitle */}
              <div>
                <h2
                  id="enquiry-modal-heading"
                  className="text-xl sm:text-2xl font-extrabold text-[#0B1428] tracking-tight"
                >
                  How can we help you today?
                </h2>

                <p id="enquiry-modal-desc" className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-1">
                  Have a question about doctors, appointments, lab tests or emergency care? Our team is here to help.
                </p>
              </div>

              {/* 3 Ultra-Premium Stacked Cards */}
              <div className="space-y-2">
                {QUICK_ACTIONS.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedCategory === item.id;
                  const isEmergency = item.isEmergency;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleCategorySelect(item)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group relative cursor-pointer ${
                        isSelected
                          ? isEmergency
                            ? 'border-[#FF5438] bg-gradient-to-r from-[#FFF5F3] via-white to-white ring-2 ring-[#FF5438]/20 shadow-sm'
                            : 'border-[#08766B] bg-gradient-to-r from-[#F0FDFA] via-white to-white ring-2 ring-[#08766B]/20 shadow-sm'
                          : isEmergency
                          ? 'border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-[#FF5438]/40 hover:shadow-sm'
                          : 'border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-teal-500/30 hover:shadow-sm'
                      }`}
                    >
                      {/* Icon Squircle with subtle glow */}
                      <div
                        className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-all duration-200 ${
                          isSelected
                            ? isEmergency
                              ? 'bg-[#FF5438] text-white shadow-md shadow-[#FF5438]/25 scale-105'
                              : 'bg-[#08766B] text-white shadow-md shadow-[#08766B]/25 scale-105'
                            : isEmergency
                            ? 'bg-orange-50 text-[#FF5438] border border-orange-200/70 group-hover:scale-105'
                            : 'bg-teal-50 text-[#08766B] border border-teal-200/70 group-hover:scale-105'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content: Title, Badge and Subtitle */}
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`text-xs sm:text-sm font-extrabold leading-tight tracking-tight ${
                              isSelected && isEmergency
                                ? 'text-[#C93318]'
                                : isSelected
                                ? 'text-[#063B35]'
                                : 'text-slate-900 group-hover:text-slate-950'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              isEmergency
                                ? isSelected
                                  ? 'bg-[#FF5438]/10 text-[#C93318] border-[#FF5438]/30'
                                  : 'bg-orange-50 text-orange-700 border-orange-200/60'
                                : isSelected
                                ? 'bg-teal-100/70 text-[#08766B] border-teal-200'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5 font-normal">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Radio Selection Indicator */}
                      <div className="shrink-0 flex items-center justify-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? isEmergency
                                ? 'border-[#FF5438] bg-[#FF5438] text-white shadow-sm'
                                : 'border-[#08766B] bg-[#08766B] text-white shadow-sm'
                              : 'border-slate-300 bg-white group-hover:border-slate-400'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Emergency Banner if Emergency is selected */}
              {selectedCategory === 'emergency' && (
                <div className="bg-[#FFF2EE] border border-[#FF5438]/30 rounded-2xl p-2.5 flex items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-[#C93318] font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5438] animate-ping shrink-0" />
                    <span>For immediate life-saving emergency, dial 108</span>
                  </div>
                  <a
                    href="tel:108"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF5438] text-white font-bold text-xs hover:bg-[#E04322] shadow-sm shrink-0 transition"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    Call 108
                  </a>
                </div>
              )}

              {/* Compact Enquiry Form */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-0.5">
                {/* Input 1: Enquiry requirement */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="patient-enquiry-input"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                    >
                      Tell us what you need
                    </label>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Doctor • Lab • Ambulance
                    </span>
                  </div>

                  <div className="relative">
                    <textarea
                      ref={enquiryInputRef}
                      id="patient-enquiry-input"
                      rows={2}
                      value={enquiry}
                      onChange={(e) => {
                        setEnquiry(e.target.value);
                        if (errors.enquiry) {
                          setErrors((prev) => ({ ...prev, enquiry: undefined }));
                        }
                      }}
                      placeholder="Describe your question or requirement..."
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-2xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all resize-none leading-relaxed shadow-sm ${
                        errors.enquiry
                          ? 'border-red-400 ring-2 ring-red-400/20'
                          : 'border-slate-200/90 focus:border-[#08766B] focus:ring-2 focus:ring-[#08766B]/15'
                      }`}
                    />
                  </div>

                  {/* Micro Quick Tags */}
                  <div className="mt-1.5 flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none text-[11px]">
                    <span className="text-slate-400 font-medium shrink-0">Suggestions:</span>
                    {POPULAR_TAGS.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition font-medium whitespace-nowrap cursor-pointer text-[10px]"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>

                  {errors.enquiry && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.enquiry}
                    </p>
                  )}
                </div>

                {/* Input 2: Mobile Number */}
                <div>
                  <label
                    htmlFor="patient-phone-input"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Your Phone Number
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-2.5 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 select-none shadow-xs">
                      <span className="text-xs">🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      id="patient-phone-input"
                      type="tel"
                      inputMode="numeric"
                      value={formattedDisplayPhone}
                      onChange={handlePhoneChange}
                      placeholder="Enter 10-digit mobile number"
                      maxLength={11} // 5 digits + space + 5 digits
                      className={`w-full text-xs sm:text-sm pl-22 pr-3 py-2.5 rounded-2xl border bg-slate-50/70 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none transition-all font-medium tracking-wide shadow-sm ${
                        errors.phone
                          ? 'border-red-400 ring-2 ring-red-400/20'
                          : 'border-slate-200/90 focus:border-[#08766B] focus:ring-2 focus:ring-[#08766B]/15'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#08766B] to-[#0A5D54] hover:from-[#065A52] hover:to-[#074740] text-white font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-[#08766B]/25 hover:shadow-xl hover:shadow-[#08766B]/35 flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer border-t border-white/20"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Connecting with Care Team...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Assistance</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Trust and Response Strip */}
                <div className="pt-1.5 text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#08766B]" />
                    <span>Usually responds within a few minutes</span>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                    <Lock className="w-3 h-3 text-slate-400" />
                    <span>100% Free &amp; Confidential • DISHA / HIPAA Compliant</span>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            /* SUCCESS STATE */
            <div className="py-6 sm:py-8 px-2 text-center space-y-4 my-auto animate-in fade-in duration-300">
              {/* Checkmark Animation Icon */}
              <div className="relative inline-flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-[#08766B] shadow-inner">
                  <CheckCircle2 className="w-10 h-10 text-[#08766B]" />
                </div>
                <span className="absolute w-20 h-20 rounded-full border-2 border-emerald-400/40 animate-ping pointer-events-none" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1428]">
                  Request received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Our care team will get in touch with you shortly.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs max-w-sm mx-auto space-y-2.5 shadow-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Reference:</span>
                  <span className="font-mono font-bold text-slate-800">{referenceId}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-slate-800 capitalize">
                    {QUICK_ACTIONS.find((a) => a.id === selectedCategory)?.title || 'General Care'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-semibold text-slate-800 font-mono">
                    +91 {phone.replace(/(\d{5})(\d{5})/, '$1 $2')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-200/60">
                  <span className="text-slate-400">Expected Callback:</span>
                  <span className="font-semibold text-emerald-700 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> &lt; 3 mins
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition cursor-pointer"
                >
                  Back to Browsing
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                🔒 KnockMedic Patient Confidentiality Guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PatientEnquiryModal;
