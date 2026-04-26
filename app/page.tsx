import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { siteContent } from '@/data/content';

export default function Home() {
  return (
    <main className="bg-grain">
      <Header />

      <AnimatedSection id="accueil" className="section-container pt-28 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-gold/20 px-4 py-1 text-sm font-medium text-night">
              Croissance • Action • Résultats
            </p>
            <h1 className="text-4xl font-black text-night sm:text-5xl">{siteContent.hero.title}</h1>
            <p className="text-xl text-slate-700">{siteContent.hero.subtitle}</p>
            <p className="text-slate-600">{siteContent.hero.statement}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-impact px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              >
                {siteContent.hero.ctaPrimary} <ArrowRight size={16} />
              </a>
              <a
                href="#methode"
                className="rounded-full border border-night/15 bg-white/80 px-5 py-3 font-semibold text-night transition hover:bg-white"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="glass-card p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-impact">Système hybride</p>
            <p className="mt-6 text-center text-2xl font-bold text-night">Terrain + Digital = Clients</p>
            <div className="mt-6 flex justify-center">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-impact to-night shadow-soft" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-16">
        <div className="glass-card p-8">
          <h2 className="text-3xl font-bold text-night">{siteContent.problem.title}</h2>
          <p className="mt-4 max-w-4xl text-slate-700">{siteContent.problem.description}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section-container pb-16">
        <h2 className="mb-8 text-3xl font-bold text-night">Des solutions concrètes pour développer votre activité</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <article key={service.title} className="glass-card p-6 transition hover:-translate-y-1">
              <h3 className="text-xl font-bold text-night">{service.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-impact">{service.objective}</p>
              <p className="mt-4 text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="methode" className="section-container pb-16">
        <h2 className="mb-8 text-3xl font-bold text-night">Une approche orientée résultats</h2>
        <div className="relative space-y-4 border-l-2 border-impact/30 pl-6">
          {siteContent.method.map((step, index) => (
            <div key={step} className="glass-card relative p-5">
              <span className="absolute -left-[2.07rem] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-impact text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="font-semibold text-night">{step}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-16">
        <h2 className="mb-8 text-3xl font-bold text-night">Nous ne faisons pas que conseiller. Nous agissons.</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.differentiation.map((item) => (
            <div key={item} className="glass-card flex items-center gap-3 p-4">
              <CheckCircle2 className="text-impact" size={20} />
              <p className="font-medium text-night">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="impact" className="section-container pb-16">
        <div className="glass-card bg-night/95 p-8 text-white">
          <h2 className="text-3xl font-bold">{siteContent.impact.title}</h2>
          <p className="mt-4 max-w-4xl text-white/80">{siteContent.impact.text}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-20">
        <div className="glass-card flex flex-col items-start justify-between gap-6 bg-gradient-to-r from-night to-slate-900 p-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">{siteContent.finalCta.title}</h2>
            <p className="mt-2 text-white/80">{siteContent.finalCta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-impact px-5 py-3 font-semibold text-white">
              Nous contacter
            </a>
            <a
              href={siteContent.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold"
            >
              Écrire sur WhatsApp <PhoneCall size={16} />
            </a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
