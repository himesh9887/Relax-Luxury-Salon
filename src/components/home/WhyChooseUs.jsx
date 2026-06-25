import { Award, Gem, ShieldCheck, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading.jsx';

const reasons = [
  ['Certified Experts', Award, 'Specialists trained in advanced hair, makeup, skin, and spa rituals.'],
  ['Premium Products', Gem, 'Luxury formulas selected for performance, comfort, and lasting finish.'],
  ['Luxury Ambience', ShieldCheck, 'Private-feeling suites, calming textures, and impeccable service flow.'],
  ['Customer Satisfaction', Smile, 'Consultation-led experiences with thoughtful aftercare guidance.'],
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-lux">
        <SectionHeading light eyebrow="Why choose us" title="A salon experience that feels considered from arrival to aftercare" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([title, Icon, text], index) => (
            <motion.article className="glass-card rounded-lg p-6 text-navy" key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-navy text-gold"><Icon size={23} /></span>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
