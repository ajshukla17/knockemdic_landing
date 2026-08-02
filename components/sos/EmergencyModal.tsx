'use client';

import React, { useState } from 'react';
import { PhoneCall, ShieldAlert, Navigation, Ambulance, X, CheckCircle, Clock } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'locating' | 'dispatched'>('idle');
  const [selectedVehicle, setSelectedVehicle] = useState<'icu' | 'bls'>('icu');

  if (!isOpen) return null;

  const handleDispatch = () => {
    setDispatchStatus('locating');
    setTimeout(() => {
      setDispatchStatus('dispatched');
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-red-100">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#FF5A36] to-[#E04322] px-6 py-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/15 rounded-2xl backdrop-blur-md animate-pulse">
              <Ambulance className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white">
                  24/7 SOS Emergency
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-1">Ambulance Dispatch</h3>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {dispatchStatus === 'idle' && (
            <>
              <div className="bg-orange-50 border border-orange-200/60 rounded-2xl p-4 flex items-start space-x-3">
                <ShieldAlert className="w-5 h-5 text-[#FF5A36] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed">
                  Connecting directly with national 108 network and KnockMedic partner hospitals. GPS location will be auto-transmitted to nearest paramedic unit.
                </p>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Ambulance Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedVehicle('icu')}
                    className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                      selectedVehicle === 'icu'
                        ? 'border-[#FF5A36] bg-orange-50/50 ring-2 ring-[#FF5A36]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-sm">Advanced ICU</span>
                    <span className="text-xs text-slate-500 mt-1">Ventilator + Cardiac Monitor</span>
                    <span className="text-xs font-semibold text-[#FF5A36] mt-2">Avg. ETA: 6-8 mins</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVehicle('bls')}
                    className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                      selectedVehicle === 'bls'
                        ? 'border-[#FF5A36] bg-orange-50/50 ring-2 ring-[#FF5A36]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-sm">Basic Life Support</span>
                    <span className="text-xs text-slate-500 mt-1">O2 Oxygen + Basic Kit</span>
                    <span className="text-xs font-semibold text-[#0D5C53] mt-2">Avg. ETA: 8-12 mins</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleDispatch}
                  className="w-full py-4 px-6 rounded-2xl bg-[#FF5A36] hover:bg-[#E04322] text-white font-bold text-base shadow-lg shadow-[#FF5A36]/30 flex items-center justify-center space-x-2 transition transform active:scale-[0.98]"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Request Instant GPS Dispatch</span>
                </button>

                <a
                  href="tel:108"
                  className="w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Call National 108 Emergency Direct</span>
                </a>
              </div>
            </>
          )}

          {dispatchStatus === 'locating' && (
            <div className="py-12 text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-[#FF5A36]/20 border-t-[#FF5A36] animate-spin" />
                <Navigation className="w-7 h-7 text-[#FF5A36] absolute inset-0 m-auto animate-pulse" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Locating Nearest Paramedic Unit...</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Locking satellite GPS coordinates and alerting available ICU ambulances within 3 km radius.
              </p>
            </div>
          )}

          {dispatchStatus === 'dispatched' && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Ambulance Unit Dispatched!</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Driver: <strong className="text-slate-900">Suresh Kumar</strong> • Vehicle: MH-02-AZ-4921
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#FF5A36]" /> Estimated Arrival
                  </span>
                  <span className="font-extrabold text-sm text-[#FF5A36]">6 Mins</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#FF5A36] h-2 rounded-full w-2/3 animate-pulse" />
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0D5C53] text-white font-bold text-sm hover:bg-[#063B35] transition"
              >
                Track Live on KnockMedic App
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
