import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import Button from '../components/common/Button.jsx';
import { salonImages } from '../assets/images/index.js';
import { serviceCategories, services } from '../data/servicesData.js';

export default function Services() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.services})` }}>
        <div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Services</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Beauty Menu</h1></div>
      </section>
      <section className="bg-white py-20">
        <div className="container-lux">
          {serviceCategories.map((category) => (
            <div className="mb-16" key={category}>
              <SectionHeading align="left" eyebrow={category} title={`${category} crafted with care`} />
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{services.filter((service) => service.category === category).map((service) => <ServiceCard key={service.id} service={service} />)}</div>
            </div>
          ))}
          <div className="rounded-lg bg-navy p-8 text-center text-white"><h2 className="font-display text-4xl font-bold">Ready for your signature ritual?</h2><div className="mt-6"><Button to="/appointment">Book Appointment</Button></div></div>
        </div>
      </section>
    </>
  );
}
