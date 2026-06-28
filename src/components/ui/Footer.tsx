import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="w-full h-px bg-primary" />
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between font-mono text-[11px] text-text-secondary gap-4">
        <div>
          © {currentYear} Justin Varghese
        </div>
        
        <a
          href="https://github.com/Justinvcj"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <FaGithub size={14} />
          Justinvcj
        </a>
      </div>
    </footer>
  );
}
