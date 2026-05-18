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
import insightFlowImg from '../assets/InsightFlow.png';
import insightFlowArchitectureImg from '../assets/InsightFlowSystemDiagram.png';
import timestampCitationImg from '../assets/timestamp_citation_ux.png';

const projectsData = [
  {
    id: 1,
    title: "InsightFlow RAG Platform",
    image: insightFlowImg,
    sourceLink: "https://github.com/SurajPatel04/ai-multimedia-rag-app",
    liveLink: "https://insightflow.surajpatel.dev/",
    bullets: [
      "Architected a multi-modal RAG platform (FastAPI + LangGraph + FAISS) enabling semantic search over PDFs, audio, and video with AI-generated answers and clickable media timestamp citations.",
      "Designed a cost-efficient two-phase ingestion pipeline that stages files in MongoDB before confirmation, eliminating unnecessary embedding costs for cancelled uploads.",
      "Built agentic conversation memory using LangGraph with auto-triggered summarization to condense history when token thresholds are exceeded, enabling indefinitely long sessions.",
      "Implemented Redis semantic caching with cosine similarity matching (≥95% threshold) to stream cached responses instantly, bypassing the LLM entirely for near-duplicate queries.",
      "Integrated Deepgram transcription with timestamped utterance chunking, surfacing precise [start - end] citations seekable via a plyr-react media player.",
      "Deployed on GCP using Docker and Docker Compose, with GitHub Actions CI/CD pipeline to build and push images to Docker Hub."
    ],
    techStack: ["React", "Tailwind CSS", "Shadcn UI", "FastAPI", "LangGraph", "MongoDB", "FAISS", "Supabase", "Deepgram", "OpenAI", "Gemini", "Redis", "SSE", "JWT Auth", "Docker", "GitHub Actions"],
    status: "COMPLETED",
    deepDive: {
      problemStatement: "Most RAG tools treat upload as a one-step process — I wanted to avoid charging users embedding costs for files they might cancel. This led to the intentional design of the two-phase ingestion pipeline.",
      architectureImg: insightFlowArchitectureImg,
      timestampUxImg: timestampCitationImg,
      decisions: [
        { title: "FAISS over Managed Vector DB", text: "Chose FAISS for zero-latency local retrieval and to eliminate cloud database costs during development and scale testing." },
        { title: "LangGraph over plain LangChain", text: "Required cyclic execution and persistent state for long-term memory and auto-summarization, which plain DAGs couldn't support." },
        { title: "95% Cosine Similarity Threshold", text: "Calibrated to aggressively cache exact and highly similar phrasing without sacrificing context specificity." }
      ],
      challenges: [
        { title: "Long-context Memory without Token Bloat", text: "Solved token bloat by triggering background summarization nodes in LangGraph when message count or token usage thresholds are exceeded." },
        { title: "Multi-modal Chunking Strategies", text: "Engineered separate chunking strategies: text splitting for PDFs vs. timestamped utterance chunking for Deepgram audio/video transcripts." }
      ]
    }
  },
  {
    id: 2,
    title: "AI Interview Platform",
    image: aiInterviewImg,
    sourceLink: "https://github.com/SurajPatel04/AI-Interview",
    liveLink: "https://interview.surajpatel.dev/",
    bullets: [
      "Engineered a real-time AI interview system (React + Node.js + MongoDB) with WebRTC and Socket.io, enabling low-latency voice interactions with streaming audio and TTS.",
      "Reduced next-question API latency from ~8–10s → ~3–6s by caching  interview context and responses in Redis, avoiding redundant LLM calls on each user interaction.",
      "Built context-aware interview workflows using LangChain and Gemini, generating questions dynamically from resumes, selected skills, and live user responses.",
      "Developed a production-ready backend with Node.js and MongoDB supporting authentication, interview history, and the end-to-end interview pipeline.",
      "Deployed on GCP using Docker and Docker Compose, with GitHub Actions CI/CD pipeline to build and push images to Docker Hub."
    ],
    techStack: ["React", "Material UI", "Node.js", "Express.js", "MongoDB (Mongoose)", "Redis", "LangChain", "WebSockets", "JWT Auth", "Docker", "GCP", "Text-to-Speech (GCP TTS, Piper)", "GitHub Actions"],
    status: "COMPLETED"
  },
  {
    id: 3,
    title: "AI Manim Video Gen",
    image: mainmVideoImg,
    demoLink: "https://www.youtube.com/watch?v=yanGT_wRSms",
    sourceLink: "https://github.com/SurajPatel04/manimVideoGenerate",
    bullets: [
      "Built an end - to - end AI pipeline(React + FastAPI + MongoDB) that converts text prompts into rendered Manim animations.",
      "Designed a multi - agent LangGraph workflow with query validation, description expansion, code generation, and self- healing repair loops boosting execution success from ~60 % → 90 % +.",
      "Implemented a Celery + Redis async task queue for concurrent CPU - intensive renders, significantly improving stability under load.",
      "Deployed on GCP using Docker and Docker Compose, with GitHub Actions CI/CD pipeline to build and push images to Docker Hub, utilizing Supabase for robust video storage."
    ],
    techStack: ["React", "Shadcn UI", "FastAPI", "LangGraph", "LangChain", "LangSmith", "Celery", "MongoDB (Beanie ODM)", "Redis", "Authentication (JWT, Google OAuth)", "Docker", "GCP", "GitHub Actions", "Supabase"],
    status: "COMPLETED",
    deepDive: {
      architectureImg: architectureImg
    }
  }
];

