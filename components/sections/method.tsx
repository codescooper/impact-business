import { siteContent } from '@/data/content';

export function MethodSection() {
  return (
    <section id="methode" className="section-container py-16">
      <h2 className="text-3xl font-bold text-brand-navy">Une approche orientée résultats</h2>
      <div className="gold-divider mt-4 mb-8" />
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.method.map((item, index) => (
          <article key={item} className="glass-card relative p-6">
            <span className="absolute -top-3 left-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
              {index + 1}
            </span>
            <p className="pt-2 font-semibold text-brand-navy">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
