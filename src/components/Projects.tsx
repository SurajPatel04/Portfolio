export default function Projects() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">03.</span> Featured Neural Artifacts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10 flex flex-col shadow-2xl">
            <div className="relative h-72 overflow-hidden">
              <img alt="futuristic digital interface showing ai interview analytics with glowing blue lines and data visualization charts" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANIytHTZAT5K2C_3A4W39rBcGhmuuxR2RdZ3ikQLn8ylLGPnD_RX6qcAaL8N2UrDcmgkb6-tDpyg8IWO5HZfHPezAV_e5sUejtsP4VXaSt2_mN4UFYiGnvcIzSQzTpDebMxPmyrcWE1mDv2fNMnU6ssmwR9SlITo4Ux2dO_ZGZunq4cczzXRFsG0Ye7pNrhtgOCxtFccg7JO4kz7-6ONICs1-aq2FVZaBQ1Dz_IQ0vyQFRN1d2Zxb1yTbBh2CETc9frYyHJyIWwQ"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-3xl font-bold text-on-surface">AI Interview Platform</h3>
                <div className="flex gap-3"><a className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full text-xs font-bold hover:bg-primary/10 transition-colors" href="#" target="_blank"><span>▶</span> Demo</a>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">open_in_new</span>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">code</span>
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
              <img alt="abstract mathematical visualization with glowing geometric shapes and complex formula structures in dark space" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB857rMrWJeHbH81C6EE7-orzFUEifZkZqeVEt7LnI-Xf-o3_FkEsOcDI8K1oD_0vXcdbHhJswvoi94wSF4dgclmmoBQd_oXI9Sty0SsNrsB-wl9NXN9v4TY63riBvvAuNfWr3-xoUX6orzcS9M8ZBtxXA01KcD4EBZvxCFz3ZUlKcpWiP8Pe_yxXjSoGVh0VPkzQGTksLlys8ESqbeXMV94t6zZhGYYBfwvdQfQzR8y83hxja7bafvgScTmb-iIULJ0j3YI6SjiQ"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
            </div>
            <div className="p-8 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-3xl font-bold text-on-surface">AI Manim Video Gen</h3>
                <div className="flex gap-3"><a className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full text-xs font-bold hover:bg-primary/10 transition-colors" href="#" target="_blank"><span>▶</span> Demo</a>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">open_in_new</span>
                  <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">code</span>
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
      </div>
    </section>
  );
}
