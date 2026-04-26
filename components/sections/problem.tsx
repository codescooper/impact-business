import { siteContent } from '@/data/content';

export function ProblemSection() {
  return (
    <section className="section-container py-16">
      <article className="glass-card p-8">
        <h2 className="text-3xl font-bold text-brand-navy">{siteContent.problem.title}</h2>
        <p className="mt-4 text-brand-ink/80">{siteContent.problem.description}</p>
      </article>
    </section>
  );
}
