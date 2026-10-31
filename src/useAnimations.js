import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimations() {
  useEffect(() => {
    // 1. Hero Content Entrance Animation
    gsap.fromTo(
      '.hero-biz-content > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // 2. Hero Visual Parallax Entrance
    gsap.fromTo(
      '.hero-biz-visual',
      { opacity: 0, scale: 0.95, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      }
    );

    // 3. Scroll-Driven Staggered Reveals for Sections (Services, Portfolio, About, Pricing, Contact)
    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // 4. Staggered Card Reveals (Services & Portfolio Cards)
    const cardGrids = document.querySelectorAll('.services-grid, .portfolio-grid, .pricing-grid, .testimonials-grid');
    cardGrids.forEach((grid) => {
      const cards = grid.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Clean up ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}