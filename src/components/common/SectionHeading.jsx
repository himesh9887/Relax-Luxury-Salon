import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, text, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <motion.div
      className={`mb-12 flex max-w-3xl flex-col ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && <span className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</span>}
      <h2 className={`font-display text-4xl font-bold leading-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-8 md:text-lg ${light ? 'text-white/76' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  );
}
