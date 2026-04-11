export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow z-0"></div>
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></span>
            <span className="text-xs font-label font-medium tracking-widest uppercase text-on-surface-variant">Available for Hire</span>
          </div>
          <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-on-surface mb-6">
            Suraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Patel</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Full Stack Engineer · AI Systems Builder · LangChain &amp; LangGraph Specialist. Crafting intelligent systems with neural logic and architectural precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95" href="#projects">
              View Projects
            </a>
            <a className="bg-surface-container/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container transition-all active:scale-95" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
