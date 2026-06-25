import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const quickLinks = ['Home', 'About', 'Services', 'Gallery', 'Pricing', 'Contact'];
const services = ['Hair Styling', 'Hair Spa', 'Facial', 'Makeup'];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-lux grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr]">
        <div className="min-w-0">
          <h2 className="font-display text-3xl font-bold">Relax Luxury Salon</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/68">
            A polished destination for beautiful hair, radiant skin, refined makeup, and deeply restorative spa rituals.
          </p>
          <div className="mt-6 flex gap-3">
            {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
              <a className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-gold hover:bg-white/10" href="https://instagram.com" key={index} aria-label="Social profile">
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="mb-5 font-bold text-gold">Quick Links</h3>
          <div className="grid gap-3">
            {quickLinks.map((link) => (
              <Link className="text-white/70 hover:text-gold" key={link} to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="mb-5 font-bold text-gold">Services</h3>
          <div className="grid gap-3">
            {services.map((service) => <Link className="text-white/70 hover:text-gold" key={service} to="/services">{service}</Link>)}
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="mb-5 font-bold text-gold">Contact</h3>
          <div className="grid gap-4 text-white/72">
            <p className="flex min-w-0 gap-3"><MapPin className="mt-1 shrink-0 text-gold" size={18} /> <span className="min-w-0 break-words">28 Aurelia Avenue, Beverly Hills, CA</span></p>
            <p className="flex min-w-0 gap-3"><Mail className="mt-1 shrink-0 text-gold" size={18} /> <span className="min-w-0 break-all">hello@relaxluxurysalon.com</span></p>
            <p className="flex min-w-0 gap-3"><Phone className="mt-1 shrink-0 text-gold" size={18} /> <span className="min-w-0 break-words">+1 (555) 014-8899</span></p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/52">
        Copyright {new Date().getFullYear()} Relax Luxury Salon. All rights reserved.
      </div>
    </footer>
  );
}
