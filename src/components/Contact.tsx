import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Loader2, Send, CheckCircle2, AlertCircle } from 'lucide-react';

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
    <section className="pt-24 pb-48 bg-surface-container-low relative" id="contact">
      <motion.div 
        className="max-w-3xl mx-auto px-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-5xl font-bold mb-6 text-on-surface">Let's Build the Future</h2>
        <p className="text-on-surface-variant text-lg mb-12">Currently seeking opportunities to push the boundaries of AI-driven full-stack engineering. Reach out for collaborations or a quick tech chat.</p>
        <div className="glass-card p-10 rounded-full border border-outline-variant/10 text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Auto-response configuration for the connector */}
            <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I have received your message and will get back to you as soon as possible. - Suraj Patel" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Prevents Formsubmit from creating a default subject */}
            <input type="hidden" name="_subject" value="New Portolio Contact Message!" />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Name</label>
                <input name="name" className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="Your Name" type="text" required disabled={status === 'SUBMITTING'} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Email</label>
                <input name="email" className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="your@email.com" type="email" required disabled={status === 'SUBMITTING'} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Message</label>
              <textarea name="message" className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="Let's build something together..." rows={4} required disabled={status === 'SUBMITTING'}></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
              className="w-full relative overflow-hidden group bg-gradient-to-r from-primary to-secondary text-on-primary font-headline font-bold py-5 rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-90 disabled:cursor-not-allowed text-lg uppercase tracking-widest flex items-center justify-center min-h-[68px]"
            >
              <AnimatePresence mode="wait">
                {status === 'IDLE' && (
                  <motion.div key="idle" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex items-center justify-center">
                    <span>Initialize Connection</span>
                    <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.div>
                )}
                {status === 'SUBMITTING' && (
                  <motion.div key="submitting" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="flex items-center justify-center">
                    <span>Transmitting</span>
                    <Loader2 className="w-6 h-6 ml-3 animate-spin" />
                  </motion.div>
                )}
                {status === 'SUCCESS' && (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="flex items-center justify-center text-green-50">
                    <span>Transmission Successful!</span>
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

              {/* Submitting Loading Bar Animation */}
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
      </motion.div>
    </section>
  );
}
