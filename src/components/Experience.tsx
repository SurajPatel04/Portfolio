import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="py-24 bg-surface" id="experience">
      <motion.div 
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span> Professional Journey
        </h2>
        <div className="relative space-y-8 md:space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          <div className="relative flex flex-row items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container text-primary shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            </div>
            
            {/* Card Wrapper */}
            <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] pb-4 lg:pb-0">
              <div className="glass-card p-5 sm:p-6 md:p-8 rounded-full border border-outline-variant/10 w-full hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 lg:mb-4 gap-2 lg:gap-0">
                  <h3 className="font-headline text-xl sm:text-2xl font-bold">Full Stack Engineer Intern</h3>
                  <span className="text-primary font-label text-xs sm:text-sm font-semibold shrink-0">Dec 2025 – Present</span>
                </div>
                <div className="text-secondary font-headline font-medium mb-4 lg:mb-6 text-sm md:text-base">@ Careerboat.ai</div>
                <ul className="space-y-3 lg:space-y-4 text-on-surface-variant font-body text-sm md:text-base">
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base md:text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Built a high-performance Mock Interview Platform with real-time feedback.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base md:text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Developed AI Resume Analyzer &amp; AI Career Coach for personalized guidance.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base md:text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Architected LangGraph + MongoDB memory system for long-term agent context.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-primary text-base md:text-lg shrink-0 mt-0.5">check_circle</span>
                    <span>Seamless Razorpay Integration for enterprise transactional flows.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
