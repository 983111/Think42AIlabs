import React from 'react';

export function LogoIcon({ className = "h-8 w-8", color = "text-gray-900" }: { className?: string; color?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} ${color} select-none`}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Outer elegant thin academic circles to frame the monogram */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-25" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />

      {/* The Monogram: Intertwined K and N in classic high-contrast serif typography */}
      <g transform="translate(2, 1)">
        {/* === LETTER K === */}
        {/* K Vertical Stem with bracketed serifs */}
        <path d="M 22 24 L 34 24 L 34 28 L 31 28 L 31 72 L 34 72 L 34 76 L 22 76 L 22 72 L 25 72 L 25 28 L 22 28 Z" />
        
        {/* K Upper Diagonal Arm */}
        <path d="M 29 48 C 34 43, 42 34, 58 20 L 68 20 L 68 25 L 61 25 C 51 34, 41 44, 34 51 Z" />
        
        {/* K Lower Diagonal Leg */}
        <path d="M 38 46 L 62 72 L 67 72 L 67 76 L 53 76 L 53 72 L 57 72 L 34 48 Z" />

        {/* === LETTER N === */}
        {/* N Left Vertical Stem */}
        <path d="M 44 36 L 54 36 L 54 40 L 51 40 L 51 72 L 54 72 L 54 76 L 44 76 L 44 72 L 47 72 L 47 40 L 44 40 Z" className="opacity-90" />
        
        {/* N Diagonal Stroke */}
        <path d="M 49 38 L 74 73 L 78 73 L 78 76 L 70 76 L 49 41 Z" />

        {/* N Right Vertical Stem */}
        <path d="M 70 36 L 80 36 L 80 40 L 77 40 L 77 72 L 80 72 L 80 76 L 70 76 L 70 72 L 73 72 L 73 40 L 70 40 Z" />
      </g>
    </svg>
  );
}

export function LogoFull({ className = "w-full", color = "text-gray-900" }: { className?: string; color?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className} ${color} p-4`}>
      {/* Monogram KN Icon */}
      <LogoIcon className="h-20 w-20 mb-3" color={color} />
      
      {/* Primary Brand Name */}
      <h1 
        className="text-2xl font-light tracking-[0.25em] uppercase text-gray-900 leading-none select-none"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        KaelithNovaMind
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
          KaelithNovaMind
        </span>
        <span className="text-[9px] font-medium tracking-[0.18em] text-gray-500 uppercase mt-0.5">
          Intelligence • Innovation
        </span>
      </div>
    </div>
  );
}
