export default function ResumeSection() {
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
              <button className="flex items-center gap-2 bg-primary text-on-primary font-headline font-bold px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">download</span> Download Resume
              </button>
              <button className="flex items-center gap-2 bg-transparent border border-outline-variant hover:border-primary text-primary font-headline font-bold px-6 py-4 rounded-xl transition-all active:scale-95">
                <span className="material-symbols-outlined text-[20px]">visibility</span> View Full Resume
              </button>
            </div>
          </div>

          {/* Right Side: Resume Preview Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[2rem] group-hover:bg-primary/10 transition-colors duration-500"></div>
            
            {/* Glass Card */}
            <div className="relative bg-surface-container border border-primary/30 p-10 rounded-[2rem] shadow-2xl flex flex-col gap-8 h-[520px] overflow-hidden">
              
              {/* Header */}
              <div className="border-b border-outline-variant/20 pb-6 shrink-0">
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-2">Suraj Patel</h3>
                <p className="font-headline font-bold text-primary tracking-widest uppercase text-sm mb-4">Full Stack + AI Engineer</p>
                <div className="flex items-center gap-6 text-on-surface-variant text-xs font-medium">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">mail</span> surajpatel9390@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Gujarat, India
                  </span>
                </div>
              </div>

              {/* Scrolling Content Area */}
              <div className="flex flex-col gap-8 relative z-10">
                {/* Summary */}
                <div>
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Summary</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                    Innovative Full Stack Engineer specializing in Agentic AI systems and high-performance web architectures. Proven track record in building scalable platforms using LangGraph, React, and FastAPI.
                  </p>
                </div>

                {/* Core Expertise */}
                <div>
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container-highest text-on-surface-variant text-[11px] font-bold px-3 py-1.5 rounded-full">TypeScript</span>
                    <span className="bg-surface-container-highest text-on-surface-variant text-[11px] font-bold px-3 py-1.5 rounded-full">Python</span>
                    <span className="bg-surface-container-highest text-on-surface-variant text-[11px] font-bold px-3 py-1.5 rounded-full">LLMs</span>
                    <span className="bg-surface-container-highest text-on-surface-variant text-[11px] font-bold px-3 py-1.5 rounded-full">Next.js</span>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="font-headline font-bold text-primary tracking-widest uppercase text-[11px] mb-3">Experience</h4>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-on-surface text-sm">Full Stack Intern</h5>
                      <p className="text-on-surface-variant/50 text-xs mt-1">Careerboat.ai</p>
                    </div>
                    <span className="text-on-surface-variant/50 text-[10px] font-mono tracking-normal">2025 - Pres.</span>
                  </div>
                </div>
              </div>

              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-container to-transparent z-20 pointer-events-none rounded-b-[2rem]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
