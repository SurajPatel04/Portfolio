export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/50 bg-[#131318]">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-['Inter'] text-sm tracking-wide text-slate-400">
          © 2024 Suraj Patel. Built with Neural Architect logic.
        </div>
        <div className="flex items-center gap-8">
          <a className="text-slate-400 hover:text-[#00daf8] transition-colors font-['Inter'] text-sm tracking-wide font-medium" href="https://linkedin.com/in/suraj-patel-9201b2381">LinkedIn</a>
          <a className="text-slate-400 hover:text-[#00daf8] transition-colors font-['Inter'] text-sm tracking-wide font-medium" href="https://github.com/SurajPatel04">GitHub</a>
          <a className="text-slate-400 hover:text-[#00daf8] transition-colors font-['Inter'] text-sm tracking-wide font-medium" href="mailto:surajpatel9390@gmail.com">Email</a>
          <a className="text-slate-400 hover:text-[#00daf8] transition-colors font-['Inter'] text-sm tracking-wide font-medium" href="tel:+919260923895">Phone</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00daf8] animate-pulse"></div>
          <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-mono font-bold">System Online</span>
        </div>
      </div>
    </footer>
  );
}
