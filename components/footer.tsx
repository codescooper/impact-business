import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { siteContent } from '@/data/content';

export function Footer() {
  return (
    <footer id="contact" className="bg-night py-14 text-white">
      <div className="section-container space-y-6">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="max-w-2xl text-white/80">
          Pour toute information complémentaire, contactez-nous par appel, WhatsApp ou email.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`} className="glass-card p-4 text-night">
            Téléphone : {siteContent.contact.phone}
          </a>
          <a href={`mailto:${siteContent.contact.email}`} className="glass-card p-4 text-night">
            Email : {siteContent.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={siteContent.contact.whatsapp} className="rounded-full bg-impact p-2">
            <MessageCircle size={18} />
          </a>
          <a href="#" className="rounded-full border border-white/30 p-2 text-white/80">
            <Facebook size={18} />
          </a>
          <a href="#" className="rounded-full border border-white/30 p-2 text-white/80">
            <Instagram size={18} />
          </a>
          <a href="#" className="rounded-full border border-white/30 p-2 text-white/80">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
