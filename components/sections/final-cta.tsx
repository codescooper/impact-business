import { siteContent } from '@/data/content';

export function FinalCtaSection() {
  return (
    <section className="section-container py-16">
      <article className="glass-card bg-gradient-to-r from-brand-blue to-brand-navy p-8 text-white">
        <h2 className="text-3xl font-bold">{siteContent.finalCta.title}</h2>
        <p className="mt-3 text-white/85">{siteContent.finalCta.text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteContent.contact.whatsapp} className="btn-gold" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={siteContent.contact.phoneHref} className="btn-light">
            Appeler maintenant
          </a>
          <a href={siteContent.contact.emailHref} className="btn-light">
            Envoyer un email
          </a>
        </div>
      </article>
    </section>
  );
}
