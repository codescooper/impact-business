import { ArrowRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { LogoMark } from '@/components/logo-mark';
import { siteContent } from '@/data/content';

export default function Home() {
  return (
    <main className="bg-mesh">
      <Header />

      <AnimatedSection id="accueil" className="section-container pt-32 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1 text-sm font-semibold text-brand-blue">
              <Sparkles size={14} className="text-brand-gold" /> Identité Impact Business
            </span>
            <LogoMark />
            <h1 className="text-4xl font-black text-brand-ink sm:text-5xl">{siteContent.hero.title}</h1>
            <p className="text-xl text-brand-blue">{siteContent.hero.subtitle}</p>
            <p className="text-slate-700">{siteContent.hero.statement}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy"
              >
                {siteContent.hero.ctaPrimary} <ArrowRight size={16} />
              </a>
              <a
                href="#methode"
                className="rounded-full border border-brand-blue/20 bg-white/80 px-5 py-3 font-semibold text-brand-ink transition hover:bg-white"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <article className="glass-card overflow-hidden">
            <div className="relative h-full min-h-80 bg-gradient-to-b from-brand-blue/10 to-brand-navy/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">Affiche principale</p>
              <h3 className="mt-2 text-3xl font-black text-brand-navy">IMPACT BUSINESS</h3>
              <div className="gold-line mt-3" />
              <p className="mt-3 text-lg font-bold text-brand-ink">VOTRE SUCCÈS EST NOTRE IMPACT</p>

              <div className="mt-6 space-y-4">
                {siteContent.services.map((service, i) => (
                  <div key={service.title} className="flex gap-3 rounded-2xl bg-white/85 p-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 font-bold text-brand-blue">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-brand-ink">{service.title}</p>
                      <p className="text-sm text-slate-700">{service.objective}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-xl bg-brand-navy px-3 py-2 text-base font-bold text-white">
                CONFIEZ-NOUS VOTRE INNOVATION, NOUS LA FERONS GRANDIR
              </p>
            </div>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-16">
        <div className="glass-card p-8">
          <h2 className="text-3xl font-bold text-brand-ink">{siteContent.problem.title}</h2>
          <p className="mt-4 max-w-4xl text-slate-700">{siteContent.problem.description}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section-container pb-16">
        <h2 className="mb-3 text-3xl font-bold text-brand-ink">Des solutions concrètes pour développer votre activité</h2>
        <div className="gold-line mb-8" />
        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.services.map((service) => (
            <article key={service.title} className="glass-card p-6 transition hover:-translate-y-1">
              <h3 className="text-xl font-bold text-brand-ink">{service.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-blue">{service.objective}</p>
              <p className="mt-4 text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="methode" className="section-container pb-16">
        <h2 className="mb-3 text-3xl font-bold text-brand-ink">Une approche orientée résultats</h2>
        <div className="gold-line mb-8" />
        <div className="relative space-y-4 border-l-2 border-brand-gold/50 pl-6">
          {siteContent.method.map((step, index) => (
            <div key={step} className="glass-card relative p-5">
              <span className="absolute -left-[2.07rem] top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="font-semibold text-brand-ink">{step}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-16">
        <h2 className="mb-8 text-3xl font-bold text-brand-ink">Nous ne faisons pas que conseiller. Nous agissons.</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {siteContent.differentiation.map((item) => (
            <div key={item} className="glass-card flex items-center gap-3 p-4">
              <CheckCircle2 className="text-brand-gold" size={20} />
              <p className="font-medium text-brand-ink">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="impact" className="section-container pb-16">
        <div className="glass-card bg-brand-navy p-8 text-white">
          <h2 className="text-3xl font-bold">{siteContent.impact.title}</h2>
          <p className="mt-4 max-w-4xl text-white/80">{siteContent.impact.text}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-container pb-20">
        <div className="glass-card flex flex-col items-start justify-between gap-6 bg-gradient-to-r from-brand-blue to-brand-navy p-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">{siteContent.finalCta.title}</h2>
            <p className="mt-2 text-white/80">{siteContent.finalCta.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-brand-gold px-5 py-3 font-semibold text-brand-navy">
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
