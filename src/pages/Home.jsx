import Hero from '../components/home/Hero.jsx';
import AboutPreview from '../components/home/AboutPreview.jsx';
import ServicesPreview from '../components/home/ServicesPreview.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import TeamPreview from '../components/home/TeamPreview.jsx';
import TestimonialPreview from '../components/home/TestimonialPreview.jsx';
import GalleryPreview from '../components/home/GalleryPreview.jsx';
import CTASection from '../components/home/CTASection.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <TeamPreview />
      <TestimonialPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
