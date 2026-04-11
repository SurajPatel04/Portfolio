export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#131318]/80 backdrop-blur-xl bg-gradient-to-b from-[#131318] to-transparent shadow-none">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-slate-50 font-['Space_Grotesk']">
          Suraj Patel
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight" href="#experience">Experience</a>
          <a className="text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight" href="#projects">Projects</a>
          <a className="text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight" href="#certifications">Certifications</a>
          <a className="text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-400">terminal</span>
          <button className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-6 py-2 rounded-xl active:scale-95 duration-100 transition-all font-['Space_Grotesk']">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}
