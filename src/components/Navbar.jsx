import React from 'react';
import { Github, Mail, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-900">
            <Rocket className="h-4 w-4" />
          </span>
          <span>dev.portfolio</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
