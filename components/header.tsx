'use client';

import { BrandLogo } from '@/components/brand-logo';
import { siteContent } from '@/data/content';

export function Header() {
  const anchors = ['#accueil', '#services', '#methode', '#impact', '#contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-blue/10 bg-white/85 backdrop-blur-lg">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <a href="#accueil" className="hidden sm:block" aria-label="Accueil Impact Business">
          <BrandLogo compact={false} />
        </a>
        <a href="#accueil" className="sm:hidden" aria-label="Accueil Impact Business">
          <BrandLogo compact />
        </a>

        <nav className="hidden gap-6 md:flex">
          {siteContent.menu.map((item, index) => (
            <a key={item} href={anchors[index]} className="text-sm font-semibold text-brand-blue transition hover:text-brand-gold">
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-gold text-sm">
          Nous contacter
        </a>
      </div>
    </header>
  );
}
