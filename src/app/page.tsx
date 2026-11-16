import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ArchitectureVisualizer } from '@/components/ArchitectureVisualizer';
import { Portfolio } from '@/components/Portfolio';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <ArchitectureVisualizer />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
