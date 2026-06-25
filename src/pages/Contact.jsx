import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Button from '../components/common/Button.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { salonImages } from '../assets/images/index.js';

export default function Contact() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.contact})` }}>
        <div className="container-lux relative z-10 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Visit Relax</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-lux grid min-w-0 gap-10 lg:grid-cols-2">
          <div className="min-w-0">
            <SectionHeading align="left" eyebrow="Contact information" title="Our concierge team is ready to help" />
            <div className="grid min-w-0 gap-4 text-slate-700">
              <p className="flex min-w-0 gap-3">
                <MapPin className="mt-1 shrink-0 text-gold" size={22} />
                <span className="min-w-0 break-words">28 Aurelia Avenue, Beverly Hills, CA</span>
              </p>
              <p className="flex min-w-0 gap-3">
                <Mail className="mt-1 shrink-0 text-gold" size={22} />
                <span className="min-w-0 break-all">hello@relaxluxurysalon.com</span>
              </p>
              <p className="flex min-w-0 gap-3">
                <Phone className="mt-1 shrink-0 text-gold" size={22} />
                <span className="min-w-0 break-words">+1 (555) 014-8899</span>
              </p>
              <p className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
                <FaInstagram className="shrink-0 text-gold" />
                <span className="min-w-0 break-all">@relaxluxurysalon</span>
                <FaFacebookF className="shrink-0 text-gold" />
                <FaWhatsapp className="shrink-0 text-gold" />
              </p>
            </div>
          </div>

          <form className="grid min-w-0 gap-5 rounded-lg bg-pearl p-6 shadow-luxury">
            <input className="luxury-input" placeholder="Name" />
            <input className="luxury-input" placeholder="Email" />
            <textarea className="luxury-input min-h-32" placeholder="Message" />
            <Button icon={false}>Send Message</Button>
          </form>
        </div>
      </section>

      <section className="bg-pearl py-12">
        <div className="container-lux">
          <iframe
            className="h-80 w-full rounded-lg shadow-luxury"
            loading="lazy"
            src="https://www.google.com/maps?q=Beverly%20Hills%20CA&output=embed"
            title="Relax Luxury Salon map"
          />
        </div>
      </section>
    </>
  );
}
