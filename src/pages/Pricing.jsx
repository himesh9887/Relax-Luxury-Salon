import { Check, X } from 'lucide-react';
import Button from '../components/common/Button.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { comparisonRows, packages } from '../data/pricingData.js';
import { salonImages } from '../assets/images/index.js';

export default function Pricing() {
  return (
    <>
      <section className="page-hero bg-cover bg-center" style={{ backgroundImage: `url(${salonImages.spa})` }}><div className="container-lux relative z-10 text-white"><p className="text-sm font-bold uppercase tracking-[0.3em] text-gold">Pricing</p><h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Packages</h1></div></section>
      <section className="bg-white py-20"><div className="container-lux"><SectionHeading eyebrow="Curated packages" title="Choose your luxury experience" /><div className="grid gap-7 lg:grid-cols-4">{packages.map((plan) => <article className={`rounded-lg p-6 shadow-luxury ${plan.highlighted ? 'bg-navy text-white' : 'bg-white border border-slate-200 text-navy'}`} key={plan.name}><h3 className="font-display text-2xl font-bold">{plan.name}</h3><p className="mt-4 text-4xl font-bold text-gold">{plan.price}</p><p className="mt-3 leading-7 opacity-75">{plan.description}</p><ul className="mt-6 grid gap-3">{plan.features.map((feature) => <li className="flex gap-2" key={feature}><Check className="text-gold" size={18} />{feature}</li>)}</ul><Button className="mt-7 w-full" to="/appointment" variant={plan.highlighted ? 'primary' : 'dark'}>Book Package</Button></article>)}</div></div></section>
      <section className="bg-pearl py-20"><div className="container-lux overflow-x-auto"><SectionHeading eyebrow="Comparison" title="Package inclusions" /><table className="w-full min-w-[720px] overflow-hidden rounded-lg bg-white text-left shadow-luxury"><thead className="bg-navy text-white"><tr><th className="p-4">Feature</th>{packages.map((p) => <th className="p-4" key={p.name}>{p.name}</th>)}</tr></thead><tbody>{comparisonRows.map((row) => <tr className="border-b" key={row[0]}><td className="p-4 font-semibold">{row[0]}</td>{row.slice(1).map((enabled, index) => <td className="p-4" key={index}>{enabled ? <Check className="text-gold" /> : <X className="text-slate-300" />}</td>)}</tr>)}</tbody></table></div></section>
    </>
  );
}
