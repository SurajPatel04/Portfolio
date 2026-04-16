import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section className="py-24 bg-surface" id="experience">
      <motion.div
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-[30px] md:text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-lg md:text-xl">02.</span> Professional Journey
        </h2>
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="relative group bg-surface-container-low border border-outline-variant/20 rounded-full p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#0AB4D6]/50 hover:shadow-[0_10px_40px_-15px_rgba(10,180,214,0.3)] transition-all duration-500 overflow-hidden">

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 border-b border-outline-variant/10 pb-6">
                <div>
                  <h3 className="font-headline text-xl sm:text-3xl font-bold text-on-surface">Full Stack Engineer Intern</h3>
                  <div className="text-[#D0ADC5] font-headline font-semibold text-base sm:text-lg mt-1">@ Careerboat.ai</div>
                </div>
                <div className="shrink-0">
                  <span className="font-headline font-semibold text-[13px] sm:text-[14px] leading-[20px] text-[#00DAF8] tracking-wide">
                    Dec 2025 – Present
                  </span>
                </div>
              </div>

              {/* Body / Bullets */}
              <ul className="space-y-4 text-on-surface-variant font-body text-sm sm:text-base mt-2">
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-[6px] text-xs shrink-0">•</span>
                  <span className="leading-relaxed md:text-justify w-full">Built an AI-powered interview system that generates context-aware questions using LangChain and LangGraph, dynamically adapting based on candidate resumes, selected skills, and previous responses to simulate realistic interview scenarios.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-[6px] text-xs shrink-0">•</span>
                  <span className="leading-relaxed md:text-justify w-full">Designed stateful LLM workflows using LangGraph with MongoDB checkpointers, implementing dynamic context summarization to manage long conversations and significantly reduce token usage while preserving relevant context.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-[6px] text-xs shrink-0">•</span>
                  <span className="leading-relaxed md:text-justify w-full">Developed a real-time voice interaction pipeline integrating Google Cloud TTS, Server-Sent Events (SSE), and AWS S3 to enable low-latency, token-by-token audio streaming for interactive interviews.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-primary mt-[6px] text-xs shrink-0">•</span>
                  <span className="leading-relaxed md:text-justify w-full">Implemented a production-grade payment system using Razorpay, supporting subscriptions, one-time payments, coupon logic, and webhook-based backend validation for secure transaction handling.</span>
                </li>
              </ul>

              {/* Tech Stack Chips */}
              <div className="mt-4 pt-6 border-t border-outline-variant/10">
                <div className="flex flex-wrap gap-2.5">
                  {['LangChain', 'LangGraph', 'MongoDB', 'Redis', 'GCP TTS', 'AWS S3', 'SSE', 'Razorpay', 'Node.js', "Express.js", 'React'].map((tech) => (
                    <span key={tech} className="bg-surface-container-high/60 hover:bg-surface-container-highest transition-colors duration-300 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold text-on-surface-variant/90 border border-outline-variant/10 shadow-sm cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
