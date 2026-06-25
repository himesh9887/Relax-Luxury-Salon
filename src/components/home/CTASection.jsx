import Button from '../common/Button.jsx';

export default function CTASection() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-lux flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-gold">Concierge booking</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Book Your Luxury Experience Today</h2>
        </div>
        <Button to="/appointment">Reserve Your Time</Button>
      </div>
    </section>
  );
}
