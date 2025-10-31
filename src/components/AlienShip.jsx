import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AlienShip = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const y = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

  return (
    <section ref={ref} className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 ring-1 ring-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.18),rgba(2,6,23,0))]" />
      <motion.div style={{ y, rotate, opacity, scale }} className="relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white">Scroll-reactive alien ship</h2>
            <p className="text-slate-300">
              This section reacts to your scroll: it floats, rotates, and subtly scales as you move. It demonstrates smooth motion primitives with sensible defaults.
            </p>
            <ul className="list-disc pl-5 text-slate-300">
              <li>UseScroll ties progress to section visibility</li>
              <li>UseTransform maps progress to motion values</li>
              <li>GPU-accelerated transforms</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900/60 ring-1 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 blur-2xl opacity-30" />
            </div>
            <motion.div
              className="absolute inset-0"
              style={{ y: useTransform(scrollYProgress, [0, 1], [10, -10]) }}
              transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            >
              <svg viewBox="0 0 200 120" className="mx-auto mt-10 h-40 w-64">
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                  </radialGradient>
                </defs>
                <ellipse cx="100" cy="80" rx="60" ry="16" fill="url(#g)" opacity="0.3" />
                <ellipse cx="100" cy="60" rx="50" ry="18" fill="#0ea5e9" opacity="0.15" />
                <ellipse cx="100" cy="50" rx="40" ry="14" fill="#34d399" opacity="0.4" />
                <circle cx="100" cy="45" r="10" fill="#a7f3d0" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AlienShip;
