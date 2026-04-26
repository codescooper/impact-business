'use client';

import { LogoMark } from '@/components/logo-mark';
import { siteContent } from '@/data/content';

export function Header() {
  const anchors = ['#accueil', '#services', '#methode', '#impact', '#contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-xl">
      <div className="section-container flex h-20 items-center justify-between gap-4">
        <a href="#accueil" className="shrink-0">
          <LogoMark compact />
        </a>

        <nav className="hidden gap-6 md:flex">
          {siteContent.menu.map((item, index) => (
            <a
              key={item}
              href={anchors[index]}
              className="text-sm font-semibold text-brand-blue/90 transition hover:text-brand-gold"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy"
        >
          Nous contacter
        </a>
      </div>
    </header>
  );
}
