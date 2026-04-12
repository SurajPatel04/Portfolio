import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';

// GitHub SVG icon (inline to avoid lucide-react version export issues)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// LinkedIn SVG icon (inline)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/3ff67b6fefbf366175f9d537ac575e25", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await res.json();
      if (data.success) {
        setStatus('SUCCESS');
        form.reset();
        setTimeout(() => setStatus('IDLE'), 5000); // Reset after 5 seconds
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section className="pt-24 pb-20 bg-surface-container-lowest relative" id="contact">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content & Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface">Let's Build the Future</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-10 max-w-xl">
              Currently seeking opportunities to push the boundaries of AI-driven full-stack engineering. Reach out for collaborations or a quick tech chat.
            </p>

            <div className="flex flex-col gap-4 w-full max-w-sm lg:max-w-md">
              <a href="mailto:surajpatel9390@gmail.com" className="group flex items-center gap-4 px-6 py-4 bg-surface-container-low border border-outline-variant/20 hover:border-primary/50 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-sm">
                <Mail className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors shrink-0" />
                <span className="font-headline font-medium text-on-surface group-hover:text-primary transition-colors truncate">surajpatel9390@gmail.com</span>
              </a>

              <div className="flex gap-4">
                <a href="https://github.com/SurajPatel04" target="_blank" rel="noreferrer" className="flex-1 group flex items-center justify-center gap-3 px-6 py-4 bg-surface-container-low border border-outline-variant/20 hover:border-primary/50 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-sm">
                  <GithubIcon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-medium text-on-surface group-hover:text-primary transition-colors">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/suraj-patel-9201b2381/" target="_blank" rel="noreferrer" className="flex-1 group flex items-center justify-center gap-3 px-6 py-4 bg-surface-container-low border border-outline-variant/20 hover:border-primary/50 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-sm">
                  <LinkedinIcon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-medium text-on-surface group-hover:text-primary transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="order-2 w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative bg-surface-container-low p-6 sm:p-10 rounded-full border border-outline-variant/10 shadow-2xl overflow-hidden">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Auto-response configuration for the connector */}
                <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I have received your message and will get back to you as soon as possible. - Suraj Patel" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-headline font-bold text-on-surface-variant ml-1 uppercase tracking-widest px-1">Name</label>
                    <input 
                      name="name" 
                      className="w-full bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/30 outline-none transition-all [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e1e24_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]" 
                      placeholder="Your Name" 
                      type="text" 
                      required 
                      disabled={status === 'SUBMITTING'} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-headline font-bold text-on-surface-variant ml-1 uppercase tracking-widest px-1">Email</label>
                    <input 
                      name="email" 
                      className="w-full bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/30 outline-none transition-all [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e1e24_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]" 
                      placeholder="your@email.com" 
                      type="email" 
                      required 
                      disabled={status === 'SUBMITTING'} 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-headline font-bold text-on-surface-variant ml-1 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    name="message" 
                    className="w-full bg-surface-container border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/30 outline-none transition-all min-h-[150px] resize-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1e1e24_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]" 
                    placeholder="Let's build something together..." 
                    required 
                    disabled={status === 'SUBMITTING'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                  className="w-full relative overflow-hidden group bg-primary text-on-primary font-headline font-bold py-5 rounded-xl shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-[0.98] disabled:opacity-90 disabled:cursor-not-allowed text-base uppercase tracking-widest flex items-center justify-center min-h-[68px]"
                >
                  <AnimatePresence mode="wait">
                    {status === 'IDLE' && (
                      <motion.div key="idle" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex items-center justify-center">
                        <span>Send Message</span>
                        <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {status === 'SUBMITTING' && (
                      <motion.div key="submitting" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex items-center justify-center">
                        <span>Sending</span>
                        <Loader2 className="w-6 h-6 ml-3 animate-spin" />
                      </motion.div>
                    )}
                    {status === 'SUCCESS' && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center justify-center text-slate-950">
                        <span>Message Sent!</span>
                        <CheckCircle2 className="w-6 h-6 ml-3" />
                      </motion.div>
                    )}
                    {status === 'ERROR' && (
                      <motion.div key="error" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-center justify-center text-red-100">
                        <span>Error - Try Again</span>
                        <AlertCircle className="w-6 h-6 ml-3" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Loading Bar */}
                  <AnimatePresence>
                    {status === 'SUBMITTING' && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/40"
                      />
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
