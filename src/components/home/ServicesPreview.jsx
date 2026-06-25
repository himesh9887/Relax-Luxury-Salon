import SectionHeading from '../common/SectionHeading.jsx';
import ServiceCard from '../services/ServiceCard.jsx';
import { services } from '../../data/servicesData.js';

export default function ServicesPreview() {
  return (
    <section className="bg-pearl py-20">
      <div className="container-lux">
        <SectionHeading eyebrow="Signature services" title="Luxury care for hair, skin, makeup, and spa" text="Choose from expert styling, restorative hair spa, dimensional color, facials, makeup, and bridal packages." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(1, 7).map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </div>
    </section>
  );
}
