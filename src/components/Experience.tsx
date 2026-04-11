export default function Experience() {
  return (
    <section className="py-24 bg-surface" id="experience">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span> Professional Journey
        </h2>
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant bg-surface-container text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-8 rounded-full border border-outline-variant/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline text-2xl font-bold">Full Stack Engineer Intern</h3>
                <span className="text-primary font-label text-sm font-semibold">Dec 2025 – Present</span>
              </div>
              <div className="text-secondary font-headline font-medium mb-6">@ Careerboat.ai</div>
              <ul className="space-y-4 text-on-surface-variant font-body">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Built a high-performance Mock Interview Platform with real-time feedback.
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Developed AI Resume Analyzer &amp; AI Career Coach for personalized guidance.
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Architected LangGraph + MongoDB memory system for long-term agent context.
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Seamless Razorpay Integration for enterprise transactional flows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
