import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import Services from './components/Services.jsx';
import CaseStudies from './components/CaseStudies.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <Services />
        <CaseStudies />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} استودیو تبلیغات نوآور. همه حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}

export default App;
