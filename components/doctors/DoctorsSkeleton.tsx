import React from 'react';

export function DoctorsSkeleton() {
  return (
    <div className="space-y-8">
      {/* Pills skeleton */}
      <div className="flex items-center space-x-3 overflow-hidden pb-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-28 rounded-full skeleton-shimmer shrink-0"
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-2xl skeleton-shimmer shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded skeleton-shimmer" />
                <div className="h-3 w-1/2 rounded skeleton-shimmer" />
                <div className="h-3 w-2/3 rounded skeleton-shimmer" />
              </div>
            </div>
            <div className="h-8 w-full rounded-xl skeleton-shimmer" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 w-16 rounded skeleton-shimmer" />
              <div className="h-8 w-28 rounded-xl skeleton-shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
