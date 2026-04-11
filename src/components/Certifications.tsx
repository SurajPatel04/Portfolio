import { motion } from 'motion/react';

export default function Certifications() {
  return (
    <section className="py-24 bg-surface" id="certifications">
      <motion.div 
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">04.</span> Validation
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="cert-glow-border bg-surface-container-low rounded-full p-10 flex items-center gap-8 border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Full Stack Developer Path</h3>
              <div className="flex items-center gap-3">
                <p className="text-primary font-label text-xl font-bold">Scrimba</p>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <p className="text-on-surface-variant font-medium text-lg">2025</p>
              </div>
            </div>
          </div>
          <div className="cert-glow-border bg-surface-container-low rounded-full p-10 flex items-center gap-8 border border-outline-variant/20 hover:scale-[1.02] transition-transform">
            <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Advanced React Mastery</h3>
              <div className="flex items-center gap-3">
                <p className="text-secondary font-label text-xl font-bold">Scrimba</p>
                <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                <p className="text-on-surface-variant font-medium text-lg">2025</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
