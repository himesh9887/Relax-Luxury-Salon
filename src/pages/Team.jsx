import SectionHeading from '../components/common/SectionHeading.jsx';
import TeamCard from '../components/team/TeamCard.jsx';
import { salonImages } from '../assets/images/index.js';
import { teamMembers } from '../data/teamData.js';

export default function Team() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.about})` }}><div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Team</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Expert Stylists</h1></div></section>
      <section className="bg-white py-20"><div className="container-lux"><SectionHeading eyebrow="Artists and therapists" title="Luxury experts with years of craft" /><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">{teamMembers.map((member) => <TeamCard key={member.name} member={member} />)}</div></div></section>
      <section className="bg-navy py-16 text-white"><div className="container-lux grid gap-6 md:grid-cols-3">{['Color Craft Certified', 'Bridal Excellence', 'Dermal Therapy Trained'].map((item) => <div className="glass-card rounded-lg p-6 text-center text-navy" key={item}><h3 className="font-display text-2xl font-bold">{item}</h3></div>)}</div></section>
    </>
  );
}
