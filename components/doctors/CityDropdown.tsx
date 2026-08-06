'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown, Check } from 'lucide-react';

interface CityDropdownProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  cities: string[];
}

export function CityDropdown({ selectedCity, onSelectCity, cities }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city: string) => {
    onSelectCity(city);
    setIsOpen(false);
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
        setFocusedIndex(cities.indexOf(selectedCity));
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % cities.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + cities.length) % cities.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < cities.length) {
          handleSelect(cities[focusedIndex]);
        }
        break;
      case 'Tab':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="city-listbox"
        role="combobox"
        aria-label="Filter by City"
        className={`w-full flex items-center justify-between px-4 py-3 bg-slate-50 rounded-2xl border transition-all duration-200 cursor-pointer shadow-sm ${
          isOpen
            ? 'border-[#0D5C53] ring-2 ring-[#0D5C53]/15 bg-white'
            : 'border-slate-200/80 hover:border-[#0D5C53]/40'
        }`}
      >
        <div className="flex items-center space-x-2.5 truncate">
          <MapPin className="w-5 h-5 text-[#0D5C53] shrink-0" />
          <span className="text-sm font-semibold text-slate-800 truncate">
            {selectedCity}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#0D5C53]' : ''
          }`}
        />
      </button>

      {/* Custom Styled Listbox Panel */}
      {isOpen && (
        <div
          id="city-listbox"
          role="listbox"
          aria-label="Cities list"
          className="absolute z-30 top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 py-1.5 max-h-64 overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
        >
          {cities.map((city, index) => {
            const isSelected = selectedCity === city;
            const isFocused = focusedIndex === index;

            return (
              <div
                key={city}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(city)}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`px-3.5 py-2.5 my-0.5 mx-1.5 rounded-xl text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[#0D5C53] text-white font-bold shadow-sm'
                    : isFocused
                    ? 'bg-[#E6F4F1] text-[#0D5C53]'
                    : 'text-slate-700 hover:bg-[#E6F4F1] hover:text-[#0D5C53]'
                }`}
              >
                <span>{city}</span>
                {isSelected && <Check className="w-4 h-4 text-emerald-300 shrink-0" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
