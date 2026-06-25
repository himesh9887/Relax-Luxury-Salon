import { Sparkles } from 'lucide-react';

export default function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-navy text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="grid h-16 w-16 animate-spin place-items-center rounded-full border border-gold/30 border-t-gold">
          <Sparkles className="text-gold" size={24} />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Relax Luxury Salon</p>
      </div>
    </div>
  );
}
