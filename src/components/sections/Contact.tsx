'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SocialBurst from '@/components/ui/SocialBurst';
import { sendEmail } from '@/lib/emailjs';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      if (formRef.current) {
        await sendEmail(formRef.current);
      }
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-primary py-32 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-[1400px] mx-auto text-center mb-16 md:mb-24 relative z-10">
        <h2 className="font-display font-black text-[clamp(32px,5vw,72px)] leading-[1.1] text-background uppercase tracking-tight">
          Let's Make<br/>Something Real
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Column: Form */}
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 max-w-[500px]"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-widest text-background font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-white/15 rounded-lg px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent-1 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-widest text-background font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-white/15 rounded-lg px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent-1 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-widest text-background font-bold">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-white/15 rounded-lg px-4 py-3 text-text-primary font-sans focus:outline-none focus:border-accent-1 transition-colors resize-none"
                placeholder="Let's build something..."
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-4 mt-2 rounded-lg font-display font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                status === 'success' 
                  ? 'bg-[#22D3EE] text-background' 
                  : 'bg-background text-primary hover:bg-primary hover:text-background border-2 border-background'
              }`}
            >
              {status === 'loading' ? 'SENDING...' : status === 'success' ? 'SENT ✓' : 'SEND MESSAGE'}
            </button>
          </form>
        </motion.div>

        {/* Right Column: Social Hub */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <SocialBurst />
        </div>

      </div>

      {/* Footer Text */}
      <div className="w-full max-w-[1400px] mx-auto mt-24 text-center md:text-left relative z-10">
        <p className="font-sans italic text-background/60 text-sm">
          Built with Next.js, Framer Motion & too much coffee.
        </p>
      </div>

    </section>
  );
}
