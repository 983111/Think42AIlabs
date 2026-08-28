import React from 'react';

export function LogoIcon({ className = "h-8 w-8", color = "text-gray-900" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} ${color} select-none`}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Outer circles frame the Think 42 monogram. */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-25" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />

      <text x="50" y="63" textAnchor="middle" fontSize="34" fontWeight="700" letterSpacing="-2" fontFamily="Inter, sans-serif">T42</text>
    </svg>
  );
}

export function LogoFull({ className = "w-full", color = "text-gray-900" }: { className?: string; color?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className} ${color} p-4`}>
      {/* Think 42 Icon */}
      <LogoIcon className="h-20 w-20 mb-3" color={color} />
      
      {/* Primary Brand Name */}
      <h1 
        className="text-2xl font-light tracking-[0.25em] uppercase text-gray-900 leading-none select-none"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Think 42 AI lab
      </h1>
      
      {/* Divider and Core Slogans */}
      <div className="w-full max-w-[320px] flex items-center justify-between mt-3 text-[9px] tracking-[0.28em] text-gray-500 uppercase select-none border-t border-gray-200 pt-3">
        <span>Intelligence</span>
        <span className="text-gray-300">•</span>
        <span>Innovation</span>
        <span className="text-gray-300">•</span>
        <span>Impact</span>
      </div>
    </div>
  );
}

export function LogoHeader({ color = "text-gray-900" }: { color?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoIcon className="h-10 w-10" color={color} />
      <div className="flex flex-col text-left leading-none">
        <span 
          className="text-base font-semibold tracking-[0.08em] text-gray-900 uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Think 42 AI lab
        </span>
        <span className="text-[9px] font-medium tracking-[0.18em] text-gray-500 uppercase mt-0.5">
          Intelligence • Innovation
        </span>
      </div>
    </div>
  );
}
