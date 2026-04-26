import { siteContent } from '@/data/content';

export function ImpactSection() {
  return (
    <section id="impact" className="section-container py-16">
      <article className="glass-card bg-brand-navy p-8 text-white">
        <h2 className="text-3xl font-bold">{siteContent.impact.title}</h2>
        <p className="mt-4 max-w-4xl text-white/80">{siteContent.impact.text}</p>
      </article>
    </section>
  );
}
