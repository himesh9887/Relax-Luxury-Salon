import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { services } from '../../data/servicesData.js';
import Button from '../common/Button.jsx';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-luxury md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <input className="luxury-input" name="name" placeholder="Name" required />
        <input className="luxury-input" name="phone" placeholder="Phone Number" required type="tel" />
        <input className="luxury-input" name="email" placeholder="Email" required type="email" />
        <select className="luxury-input" name="service" required defaultValue="">
          <option disabled value="">Select Service</option>
          {services.map((service) => <option key={service.id}>{service.title}</option>)}
        </select>
        <input className="luxury-input" name="date" required type="date" />
        <input className="luxury-input" name="time" required type="time" />
      </div>
      <textarea className="luxury-input min-h-32" name="message" placeholder="Message" />
      <Button icon={false} className="w-full" type="submit"><CalendarCheck size={18} /> Request Appointment</Button>
      {submitted && <p className="rounded-lg bg-sage/15 px-4 py-3 text-sm font-semibold text-navy">Thank you. Our concierge team will confirm your appointment shortly.</p>}
    </form>
  );
}
