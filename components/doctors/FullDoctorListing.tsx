'use client';

import React, { useState, useMemo } from 'react';
import { Doctor } from '@/lib/types';
import { DoctorCard } from './DoctorCard';
import { CityDropdown } from './CityDropdown';
import { Search, Filter, Stethoscope, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullDoctorListingProps {
  initialDoctors: Doctor[];
}

const SPECIALTIES = [
  'All',
  'General Physician',
  'Cardiologist',
  'Pediatrician',
  'Neurologist',
  'Dermatologist',
  'Orthopedic',
  'Gynecologist',
  'ENT Specialist',
];

// Canonical City list with duplicate "Bangalore" merged into "Bengaluru"
const CANONICAL_CITIES = [
  'All Cities',
  'Bengaluru',
  'Delhi NCR',
  'Mumbai',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Kolkata',
  'Noida',
];

const ITEMS_PER_PAGE = 8;

export function FullDoctorListing({ initialDoctors }: FullDoctorListingProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter doctors based on search, specialty, and city with normalization
  const filteredDoctors = useMemo(() => {
    return initialDoctors.filter((doc) => {
      // Specialty Filter
      if (selectedSpecialty !== 'All') {
        if (doc.specialization.toLowerCase() !== selectedSpecialty.toLowerCase()) {
          return false;
        }
      }

      // Normalized City Filter
      if (selectedCity !== 'All Cities') {
        const docCity = (doc.clinicAddress?.city || '').toLowerCase();
        
        if (selectedCity === 'Bengaluru') {
          // Normalize both Bengaluru and Bangalore spellings in database records
          const isBengaluruMatch = docCity.includes('bengaluru') || docCity.includes('bangalore');
          if (!isBengaluruMatch) return false;
        } else if (selectedCity === 'Delhi NCR') {
          const isDelhiMatch = docCity.includes('delhi') || docCity.includes('noida') || docCity.includes('gurgaon');
          if (!isDelhiMatch) return false;
        } else {
          if (!docCity.includes(selectedCity.toLowerCase())) {
            return false;
          }
        }
      }

      // Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = doc.name.toLowerCase().includes(query);
        const matchesSpec = doc.specialization.toLowerCase().includes(query);
        const matchesClinic = doc.clinicName?.toLowerCase().includes(query) || false;
        if (!matchesName && !matchesSpec && !matchesClinic) {
          return false;
        }
      }

      return true;
    });
  }, [initialDoctors, selectedSpecialty, selectedCity, searchQuery]);

  const filterKey = `${searchQuery}-${selectedSpecialty}-${selectedCity}`;
  const [prevFilterKey, setPrevFilterKey] = React.useState(filterKey);
  if (prevFilterKey !== filterKey) {
    setPrevFilterKey(filterKey);
    setCurrentPage(1);
  }

  // Pagination calculation
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE) || 1;
  const paginatedDoctors = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDoctors.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDoctors, currentPage]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('All');
    setSelectedCity('All Cities');
    setCurrentPage(1);
  };

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-lg shadow-slate-200/50 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Search Input */}
          <div className="sm:col-span-7 flex items-center px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200/80 focus-within:border-[#0D5C53] focus-within:ring-2 focus-within:ring-[#0D5C53]/10 transition">
            <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or hospital..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Custom Styled City Dropdown */}
          <div className="sm:col-span-5">
            <CityDropdown
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
              cities={CANONICAL_CITIES}
            />
          </div>
        </div>

        {/* Specialty Filter Pills */}
        <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center space-x-1.5 shrink-0 pr-3 border-r border-slate-200 text-xs font-bold text-slate-700">
            <Filter className="w-4 h-4 text-[#0D5C53]" />
            <span>Specialty:</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto py-1">
            {SPECIALTIES.map((spec) => {
              const isActive = selectedSpecialty === spec;
              return (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-[#0D5C53] text-white shadow-md shadow-[#0D5C53]/20 scale-[1.02]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
                  }`}
                >
                  {spec}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>
            Showing <strong className="text-slate-900 font-bold">{filteredDoctors.length}</strong> verified doctors
          </span>

          {(selectedSpecialty !== 'All' || selectedCity !== 'All Cities' || searchQuery.trim() !== '') && (
            <button
              onClick={handleClearFilters}
              className="text-[#0D5C53] font-bold hover:underline flex items-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear all filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Doctor Grid or Empty State */}
      {paginatedDoctors.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-3 pt-6 border-t border-slate-200">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-slate-700">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-sm max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-[#0D5C53] rounded-2xl flex items-center justify-center mx-auto">
            <Stethoscope className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            No doctors match these filters
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We couldn&apos;t find any doctors matching your search criteria. Try adjusting your specialty or location filter.
          </p>
          <button
            onClick={handleClearFilters}
            className="py-3 px-6 rounded-2xl bg-[#0D5C53] hover:bg-[#063B35] text-white font-bold text-xs shadow-md transition"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
