import { FaJava, FaPython, FaNodeJs, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiPostgresql, SiSupabase, SiOpencv } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { BiNetworkChart } from 'react-icons/bi';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  category: string;
  icon: IconType;
  color: string;
}

export const ORBIT_SKILLS = {
  ring1: [
    { name: 'Java', category: 'Language', icon: FaJava, color: '#f89820' },
    { name: 'Python', category: 'Language', icon: FaPython, color: '#3776ab' },
    { name: 'Node.js', category: 'Backend', icon: FaNodeJs, color: '#339933' },
  ],
  ring2: [
    { name: 'Flutter', category: 'Mobile', icon: SiFlutter, color: '#02569b' },
    { name: 'React', category: 'Frontend', icon: FaReact, color: '#61dafb' },
    { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: '#336791' },
    { name: 'Supabase', category: 'Backend', icon: SiSupabase, color: '#3ecf8e' },
  ],
  ring3: [
    { name: 'Git', category: 'Tools', icon: FaGitAlt, color: '#f05032' },
    { name: 'WebSockets', category: 'Networking', icon: BiNetworkChart, color: '#010101' },
    { name: 'Docker', category: 'DevOps', icon: FaDocker, color: '#2496ed' },
    { name: 'LLMs/AI', category: 'AI', icon: BsRobot, color: '#10a37f' },
    { name: 'OSRM', category: 'Mapping', icon: SiOpencv, color: '#ff4040' },
  ]
};

export const MARQUEE_SKILLS = [
  'Java', 'Python', 'JavaScript', 'TypeScript', 'Kotlin', 'Dart',
  'React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Node.js', 'Express',
  'FastAPI', 'PostgreSQL', 'MongoDB', 'Supabase', 'SQLite',
  'Docker', 'Git', 'Linux', 'AWS', 'WebSockets', 'REST APIs',
  'OpenAI API', 'RAG', 'Framer Motion'
];
