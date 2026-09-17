import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ArchitectureVisualizer } from './components/ArchitectureVisualizer';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-brand-cyan/25 selection:text-brand-cyan">
      {/* Dynamic Background Effects & Particle Grids */}
      <BackgroundEffects />

      {/* Fixed Blurred Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <ArchitectureVisualizer />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
