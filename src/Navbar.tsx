import { animate } from 'motion/react';

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate position with a 100px offset so the navbar doesn't cover the section header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      
      animate(window.scrollY, y, {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // The premium spring curve
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131318]/80 backdrop-blur-xl bg-gradient-to-b from-[#131318] to-transparent shadow-none">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-slate-50 font-['Space_Grotesk']">
          Suraj Patel
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="cursor-pointer text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight">Experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="cursor-pointer text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight">Projects</a>
          <a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')} className="cursor-pointer text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight">Certifications</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="cursor-pointer text-slate-400 font-medium hover:text-slate-200 transition-all duration-300 hover:opacity-80 font-['Space_Grotesk'] tracking-tight">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-400">terminal</span>
          <button onClick={(e) => handleScroll(e, 'resume')} className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-6 py-2 rounded-xl active:scale-95 duration-100 transition-all font-['Space_Grotesk']">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}
