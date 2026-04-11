import { useRef } from 'react';
import { motion } from 'motion/react';
import resumePdf from '../assets/SurajPatelResume.pdf';

export default function ResumeSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Custom butter-smooth cubic bezier easing for premium feel
  const springTransition: any = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] };

  return (
    <section className="py-24 bg-surface-container-low" id="resume">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side: Description & Buttons */}
          <div>
            <h2 className="font-headline text-4xl font-bold mb-6 flex items-center gap-4 text-on-surface">
              <span className="text-primary font-mono text-xl">05.</span> Resume
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-md">
              A snapshot of my experience, skills, and projects. Optimized for ATS and refined for engineering excellence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={resumePdf} download="Suraj_Patel_Resume.pdf" className="flex items-center gap-2 bg-primary text-on-primary font-headline font-bold px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">download</span> Download Resume
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-outline-variant hover:border-primary text-primary font-headline font-bold px-6 py-4 rounded-xl transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">visibility</span> View Full Resume
              </a>
            </div>
          </div>

          {/* Right Side: Resume Preview Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[2rem] group-hover:bg-primary/10 transition-colors duration-500"></div>

            {/* Glass Card */}
            <div className="relative bg-surface-container border border-primary/30 p-10 rounded-[2rem] shadow-2xl flex flex-col gap-8 h-[520px] overflow-hidden">

              {/* Header (Sticky inside visible bound) */}
              <div className="border-b border-outline-variant/20 pb-6 shrink-0 z-30 bg-surface-container">
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Suraj Patel</h3>
                <p className="font-headline font-bold text-primary tracking-widest uppercase text-sm mb-4">Full Stack + AI Engineer</p>
                <div className="flex flex-wrap items-center gap-4 text-on-surface-variant text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">mail</span> surajpatel9390@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Lucknow, UP, India
                  </span>
                </div>
              </div>

              {/* Scrolling Content Area (Manual Scroll with Premium Motion Intercepts) */}
              <div
                ref={scrollRef}
                className="flex flex-col gap-10 relative z-10 overflow-y-auto overflow-x-hidden scroll-smooth pr-4 -mr-2 pb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-outline-variant/30 hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full"
              >

                {/* Summary - Blur & Scale Reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Summary</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                    MCA student with hands-on experience building AI driven backend systems using LangChain, LangGraph, and GCP. Familiar with core data structures and algorithms, with practical exposure to real-time application design.
                  </p>
                </motion.div>

                {/* Core Expertise (Technical Skills) - Staggered Pop & Blur */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef, once: true, amount: 0.1 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Python', 'React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'LangChain', 'LangGraph', 'Docker', 'GCP'].map((skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ root: scrollRef, once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.25, 0.46, 0.45, 0.94] as any }}
                        className="bg-surface-container-highest text-on-surface-variant text-[11px] font-bold px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Experience - Slide from Left with Blur */}
                <motion.div
                  initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Professional Experience</h4>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Full Stack Engineer – Intern</h5>
                      <p className="text-on-surface-variant/70 text-xs mt-1 font-bold">Careerboat.ai</p>
                    </div>
                    <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">Dec 2025 - Pres.</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[12px] text-on-surface-variant leading-relaxed">
                    <li>• Built Mock Interview Platform with Node.js and LangChain for dynamic, resume-based question generation.</li>
                    <li>• Integrated Google Cloud TTS, AWS S3, and SSE for real-time audio streaming.</li>
                    <li>• Developed an AI powered resume analyzer to evaluate JD match rates and generate tailored resumes.</li>
                    <li>• Engineered AI Career Coach using LangGraph and MongoDB checkpointers with auto-summarization.</li>
                    <li>• Integrated Razorpay payment gateway to process secure user transactions.</li>
                  </ul>
                </motion.div>

                {/* Projects - Slide from Right with Blur */}
                <motion.div
                  initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Projects</h4>

                  <div className="mb-6">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-on-surface text-sm">AI Interview</h5>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">May 2025 - Aug 2025</span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed">
                      <li>• Built a real-time AI interview platform using React, Node.js, and WebSockets.</li>
                      <li>• Reduced latency to 3-6s via Redis caching and Google Cloud TTS; deployed on GCP.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-on-surface text-sm">AI Manim Video Generator</h5>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">Jul 2025 - Aug 2025</span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed">
                      <li>• Developed generative video platform using React, FastAPI, and LangGraph.</li>
                      <li>• Built scalable rendering pipeline with Celery and Redis automated on GCP.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Education - Slide from Bottom with Blur */}
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Education</h4>
                  <div className="mb-4">
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-on-surface text-sm">Master of Computer Applications (MCA)</h5>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2024 - Pres.</span>
                    </div>
                    <p className="text-on-surface-variant/70 text-[12px] mt-1">Amity University Online, Noida</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <h5 className="font-bold text-on-surface text-sm">Bachelor of Science</h5>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2021 - 2024</span>
                    </div>
                    <p className="text-on-surface-variant/70 text-[12px] mt-1">Lucknow Christian College, Lucknow</p>
                  </div>
                </motion.div>

              </div>

              {/* Top fade to seamlessly pass under header */}
              <div className="absolute top-[138px] left-0 right-0 h-8 bg-gradient-to-b from-surface-container to-transparent z-20 pointer-events-none"></div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface-container to-transparent z-20 pointer-events-none rounded-b-[2rem]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
