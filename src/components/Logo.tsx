export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="39" height="39" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'Source Serif 4', serif"
        fontWeight="600"
        fontSize="19"
        fill="currentColor"
      >
        42
      </text>
    </svg>
  );
}

export function LogoHeader({ className = "text-ink" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <div className="leading-none">
        <div className="font-serif text-[1.05rem] font-semibold tracking-tight">Think 42</div>
        <div className="text-[10px] text-ink-soft mt-0.5">AI Lab</div>
      </div>
    </div>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <LogoMark className="h-12 w-12 mb-4" />
      <div className="font-serif text-2xl font-semibold tracking-tight">Think 42 AI Lab</div>
      <p className="mt-2 text-sm text-ink-soft max-w-xs">
        A student research lab working on artificial intelligence.
      </p>
    </div>
  );
}
