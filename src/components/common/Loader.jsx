import { Scissors, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] grid min-h-screen place-items-center overflow-hidden bg-navy text-white"
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <motion.div
        animate={{ opacity: [0.18, 0.34, 0.18] }}
        className="absolute h-[360px] w-[360px] rounded-full border border-gold/10 sm:h-[460px] sm:w-[460px]"
        transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-white/10 sm:h-[320px] sm:w-[320px]"
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        className="relative flex w-full max-w-sm flex-col items-center px-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <div className="relative grid h-24 w-24 place-items-center">
          <motion.div
            animate={{ rotate: 360 }}
            className="absolute inset-0 rounded-full border border-gold/20 border-t-gold"
            transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            className="absolute inset-2 rounded-full border border-white/10 border-b-white/55"
            transition={{ duration: 1.9, ease: 'linear', repeat: Infinity }}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.55, 1, 0.55] }}
            className="absolute inset-5 rounded-full bg-gold/12"
            transition={{ duration: 1.45, ease: 'easeInOut', repeat: Infinity }}
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-navy shadow-glow"
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
          >
            <Scissors className="text-gold" size={22} />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [0.65, 1, 0.65], x: [0, 7, 0], y: [0, -8, 0] }}
            className="absolute right-1 top-2 text-gold"
            transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
          >
            <Sparkles size={18} />
          </motion.div>
        </div>

        <div className="mt-7">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 8 }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            Relax Luxury Salon
          </motion.p>
          <motion.p
            animate={{ opacity: [0.62, 1, 0.62] }}
            className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold/85"
            transition={{ duration: 1.7, ease: 'easeInOut', repeat: Infinity }}
          >
            Please wait
          </motion.p>
        </div>

        <div className="mt-7 h-1 w-full max-w-52 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ x: ['-45%', '120%'] }}
            className="h-full w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent"
            transition={{ duration: 1.15, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
