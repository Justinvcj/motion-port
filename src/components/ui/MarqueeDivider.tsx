import React from 'react';

const TEXT = "FULL STACK DEVELOPER · EQUINOX · NODE.JS · FLUTTER · PROBLEM SOLVER · BACKEND ENGINEER · DRNGPIT · SUPABASE · WEBSOCKETS · AI/ML · ";

export default function MarqueeDivider() {
  return (
    <div className="w-full bg-primary border-y border-background overflow-hidden py-3 font-mono font-bold text-[13px] text-background flex flex-col gap-1">
      
      {/* Row 1 - Left to Right */}
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="animate-marquee-left flex shrink-0">
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="flex whitespace-nowrap overflow-hidden group">
        <div className="animate-marquee-right flex shrink-0">
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
          <span className="px-4">{TEXT}</span>
        </div>
      </div>

    </div>
  );
}
