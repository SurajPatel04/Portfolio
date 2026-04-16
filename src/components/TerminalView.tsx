import { useState, useEffect, useRef, useCallback } from 'react';
import type { ReactNode, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../ThemeContext';
import resumePdf from '../assets/SurajPatelResume.pdf';

// Data 
const SECTIONS = ['HOME', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'CERTS', 'CONTACT'] as const;
type Section = (typeof SECTIONS)[number];

const SKILLS_DATA = [
  { dir: 'languages/', items: ['TypeScript', 'Python', 'JavaScript'] },
  { dir: 'frontend/', items: ['React', 'Tailwind CSS', 'HTML / CSS'] },
  { dir: 'backend/', items: ['Node.js / Express.js', 'FastAPI', 'REST APIs / WebSockets'] },
  { dir: 'databases/', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { dir: 'ai-agentic/', items: ['LangChain / LangGraph', 'OpenAI / Gemini APIs', 'Vector DBs / RAG'] },
  { dir: 'devops/', items: ['Git', 'Docker', 'GitHub Actions CI/CD'] },
];

const PROJECTS_DATA = [
  {
    name: 'ai-interview-platform',
    bullets: [
      "Engineered a real-time AI interview system (React + Node.js + MongoDB) with WebRTC and Socket.io, enabling low-latency voice interactions with streaming audio and TTS",
      "Reduced next-question API latency from ~8–10s → ~3–6s by caching  interview context and responses in Redis, avoiding redundant LLM calls on each user interaction",
      "Built context-aware interview workflows using LangChain and Gemini, generating questions dynamically from resumes, selected skills, and live user responses",
      "Developed a production-ready backend with Node.js and MongoDB supporting authentication, interview history, and the end-to-end interview pipeline"
    ],
    stack: ["React", "Material UI", "Node.js", "Express.js", "MongoDB (Mongoose)", "Redis", "LangChain", "WebSockets", "JWT Auth", "Docker", "GCP", "Text-to-Speech (GCP TTS, Piper)", "GitHub Actions"],
    status: 'COMPLETED',
    demo: '#',
    source: '#',
  },
  {
    name: 'ai-manim-video-gen',
    bullets: [
      "Built an end - to - end AI pipeline(React + FastAPI + MongoDB) that converts text prompts into rendered Manim animations",
      "Designed a multi - agent LangGraph workflow with query validation, description expansion, code generation, and self- healing repair loops boosting execution success from ~60 % → 90 % +",
      "Implemented a Celery + Redis async task queue for concurrent CPU - intensive renders, significantly improving stability under load",
      "Deployed on GCP with Docker, using Supabase for video storage and a clean web UI for end - to - end user interaction"
    ],
    stack: ["React", "Shadcn UI", "FastAPI", "LangGraph", "LangChain", "LangSmith", "Celery", "MongoDB (Beanie ODM)", "Redis", "Authentication (JWT, Google OAuth)", "Docker", "GCP", "GitHub Actions", "Supabase"],
    status: 'COMPLETED',
    demo: 'https://www.youtube.com/watch?v=yanGT_wRSms',
    source: '#',
  },
];

const CERTS_DATA = [
  { name: 'Full Stack Developer Path', issuer: 'Scrimba', year: '2025', link: 'https://scrimba.com/certificate-cert23wfboWopQ2SSv6pWzVHgSrmSF9gqPYtSWTLot5DwyAxWL1v' },
  { name: 'Learn React', issuer: 'Scrimba', year: '2025', link: 'https://scrimba.com/certificate-cert24zAwPPowRQV2xfEN2ZiBrLXtw1vJ4YEgPtEU' },
];

// Command registry 
type CommandAction = Section | 'help' | 'clear' | 'exit' | 'resume' | 'github' | 'email' | 'linkedin' | 'phone' | 'ls' | 'su';
const COMMAND_MAP: Record<string, CommandAction> = {
  home: 'HOME',
  skills: 'SKILLS',
  experience: 'EXPERIENCE',
  work: 'EXPERIENCE',
  projects: 'PROJECTS',
  certs: 'CERTS',
  certifications: 'CERTS',
  contact: 'CONTACT',
  help: 'help',
  clear: 'clear',
  exit: 'exit',
  quit: 'exit',
  resume: 'resume',
  download: 'resume',
  whoami: 'HOME',
  about: 'HOME',
  ls: 'ls',
  dir: 'ls',
  github: 'github',
  gh: 'github',
  email: 'email',
  mail: 'email',
  linkedin: 'linkedin',
  li: 'linkedin',
  phone: 'phone',
  tel: 'phone',
  su: 'su',
  login: 'su',
};

// ASCII Art 
const ASCII_NAME = `
 ███████╗██╗   ██╗██████╗  █████╗      ██╗
 ██╔════╝██║   ██║██╔══██╗██╔══██╗     ██║
 ███████╗██║   ██║██████╔╝███████║     ██║
 ╚════██║██║   ██║██╔══██╗██╔══██║██   ██║
 ███████║╚██████╔╝██║  ██║██║  ██║╚█████╔╝
 ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚════╝

 ██████╗  █████╗ ████████╗███████╗██╗
 ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║
 ██████╔╝███████║   ██║   █████╗  ██║
 ██╔═══╝ ██╔══██║   ██║   ██╔══╝  ██║
 ██║     ██║  ██║   ██║   ███████╗███████╗
 ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝`;

const HELP_TEXT = `
  Available commands:

    home          — View intro / bio
    skills        — List technical skills
    experience    — Show work experience
    projects      — Browse projects
    certs         — View certifications
    contact       — Show contact info / links
    resume        — Download resume PDF
    github        — Open GitHub profile
    email, mail   — Send an interactive email message
    linkedin      — Open LinkedIn profile
    phone         — Show phone number
    ls            — List available sections/files
    su <user>     — Switch user/auth (SYS.AUTH)
    cd <dir>      — Enter a section (e.g., cd skills)
    dir           — Alias for ls
    clear         — Clear command history
    help          — Show this help menu
    exit          — Return to modern theme

  Aliases:
    gh → github, mail → email, li → linkedin

  Navigation:
    ↑ ↓ arrows   — Command history
    ← → arrows   — Switch section tabs
    ESC           — Exit terminal mode
`;

// Typewriter Hook 
function useTypewriter(text: string, speed = 18, trigger = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) { setDisplayed(''); setDone(false); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, trigger]);

  return { displayed, done };
}

