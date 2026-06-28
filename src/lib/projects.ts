export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  accent: string;
  liveUrl: string;
  githubUrl: string;
  coverColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'equinox',
    name: 'Equinox',
    description: 'Production-grade ride-hailing platform with real-time tracking, dynamic pricing, and WebSocket-powered live location updates.',
    tech: ['Flutter', 'Node.js', 'WebSockets', 'PostgreSQL', 'Supabase', 'OSRM', 'Photon API'],
    accent: '#7C3AED',
    liveUrl: '#',
    githubUrl: 'https://github.com/Justinvcj',
    coverColor: 'from-purple-900 to-purple-600',
  },
  {
    id: 'dev-knowledge',
    name: 'Developer Knowledge Engine',
    description: 'AI-powered developer assistant using RAG pipeline, knowledge graph traversal, and OpenAI API to answer technical queries with precision.',
    tech: ['Python', 'OpenAI API', 'RAG', 'NetworkX', 'SQLite', 'FastAPI'],
    accent: '#06B6D4',
    liveUrl: '#',
    githubUrl: 'https://github.com/Justinvcj',
    coverColor: 'from-cyan-900 to-cyan-600',
  },
  {
    id: 'spendwise',
    name: 'SpendWise',
    description: 'Privacy-first Android UPI expense tracker. Intercepts SMS transactions locally, encrypts with SQLCipher, zero data leaves the device.',
    tech: ['Kotlin', 'Jetpack Compose', 'SQLCipher', 'Room DB', 'SMS Broadcast'],
    accent: '#EC4899',
    liveUrl: '#',
    githubUrl: 'https://github.com/Justinvcj',
    coverColor: 'from-pink-900 to-pink-600',
  }
];
