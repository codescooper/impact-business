import { Megaphone, Rocket, Target } from 'lucide-react';
import { siteContent } from '@/data/content';

const icons = [Megaphone, Rocket, Target];

export function ServicesSection() {
  return (
    <section id="services" className="section-container py-16">
      <h2 className="text-3xl font-bold text-brand-navy">Des solutions concrètes pour développer votre activité</h2>
      <div className="gold-divider mt-4 mb-8" />
      <div className="grid gap-6 lg:grid-cols-3">
        {siteContent.services.map((service, index) => {
          const Icon = icons[index];
          return (
            <article key={service.title} className="glass-card p-6">
              <div className="mb-4 inline-flex rounded-full bg-brand-gold/20 p-3">
                <Icon className="text-brand-gold" size={20} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
              <p className="mt-2 text-sm font-semibold uppercase text-brand-blue">{service.objective}</p>
              <p className="mt-4 text-brand-ink/80">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