// Blinking Cursor 
function Cursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      className="inline-block ml-0.5"
      style={{ color: '#33ff33' }}
    >
      █
    </motion.span>
  );
}

// Sending Animation
function SendingAnimation() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const i = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.');
    }, 400);
    return () => clearInterval(i);
  }, []);
  return <span style={{ color: '#00daf8' }}>Sending message{dots}</span>;
}

// Prompt 
function Prompt({ children, showCursor = false, user = 'suraj' }: { children?: ReactNode; showCursor?: boolean, user?: string }) {
  return (
    <div className="flex items-start gap-0 flex-wrap">
      <span style={{ color: '#33ff33' }}>{user}</span>
      <span style={{ color: '#888' }}>@</span>
      <span style={{ color: '#00daf8' }}>portfolio</span>
      <span style={{ color: '#888' }}>:~$ </span>
      {children}
      {showCursor && <Cursor />}
    </div>
  );
}

// Command Block 
function CmdBlock({
  command,
  children,
  delay = 0,
}: {
  command: string;
  children: ReactNode;
  delay?: number;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const { displayed, done } = useTypewriter(command, 25, show);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      className="mb-6"
    >
      <Prompt>
        <span style={{ color: '#e0e0e0' }}>{displayed}</span>
        {!done && <Cursor />}
      </Prompt>
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 ml-0"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

// History entry 
interface HistoryEntry {
  id: number;
  command: string;
  output: ReactNode;
  isError?: boolean;
  customPrompt?: ReactNode;
}

// Sections 
function HomeSection() {
  return (
    <>
      <CmdBlock command="cat banner.txt" delay={200}>
        <pre
          className="text-xs sm:text-sm leading-tight overflow-x-auto"
          style={{ color: '#33ff33' }}
        >
          {ASCII_NAME}
        </pre>
      </CmdBlock>

      <CmdBlock command="whoami" delay={1200}>
        <p style={{ color: '#c0c0c0' }}>
          Full Stack Engineer building AI-powered applications.
          <br />
          Specialized in real-time systems with LangChain, LangGraph, and scalable backend architectures.
        </p>
      </CmdBlock>

      <CmdBlock command="cat status.txt" delay={2000}>
        <table className="text-sm" style={{ color: '#c0c0c0' }}>
          <tbody>
            <tr>
              <td className="pr-8 uppercase tracking-wider text-xs" style={{ color: '#666' }}>Location</td>
              <td>Lucknow, UP, India</td>
            </tr>
            <tr>
              <td className="pr-8 uppercase tracking-wider text-xs" style={{ color: '#666' }}>Focus</td>
              <td>Full Stack · AI Systems · Agentic Backends</td>
            </tr>
            <tr>
              <td className="pr-8 uppercase tracking-wider text-xs" style={{ color: '#666' }}>GitHub</td>
              <td>
                <a href="https://github.com/SurajPatel04" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>
                  github.com/SurajPatel04
                </a>
              </td>
            </tr>
            <tr>
              <td className="pr-8 uppercase tracking-wider text-xs" style={{ color: '#666' }}>Contact</td>
              <td>
                <a href="mailto:surajpatel9390@gmail.com" className="hover:underline" style={{ color: '#00daf8' }}>
                  surajpatel9390@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td className="pr-8 uppercase tracking-wider text-xs" style={{ color: '#666' }}>Resume</td>
              <td>
                <a href={resumePdf} download="Suraj_Patel_Resume.pdf" className="hover:underline font-bold" style={{ color: '#33ff33' }}>
                  [↓ download.pdf]
                </a>
              </td>
            </tr>
            <tr>
              <td className="pr-8 pt-2 uppercase tracking-wider text-xs" style={{ color: '#666' }}>Status</td>
              <td className="pt-2" style={{ color: '#33ff33' }}>■ OPEN TO WORK</td>
            </tr>
          </tbody>
        </table>
      </CmdBlock>

      {/* Help tip */}
      <div className="mt-4 text-xs" style={{ color: '#555' }}>
        TIP: ↑↓ arrows for history — type <span style={{ color: '#33ff33' }} className="font-bold">help</span> for commands
      </div>
    </>
  );
}

function SkillsSection() {
  return (
    <CmdBlock command="ls -la ./skills/" delay={200}>
      <div className="space-y-4">
        {SKILLS_DATA.map((group) => (
          <div key={group.dir}>
            <span style={{ color: '#00daf8' }} className="font-bold">
              drwxr-xr-x {'  '} {group.dir}
            </span>
            <div className="ml-4 mt-1">
              {group.items.map((item) => (
                <div key={item} style={{ color: '#c0c0c0' }}>
                  -rw-r--r-- {'  '} {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CmdBlock>
  );
}

function ExperienceSection() {
  return (
    <CmdBlock command="cat experience.log" delay={200}>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span style={{ color: '#33ff33' }}>●</span>
          <span style={{ color: '#e0e0e0' }} className="font-bold">Full Stack Engineer — Intern</span>
        </div>
        <div className="ml-6">
          <span style={{ color: '#00daf8' }}>@ Careerboat.ai</span>
          <span style={{ color: '#666' }}> {'  '} Dec 2025 — Present</span>
        </div>
        <div className="ml-6 mt-2 space-y-3 md:space-y-1 text-sm md:text-justify pr-4 sm:pr-8" style={{ color: '#aaa' }}>
          <p>• Built an AI-powered interview system that generates context-aware questions using LangChain and LangGraph, dynamically adapting based on candidate resumes, selected skills, and previous responses to simulate realistic interview scenarios.</p>
          <p>• Designed stateful LLM workflows using LangGraph with MongoDB checkpointers, implementing dynamic context summarization to manage long conversations and significantly reduce token usage while preserving relevant context.</p>
          <p>• Developed a real-time voice interaction pipeline integrating Google Cloud TTS, Server-Sent Events (SSE), and AWS S3 to enable low-latency, token-by-token audio streaming for interactive interviews.</p>
          <p>• Implemented a production-grade payment system using Razorpay, supporting subscriptions, one-time payments, coupon logic, and webhook-based backend validation for secure transaction handling.</p>
        </div>
      </div>
    </CmdBlock>
  );
}

function ProjectsSection() {
  return (
    <CmdBlock command="ls -la ./projects/" delay={200}>
      <div className="space-y-6">
        {PROJECTS_DATA.map((proj) => (
          <div key={proj.name} className="border-l-2 pl-4" style={{ borderColor: '#1a3a1a' }}>
            <div className="flex items-center gap-2 flex-wrap">
              <span style={{ color: '#33ff33' }} className="font-bold">{proj.name}/</span>
              {/* <span
                className="text-[10px] px-2 py-0.5 rounded font-mono uppercase"
                style={{ background: '#0a2a0a', color: '#33ff33', border: '1px solid #1a3a1a' }}
              >
                {proj.status}
              </span> */}
            </div>
            <div className="flex gap-4 mt-2 text-xs">
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#33ff33' }}>
                [▶ demo]
              </a>
              <a href={proj.source} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>
                [⌥ source]
              </a>
            </div>
            <div className="mt-2 space-y-3 md:space-y-1">
              {proj.bullets.map((bullet, i) => (
                <p key={i} className="text-sm" style={{ color: '#aaa' }}>
                  • {bullet}
                </p>
              ))}
            </div>
            <div className="mt-4 mb-2 text-[11px] uppercase tracking-wider font-bold" style={{ color: '#666' }}>Technology Stack:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2 py-0.5 rounded font-mono"
                  style={{ background: '#0a1a2a', color: '#00daf8', border: '1px solid #0a2a3a' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CmdBlock>
  );
}

function CertsSection() {
  return (
    <CmdBlock command="cat certifications.txt" delay={200}>
      <div className="space-y-3">
        {CERTS_DATA.map((cert) => (
          <div key={cert.name} className="flex items-start gap-3">
            <span style={{ color: '#33ff33' }}>✓</span>
            <div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold" style={{ color: '#e0e0e0' }}>
                {cert.name}
              </a>
              <span style={{ color: '#666' }}> — {cert.issuer} ({cert.year})</span>
            </div>
          </div>
        ))}
      </div>
    </CmdBlock>
  );
}

function ContactSection() {
  return (
    <CmdBlock command="cat contact.json" delay={200}>
      <pre className="text-sm whitespace-pre-wrap break-words" style={{ color: '#c0c0c0' }}>
        {`{
  "email": "`}<a href="mailto:surajpatel9390@gmail.com" className="hover:underline" style={{ color: '#00daf8' }}>surajpatel9390@gmail.com</a>{`",
  "phone": "`}<a href="tel:+919260923895" className="hover:underline" style={{ color: '#00daf8' }}>+91 9260923895</a>{`",
  "github": "`}<a href="https://github.com/SurajPatel04" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>github.com/SurajPatel04</a>{`",
  "linkedin": "`}<a href="https://linkedin.com/in/suraj-patel-9201b2381" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>linkedin.com/in/suraj-patel-9201b2381</a>{`",
  "resume": "`}<a href={resumePdf} download="Suraj_Patel_Resume.pdf" className="hover:underline" style={{ color: '#33ff33' }}>[↓ download_resume.pdf]</a>{`",
  "message_me": "Type 'mail' or 'email' command to send a direct message!"
}`}
      </pre>
    </CmdBlock>
  );
}

// Section Content Map
const SECTION_CONTENT: Record<Section, () => React.JSX.Element> = {
  HOME: HomeSection,
  SKILLS: SkillsSection,
  EXPERIENCE: ExperienceSection,
  PROJECTS: ProjectsSection,
  CERTS: CertsSection,
  CONTACT: ContactSection,
};

// Main Terminal View
export default function TerminalView() {
  const { toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<Section>('HOME');
  const [cmdInput, setCmdInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [historyId, setHistoryId] = useState(0);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [suggestion, setSuggestion] = useState('');
  const [showHelp, setShowHelp] = useState(true);
  const [systemUser, setSystemUser] = useState('suraj');
  const [isGuest, setIsGuest] = useState(true);
  const [mailState, setMailState] = useState<{ step: 'none' | 'name' | 'email' | 'subject' | 'body' | 'sending', name: string, email: string, subject: string }>({ step: 'none', name: '', email: '', subject: '' });
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get uptime (time since page loaded)
  const [uptime, setUptime] = useState('0m 0s');
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      const m = Math.floor(diff / 60);
      const s = diff % 60;
      setUptime(`${m}m ${s.toString().padStart(2, '0')}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to bottom when history or section changes
  useEffect(() => {
    setTimeout(() => {
      contentRef.current?.scrollTo({ top: contentRef.current.scrollHeight, behavior: 'smooth' });
    }, 100);
  }, [history, activeSection]);

  // Handle ghost text suggestions
  useEffect(() => {
    if (mailState.step !== 'none') {
      setSuggestion('');
      return;
    }

    const input = cmdInput.toLowerCase();
    if (!input) {
      setSuggestion('');
      return;
    }

    const allCmds = Object.keys(COMMAND_MAP);

    // Handle cd suggestions
    if (input.startsWith('cd ')) {
      const arg = input.slice(3);
      if (!arg) {
        setSuggestion('');
        return;
      }
      // Only suggest sections/dirs for cd
      const match = allCmds.find((c) =>
        c.startsWith(arg) &&
        SECTIONS.includes(COMMAND_MAP[c] as any)
      );
      setSuggestion(match ? `cd ${match}` : '');
      return;
    }

    const match = allCmds.find((c) => c.startsWith(input));
    setSuggestion(match || '');
  }, [cmdInput, mailState.step]);

  // Focus input when clicking anywhere on the terminal
  const handleContainerClick = useCallback(() => {
    // If user is selecting text, don't force focus to input
    const selection = window.getSelection();
    if (selection && selection.toString() !== '') return;
    if (mailState.step !== 'sending') {
      inputRef.current?.focus();
    }
  }, [mailState.step]);

  // Simple Levenshtein distance for fuzzy matching
  const levenshtein = (a: string, b: string): number => {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
        );
      }
    }
    return matrix[b.length][a.length];
  };

  const findSuggestions = (input: string): string[] => {
    const allCmds = Object.keys(COMMAND_MAP);
    return allCmds
      .map((cmd) => ({ cmd, dist: levenshtein(input, cmd) }))
      .filter(({ dist }) => dist <= 3)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 3)
      .map(({ cmd }) => cmd);
  };

  // Inline section content renderer (no typewriter, instant)
  const renderSectionInline = (section: Section): ReactNode => {
    const renderers: Record<Section, () => ReactNode> = {
      HOME: () => (
        <div className="mt-2 space-y-2">
          <pre className="text-xs sm:text-sm leading-tight overflow-x-auto" style={{ color: '#33ff33' }}>{ASCII_NAME}</pre>
          <p style={{ color: '#c0c0c0' }}>
            Full Stack Engineer building AI-powered applications.<br />
            Specialized in real-time systems with LangChain, LangGraph, and scalable backend architectures.
          </p>
        </div>
      ),
      SKILLS: () => (
        <div className="mt-2 space-y-3">
          {SKILLS_DATA.map((group) => (
            <div key={group.dir}>
              <span style={{ color: '#00daf8' }} className="font-bold">drwxr-xr-x {'  '} {group.dir}</span>
              <div className="ml-4 mt-1">{group.items.map((item) => <div key={item} style={{ color: '#c0c0c0' }}>-rw-r--r-- {'  '} {item}</div>)}</div>
            </div>
          ))}
        </div>
      ),
      EXPERIENCE: () => (
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-3"><span style={{ color: '#33ff33' }}>●</span><span style={{ color: '#e0e0e0' }} className="font-bold">Full Stack Engineer — Intern</span></div>
          <div className="ml-6"><span style={{ color: '#00daf8' }}>@ Careerboat.ai</span><span style={{ color: '#666' }}> {'  '} Dec 2025 — Present</span></div>
          <div className="ml-6 mt-2 space-y-3 md:space-y-1 text-sm md:text-justify pr-4 sm:pr-8" style={{ color: '#aaa' }}>
            <p>• Built an AI-powered interview system that generates context-aware questions using LangChain and LangGraph, dynamically adapting based on candidate resumes, selected skills, and previous responses to simulate realistic interview scenarios.</p>
            <p>• Designed stateful LLM workflows using LangGraph with MongoDB checkpointers, implementing dynamic context summarization to manage long conversations and significantly reduce token usage while preserving relevant context.</p>
            <p>• Developed a real-time voice interaction pipeline integrating Google Cloud TTS, Server-Sent Events (SSE), and AWS S3 to enable low-latency, token-by-token audio streaming for interactive interviews.</p>
            <p>• Implemented a production-grade payment system using Razorpay, supporting subscriptions, one-time payments, coupon logic, and webhook-based backend validation for secure transaction handling.</p>
          </div>
        </div>
      ),
      PROJECTS: () => (
        <div className="mt-2 space-y-4">
          {PROJECTS_DATA.map((proj) => (
            <div key={proj.name} className="border-l-2 pl-4" style={{ borderColor: '#1a3a1a' }}>
              <div className="flex items-center gap-2 flex-wrap">
                <span style={{ color: '#33ff33' }} className="font-bold">{proj.name}/</span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono uppercase" style={{ background: '#0a2a0a', color: '#33ff33', border: '1px solid #1a3a1a' }}>{proj.status}</span>
              </div>
              <div className="flex gap-4 mt-2 mb-3 text-xs">
                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#33ff33' }}>[▶ demo]</a>
                <a href={proj.source} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>[⌥ source]</a>
              </div>
              <div className="mt-2 space-y-3 md:space-y-1">
                {proj.bullets.map((bullet, i) => (
                  <p key={i} className="text-sm md:text-justify" style={{ color: '#aaa' }}>
                    <span style={{ color: '#33ff33' }}>▹</span> {bullet}
                  </p>
                ))}
              </div>
              <div className="mt-4 mb-2 text-[11px] uppercase tracking-wider font-bold" style={{ color: '#666' }}>Technology Stack:</div>
              <div className="flex flex-wrap gap-2 mt-3">{proj.stack.map((s) => <span key={s} className="text-[11px] px-2 py-0.5 rounded font-mono" style={{ background: '#0a1a2a', color: '#00daf8', border: '1px solid #0a2a3a' }}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      ),
      CERTS: () => (
        <div className="mt-2 space-y-2">
          {CERTS_DATA.map((cert) => (
            <div key={cert.name} className="flex items-start gap-3">
              <span style={{ color: '#33ff33' }}>✓</span>
              <div><a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold" style={{ color: '#e0e0e0' }}>{cert.name}</a><span style={{ color: '#666' }}> — {cert.issuer} ({cert.year})</span></div>
            </div>
          ))}
        </div>
      ),
      CONTACT: () => (
        <pre className="mt-2 text-sm" style={{ color: '#c0c0c0' }}>
          {`{
  "email": "`}<a href="mailto:surajpatel9390@gmail.com" className="hover:underline" style={{ color: '#00daf8' }}>surajpatel9390@gmail.com</a>{`",
  "phone": "`}<a href="tel:+919260923895" className="hover:underline" style={{ color: '#00daf8' }}>+91 9260923895</a>{`",
  "github": "`}<a href="https://github.com/SurajPatel04" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>github.com/SurajPatel04</a>{`",
  "linkedin": "`}<a href="https://linkedin.com/in/suraj-patel-9201b2381" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>linkedin.com/in/suraj-patel</a>{`",
  "resume": "`}<a href={resumePdf} download="Suraj_Patel_Resume.pdf" className="hover:underline" style={{ color: '#33ff33' }}>[↓ download_resume.pdf]</a>{`"
}`}
        </pre>
      ),
    };
    return renderers[section]();
  };

  // Process a typed command
  const processCommand = useCallback((raw: string) => {
    const trimmed = raw.trim().toLowerCase();
    if (!trimmed) return;

    const args = raw.trim().split(/\s+/);
    const baseCommand = args[0].toLowerCase();

    // Handle parametrized commands
    let cmd = trimmed;
    if (baseCommand === 'cd') {
      const arg = args[1] ? args[1].replace(/\/$/, '').toLowerCase() : '';
      if (!arg || arg === '~' || arg === '..' || arg === '.') {
        cmd = 'home';
      } else {
        cmd = arg;
      }
    } else if (baseCommand === 'su' || baseCommand === 'login') {
      cmd = 'su';
    }

    const newId = historyId + 1;
    setHistoryId(newId);

    const mapped = COMMAND_MAP[cmd];

    if (!mapped) {
      // Unknown command — find suggestions
      const suggestions = findSuggestions(cmd);
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div>
              <span style={{ color: '#ff5555' }}>command not found: {cmd}</span>
              {suggestions.length > 0 ? (
                <div className="mt-1">
                  <span style={{ color: '#888' }}>Did you mean: </span>
                  {suggestions.map((s, i) => (
                    <span key={s}>
                      <button
                        onClick={(e) => { e.stopPropagation(); processCommand(s); }}
                        className="hover:underline cursor-pointer"
                        style={{ color: '#33ff33', background: 'none', border: 'none', font: 'inherit', padding: 0 }}
                      >
                        {s}
                      </button>
                      {i < suggestions.length - 1 && <span style={{ color: '#555' }}>, </span>}
                    </span>
                  ))}
                  <span style={{ color: '#555' }}>?</span>
                </div>
              ) : (
                <div className="mt-1">
                  <span style={{ color: '#888' }}>Type </span>
                  <span style={{ color: '#33ff33' }}>help</span>
                  <span style={{ color: '#888' }}> for available commands</span>
                </div>
              )}
            </div>
          ),
          isError: true,
        },
      ]);
      return;
    }

    if (mapped === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <pre className="text-sm" style={{ color: '#c0c0c0' }}>
              {HELP_TEXT}
            </pre>
          ),
        },
      ]);
      return;
    }

    if (mapped === 'clear') {
      setHistory([]);
      return;
    }

    if (mapped === 'exit') {
      toggleTheme();
      return;
    }

    if (mapped === 'su') {
      const targetUser = args[1];
      if (!targetUser) {
        setHistory((prev) => [
          ...prev,
          { id: newId, command: raw, output: <span style={{ color: '#ff5555' }}>Usage: su &lt;username&gt;</span> },
        ]);
        return;
      }
      setSystemUser(targetUser.toLowerCase());
      setIsGuest(false);
      setHistory((prev) => [
        ...prev,
        { id: newId, command: raw, output: <div className="mt-1"><span style={{ color: '#33ff33' }}>Authentication granted. Changed user to {targetUser.toLowerCase()}.</span></div> },
      ]);
      return;
    }

    if (mapped === 'resume') {
      // Trigger download
      const link = document.createElement('a');
      link.href = resumePdf;
      link.download = 'Suraj_Patel_Resume.pdf';
      link.click();
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: <span style={{ color: '#33ff33' }}>↓ Downloading Suraj_Patel_Resume.pdf...</span>,
        },
      ]);
      return;
    }

    if (mapped === 'github') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div className="mt-1 space-y-1">
              <div>
                <span style={{ color: '#888' }}>GITHUB: </span>
                <a href="https://github.com/SurajPatel04" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>
                  https://github.com/SurajPatel04
                </a>
              </div>
              <span className="text-xs" style={{ color: '#555' }}>Click to open in browser</span>
            </div>
          ),
        },
      ]);
      return;
    }


    if (mapped === 'email') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div className="mt-1 text-xs" style={{ color: '#888' }}>
              Interactive email process started. Type 'exit'<span className="hidden sm:inline"> or press Ctrl+C</span> to abort.
            </div>
          ),
        },
      ]);
      setMailState({ step: 'name', name: '', email: '', subject: '' });
      return;
    }

    if (mapped === 'linkedin') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div className="mt-1 space-y-1">
              <div>
                <span style={{ color: '#888' }}>LINKEDIN: </span>
                <a href="https://linkedin.com/in/suraj-patel-9201b2381" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#00daf8' }}>
                  linkedin.com/in/suraj-patel-9201b2381
                </a>
              </div>
              <span className="text-xs" style={{ color: '#555' }}>Click to open in browser</span>
            </div>
          ),
        },
      ]);
      return;
    }


    if (mapped === 'phone') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div className="mt-1 space-y-1">
              <div>
                <span style={{ color: '#888' }}>PHONE: </span>
                <a href="tel:+919260923895" className="hover:underline" style={{ color: '#00daf8' }}>
                  +91 9260923895
                </a>
              </div>
            </div>
          ),
        },
      ]);
      return;
    }

    if (mapped === 'ls') {
      setHistory((prev) => [
        ...prev,
        {
          id: newId,
          command: raw,
          output: (
            <div className="flex flex-wrap gap-x-10 gap-y-2 mt-2 font-mono">
              {['home/', 'skills/', 'experience/', 'projects/', 'certs/', 'contact/', 'resume.pdf', 'banner.txt'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span style={{ color: item.endsWith('/') ? '#00daf8' : '#e0e0e0' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          ),
        },
      ]);
      return;
    }

    // It's a section navigation command — render content inline only
    setHistory((prev) => [
      ...prev,
      {
        id: newId,
        command: raw,
        output: (
          <div>
            <span className="text-xs" style={{ color: '#555' }}>→ Loaded module: {mapped}</span>
            {renderSectionInline(mapped)}
          </div>
        ),
      },
    ]);
  }, [historyId, toggleTheme]);

  // Handle form submit
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (mailState.step !== 'none') {
        const input = cmdInput;
        const newId = historyId + 1;
        setHistoryId(newId);

        const currentStep = mailState.step;
        let promptLabel = '';
        if (currentStep === 'name') promptLabel = !isGuest ? `Name (press Enter for '${systemUser}'): ` : 'Name: ';
        else if (currentStep === 'email') promptLabel = 'Email: ';
        else if (currentStep === 'subject') promptLabel = 'Subject (optional): ';
        else if (currentStep === 'body') promptLabel = 'Message: ';

        // Add to history
        setHistory((prev) => [
          ...prev,
          {
            id: newId,
            command: input,
            output: null,
            customPrompt: <span style={{ color: '#00daf8' }}>{promptLabel}</span>,
          },
        ]);

        if (input.trim().toLowerCase() === 'exit') {
          setHistory((prev) => {
            const newHistory = [...prev];
            const lastIdx = newHistory.length - 1;
            newHistory[lastIdx] = {
              ...newHistory[lastIdx],
              output: <div className="mt-1 mb-3"><span style={{ color: '#ff5555' }}>Mail aborted.</span></div>,
            };
            return newHistory;
          });
          setMailState({ step: 'none', name: '', email: '', subject: '' });
          setCmdInput('');
          return;
        }

        if (currentStep === 'name') {
          const nameInput = input.trim();
          if (!nameInput) {
            if (!isGuest) {
              setMailState({ ...mailState, step: 'email', name: systemUser });
              setCmdInput('');
              return;
            }
            setHistory(prev => {
              const newHistory = [...prev];
              const lastIdx = newHistory.length - 1;
              newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1"><span style={{ color: '#ff5555' }}>error: name is required.</span></div> };
              return newHistory;
            });
            setCmdInput(''); return;
          }
          setMailState({ ...mailState, step: 'email', name: nameInput });
        } else if (currentStep === 'email') {
          const emailInput = input.trim();
          if (!emailInput) {
            setHistory(prev => {
              const newHistory = [...prev];
              const lastIdx = newHistory.length - 1;
              newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1"><span style={{ color: '#ff5555' }}>error: email is required.</span></div> };
              return newHistory;
            });
            setCmdInput(''); return;
          }
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput)) {
            setHistory(prev => {
              const newHistory = [...prev];
              const lastIdx = newHistory.length - 1;
              newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1"><span style={{ color: '#ff5555' }}>error: please enter a valid email address.</span></div> };
              return newHistory;
            });
            setCmdInput(''); return;
          }
          setMailState({ ...mailState, step: 'subject', email: emailInput });
        } else if (currentStep === 'subject') {
          setMailState({ ...mailState, step: 'body', subject: input.trim() });
        } else if (currentStep === 'body') {
          const body = input.trim();
          if (!body) {
            setHistory(prev => {
              const newHistory = [...prev];
              const lastIdx = newHistory.length - 1;
              newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1"><span style={{ color: '#ff5555' }}>error: message is required.</span></div> };
              return newHistory;
            });
            setCmdInput(''); return;
          }

          setHistory((prev) => {
            const newHistory = [...prev];
            const lastIdx = newHistory.length - 1;
            newHistory[lastIdx] = {
              ...newHistory[lastIdx],
              output: <div className="mt-1"><SendingAnimation /></div>,
            };
            return newHistory;
          });

          setMailState({ ...mailState, step: 'sending' });

          const formData = new FormData();
          formData.append('name', mailState.name || 'Anonymous');
          formData.append('email', mailState.email || 'no-email@provided.com');
          formData.append('_subject', mailState.subject || "New Portfolio Contact Message!");
          formData.append('_autoresponse', "Thank you for reaching out! I have received your message and will get back to you as soon as possible. - Suraj Patel");
          formData.append('_captcha', "false");
          formData.append('message', body);

          fetch("https://formsubmit.co/ajax/3ff67b6fefbf366175f9d537ac575e25", {
            method: "POST",
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          }).then(res => res.json())
            .then(data => {
              setHistory((prev) => {
                const newHistory = [...prev];
                const lastIdx = newHistory.length - 1;
                if (data.success) {
                  newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1 mb-3"><span style={{ color: '#33ff33' }}>Message Sent Successfully!</span></div> };
                } else {
                  newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1 mb-3"><span style={{ color: '#ff5555' }}>Error sending message. Please try again.</span></div> };
                }
                return newHistory;
              });
              setMailState({ step: 'none', name: '', email: '', subject: '' });
            }).catch(() => {
              setHistory((prev) => {
                const newHistory = [...prev];
                const lastIdx = newHistory.length - 1;
                newHistory[lastIdx] = { ...newHistory[lastIdx], output: <div className="mt-1 mb-3"><span style={{ color: '#ff5555' }}>Error sending message. Please try again.</span></div> };
                return newHistory;
              });
              setMailState({ step: 'none', name: '', email: '', subject: '' });
            });
        }

        setCmdInput('');
        setHistoryPointer(-1);
        return;
      }

      const input = cmdInput.trim();
      if (input) {
        setCommandHistory((prev) => [...prev, input]);
      }
      processCommand(cmdInput);
      setCmdInput('');
      setHistoryPointer(-1);
    },
    [cmdInput, processCommand, mailState, historyId]
  );

  // Handle Tab autocomplete and ArrowRight to accept suggestion
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'c') {
        const selection = window.getSelection();
        if (selection && selection.toString() !== '') return;
        e.preventDefault();

        const inputStr = cmdInput + '^C';
        const newId = historyId + 1;
        setHistoryId(newId);

        if (mailState.step !== 'none') {
          let promptLabel = '';
          const currentStep = mailState.step;
          if (currentStep === 'name') promptLabel = 'Name: ';
          else if (currentStep === 'email') promptLabel = 'Email: ';
          else if (currentStep === 'subject') promptLabel = 'Subject (optional): ';
          else if (currentStep === 'body') promptLabel = 'Message: ';

          setHistory((prev) => [
            ...prev,
            {
              id: newId,
              command: inputStr,
              output: <div className="mt-1 mb-3"><span style={{ color: '#ff5555' }}>Mail aborted by user.</span></div>,
              customPrompt: <span style={{ color: '#00daf8' }}>{promptLabel}</span>,
            },
          ]);
          setMailState({ step: 'none', name: '', email: '', subject: '' });
        } else {
          setHistory((prev) => [
            ...prev,
            {
              id: newId,
              command: inputStr,
              output: null,
            },
          ]);
        }
        setCmdInput('');
        setSuggestion('');
        setHistoryPointer(-1);
        return;
      }

      const idx = SECTIONS.indexOf(activeSection);

      if (e.key === 'Tab' || e.key === 'ArrowRight') {
        if (suggestion && cmdInput.toLowerCase() !== suggestion) {
          e.preventDefault();
          setCmdInput(suggestion);
          return;
        }
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveSection(SECTIONS[(idx + 1) % SECTIONS.length]);
        setHistory([]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveSection(SECTIONS[(idx - 1 + SECTIONS.length) % SECTIONS.length]);
        setHistory([]);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length === 0) return;

        const newPointer = historyPointer === -1
          ? commandHistory.length - 1
          : Math.max(0, historyPointer - 1);

        setHistoryPointer(newPointer);
        setCmdInput(commandHistory[newPointer]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyPointer === -1) return;

        const newPointer = historyPointer + 1;
        if (newPointer >= commandHistory.length) {
          setHistoryPointer(-1);
          setCmdInput('');
        } else {
          setHistoryPointer(newPointer);
          setCmdInput(commandHistory[newPointer]);
        }
      }
    },
    [suggestion, cmdInput, commandHistory, historyPointer, activeSection, mailState, historyId]
  );

  // Keyboard nav (arrows for section tabs, escape to exit)
  const handleKeyNav = useCallback(
    (e: KeyboardEvent) => {
      // Don't intercept if user is typing in the input
      if (document.activeElement === inputRef.current) {
        if (e.key === 'Escape') {
          toggleTheme();
        }
        return;
      }

      const idx = SECTIONS.indexOf(activeSection);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveSection(SECTIONS[(idx + 1) % SECTIONS.length]);
        setHistory([]);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSection(SECTIONS[(idx - 1 + SECTIONS.length) % SECTIONS.length]);
        setHistory([]);
      } else if (e.key === 'Escape') {
        toggleTheme();
      }
    },
    [activeSection, toggleTheme]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [handleKeyNav]);

  const SectionComponent = SECTION_CONTENT[activeSection];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
      style={{
        background: '#0a0e14',
        fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
        fontSize: '14px',
      }}
      onClick={handleContainerClick}
    >
      {/* CRT Scanline Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[110]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Top Status Bar  */}
      <div
        className="flex flex-wrap items-center justify-between px-6 py-3 text-xs tracking-wider shrink-0"
        style={{ background: '#060a10', borderBottom: '1px solid #1a2a1a' }}
      >
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-1">
          <span>
            <span style={{ color: '#555' }}>SYS.NAME&nbsp;&nbsp;: </span>
            <span style={{ color: '#e0e0e0' }} className="font-bold">SURAJ_OS v1.0.0</span>
          </span>
          <span>
            <span style={{ color: '#555' }}>SYS.AUTH&nbsp;&nbsp;: </span>
            <span style={{ color: '#33ff33' }} className="font-bold">
              {isGuest ? 'GUEST_ACCESS_GRANTED' : `${systemUser.toUpperCase()}_ACCESS_GRANTED`}
            </span>
          </span>
        </div>
        <div className="flex flex-row sm:gap-8 gap-4 sm:text-right mt-2 sm:mt-0">
          <span>
            <span style={{ color: '#555' }}>UPTIME&nbsp;&nbsp;&nbsp;&nbsp;: </span>
            <span style={{ color: '#e0e0e0' }}>{uptime}</span>
          </span>
          <span>
            <span style={{ color: '#555' }}>&nbsp;&nbsp;STATUS&nbsp;: </span>
            <span
              className="font-bold"
              style={{
                color: '#0a0e14',
                background: '#33ff33',
                padding: '1px 6px',
                borderRadius: '2px',
              }}
            >
              200
            </span>
          </span>
        </div>
      </div>

      {/* Main Content  */}
      <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
        {/* Render active section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <SectionComponent />
          </motion.div>
        </AnimatePresence>

        {/* Command History (past typed commands + outputs)  */}
        {history.map((entry) => (
          <div key={entry.id} className={entry.customPrompt !== undefined ? "mb-0" : "mb-3"}>
            {entry.customPrompt !== undefined ? (
              <div className="flex items-start flex-wrap whitespace-pre-wrap break-words">
                {entry.customPrompt}
                <span style={{ color: '#e0e0e0' }}>{entry.command}</span>
              </div>
            ) : (
              <Prompt user={systemUser}>
                <span style={{ color: '#e0e0e0' }}>{entry.command}</span>
              </Prompt>
            )}
            <div className="mt-1 ml-0">{entry.output}</div>
          </div>
        ))}

        {/* Interactive Command Input  */}
        {mailState.step !== 'sending' && (
          <form onSubmit={handleSubmit} className="flex items-center gap-0 flex-wrap">
            {mailState.step === 'none' ? (
              <>
                <span style={{ color: '#33ff33' }}>{systemUser}</span>
                <span style={{ color: '#888' }}>@</span>
                <span style={{ color: '#00daf8' }}>portfolio</span>
                <span style={{ color: '#888' }}>:~$ </span>
              </>
            ) : (
              <span style={{ color: '#00daf8' }}>
                {mailState.step === 'name' ? (!isGuest ? `Name (press Enter for '${systemUser}'): ` : 'Name: ') :
                  mailState.step === 'email' ? 'Email: ' :
                    mailState.step === 'subject' ? 'Subject (optional): ' : 'Message: '}
              </span>
            )}
            <div className="flex-1 relative flex items-center">
              {/* Ghost Text Suggestion */}
              {suggestion && (
                <span
                  className="absolute left-0 pointer-events-none flex items-center h-full"
                  style={{
                    color: '#444',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    whiteSpace: 'pre',
                  }}
                >
                  <span className="opacity-0">{cmdInput}</span>
                  <span>{suggestion.slice(cmdInput.length)}</span>
                  {suggestion.length > cmdInput.length && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="ml-4 px-1.5 py-0.5 rounded flex items-center gap-1 border border-[#333] bg-[#0c0c0c] text-[9px] text-[#666] font-mono leading-none"
                      style={{ marginTop: '1px' }}
                    >
                      TAB <span className="text-[10px]">⇥</span>
                    </motion.span>
                  )}
                </span>
              )}
              <input
                ref={inputRef}
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={!suggestion && mailState.step === 'none' ? "type a command (try: help)" : ""}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                className="w-full bg-transparent outline-none border-none relative z-10"
                style={{
                  color: '#e0e0e0',
                  caretColor: '#33ff33',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              />
            </div>
          </form>
        )}
      </div>

      {/* Bottom Navigation Bar  */}
      <div
        className="shrink-0 px-6 py-3 flex flex-col-reverse sm:flex-col relative bg-[#060a10]"
        style={{ borderTop: '1px solid #1a2a1a' }}
      >
        {/* Top Row: Navigation hint & Mobile Exit Button */}
        <div className="flex items-center justify-between w-full">
          <div className="text-[11px] flex items-center gap-2" style={{ color: '#444' }}>
            <button
              onClick={() => setShowHelp(!showHelp)}
              className="hover:text-primary transition-colors font-bold uppercase tracking-tighter mr-2 whitespace-nowrap"
              style={{ color: '#555' }}
            >
              <span className="sm:hidden">{showHelp ? '[ HIDE OPTIONS ]' : '[ SHOW OPTIONS ]'}</span>
              <span className="hidden sm:inline">{showHelp ? '[ HIDE TIPS ]' : '[ SHOW TIPS ]'}</span>
            </button>

            <AnimatePresence>
              {showHelp && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="hidden sm:flex items-center gap-2 overflow-hidden whitespace-nowrap"
                >
                  <span style={{ color: '#555' }}>root@suraj/nav &gt;</span>
                  <span>SELECT MODULE (← → arrows) | HISTORY (↑ ↓ arrows)</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="hidden sm:inline shrink-0 text-[11px]" style={{ color: '#444' }}>
            <span style={{ color: '#555' }}>ESC</span> to exit
          </span>

          {/* Mobile Exit Button (Hidden on sm screens) */}
          <button
            onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
            className="sm:hidden px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:opacity-80 shrink-0"
            style={{
              background: 'transparent',
              color: '#ff5555',
              border: '1px solid #3a1a1a',
              borderRadius: '4px',
            }}
          >
            EXIT_TERMINAL
          </button>
        </div>

        {/* Section tabs & Desktop Exit Button */}
        <AnimatePresence initial={false}>
          {(!isMobile || showHelp) && (
            <motion.div
              initial={isMobile ? { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 } : false}
              animate={{ opacity: 1, height: 'auto', marginTop: isMobile ? 0 : 8, marginBottom: isMobile ? 8 : 0 }}
              exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-wrap gap-2 overflow-hidden"
            >
              {SECTIONS.map((section, i) => {
                const isActive = section === activeSection;
                return (
                  <button
                    key={section}
                    onClick={(e) => { e.stopPropagation(); setActiveSection(section); setHistory([]); }}
                    className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
                    style={{
                      background: isActive ? '#33ff33' : 'transparent',
                      color: isActive ? '#0a0e14' : '#555',
                      border: `1px solid ${isActive ? '#33ff33' : '#1a2a1a'}`,
                      borderRadius: '4px',
                    }}
                  >
                    {`0${i + 1}._${section}`}
                  </button>
                );
              })}

              {/* Desktop Exit Button (Hidden on mobile) */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
                className="hidden sm:block ml-auto px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors hover:opacity-80 shrink-0"
                style={{
                  background: 'transparent',
                  color: '#ff5555',
                  border: '1px solid #3a1a1a',
                  borderRadius: '4px',
                }}
              >
                EXIT_TERMINAL
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
