import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Button({ children, to, variant = 'primary', className = '', icon = true, ...props }) {
  const styles = {
    primary: 'bg-gold-gradient text-navy shadow-glow hover:-translate-y-0.5',
    secondary: 'border border-white/70 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-navy',
    outline: 'border border-gold text-navy hover:bg-gold hover:text-navy',
    dark: 'bg-navy text-white hover:bg-slate-800',
  };
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition duration-200 ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link className={classes} to={to}>
        <span>{children}</span>
        {icon && <ArrowRight size={17} aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      <span>{children}</span>
      {icon && <ArrowRight size={17} aria-hidden="true" />}
    </button>
  );
}
