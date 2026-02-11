import { useEffect, useRef } from 'react';
import { NeuralMesh } from './components/NeuralMesh';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';
import './index.css';

interface SectionPosition {
  top: number;
  bottom: number;
  center: number;
}

function App() {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Global scroll snap for pinned sections
    const pinnedSections = document.querySelectorAll('.section-pinned');
    const sectionPositions: SectionPosition[] = [];

    const updatePositions = () => {
      sectionPositions.length = 0;
      pinnedSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const scrollTop = window.scrollY;
        sectionPositions.push({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
          center: rect.top + scrollTop + rect.height / 2,
        });
      });
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout for snap
      scrollTimeoutRef.current = window.setTimeout(() => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const viewportCenter = scrollTop + windowHeight / 2;

        // Find the nearest pinned section center
        let nearestCenter = 0;
        let nearestDistance = Infinity;

        sectionPositions.forEach((pos) => {
          // Check if viewport is within or near this section
          const sectionInViewport = 
            (pos.top >= scrollTop && pos.top <= scrollTop + windowHeight) ||
            (pos.bottom >= scrollTop && pos.bottom <= scrollTop + windowHeight) ||
            (pos.top <= scrollTop && pos.bottom >= scrollTop + windowHeight);

          if (sectionInViewport) {
            const distance = Math.abs(pos.center - viewportCenter);
            if (distance < nearestDistance) {
              nearestDistance = distance;
              nearestCenter = pos.center;
            }
          }
        });

        // Snap if within threshold
        if (nearestDistance < windowHeight * 0.3) {
          const targetScroll = nearestCenter - windowHeight / 2;
          const currentDiff = Math.abs(targetScroll - scrollTop);
          
          if (currentDiff > 50) {
            isScrollingRef.current = true;
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth',
            });
            
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 500);
          }
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-navy">
      {/* Neural Mesh Background */}
      <NeuralMesh nodeCount={75} connectionDistance={140} />

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
