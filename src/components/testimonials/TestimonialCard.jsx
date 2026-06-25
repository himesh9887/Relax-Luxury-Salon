import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="glass-card rounded-lg p-7">
      <div className="mb-5 flex gap-1 text-gold">
        {Array.from({ length: testimonial.rating }).map((_, index) => <Star fill="currentColor" key={index} size={18} />)}
      </div>
      <p className="leading-8 text-slate-700">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center gap-4">
        <img alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" src={testimonial.image} />
        <div>
          <h3 className="font-bold text-navy">{testimonial.name}</h3>
          <p className="text-sm text-slate-500">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}
