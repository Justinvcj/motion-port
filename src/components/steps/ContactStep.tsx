import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePortfolioStore } from '@/store/usePortfolioStore';
import emailjs from '@emailjs/browser';
import { Mail } from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactStep() {
  const goToStep = usePortfolioStore((state) => state.goToStep);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    
    // Replace with real EmailJS IDs
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id',
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key'
    ).then(() => {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  const buttonText = {
    idle: 'Send it →',
    loading: 'Sending...',
    success: 'Sent ✓',
    error: 'Try again'
  };

  const buttonColor = {
    idle: 'text-[#1A6FA0]',
    loading: 'text-[#1A6FA0]',
    success: 'text-green-600',
    error: 'text-red-600'
  };

  return (
    <div className="flex flex-col items-center text-center w-full px-4 my-auto min-h-min py-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-extrabold text-white leading-[1.1] mb-4 shrink-0"
        style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
      >
        Let&apos;s talk.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-sans text-[18px] text-white/85 max-w-[480px] mb-6 shrink-0"
      >
        Open to full-time roles, freelance projects, and collabs.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-[480px] mb-4 shrink-0"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full bg-white/20 border-[1.5px] border-white/40 rounded-[12px] px-5 py-4 font-sans text-[16px] text-white placeholder:text-white/50 focus:border-white focus:bg-white/30 outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full bg-white/20 border-[1.5px] border-white/40 rounded-[12px] px-5 py-4 font-sans text-[16px] text-white placeholder:text-white/50 focus:border-white focus:bg-white/30 outline-none transition-all"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="What's on your mind?"
          required
          className="w-full bg-white/20 border-[1.5px] border-white/40 rounded-[12px] px-5 py-4 font-sans text-[16px] text-white placeholder:text-white/50 focus:border-white focus:bg-white/30 outline-none transition-all resize-none"
        />
        
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`mt-2 bg-white ${buttonColor[status]} font-display font-semibold text-[18px] px-12 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-80 disabled:hover:scale-100 shadow-lg`}
        >
          {buttonText[status]}
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-4 mb-4 shrink-0"
      >
        {[
          { icon: SiGithub, href: "https://github.com/Justinvcj" },
          { icon: FaLinkedin, href: "https://linkedin.com/in/justinvcj" },
          { icon: SiLeetcode, href: "https://leetcode.com/justinvcj" },
          { icon: Mail, href: "mailto:justinvcj@gmail.com" }
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[48px] h-[48px] rounded-full bg-white/20 border-[1.5px] border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-[#1A6FA0] hover:scale-110"
          >
            <social.icon size={20} />
          </a>
        ))}
      </motion.div>

      {/* Back to start */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        onClick={() => goToStep(0)}
        className="font-sans text-[14px] text-white/60 hover:text-white transition-colors underline underline-offset-4 shrink-0 pb-10"
      >
        ← Back to start
      </motion.button>
    </div>
  );
}
