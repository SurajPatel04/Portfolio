import { motion } from 'motion/react';

export default function Contact() {
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
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Name</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="Your Name" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Email</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="your@email.com" type="email"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-label font-bold text-on-surface ml-1 uppercase tracking-widest">Message</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 focus:ring-2 focus:ring-primary rounded-xl text-on-surface p-4 placeholder-on-surface-variant/50" placeholder="Let's build something together..." rows={4}></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary font-headline font-bold py-5 rounded-xl shadow-lg transition-transform active:scale-[0.98] text-lg uppercase tracking-widest">
              Initialize Connection
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
