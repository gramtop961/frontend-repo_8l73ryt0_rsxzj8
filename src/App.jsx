import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AlienShip from './components/AlienShip';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-400/20 selection:text-white">
      <Navbar />

      {/* Full-bleed 3D hero */}
      <Hero />

      {/* Main sections */}
      <main className="mx-auto max-w-7xl px-4 py-12 space-y-12">
        <AlienShip />
        <About />
        <Projects />
      </main>

      {/* Footer */}
      <footer id="contact" className="mx-auto mt-20 w-full border-t border-white/10 bg-slate-950/60 py-10 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
          <p>© {new Date().getFullYear()} dev.portfolio — Built with React, Tailwind, and Spline.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
