type LogoMarkProps = {
  className?: string;
  compact?: boolean;
};

export function LogoMark({ className, compact = false }: LogoMarkProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ''}`}>
      <svg
        viewBox="0 0 140 140"
        role="img"
        aria-label="Logo Impact Business"
        className={compact ? 'h-10 w-10' : 'h-16 w-16'}
      >
        <defs>
          <linearGradient id="shieldBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#114388" />
            <stop offset="100%" stopColor="#001a49" />
          </linearGradient>
          <linearGradient id="arrowGold" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#d98600" />
            <stop offset="100%" stopColor="#f2b302" />
          </linearGradient>
        </defs>
        <path d="M70 8 20 24v45c0 30 17 50 50 63 33-13 50-33 50-63V24L70 8Z" fill="url(#shieldBlue)" />
        <path d="M34 38h38c12 0 21 8 21 19s-9 19-21 19H53v24H34V38Zm35 43c7 0 12-5 12-11s-5-11-12-11H53v22h16Z" fill="#ffffff" opacity="0.92" />
        <path d="M10 94 82 22l49-11-11 49-72 72c-11 5-23-7-18-18Z" fill="url(#arrowGold)" />
        <circle cx="62" cy="78" r="5" fill="#fff8de" />
      </svg>
      <div>
        <p className={`font-black tracking-wide text-brand-blue ${compact ? 'text-lg' : 'text-2xl'}`}>IMPACT BUSINESS</p>
        {!compact && <p className="text-sm font-medium text-brand-ink/80">Votre succès est notre impact</p>}
      </div>
    </div>
  );
}
