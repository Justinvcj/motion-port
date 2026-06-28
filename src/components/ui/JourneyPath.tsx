'use client';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '../../store/usePortfolioStore';
import { Sparkles, User, Code2, Layers, BarChart2, Briefcase, Mail } from 'lucide-react';

const ICONS = [Sparkles, User, Code2, Layers, BarChart2, Briefcase, Mail];
const PATH_D = "M0,100 C360,20 720,100 1080,20 C1260,0 1380,60 1440,80";
const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 120;

export default function JourneyPath() {
  const { currentStep, goToStep } = usePortfolioStore();
  const pathRef = useRef<SVGPathElement>(null);
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const positions = [];
      // 7 nodes
      for (let i = 0; i < 7; i++) {
        // Distribute nodes from 7% to 93% of the path to avoid cutting off at the screen edges
        const point = pathRef.current.getPointAtLength(((i + 0.5) / 7) * length);
        positions.push({ x: point.x, y: point.y });
      }
      setNodePositions(positions);
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-[120px] md:h-[160px] z-40 pointer-events-none flex items-end">
      
      {/* Container to maintain aspect ratio relative to width, but we want it to stretch full width */}
      <div className="relative w-full h-[120px] overflow-hidden hidden md:block">
        <svg 
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[120px]"
        >
          <path
            ref={pathRef}
            d={PATH_D}
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="2"
          />
          
          {nodePositions.length === 7 && nodePositions.map((pos, i) => {
            const isActive = i === currentStep;
            const isCompleted = i < currentStep;
            
            return (
              <g 
                key={i} 
                className="transition-all duration-1000 ease-out cursor-pointer pointer-events-auto"
                onClick={() => goToStep(i)}
              >
                <motion.circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isActive ? 26 : 22}
                  fill={
                    isCompleted ? 'rgba(255,255,255,0.5)' :
                    isActive ? '#FFFFFF' :
                    'rgba(255,255,255,0.2)'
                  }
                  stroke={isActive || isCompleted ? '#FFFFFF' : 'rgba(255,255,255,0.6)'}
                  strokeWidth="2"
                  animate={{
                    r: isActive ? 26 : 22,
                    filter: isActive ? 'drop-shadow(0 4px 20px rgba(255,255,255,0.5))' : 'drop-shadow(0 0px 0px rgba(0,0,0,0))'
                  }}
                  transition={{ duration: 0.8 }}
                />
              </g>
            );
          })}
        </svg>

        {/* Icons rendered outside SVG for better React-Lucide support and crispness, positioned absolutely over the SVG */}
        {nodePositions.length === 7 && nodePositions.map((pos, i) => {
          const isActive = i === currentStep;
          const Icon = ICONS[i];
          
          // Calculate percentage positions based on viewBox
          const leftPercent = (pos.x / VIEWBOX_WIDTH) * 100;
          const topPercent = (pos.y / VIEWBOX_HEIGHT) * 100;

          return (
            <div
              key={`icon-${i}`}
              className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out"
              onClick={() => goToStep(i)}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                width: isActive ? '52px' : '44px',
                height: isActive ? '52px' : '44px'
              }}
            >
              <Icon 
                size={isActive ? 24 : 20} 
                strokeWidth={isActive ? 2.5 : 2}
                color={isActive ? '#1A6FA0' : '#FFFFFF'} 
                className="transition-colors duration-1000"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile simplified path (straight line or hidden curve) */}
      <div className="relative w-full h-[80px] md:hidden px-6 flex items-center justify-between">
        <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-white/30 -translate-y-1/2" />
        
        {ICONS.map((Icon, i) => {
          const isActive = i === currentStep;
          const isCompleted = i < currentStep;
          
          return (
            <div 
              key={`mobile-${i}`}
              className="relative flex items-center justify-center rounded-full border-2 transition-all duration-1000 cursor-pointer pointer-events-auto"
              onClick={() => goToStep(i)}
              style={{
                width: isActive ? '40px' : '32px',
                height: isActive ? '40px' : '32px',
                backgroundColor: isCompleted ? 'rgba(255,255,255,0.5)' : isActive ? '#FFFFFF' : 'rgba(255,255,255,0.2)',
                borderColor: isActive || isCompleted ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                boxShadow: isActive ? '0 4px 20px rgba(255,255,255,0.5)' : 'none',
                zIndex: isActive ? 10 : 1
              }}
            >
              <Icon 
                size={isActive ? 18 : 14} 
                strokeWidth={isActive ? 2.5 : 2}
                color={isActive ? '#1A6FA0' : '#FFFFFF'} 
              />
            </div>
          );
        })}
      </div>

      {/* Help Hint Bottom Right (Desktop only) */}
      <div className="absolute bottom-8 right-12 hidden md:block text-[12px] font-sans text-white/50 tracking-wide select-none">
        press → to continue
      </div>
    </div>
  );
}
