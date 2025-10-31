import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0"> 
        <Spline 
          scene="https://prod.spline.design/8qf2dJZsJx6k1VqU/scene.splinecode" 
          style={{ width: '100%', height: '100%' }} 
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-4 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          Shipping delightful dev experiences
        </span>
        <h1 className="mt-2 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          Developer Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-slate-300 sm:text-lg">
          Building immersive, performant web experiences with React, TypeScript, and modern tooling. Explore projects, motion experiments, and 3D scenes.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-sm transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            <Rocket className="h-4 w-4" />
            View Projects
          </a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
