import { Star } from 'lucide-react';
import TestimonialCard from '../components/testimonials/TestimonialCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { salonImages } from '../assets/images/index.js';
import { successStories, testimonials } from '../data/testimonialsData.js';

export default function Testimonials() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.contact})` }}><div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Testimonials</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Client Reviews</h1></div></section>
      <section className="bg-white py-20"><div className="container-lux"><SectionHeading eyebrow="Five-star experiences" title="Reviews from our salon guests" /><div className="mb-10 flex justify-center gap-2 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star fill="currentColor" key={i} />)}</div><div className="grid gap-7 md:grid-cols-2">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}</div></div></section>
      <section className="bg-pearl py-20"><div className="container-lux"><SectionHeading eyebrow="Success stories" title="Transformation notes" /><div className="grid gap-5 md:grid-cols-3">{successStories.map((story) => <article className="rounded-lg bg-white p-6 shadow-luxury" key={story}>{story}</article>)}</div></div></section>
    </>
  );
}
