import SectionHeading from '../common/SectionHeading.jsx';
import TeamCard from '../team/TeamCard.jsx';
import Button from '../common/Button.jsx';
import { teamMembers } from '../../data/teamData.js';

export default function TeamPreview() {
  return (
    <section className="bg-white py-20">
      <div className="container-lux">
        <SectionHeading eyebrow="Expert artists" title="Meet the hands behind the glow" text="Our stylists, therapists, and makeup artists bring technical precision and calm confidence to every appointment." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => <TeamCard key={member.name} member={member} />)}
        </div>
        <div className="mt-10 text-center"><Button to="/team" variant="dark">Meet Our Team</Button></div>
      </div>
    </section>
  );
}