const ProjectDetailsModal = ({
  project,
  onClose
}: {
  project: any;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && project.deepDive && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#000000]/80"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-[96vw] xl:max-w-4xl max-h-[90vh] bg-surface-container shadow-[0_0_50px_rgba(0,218,248,0.15)] border border-primary/20 rounded-full overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 sm:px-8 sm:py-5 border-b border-outline-variant/10 shrink-0 bg-surface-container-low/50">
              <div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-on-surface">{project.title} - System Architecture</h3>
                <p className="text-[11px] sm:text-xs font-body text-on-surface-variant mt-0.5 hidden sm:block">High-level system design and data flow.</p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-surface-container-high hover:bg-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10 hover:border-primary/30 active:scale-95 ml-6"
                aria-label="Close modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Scrollable Area */}
            <div className="overflow-auto p-6 sm:p-8 bg-surface-container flex-grow custom-scrollbar">
              {project.deepDive.architectureImg && (
                <div className="bg-[#18181A] p-4 rounded-xl border border-outline-variant/10 flex justify-center">
                  <img src={project.deepDive.architectureImg} alt="Architecture" className="max-w-full rounded-lg" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

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

  const totalSlides = Math.max(1, projectsData.length - itemsPerPage + 1);
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };



  const swipeConfidenceThreshold = 1500;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };



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

        <div className="relative overflow-hidden p-4 -m-4">
          <motion.div
            drag={itemsPerPage === 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, { offset, velocity }) => {
              if (itemsPerPage !== 1) return;
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold || offset.x < -75) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold || offset.x > 75) {
                prevSlide();
              }
            }}
            className="flex flex-nowrap gap-8"
            animate={{
              x: itemsPerPage === 1
                ? `calc(-${currentIndex * 100}% - ${currentIndex * 2}rem)`
                : `calc(-${currentIndex * 50}% - ${currentIndex * 1}rem)`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projectsData.map(project => (
              <div key={project.id} className={`flex-none w-full ${itemsPerPage === 2 ? 'lg:w-[calc(50%-1rem)]' : ''}`}>
                <div key={project.id} className="group relative bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/20 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#0AB4D6]/50 hover:shadow-[0_10px_40px_-15px_rgba(10,180,214,0.3)] transition-all duration-500 w-full h-full">
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
                        {project.demoLink && (
                          <a className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary rounded-full text-[11px] sm:text-xs font-bold shadow-[0_0_10px_rgba(0,218,248,0.3)] hover:shadow-[0_0_20px_rgba(0,218,248,0.5)] transition-all hover:scale-105 active:scale-95" href={project.demoLink} target="_blank">
                            <span className="material-symbols-outlined text-[14px]">play_arrow</span> Demo
                          </a>
                        )}
                        {project.liveLink && (
                          <a className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-outline-variant hover:border-primary text-primary rounded-full text-[11px] sm:text-xs font-bold transition-all hover:bg-primary/5 hover:scale-105 active:scale-95" href={project.liveLink} target="_blank">
                            <span className="material-symbols-outlined text-[14px]">language</span> Live Link
                          </a>
                        )}
                        {project.sourceLink && (
                          <a className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-outline-variant hover:border-primary text-primary rounded-full text-[11px] sm:text-xs font-bold transition-all hover:bg-primary/5 hover:scale-105 active:scale-95" href={project.sourceLink} target="_blank">
                            <GithubIcon className="w-3.5 h-3.5" /> Source
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="mb-6 space-y-3 font-body text-on-surface-variant text-sm sm:text-base leading-relaxed flex-grow">
                      {project.bullets.map((bullet, idx) => (
                        <p key={idx} className="flex flex-row items-start gap-2">
                          <span className="text-primary mt-[6px] text-xs shrink-0">•</span>
                          <span>{bullet}</span>
                        </p>
                      ))}
                    </div>

                    <div className="mb-2 w-full pt-6 border-t border-outline-variant/10">
                      <p className="text-primary font-headline font-bold text-[10px] sm:text-[11px] uppercase tracking-widest mb-4">Technology Stack</p>
                      <div className="flex flex-wrap gap-2.5 sm:gap-3">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-surface-container-high/60 hover:bg-surface-container-highest transition-colors duration-300 px-4 py-[0.4rem] rounded-full text-[11px] sm:text-xs font-bold text-on-surface-variant/90 border border-outline-variant/10 shadow-sm hover:shadow-md cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 flex">
                      <button
                        onClick={() => project.deepDive && setSelectedProject(project)}
                        disabled={!project.deepDive}
                        className={`inline-flex items-center gap-2 border px-5 py-2.5 rounded-xl text-sm font-headline font-bold transition-all group/btn ${
                          project.deepDive 
                            ? 'border-primary/30 bg-primary/5 text-primary cursor-pointer hover:bg-primary/15 hover:border-primary hover:shadow-[0_0_15px_rgba(0,218,248,0.2)] active:scale-95' 
                            : 'border-outline-variant/20 bg-surface-container-high/30 text-on-surface-variant/40 cursor-not-allowed opacity-50'
                        }`}
                      >
                        <span className={`material-symbols-outlined text-[18px] ${project.deepDive ? 'group-hover/btn:scale-110 group-hover/btn:rotate-[-5deg] transition-transform duration-300' : ''}`}>account_tree</span>
                        <span className="tracking-wide">System Architecture Diagram</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {totalSlides > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6"
          >
            <div className="flex gap-2.5">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary shadow-[0_0_10px_rgba(0,218,248,0.5)]' : 'w-2.5 bg-outline-variant/30 hover:bg-outline-variant'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 bg-surface-container hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-full border border-outline-variant/20 text-on-surface transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back_ios_new</span>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 bg-surface-container hover:bg-surface-container-high disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 rounded-full border border-outline-variant/20 text-on-surface transition-all flex items-center justify-center hover:scale-110 active:scale-95 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_forward_ios</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
