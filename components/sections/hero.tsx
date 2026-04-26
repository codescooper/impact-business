import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { siteContent } from '@/data/content';

export function HeroSection() {
  return (
    <section id="accueil" className="section-container pt-32 pb-16">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <BrandLogo priority />
          <h1 className="text-4xl font-black text-brand-navy sm:text-5xl">{siteContent.hero.title}</h1>
          <p className="text-xl font-medium text-brand-blue">{siteContent.hero.subtitle}</p>
          <p className="text-brand-ink/80">{siteContent.hero.statement}</p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary" href="#contact">
              {siteContent.hero.ctaPrimary}
            </a>
            <a className="btn-secondary" href="#services">
              {siteContent.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="glass-card relative overflow-hidden p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-blue/10" />
          <div className="absolute -left-8 bottom-6 h-24 w-24 rounded-full border-2 border-brand-gold/40" />
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Accélération commerciale</p>
          <p className="mt-4 text-3xl font-black text-brand-navy">{siteContent.hero.equation}</p>
          <div className="gold-divider mt-6" />
          <p className="mt-6 flex items-center gap-2 text-base font-semibold text-brand-blue">
            <ArrowUpRight className="text-brand-gold" size={18} /> Croissance mesurable et résultats concrets
          </p>
        </div>
      </div>
    </section>
  );
}
