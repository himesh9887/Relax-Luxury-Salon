import { motion } from 'framer-motion';
import Button from '../common/Button.jsx';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-luxury"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={service.image} />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-blush text-navy"><Icon size={22} /></span>
          <span className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-gold">{service.price}</span>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{service.category}</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-navy">{service.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{service.short}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm font-semibold text-slate-500">{service.duration}</span>
          <Button to="/appointment" variant="outline" className="min-h-10 px-4 py-2 text-xs">Book</Button>
        </div>
      </div>
    </motion.article>
  );
}
