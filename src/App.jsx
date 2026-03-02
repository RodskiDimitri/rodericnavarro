import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import ResultsAtGlance from './components/sections/ResultsAtGlance';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import TargetMarkets from './components/sections/TargetMarkets';
import Contact from './components/sections/Contact';

function App() {
  // Use a smooth scrolling script to adjust offset if needed
  useEffect(() => {
    document.title = "Roderic Navarro | AI Technology";
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <ResultsAtGlance />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <TargetMarkets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
