'use client';

import { siteContent } from '@/data/content';

export function Header() {
  const anchors = ['#accueil', '#services', '#methode', '#impact', '#contact'];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-night/90 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#accueil" className="text-sm font-bold tracking-[0.2em] text-white">
          {siteContent.brand}
        </a>

        <nav className="hidden gap-6 md:flex">
          {siteContent.menu.map((item, index) => (
            <a
              key={item}
              href={anchors[index]}
              className="text-sm text-white/85 transition hover:text-gold"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-impact px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          Nous contacter
        </a>
      </div>
    </header>
  );
}
