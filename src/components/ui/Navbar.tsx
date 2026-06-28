'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const LINKS = [
  { name: 'Top', href: '#top' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#tech' },
  { name: 'Stats', href: '#stats' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Background blur when scrolled down a bit
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide header logic
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[9000] px-6 md:px-12 transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20">
        
        {/* Logo */}
        <a 
          href="#top" 
          onClick={(e) => handleLinkClick(e, '#top')}
          className="font-display font-black text-2xl tracking-tighter text-text-primary hover:text-primary transition-colors"
        >
          JV<span className="text-primary">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.filter(l => l.name !== 'Top').map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-mono text-sm uppercase tracking-widest text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden md:flex font-mono text-sm uppercase tracking-widest px-5 py-2.5 bg-primary text-background font-bold rounded-full hover:bg-primary-hover hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile minimal dropdown/toggle (Optional, currently just showing a simplified version) */}
          <div className="md:hidden flex gap-4">
            {LINKS.filter(l => l.name !== 'Top').slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-mono text-[10px] uppercase tracking-widest text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </motion.header>
  );
}
