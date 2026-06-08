import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AndBanner from '@/components/AndBanner';
import About from '@/components/About';
import KeyFeatures from '@/components/KeyFeatures';
import GlimpseExcellence from '@/components/GlimpseExcellence';
import Programs from '@/components/Programs';
import Launching from '@/components/Launching';
import Professionals from '@/components/Professionals';
import Facilities from '@/components/Facilities';
import CoachesEvents from '@/components/CoachesEvents';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <Hero />
        {/* <AndBanner /> */}
        <About />
        <KeyFeatures />
        <GlimpseExcellence />
        <Programs />
        <Launching />
        <Professionals />
        <Facilities />
        <CoachesEvents />
      </main>
      <Footer />
    </>
  );
}
