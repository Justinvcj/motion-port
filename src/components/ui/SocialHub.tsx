'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Fingerprint } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { icon: FaGithub, url: 'https://github.com/Justinvcj', color: '#ffffff' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/justinvcj', color: '#06B6D4' },
  { icon: SiLeetcode, url: 'https://leetcode.com/justinvcj', color: '#F59E0B' },
  { icon: Mail, url: 'mailto:justinvcj@gmail.com', color: '#EC4899' },
  { icon: FaTwitter, url: 'https://twitter.com', color: '#38bdf8' },
];

export default function SocialHub() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center w-64 h-64 mx-auto"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Central Hub Button */}
      <motion.button
        className="w-24 h-24 rounded-full bg-surface-2 border border-white/20 flex flex-col items-center justify-center z-20 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-shadow group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Fingerprint className="text-accent-1 mb-1 group-hover:text-accent-2 transition-colors" size={32} />
        <span className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Connect</span>
      </motion.button>

      {/* Bursting Icons */}
      <AnimatePresence>
        {isOpen && SOCIAL_LINKS.map((link, index) => {
          const totalItems = SOCIAL_LINKS.length;
          const angle = (index / totalItems) * Math.PI * 2 - Math.PI / 2;
          const radius = 90;
          
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              animate={{ 
                x, 
                y, 
                scale: 1, 
                opacity: 1,
                transition: { 
                  type: 'spring', 
                  stiffness: 260, 
                  damping: 20, 
                  delay: index * 0.05 
                }
              }}
              exit={{ 
                x: 0, 
                y: 0, 
                scale: 0, 
                opacity: 0,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25,
                  delay: (totalItems - index) * 0.05
                }
              }}
              whileHover={{ scale: 1.2, zIndex: 30 }}
              className="absolute w-12 h-12 rounded-full bg-surface border flex items-center justify-center z-10"
              style={{ borderColor: link.color, color: link.color, boxShadow: `0 0 15px ${link.color}40` }}
            >
              <link.icon size={20} />
            </motion.a>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
