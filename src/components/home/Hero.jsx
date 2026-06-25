import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';
import { salonImages } from '../../assets/images/index.js';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <img alt="Luxury salon interior" className="absolute inset-0 h-full w-full object-cover" src={salonImages.hero} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/72 to-navy/20" />
      <div className="container-lux relative z-10 pt-20 text-white">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-gold">Premium beauty and spa destination</p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">Relax, Refresh & Rejuvenate</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">Experience Luxury Beauty, Hair Care & Spa Services</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button to="/appointment">Book Appointment</Button>
            <Button to="/services" variant="secondary">Explore Services</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
