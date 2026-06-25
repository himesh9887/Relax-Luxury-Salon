import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../common/SectionHeading.jsx';
import TestimonialCard from '../testimonials/TestimonialCard.jsx';
import { testimonials } from '../../data/testimonialsData.js';

export default function TestimonialPreview() {
  return (
    <section className="bg-blush/45 py-20">
      <div className="container-lux">
        <SectionHeading eyebrow="Client words" title="Loved for calm service and polished results" />
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 4200 }} pagination={{ clickable: true }} spaceBetween={24} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {testimonials.map((testimonial) => <SwiperSlide className="pb-12" key={testimonial.name}><TestimonialCard testimonial={testimonial} /></SwiperSlide>)}
        </Swiper>
      </div>
    </section>
  );
}
