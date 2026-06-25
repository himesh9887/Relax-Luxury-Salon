import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GalleryCard from '../gallery/GalleryCard.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import { galleryItems } from '../../data/galleryData.js';

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-lux">
        <SectionHeading eyebrow="Gallery" title="A glimpse inside our transformations" />
        <Swiper modules={[Autoplay, Navigation]} autoplay={{ delay: 3600 }} spaceBetween={24} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
          {galleryItems.map((item) => <SwiperSlide key={item.title}><GalleryCard item={item} /></SwiperSlide>)}
        </Swiper>
        <div className="mt-10 text-center"><Button to="/gallery" variant="dark">View Gallery</Button></div>
      </div>
    </section>
  );
}
