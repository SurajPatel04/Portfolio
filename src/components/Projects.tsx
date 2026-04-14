import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// GitHub SVG icon (inline to avoid lucide-react version export issues)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

import aiInterviewImg from '../assets/Ai-Interview.png';
import mainmVideoImg from '../assets/MainmVIdeo.png';
import architectureImg from '../assets/manim_video_generation_pipeline.png';

const projectsData = [
  {
    id: 1,
    title: "AI Interview Platform",
    image: aiInterviewImg,
    demoLink: "#",
    sourceLink: "#",
    bullets: [
      "Real-time voice interviews with multi-dimension scoring; achieved 3-6s TTS latency via Redis + GCP caching",
      "Resume-JD matching engine identifying skill gaps with automated feedback generation",
      "Full CI/CD pipeline with Docker + GitHub Actions on GCP"
    ],
    techStack: ["React", "Node.js", "WebSockets", "Redis", "Docker", "GCP", "GitHub Actions"],
    status: "COMPLETED",
    hasArchitecture: false,
    architectureImg: null
  },
  {
    id: 2,
    title: "AI Manim Video Gen",
    image: mainmVideoImg,
    demoLink: "https://www.youtube.com/watch?v=yanGT_wRSms",
    sourceLink: "#",
    bullets: [
      "Engineered multi-agent LangGraph workflow (query validation → description expansion → code generation → self-healing render); 88% first-pass success",
      "Celery + Redis async pipeline for CPU-intensive Manim renders; 3x retry logic reduced failure rate from 35% to 12%",
      "Production stack (FastAPI + web UI + GCP + Supabase) with distributed task workers"
    ],
    techStack: ["FastAPI", "LangGraph", "Celery", "Redis", "Docker", "GCP", "Supabase"],
    status: "COMPLETED",
    hasArchitecture: true,
    architectureImg: architectureImg
  }
];

