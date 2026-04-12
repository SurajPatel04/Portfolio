import { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import surajPhoto from '../assets/Suraj Patel New.png';

const HeroAvatar3D = lazy(() => import('./HeroAvatar3D'));

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-0 lg:pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow z-0"></div>
      <div className="absolute top-0 lg:top-1/4 right-0 w-full lg:w-1/2 h-1/2 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent blur-3xl"></div>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8 items-center justify-center w-full">

        {/* Mobile Profile Image (Visible only on small screens) */}
        <motion.div
           className="lg:hidden w-full flex justify-center mb-1 order-1"
           initial={{ opacity: 0, scale: 0.85 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full p-[2px] bg-gradient-to-tr from-primary to-secondary shadow-[0_0_25px_rgba(0,218,248,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface-container">
              <img 
                src={surajPhoto} 
                alt="Suraj Patel" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content (Mobile: Bottom, Desktop: Left) */}
        <motion.div
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Available for hire pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-3 lg:mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></span>
            <span className="text-[10px] lg:text-xs font-label font-medium tracking-widest uppercase text-on-surface-variant">Available for Hire</span>
          </motion.div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-on-surface mb-4 lg:mb-6 leading-tight lg:leading-none">
            Suraj <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Patel</span>
          </h1>

          {/* Description */}
          <p className="font-body text-sm sm:text-base md:text-2xl text-on-surface-variant max-w-[340px] sm:max-w-md lg:max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0 mb-8 lg:mb-10 text-balance lg:text-wrap">
            Full Stack Engineer building AI-powered applications. Specialized in real-time systems with LangChain, LangGraph, and scalable backend architectures.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="grid grid-cols-2 gap-3 lg:gap-4 w-full sm:w-auto px-4 sm:px-0 mx-auto lg:mx-0 max-w-[380px] sm:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              className="w-full flex items-center justify-center text-center bg-gradient-to-r from-primary to-secondary text-on-primary px-2 py-3 sm:px-6 lg:px-8 lg:py-4 rounded-xl font-headline font-bold text-sm sm:text-base lg:text-lg shadow-[0_0_20px_rgba(0,218,248,0.3)] hover:shadow-[0_0_30px_rgba(0,218,248,0.5)] transition-all active:scale-95 whitespace-nowrap"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="w-full flex items-center justify-center text-center bg-surface-container/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-2 py-3 sm:px-6 lg:px-8 lg:py-4 rounded-xl font-headline font-bold text-sm sm:text-base lg:text-lg hover:bg-surface-container transition-all active:scale-95 whitespace-nowrap"
              href="#contact"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Desktop 3D Avatar (Hidden on mobile) */}
        <motion.div
           className="hidden lg:flex lg:col-span-5 items-center justify-center order-1 lg:order-2 w-full h-[520px]"
           initial={{ opacity: 0, scale: 0.85 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.3, duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
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
