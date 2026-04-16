import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import fullStackImg from '../assets/FullStack.png';
import reactImg from '../assets/React.png';

// Inline external link icon to prevent any lucide-react export issues
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const certs = [
  {
    title: "Full Stack Developer Path",
    issuer: "Scrimba",
    year: "2025",
    img: fullStackImg,
    link: "https://scrimba.com/certificate-cert23wfboWopQ2SSv6pWzVHgSrmSF9gqPYtSWTLot5DwyAxWL1v",
    color: "secondary"
  },
  {
    title: "Learn React",
    issuer: "Scrimba",
    year: "2025",
    img: reactImg,
    link: "https://scrimba.com/certificate-cert24zAwPPowRQV2xfEN2ZiBrLXtw1vJ4YEgPtEU",
    color: "secondary"
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
      setCurrentIndex((prev) => Math.min(prev, Math.max(0, certs.length - (window.innerWidth < 1024 ? 1 : 2))));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(certs.length / itemsPerPage);
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
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      position: "relative",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const swipeConfidenceThreshold = 1500;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const visibleCerts = certs.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-24 bg-surface" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-headline text-[30px] md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-lg md:text-xl">04.</span> Certificates
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
              drag={itemsPerPage === 1 && totalPages > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, { offset, velocity }) => {
                if (itemsPerPage !== 1 || totalPages <= 1) return;
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold || offset.x < -75) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold || offset.x > 75) {
                  prevSlide();
                }
              }}
              className={`grid gap-6 sm:gap-8 ${itemsPerPage === 2 ? 'lg:grid-cols-2' : 'grid-cols-1'} w-full`}
            >
              {visibleCerts.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden bg-surface-container-low rounded-full flex flex-col border border-outline-variant/20 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 shadow-xl sm:shadow-2xl w-full h-full ${cert.color === 'primary'
                      ? 'hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,218,248,0.3)]'
                      : 'hover:border-secondary/50 hover:shadow-[0_10px_40px_-15px_rgba(208,188,255,0.3)]'
                    }`}
                >
                  {/* Elegant Inner Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 ${cert.color === 'primary'
                      ? 'from-primary/5 to-transparent'
                      : 'from-secondary/5 to-transparent'
                    }`} />

                  {/* Image Section */}
                  <div className="relative w-full overflow-hidden bg-surface-container/50 p-6 sm:p-8 flex items-center justify-center min-h-[180px] sm:min-h-[280px]">
                    {/* Subtle background glow behind the image */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 blur-[60px] sm:blur-[80px] opacity-30 pointer-events-none ${cert.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                      }`}></div>

                    <img
                      src={cert.img}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-auto object-contain relative z-10 rounded-lg sm:rounded-xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Bottom Content Section */}
                  <div className="p-6 sm:p-8 relative flex flex-col flex-grow border-t border-outline-variant/10 z-10 pt-4 sm:pt-6">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h3 className={`font-headline text-[19px] min-[400px]:text-xl sm:text-3xl font-bold text-on-surface transition-colors pr-4 truncate ${cert.color === 'primary' ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                        }`}>
                        {cert.title}
                      </h3>
                      <div className={`mt-1 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 opacity-70 group-hover:opacity-100 ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}>
                        <ExternalLinkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-auto pt-1 sm:pt-2">
                      <p className={`font-label text-[15px] sm:text-xl font-bold ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {cert.issuer}
                      </p>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                      <p className="text-on-surface-variant font-medium text-[13px] sm:text-lg">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </a>
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
    </section>
  );
}
