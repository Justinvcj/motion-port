import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';
import ProjectCard, { ProjectData } from '../ui/ProjectCard';

const PROJECTS: ProjectData[] = [
  {
    title: "Equinox",
    emoji: "🚗",
    description: "Production ride-hailing platform with real-time tracking, WebSockets, dynamic pricing and OSRM routing.",
    tech: ["Flutter", "Node.js", "WebSockets", "Supabase", "PostgreSQL"],
    github: "https://github.com/Justinvcj",
    live: "#"
  },
  {
    title: "Developer Knowledge Engine",
    emoji: "🧠",
    description: "AI-powered dev assistant using RAG pipeline, knowledge graphs and OpenAI API.",
    tech: ["Python", "OpenAI API", "RAG", "NetworkX", "SQLite"],
    github: "https://github.com/Justinvcj",
    live: "#"
  },
  {
    title: "SpendWise",
    emoji: "💸",
    description: "Privacy-first Android UPI expense tracker. Zero data leaves the device. SQLCipher encrypted.",
    tech: ["Kotlin", "Jetpack Compose", "SQLCipher", "Room DB"],
    github: "https://github.com/Justinvcj",
    live: "#"
  }
];

export default function ProjectsStep() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-12">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-10 shrink-0"
        style={{ fontSize: 'clamp(40px, 7vw, 90px)' }}
      >
        Things I've built.
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col md:flex-row gap-6 mb-10 overflow-y-auto md:overflow-visible max-h-[60vh] md:max-h-none w-full max-w-[1000px] px-2 py-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </motion.div>

      <div className="shrink-0">
        <ContinueButton delay={0.6} />
      </div>
    </div>
  );
}
