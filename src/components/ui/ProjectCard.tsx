import { motion } from 'framer-motion';

export interface ProjectData {
  emoji: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
      className="bg-white/20 border-[1.5px] border-white/40 rounded-[20px] p-7 backdrop-blur-[12px] flex flex-col w-full md:w-[320px] text-left shrink-0"
    >
      <div className="text-[48px] leading-none mb-4">{project.emoji}</div>
      
      <h3 className="font-display font-bold text-[22px] text-white mb-2 leading-tight">
        {project.title}
      </h3>
      
      <p className="font-sans text-[14px] text-white/85 line-clamp-2 mb-6 min-h-[40px]">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 mt-auto">
        {project.tech.map((t, i) => (
          <span 
            key={i}
            className="bg-white/20 text-white font-sans text-[12px] px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 border border-white rounded-full text-white font-sans font-medium hover:bg-white/10 transition-colors"
        >
          GitHub ↗
        </a>
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 bg-white text-[#1A6FA0] rounded-full font-sans font-medium hover:bg-white/90 transition-colors"
        >
          Live ↗
        </a>
      </div>
    </motion.div>
  );
}
