import { motion } from 'framer-motion';

export default function GalleryCard({ item }) {
  return (
    <motion.figure
      className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-navy shadow-luxury"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <img alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={item.image} />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/65 to-transparent p-5 pt-20 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">{item.category}</p>
        <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
      </figcaption>
    </motion.figure>
  );
}
