import { Clock } from 'lucide-react';
import BookingForm from '../components/booking/BookingForm.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { salonImages } from '../assets/images/index.js';

export default function Appointment() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.hero})` }}><div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Appointment</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Reserve Your Time</h1></div></section>
      <section className="bg-pearl py-20"><div className="container-lux grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"><BookingForm /><aside className="rounded-lg bg-navy p-8 text-white shadow-luxury"><SectionHeading align="left" light eyebrow="Visit details" title="Salon timings and booking guidelines" /><div className="grid gap-4"><p className="flex gap-3"><Clock className="text-gold" /> Mon-Sat: 9:00 AM - 8:00 PM</p><p className="flex gap-3"><Clock className="text-gold" /> Sunday: 10:00 AM - 5:00 PM</p><p className="leading-7 text-white/74">Please arrive 10 minutes early. Bridal and color services may require a consultation before confirmation.</p></div></aside></div></section>
    </>
  );
}
