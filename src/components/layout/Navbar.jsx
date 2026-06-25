import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Scissors, X } from 'lucide-react';
import Button from '../common/Button.jsx';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Gallery', '/gallery'],
  ['Team', '/team'],
  ['Pricing', '/pricing'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled || open
    ? 'bg-navy/95 shadow-2xl backdrop-blur-xl'
    : 'bg-navy/95 shadow-lg backdrop-blur-xl lg:bg-transparent lg:shadow-none lg:backdrop-blur-0';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${navClass}`}>
      <nav className="container-lux flex min-h-16 items-center justify-between gap-3 py-2 text-white sm:min-h-20 sm:gap-5 sm:py-0">
        <NavLink className="flex min-w-0 items-center gap-2 sm:gap-3" to="/" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/60 bg-white/10 text-gold sm:h-11 sm:w-11">
            <Scissors size={21} />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-xl font-bold leading-none sm:text-2xl">Relax</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.24em]">
              Luxury Salon
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, path]) => (
            <NavLink className="nav-link text-sm font-semibold text-white/86 hover:text-white" key={path} to={path}>
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/appointment" icon={false}>Book Appointment</Button>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/20 bg-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`border-t border-white/10 bg-navy/98 text-white transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="container-lux grid gap-2 py-4">
          {links.map(([label, path]) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-base font-semibold transition ${
                  isActive ? 'bg-white/10 text-gold' : 'text-white/85 hover:bg-white/10 hover:text-white'
                }`
              }
              key={path}
              to={path}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Button className="mt-2" to="/appointment" icon={false}>Book Appointment</Button>
        </div>
      </div>
    </header>
  );
}
