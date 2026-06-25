import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamCard({ member }) {
  return (
    <motion.article
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-luxury"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img alt={member.name} className="h-full w-full object-cover" loading="lazy" src={member.image} />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-navy">{member.name}</h3>
        <p className="mt-1 font-semibold text-gold">{member.designation}</p>
        <p className="mt-4 text-sm font-bold text-slate-500">{member.experience} experience</p>
        <p className="mt-3 leading-7 text-slate-600">{member.specialization}</p>
        <p className="mt-4 flex gap-2 text-sm font-semibold text-navy"><Award className="text-gold" size={18} /> {member.achievements}</p>
      </div>
    </motion.article>
  );
}
