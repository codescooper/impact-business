import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '@/data/content';

export function DifferentiationSection() {
  return (
    <section className="section-container py-16">
      <h2 className="text-3xl font-bold text-brand-navy">Nous ne faisons pas que conseiller. Nous agissons.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {siteContent.differentiation.map((point) => (
          <div key={point} className="glass-card flex items-center gap-3 p-4">
            <CheckCircle2 className="text-brand-gold" size={20} />
            <span className="font-medium text-brand-ink">{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
