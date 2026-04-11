import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';

const HeroAvatar3D = lazy(() => import('./HeroAvatar3D'));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow z-0"></div>
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl"></div>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-12 gap-8 items-center w-full">

        {/* Left — Text content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></span>
            <span className="text-xs font-label font-medium tracking-widest uppercase text-on-surface-variant">Available for Hire</span>
          </motion.div>

          <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-on-surface mb-6">
            Suraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Patel</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            Full Stack Engineer building AI-powered applications. Specialized in real-time systems with LangChain, LangGraph, and scalable backend architectures.
          </p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="bg-surface-container/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container transition-all active:scale-95"
              href="#contact"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right — 3D Avatar */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center"
          style={{ height: '520px' }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Subtle bg glow behind the 3D canvas */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/40 border-t-primary animate-spin"></div>
                </div>
              }
            >
              <HeroAvatar3D />
            </Suspense>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
