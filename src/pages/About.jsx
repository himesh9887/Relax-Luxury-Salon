import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Button from '../components/common/Button.jsx';
import TeamCard from '../components/team/TeamCard.jsx';
import { salonImages } from '../assets/images/index.js';
import { teamMembers } from '../data/teamData.js';

const timeline = ['Private consultation lounge opened', 'Luxury color and spa suites launched', 'Bridal concierge program introduced', 'Advanced skin therapy menu expanded'];

export default function About() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.about})` }}>
        <div className="container-lux relative z-10 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">About us</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Our Story</h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-lux grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Relax Luxury Salon" title="A sanctuary for refined beauty" text="We created Relax Luxury Salon for guests who want technical excellence without losing the pleasure of slowing down. Every service is shaped by consultation, premium formulas, and a polished hospitality rhythm." />
            <Button to="/appointment" variant="dark">Plan Your Visit</Button>
          </div>
          <div className="grid gap-5">
            {['Mission: elevate everyday beauty into a restorative ritual.', 'Vision: become the city reference for luxury salon care.', 'Experience: calm suites, expert artists, and precise aftercare.'].map((item) => (
              <p className="glass-card rounded-lg p-5 font-semibold text-navy" key={item}><CheckCircle2 className="mr-3 inline text-gold" />{item}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-pearl py-20">
        <div className="container-lux">
          <SectionHeading eyebrow="Salon journey" title="Built around craft, comfort, and trust" />
          <div className="grid gap-6 md:grid-cols-4">
            {timeline.map((item, index) => <article className="rounded-lg bg-white p-6 shadow-luxury" key={item}><span className="text-gold font-display text-4xl">0{index + 1}</span><p className="mt-4 font-semibold text-navy">{item}</p></article>)}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-lux">
          <SectionHeading eyebrow="Team introduction" title="Certified artists with a luxury service mindset" />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">{teamMembers.map((member) => <TeamCard key={member.name} member={member} />)}</div>
        </div>
      </section>
    </>
  );
}
