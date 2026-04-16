import { useRef } from 'react';
import { motion } from 'motion/react';
import resumePdf from '../assets/SurajPatelResume.pdf';

export default function ResumeSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Custom butter-smooth cubic bezier easing for premium feel
  const springTransition: any = { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] };

  return (
    <section className="py-18 bg-surface-container-low" id="resume">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side: Description & Buttons */}
          <div>
            <h2 className="font-headline text-[30px] md:text-4xl font-bold mb-6 flex items-center gap-4 text-on-surface">
              <span className="text-primary font-mono text-lg md:text-xl">05.</span> Resume
            </h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed max-w-md">
              A snapshot of my experience, skills, and projects. Optimized for ATS and refined for engineering excellence.
            </p>
            <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a href={resumePdf} download="Suraj_Patel_Resume.pdf" className="flex-1 sm:flex-none flex justify-center items-center gap-2 bg-primary text-on-primary font-headline font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-[13px] sm:text-base shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">download</span> Download<span className="hidden sm:inline"> Resume</span>
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex justify-center items-center gap-2 bg-transparent border border-outline-variant hover:border-primary text-primary font-headline font-bold px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-[13px] sm:text-base transition-all active:scale-95 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">visibility</span> View<span className="hidden xs:inline"> Full</span><span className="hidden sm:inline"> Resume</span>
              </a>
            </div>
          </div>

          {/* Right Side: Resume Preview Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors duration-500"></div>

            {/* Glass Card */}
            <div className="relative bg-surface-container border border-primary/30 p-10 rounded-full shadow-2xl flex flex-col gap-8 h-[600px] overflow-hidden">

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
                    MCA student focused on building AI-driven backend systems and real-time applications.  Experienced in designing agentic workflows using LangChain and LangGraph, with hands-on work in scalable architectures, streaming systems, and production deployment on GCP.
                  </p>
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
                    <li>• Developed AI interview APIs using Node.js with LangChain and LangGraph, generating context-aware questions based on resumes, skills, and prior responses, while optimizing token usage through state management using MongoDB checkpointers and dynamic context summarization.</li>
                    <li>• Integrated Google Cloud TTS, AWS S3, and SSE for real-time audio streaming and token-by-token AI responses.</li>
                    <li>• Developed an AI powered resume analyzer to evaluate job description match rates, identify skill gaps, and dynamically generate tailored resumes.</li>
                    <li>• Integrated the Razorpay payment gateway to process secure user transactions, implementing custom backend logic to support discount coupons.</li>
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
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-on-surface text-sm">AI Interview</h5>
                        <span className="text-on-surface-variant/30 text-xs text-bold">|</span>
                        <a href="https://github.com/SurajPatel04/AI-Interview" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Source Code</a>
                      </div>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">May 2025 - June 2025</span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed">
                      <li>• Built a full-stack AI-powered interview system using React, Node.js and MongoDB, generating context-aware questions from resumes, skills, and user responses using LangChain and Gemini.</li>
                      <li>• Engineered a real-time interview system with WebRTC and Socket.io, integrating streaming audio and TTS, reducing next-question API response latency from ~8–10s to ~3–6s using Redis caching.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-on-surface text-sm">AI Manim Video Generator</h5>
                        <span className="text-on-surface-variant/30 text-xs text-bold">|</span>
                        <a href="https://github.com/SurajPatel04/manimVideoGenerate" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Source Code</a>
                      </div>
                      <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">Jul 2025 - Aug 2025</span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed">
                      <li>• Built an end-to-end AI pipeline using React, FastAPI and MongoDB to generate animations from text prompts into Manim code and rendered video output.</li>
                      <li>• Designed a multi-agent LangGraph workflow with validation and repair loops, enabling self-healing code generation and improving execution success (~60% → ~90%+).</li>
                      <li>• Implemented Celery + Redis task queue for concurrent rendering, improving stability under high load, with Supabase for video storage, deployed on GCP using Docker.</li>
                    </ul>
                  </div>
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
                    {['JavaScript', 'TypeScript', 'Python', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'LangChain', 'LangGraph', 'Docker', 'Git', 'Github', "Scikit-learn", "PyTorch", "Pandas", "Prisma", "Mongoose", "Beanie"].map((skill, idx) => (
                      < motion.span
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


                {/* Certifications - Slide from Bottom with Blur */}
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Certifications</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-on-surface text-sm">The Fullstack Developer Path</h5>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2025</span>
                      </div>
                      <p className="text-on-surface-variant/70 text-[12px] mt-1">Scrimba</p>
                      <a href="https://scrimba.com/certificate-cert23wfboWopQ2SSv6pWzVHgSrmSF9gqPYtSWTLot5DwyAxWL1v" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline mt-1 inline-block">View Certificate</a>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-on-surface text-sm">Learn React</h5>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2025</span>
                      </div>
                      <p className="text-on-surface-variant/70 text-[12px] mt-1">Scrimba</p>
                      <a href="https://scrimba.com/certificate-cert24zAwPPowRQV2xfEN2ZiBrLXtw1vJ4YEgPtEU" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline mt-1 inline-block">View Certificate</a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Top fade to seamlessly pass under header */}
              <div className="absolute top-[138px] left-0 right-0 h-8 bg-gradient-to-b from-surface-container to-transparent z-20 pointer-events-none"></div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface-container to-transparent z-20 pointer-events-none rounded-b-full"></div>
            </div>
          </div>

        </div>
      </div >
    </section >
  );
}
