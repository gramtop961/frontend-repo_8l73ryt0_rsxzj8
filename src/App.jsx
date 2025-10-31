import React from 'react';
import Hero from './components/Hero';
import AlienShip from './components/AlienShip';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <header className="mb-6 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight text-white">dev.portfolio</a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </header>

        <main className="space-y-10">
          <Hero />
          <AlienShip />
          <About />
          <Projects />
        </main>

        <footer id="contact" className="mt-20 flex items-center justify-between border-t border-white/10 py-8 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} dev.portfolio — All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
