import { motion } from 'motion/react';
// GitHub SVG icon (inline to avoid lucide-react version export issues)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
import aiInterviewImg from '../assets/Ai-Interview.png';
import mainmVideoImg from '../assets/MainmVIdeo.png';

export default function Projects() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="projects">
      <motion.div
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span> Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10 flex flex-col shadow-2xl">
            <div className="relative h-72 overflow-hidden">
              <img alt="futuristic digital interface showing ai interview analytics with glowing blue lines and data visualization charts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={aiInterviewImg} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-3xl font-bold text-on-surface">AI Interview Platform</h3>
                <div className="flex gap-3"><a className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full text-xs font-bold hover:bg-primary/10 transition-colors" href="#" target="_blank"><span>▶</span> Demo</a>
                  <a className="flex items-center gap-1.5 px-3 py-1 border border-secondary text-secondary rounded-full text-xs font-bold hover:bg-secondary/10 transition-colors" href="#" target="_blank">
                    <GithubIcon className="w-3.5 h-3.5" /> Source
                  </a>
                </div>
              </div>
              <div className="bullet-desc mb-8 space-y-3">
                <p>• Real-time voice interviews with multi-dimension scoring (communication, technical, clarity); achieved 3-6s TTS latency via Redis + GCP caching</p>
                <p>• Resume-JD matching engine identifying skill gaps with automated feedback generation</p>
                <p>• Full CI/CD pipeline with Docker + GitHub Actions on GCP</p>
              </div>
              <div className="mb-4">
                <p className="text-on-surface font-headline font-bold text-sm uppercase tracking-widest mb-4">Tech Stack:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-badge border-primary text-primary bg-primary/5">React</span>
                  <span className="tech-badge border-green-400 text-green-400 bg-green-400/5">Node.js</span>
                  <span className="tech-badge border-purple-400 text-purple-400 bg-purple-400/5">WebSockets</span>
                  <span className="tech-badge border-purple-400 text-purple-400 bg-purple-400/5">Redis</span>
                  <span className="tech-badge border-orange-400 text-orange-400 bg-orange-400/5">GCP</span>
                  <span className="tech-badge border-orange-400 text-orange-400 bg-orange-400/5">Docker</span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container px-8 py-5 flex justify-between items-center border-t border-outline-variant/10">
              <span className="text-sm font-mono font-bold text-green-400">Status: COMPLETED</span>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group relative bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10 flex flex-col shadow-2xl">
            <div className="relative h-72 overflow-hidden">
              <img alt="abstract mathematical visualization with glowing geometric shapes and complex formula structures in dark space" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={mainmVideoImg} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-3xl font-bold text-on-surface">AI Manim Video Gen</h3>
                <div className="flex gap-3"><a className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full text-xs font-bold hover:bg-primary/10 transition-colors" href="https://www.youtube.com/watch?v=yanGT_wRSms" target="_blank"><span>▶</span> Demo</a>
                  <a className="flex items-center gap-1.5 px-3 py-1 border border-secondary text-secondary rounded-full text-xs font-bold hover:bg-secondary/10 transition-colors" href="#" target="_blank">
                    <GithubIcon className="w-3.5 h-3.5" /> Source
                  </a>
                </div>
              </div>
              <div className="bullet-desc mb-8 space-y-3">
                <p>• Engineered multi-agent LangGraph workflow (query validation → description expansion → code generation → self-healing render); 88% first-pass success</p>
                <p>• Celery + Redis async pipeline for CPU-intensive Manim renders; 3x retry logic reduced failure rate from 35% to 12%</p>
                <p>• Production stack (FastAPI + React + GCP + Supabase) with Docker CI/CD; average end-to-end render latency 4m32s</p>
              </div>
              <div className="mb-4">
                <p className="text-on-surface font-headline font-bold text-sm uppercase tracking-widest mb-4">Tech Stack:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-badge border-green-400 text-green-400 bg-green-400/5">FastAPI</span>
                  <span className="tech-badge border-purple-400 text-purple-400 bg-purple-400/5">LangGraph</span>
                  <span className="tech-badge border-orange-400 text-orange-400 bg-orange-400/5">Celery</span>
                  <span className="tech-badge border-purple-400 text-purple-400 bg-purple-400/5">Redis</span>
                  <span className="tech-badge border-orange-400 text-orange-400 bg-orange-400/5">Docker</span>
                  <span className="tech-badge border-orange-400 text-orange-400 bg-orange-400/5">GCP</span>
                </div>
              </div>
              <details className="group/arch mt-6">
                <summary className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-xl text-sm font-headline font-bold cursor-pointer hover:bg-primary/10 transition-all select-none">
                  <span>▶</span> View Architecture
                </summary>
                <div className="mt-4 p-6 bg-surface-container-highest/40 rounded-3xl border border-primary/20 shadow-[0_0_15px_rgba(0,218,248,0.1)] overflow-x-auto">
                  <div className="flex items-center gap-4 min-w-max pb-4 px-2">
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary mb-1">
                        <span className="material-symbols-outlined">person</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">User Query</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">LangGraph</span>
                    </div>
                    <span className="text-primary/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary mb-1">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Validation</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">LangGraph</span>
                    </div>
                    <span className="text-primary/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary mb-1">
                        <span className="material-symbols-outlined">magic_button</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">AI Expansion</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">LangGraph</span>
                    </div>
                    <span className="text-primary/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary mb-1">
                        <span className="material-symbols-outlined">autorenew</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Refinement Loop</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">max 3x</span>
                    </div>
                    <span className="text-primary/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary mb-1">
                        <span className="material-symbols-outlined">terminal</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Code Gen</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">LangGraph</span>
                    </div>
                    <span className="text-orange-400/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center border border-orange-400/30 text-orange-400 mb-1">
                        <span className="material-symbols-outlined">build</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Retry Logic</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">Redis</span>
                    </div>
                    <span className="text-orange-400/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center border border-orange-400/30 text-orange-400 mb-1">
                        <span className="material-symbols-outlined">settings</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Worker</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">Celery</span>
                    </div>
                    <span className="text-orange-400/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center border border-orange-400/30 text-orange-400 mb-1">
                        <span className="material-symbols-outlined">movie</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Render</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">FastAPI</span>
                    </div>
                    <span className="text-green-400/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center border border-green-400/30 text-green-400 mb-1">
                        <span className="material-symbols-outlined">cloud</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Storage</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">Supabase</span>
                    </div>
                    <span className="text-green-400/40 font-bold">→</span>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center border border-green-400/30 text-green-400 mb-1">
                        <span className="material-symbols-outlined">link</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-tight">Video Link</span>
                      <span className="text-[9px] text-on-surface-variant/60 font-mono uppercase">Supabase</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <div className="bg-surface-container px-8 py-5 flex justify-between items-center border-t border-outline-variant/10">
              <span className="text-sm font-mono font-bold text-green-400">Status: COMPLETED</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
