import { animate, motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate position with an 80px offset so the navbar doesn't cover the section header
      const y = element.getBoundingClientRect().top + window.scrollY - 10;

      animate(window.scrollY, y, {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // The premium spring curve
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
      setIsMobileMenuOpen(false); // Close menu after clicking
    }
  };

  // In terminal mode, hide the normal navbar (TerminalView has its own nav)
  if (theme === 'terminal') return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131318]/80 backdrop-blur-xl bg-gradient-to-b from-[#131318] to-transparent shadow-none">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-slate-50 font-['Space_Grotesk']">
            Suraj Patel
          </div>
          
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer text-slate-400 font-medium hover:text-slate-200 px-3 lg:px-4 py-2 rounded-xl transition-colors duration-300 font-['Space_Grotesk'] tracking-tight"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover-glass"
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/5"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              title="Switch to Terminal Mode"
              className="relative group p-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-slate-400 group-hover:text-[#33ff33] transition-colors duration-300 block leading-none">
                terminal
              </span>
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Terminal Mode
              </span>
            </button>
            <button onClick={(e) => handleScroll(e, 'resume')} className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-6 py-2 rounded-xl active:scale-95 duration-100 transition-all font-['Space_Grotesk'] flex items-center justify-center">
              Resume
            </button>
          </div>

          {/* Mobile menu toggle & terminal icon layout */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              title="Switch to Terminal Mode"
              className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-slate-400 hover:text-[#33ff33] transition-colors duration-300">
                terminal
              </span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 pb-4 border-t border-white/10">
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="block text-slate-400 font-medium hover:text-slate-200 hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] py-3 px-4 rounded-lg">Experience</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block text-slate-400 font-medium hover:text-slate-200 hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] py-3 px-4 rounded-lg">Projects</a>
            <a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')} className="block text-slate-400 font-medium hover:text-slate-200 hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] py-3 px-4 rounded-lg">Certifications</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-slate-400 font-medium hover:text-slate-200 hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] py-3 px-4 rounded-lg">Contact</a>
            
            <div className="pt-2 mt-2 border-t border-white/5">
              <button onClick={(e) => handleScroll(e, 'resume')} className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-6 py-3 rounded-xl active:scale-95 duration-100 transition-all font-['Space_Grotesk']">
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
