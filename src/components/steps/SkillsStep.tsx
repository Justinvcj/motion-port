import { motion } from 'framer-motion';
import ContinueButton from '../ui/ContinueButton';
import { 
  SiTypescript, SiPython, SiC, 
  SiReact, SiFlutter, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFastapi,
  SiPostgresql, SiSupabase, SiSqlite,
  SiGit, SiDocker, SiOpenai
} from 'react-icons/si';
import { VscCheck } from 'react-icons/vsc';

const SKILLS = [
  { name: 'Java', icon: VscCheck },
  { name: 'Python', icon: SiPython },
  { name: 'C', icon: SiC },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'SQLite', icon: SiSqlite },
  { name: 'Git', icon: SiGit },
  { name: 'WebSockets', icon: VscCheck },
  { name: 'Docker', icon: SiDocker },
  { name: 'REST APIs', icon: VscCheck },
  { name: 'OpenAI API', icon: SiOpenai },
  { name: 'RAG', icon: VscCheck },
  { name: 'LangChain', icon: VscCheck },
  { name: 'LLMs', icon: VscCheck }
];

export default function SkillsStep() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } }
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-6"
        style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
      >
        My toolkit.
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[800px] mb-6"
      >
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.4)' }}
            className="flex items-center justify-center gap-2 bg-white/20 border-[1.5px] border-white/40 rounded-full px-5 py-2.5 text-white font-sans font-medium text-[15px] cursor-default transition-colors"
          >
            <skill.icon className="text-base shrink-0" />
            <span className="truncate">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <ContinueButton delay={0.6} />
    </div>
  );
}
