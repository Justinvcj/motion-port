'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { icon: FaGithub, url: 'https://github.com/Justinvcj', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/justinvcj', label: 'LinkedIn' },
  { icon: SiLeetcode, url: 'https://leetcode.com/justinvcj', label: 'LeetCode' },
  { icon: Mail, url: 'mailto:justinvcj@gmail.com', label: 'Email' },
  { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
];

export default function SocialBurst() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center w-[300px] h-[300px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Central Hub Button */}
      <motion.button
        className="w-[120px] h-[120px] rounded-full bg-background flex items-center justify-center z-20 shadow-2xl hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
          Find Me
        </span>
      </motion.button>

      {/* Bursting Icons */}
      <AnimatePresence>
        {isOpen && SOCIAL_LINKS.map((link, index) => {
          const totalItems = SOCIAL_LINKS.length;
          const angle = (index / totalItems) * Math.PI * 2 - Math.PI / 2;
          const radius = 100;
          
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
                  stiffness: 300, 
                  damping: 20, 
                  mass: 0.8,
                  delay: index * 0.03 
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
                  delay: (totalItems - index) * 0.03
                }
              }}
              whileHover={{ scale: 1.15, zIndex: 30 }}
              className="absolute w-12 h-12 rounded-full bg-background flex items-center justify-center z-10 text-text-primary hover:bg-accent-1 hover:text-background transition-colors duration-200"
            >
              <link.icon size={20} />
            </motion.a>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
