import React from 'react';
import { Cpu, PenTool, Zap, Globe } from 'lucide-react';

const features = [
  {
    title: 'Performance-first',
    description: 'Ship experiences that feel instant with code-splitting, prefetching, and GPU-accelerated motion.',
    icon: Zap,
  },
  {
    title: 'Design systems',
    description: 'Composable components with accessible primitives and thoughtful defaults.',
    icon: PenTool,
  },
  {
    title: 'Web graphics',
    description: 'Interactive 3D and 2D visuals using Spline, WebGL, and SVG for storytelling.',
    icon: Cpu,
  },
  {
    title: 'Full-stack mindset',
    description: 'From APIs to frontends, craft complete products with observability and DX in mind.',
    icon: Globe,
  },
];

const About = () => {
  return (
    <section id="about" className="mx-auto mt-24 max-w-6xl rounded-2xl bg-slate-900/60 p-8 ring-1 ring-white/10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">About</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          I’m a developer focused on crafting responsive interfaces, smooth interactions, and maintainable systems. Here are a few things I value.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, description, icon: Icon }) => (
          <div key={title} className="group relative overflow-hidden rounded-xl bg-slate-900/80 p-5 ring-1 ring-white/10 transition hover:ring-white/20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
