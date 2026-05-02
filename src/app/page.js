import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import NoiseOverlay from '@/components/NoiseOverlay';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Skills from '@/components/Skills';
import Projects from '@/components/projects/Projects';
import Qualification from '@/components/Qualification';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Projects />
        <Qualification />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
