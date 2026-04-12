import { Mail, Phone } from 'lucide-react';

// GitHub SVG icon (inline to avoid lucide-react version export issues)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// LinkedIn SVG icon (inline)
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/50 bg-[#131318]">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-headline text-sm tracking-wide text-slate-400">
          © 2026 Suraj Patel.
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a className="group inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all font-headline text-sm tracking-wide font-medium" href="https://linkedin.com/in/suraj-patel-9201b2381" target="_blank" rel="noreferrer">
            <LinkedinIcon className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors shrink-0" />
            <span className="leading-none">LinkedIn</span>
          </a>
          <a className="group inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all font-headline text-sm tracking-wide font-medium" href="https://github.com/SurajPatel04" target="_blank" rel="noreferrer">
            <GithubIcon className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors shrink-0" />
            <span className="leading-none">GitHub</span>
          </a>
          <a className="group inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all font-headline text-sm tracking-wide font-medium" href="mailto:surajpatel9390@gmail.com">
            <Mail className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors shrink-0" />
            <span className="leading-none">Email</span>
          </a>
          <a className="group inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-all font-headline text-sm tracking-wide font-medium" href="tel:+919260923895">
            <Phone className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors shrink-0" />
            <span className="leading-none">Phone</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00daf8]"></div>
          <span className="text-[10px] text-slate-500 uppercase tracking-tighter font-mono font-bold">System Online</span>
        </div>
      </div>
    </footer>
  );
}
