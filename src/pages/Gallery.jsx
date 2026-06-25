import { useMemo, useState } from 'react';
import GalleryCard from '../components/gallery/GalleryCard.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { beforeAfter, galleryCategories, galleryItems } from '../data/galleryData.js';
import { salonImages } from '../assets/images/index.js';
import { salonVideos } from '../assets/videos/index.js';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category), [category]);
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.bridal})` }}><div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Gallery</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Our Work</h1></div></section>
      <section className="bg-white py-20"><div className="container-lux"><SectionHeading eyebrow="Filter gallery" title="Hair, makeup, bridal, and spa moments" /><div className="mb-10 flex flex-wrap justify-center gap-3">{galleryCategories.map((item) => <button className={`rounded-lg px-5 py-3 text-sm font-bold ${category === item ? 'bg-navy text-gold' : 'bg-pearl text-navy'}`} key={item} onClick={() => setCategory(item)} type="button">{item}</button>)}</div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((item) => <GalleryCard key={item.title} item={item} />)}</div></div></section>
      <section className="bg-pearl py-20"><div className="container-lux"><SectionHeading eyebrow="Before and after" title="Visible transformation, refined finish" /><div className="grid gap-7 md:grid-cols-2">{beforeAfter.map((item) => <article className="rounded-lg bg-white p-5 shadow-luxury" key={item.title}><h3 className="mb-4 font-display text-2xl font-bold text-navy">{item.title}</h3><div className="grid grid-cols-2 gap-4"><img className="aspect-square rounded-lg object-cover" src={item.before} alt={`${item.title} before`} /><img className="aspect-square rounded-lg object-cover" src={item.after} alt={`${item.title} after`} /></div></article>)}</div></div></section>
      <section className="bg-white py-20"><div className="container-lux"><SectionHeading eyebrow="Video gallery" title="Behind the chair" /><div className="grid gap-7 md:grid-cols-2">{salonVideos.map((video) => <article className="rounded-lg bg-navy p-4 text-white" key={video.title}><img className="aspect-video rounded-lg object-cover" src={video.poster} alt={video.title} /><h3 className="mt-4 font-display text-2xl font-bold">{video.title}</h3></article>)}</div><div className="mt-12 rounded-lg bg-blush p-8 text-center font-semibold text-navy">Instagram Feed: @relaxluxurysalon</div></div></section>
    </>
  );
}
