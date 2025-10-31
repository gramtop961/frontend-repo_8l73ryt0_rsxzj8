import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const items = [
  {
    title: 'Motion Lab',
    description: 'A collection of micro-interactions and scroll-driven demos using Framer Motion.',
    tags: ['Framer Motion', 'React', 'Animations'],
    repo: '#',
    demo: '#',
  },
  {
    title: '3D Playground',
    description: 'Experiments with Spline, shaders, and lighting for immersive hero sections.',
    tags: ['Spline', 'WebGL', 'UX'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Composable components with accessible primitives and theming.',
    tags: ['Design Systems', 'Accessibility', 'UI'],
    repo: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl rounded-2xl bg-slate-900/60 p-8 ring-1 ring-white/10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            A snapshot of things I’ve built and explored recently.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <motion.article
            key={p.title}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative flex flex-col overflow-hidden rounded-xl bg-slate-900/80 p-5 ring-1 ring-white/10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.demo} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15">
                  <Globe className="h-4 w-4" /> Demo
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