const ArchitectureModal = ({
  isOpen,
  onClose,
  imageSrc
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-fit max-w-[96vw] xl:max-w-[85vw] max-h-[90vh] bg-surface-container shadow-[0_0_50px_rgba(0,218,248,0.15)] border border-primary/20 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 sm:px-8 sm:py-5 border-b border-outline-variant/10 shrink-0 bg-surface-container-low/50">
              <div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">System Architecture</h3>
                <p className="text-[11px] sm:text-xs font-body text-on-surface-variant mt-0.5 hidden sm:block">Detailed view of the agentic generation pipeline.</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-surface-container-high hover:bg-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10 hover:border-primary/30 active:scale-95 ml-6"
                aria-label="Close modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            {/* Scrollable Diagram Area */}
            <div className="overflow-auto p-4 sm:p-8 bg-[#18181A] flex-grow flex custom-scrollbar">
              <img 
                src={imageSrc} 
                alt="System Architecture Diagram" 
                className="w-auto h-auto min-w-[280px] max-w-full max-h-[75vh] object-contain m-auto hover:cursor-zoom-in transition-transform duration-300"
                onClick={() => window.open(imageSrc, '_blank')}
                title="Click to view full screen in new tab"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [selectedArchitecture, setSelectedArchitecture] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // 1 item on mobile/tablet, 2 on lg screens
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
      // Safety bounds when resizing
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, projectsData.length - (window.innerWidth < 1024 ? 1 : 2))));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - itemsPerPage);
    }
  };

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      position: "relative",
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const visibleProjects = projectsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-24 bg-surface-container-lowest" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-lg sm:text-xl">03.</span> Projects
          </h2>
        </motion.div>

        <div className="relative overflow-visible">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag={itemsPerPage === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                if (itemsPerPage !== 1) return;
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
              className={`grid gap-8 ${itemsPerPage === 2 ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
            >
              {visibleProjects.map(project => (
                <div key={project.id} className="group relative bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10 flex flex-col shadow-2xl transition-all duration-300 w-full h-full">
                  <div className="relative h-56 sm:h-72 overflow-hidden shrink-0">
                    <img 
                      alt={project.title} 
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-6 sm:p-8 flex-grow flex flex-col pt-2 sm:pt-4 relative z-10 bg-surface-container-low -mt-[2px]">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                      <h3 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface leading-tight">{project.title}</h3>
                      <div className="flex flex-wrap gap-3 shrink-0 auto-cols-min">
                        <a className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary rounded-full text-[11px] sm:text-xs font-bold shadow-[0_0_10px_rgba(0,218,248,0.3)] hover:shadow-[0_0_20px_rgba(0,218,248,0.5)] transition-all hover:scale-105 active:scale-95" href={project.demoLink} target="_blank">
                          <span className="material-symbols-outlined text-[14px]">play_arrow</span> Demo
                        </a>
                        <a className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-outline-variant hover:border-primary text-primary rounded-full text-[11px] sm:text-xs font-bold transition-all hover:bg-primary/5 hover:scale-105 active:scale-95" href={project.sourceLink} target="_blank">
                          <GithubIcon className="w-3.5 h-3.5" /> Source
                        </a>
                      </div>
                    </div>

                    <div className="mb-6 space-y-3 font-body text-on-surface-variant text-sm sm:text-base leading-relaxed flex-grow">
                      {project.bullets.map((bullet, idx) => (
                        <p key={idx} className="flex flex-row items-start gap-2">
                          <span className="text-primary mt-1 text-sm font-bold shrink-0">▹</span>
                          <span>{bullet}</span>
                        </p>
                      ))}
                    </div>

                    <div className="mb-2 w-full mt-auto pt-6 border-t border-outline-variant/10">
                      <p className="text-primary font-headline font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-4">Technology Stack</p>
                      
                      <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-surface-container-high/60 hover:bg-surface-container-highest transition-colors duration-300 px-4 py-[0.4rem] rounded-full text-[11px] sm:text-xs font-bold text-on-surface-variant/90 border border-outline-variant/10 shadow-sm hover:shadow-md cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                    
                    {project.hasArchitecture && (
                      <div className="mt-8 flex">
                        <button 
                          onClick={() => setSelectedArchitecture(project.architectureImg || null)}
                          className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 text-primary px-5 py-2.5 rounded-xl text-sm font-headline font-bold cursor-pointer hover:bg-primary/15 hover:border-primary hover:shadow-[0_0_15px_rgba(0,218,248,0.2)] transition-all active:scale-95 group/btn"
                        >
                          <span className="material-symbols-outlined text-[18px] group-hover/btn:scale-110 group-hover/btn:rotate-[-5deg] transition-transform duration-300">account_tree</span>
                          <span className="tracking-wide">Sequence Diagram</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#18181A]/30 px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center border-t border-outline-variant/10 shrink-0">
                    <span className="text-xs sm:text-[13px] font-mono font-bold text-green-400 flex items-center gap-2">
                      <span className="w-2h-2 rounded-full bg-green-400 animate-pulse inline-block shadow-[0_0_8px_rgba(74,222,128,0.8)] h-2"></span>
                      SYSTEM: {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6"
          >
            <div className="flex gap-2.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => {
                    setDirection(i > currentPage ? 1 : -1);
                    setCurrentIndex(i * itemsPerPage);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentPage === i ? 'w-8 bg-primary shadow-[0_0_10px_rgba(0,218,248,0.5)]' : 'w-2.5 bg-outline-variant/30 hover:bg-outline-variant'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prevSlide} 
                disabled={currentPage === 0}
                className="w-12 h-12 bg-surface-container hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-full border border-outline-variant/20 text-on-surface transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back_ios_new</span>
              </button>
              <button 
                onClick={nextSlide} 
                disabled={currentPage >= totalPages - 1}
                className="w-12 h-12 bg-surface-container hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-full border border-outline-variant/20 text-on-surface transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_forward_ios</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <ArchitectureModal 
        isOpen={!!selectedArchitecture} 
        onClose={() => setSelectedArchitecture(null)} 
        imageSrc={selectedArchitecture} 
      />
    </section>
  );
}
