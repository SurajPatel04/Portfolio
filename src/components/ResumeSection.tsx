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
                className="flex flex-col relative z-10 overflow-y-auto overflow-x-hidden scroll-smooth pr-4 -mr-2 pb-8 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-outline-variant/30 hover:[&::-webkit-scrollbar-thumb]:bg-primary/50 [&::-webkit-scrollbar-thumb]:rounded-full"
              >

                {/* Profile Summary - Blur & Scale Reveal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Profile Summary</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                    Software Engineer specializing in high-performance backend systems, real-time streaming architecture, and agentic AI workflows. Experienced building scalable REST APIs, RAG pipelines, and LLM-powered applications with Node.js, FastAPI, and LangGraph. Proven record of latency optimization and production deployment on cloud infrastructure.
                  </p>
                </motion.div>

                {/* Technical Skills - Staggered Pop & Blur */}
                <motion.div
                  className="border-t border-outline-variant/10 pt-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ root: scrollRef, once: true, amount: 0.1 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Technical Skills</h4>
                  <div className="flex flex-col gap-2.5 text-xs text-on-surface-variant leading-relaxed font-body">
                    <div>
                      <span className="font-bold text-on-surface">Languages:</span> JavaScript, TypeScript, Python
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">Frontend:</span> React, Redux, HTML5, CSS3
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">Backend:</span> Node.js, Express.js, FastAPI, REST APIs, JWT, OAuth 2.0
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">Databases & Caching:</span> PostgreSQL (Prisma), SQL, MongoDB (Mongoose, Beanie), Redis, FAISS (Vector DB)
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">AI:</span> LangChain, LangGraph, LangSmith (LLM observability), OpenAI API, Gemini API, RAG, Prompt Engineering
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">Tools & DevOps:</span> AWS (S3), GCP, Docker, Git, GitHub Actions, Linux, Bash/Shell, Celery
                    </div>
                    <div>
                      <span className="font-bold text-on-surface">Core Fundamentals:</span> Data Structures & Algorithms, System Design
                    </div>
                  </div>
                </motion.div>

                {/* Experience - Slide from Left with Blur */}
                <motion.div
                  className="border-t border-outline-variant/10 pt-6 mt-6"
                  initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Professional Experience</h4>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Full Stack Engineer</h5>
                      <p className="text-on-surface-variant/70 text-xs mt-1 font-bold">Careerboat.ai</p>
                    </div>
                    <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">Dec 2025 – Present</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[12px] text-on-surface-variant leading-relaxed font-body">
                    <li>• Cut LLM token consumption by 40% on the AI interview service by architecting stateful Node.js APIs with MongoDB checkpointing and dynamic context summarization across multi-turn sessions.</li>
                    <li>• Reduced time-to-first-audio to ∼2s by engineering a real-time streaming layer over Server-Sent Events, AWS S3, and a TTS pipeline that delivered token-by-token responses to the client.</li>
                    <li>• Optimized a high-volume job search API by redesigning MySQL FULLTEXT queries and ranking algorithms, reducing search latency from 1–5 minutes to 5–10 seconds while improving search relevance.</li>
                    <li>• Developed an AI-powered resume analyzer to evaluate job description match rates, identify skill gaps, and dynamically generate tailored resumes.</li>
                    <li>• Integrated the Razorpay payment gateway for secure transactions, with custom backend logic for discount coupons.</li>
                  </ul>
                </motion.div>

                {/* Projects - Slide from Right with Blur */}
                <motion.div
                  className="border-t border-outline-variant/10 pt-6 mt-6"
                  initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Projects</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-on-surface text-sm">InsightFlow</h5>
                          <span className="text-on-surface-variant/30 text-xs text-bold">|</span>
                          <a href="https://github.com/SurajPatel04/ai-multimedia-rag-app" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Source Code</a>
                          <a href="https://insightflow.surajpatel.dev" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Live Link</a>
                        </div>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">May 2026</span>
                      </div>
                      <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed font-body">
                        <li>• Engineered a full-stack multimodal RAG platform (FastAPI, LangGraph, React, MongoDB, FAISS, Redis, SSE) enabling Q&A over documents (PDF, Word, Excel, CSV) and media (audio, video) with inline source citations.</li>
                        <li>• Designed a two-phase ingestion flow that promotes uploads only after confirmation and cleans up the rest, eliminating wasted embedding spend on unconfirmed files.</li>
                        <li>• Integrated Deepgram for timestamped transcription with clickable media citations, enabling precise retrieval and playback to the exact second.</li>
                        <li>• Implemented Redis semantic caching for repeated queries, LangGraph-based conversation memory management, and GCP deployment using Docker and GitHub Actions CI/CD.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-on-surface text-sm">AI Interview</h5>
                          <span className="text-on-surface-variant/30 text-xs text-bold">|</span>
                          <a href="https://github.com/SurajPatel04/AI-Interview" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Source Code</a>
                          <a href="https://interview.surajpatel.dev" target="_blank" rel="noopener noreferrer" className="text-primary text-[11px] font-bold hover:underline">Live Link</a>
                        </div>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">May 2025 – Aug 2025</span>
                      </div>
                      <ul className="mt-2 space-y-2 text-[12px] text-on-surface-variant leading-relaxed font-body">
                        <li>• Engineered a full-stack AI-powered interview system using React, Node.js, and MongoDB, generating context-aware questions from resumes, skills, and user responses using LangChain and Gemini.</li>
                        <li>• Engineered a real-time interview system with WebRTC and Socket.io, integrating streaming audio and TTS, reducing next-question API response latency from ~8–10s to ~3–6s using Redis caching.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Education - Slide from Bottom with Blur */}
                <motion.div
                  className="border-t border-outline-variant/10 pt-6 mt-6"
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Education</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-on-surface text-sm">Master of Computer Applications (MCA)</h5>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2024 – 2026</span>
                      </div>
                      <p className="text-on-surface-variant/70 text-[12px] mt-1 font-body">Amity University Online, Noida, India</p>
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h5 className="font-bold text-on-surface text-sm">Bachelor of Science</h5>
                        <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2021 – 2024</span>
                      </div>
                      <p className="text-on-surface-variant/70 text-[12px] mt-1 font-body">Lucknow Christian College, Lucknow, India</p>
                    </div>
                  </div>
                </motion.div>

                {/* Certifications - Slide from Bottom with Blur */}
                <motion.div
                  className="border-t border-outline-variant/10 pt-6 mt-6"
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ root: scrollRef, once: true, amount: 0.2 }}
                  transition={springTransition}
                >
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Certifications</h4>
                  <div className="space-y-4 font-body">
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
