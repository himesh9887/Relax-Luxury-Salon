import { motion } from 'framer-motion';
import { salonImages } from '../../assets/images/index.js';
import Button from '../common/Button.jsx';
import SectionHeading from '../common/SectionHeading.jsx';

export default function AboutPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img alt="Salon consultation" className="aspect-[4/5] rounded-lg object-cover shadow-luxury" loading="lazy" src={salonImages.about} />
        </motion.div>
        <div>
          <SectionHeading align="left" eyebrow="Our philosophy" title="Beauty rituals with a private-suite level of care" text="Relax Luxury Salon blends refined artistry with restorative hospitality. Every guest receives a thoughtful consultation, premium products, and a calm service rhythm designed around comfort." />
          <Button to="/about" variant="dark">Read More</Button>
        </div>
      </div>
    </section>
  );
}
