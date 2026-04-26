import { BrandLogo } from '@/components/brand-logo';
import { siteContent } from '@/data/content';

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy py-14 text-white">
      <div className="section-container">
        <div className="mb-6 hidden sm:block">
          <BrandLogo />
        </div>
        <div className="mb-6 sm:hidden">
          <BrandLogo compact />
        </div>

        <p className="max-w-2xl text-white/80">
          Pour toute information complémentaire, contactez-nous directement par WhatsApp, appel ou email.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <a href={siteContent.contact.whatsapp} className="glass-card p-4 text-brand-ink">
            WhatsApp
          </a>
          <a href={siteContent.contact.phoneHref} className="glass-card p-4 text-brand-ink">
            {siteContent.contact.phoneDisplay}
          </a>
          <a href={siteContent.contact.emailHref} className="glass-card p-4 text-brand-ink">
            {siteContent.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
