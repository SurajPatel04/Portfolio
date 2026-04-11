import { motion } from 'motion/react';
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

export default function Certifications() {
  const certs = [
    {
      title: "Full Stack Developer Path",
      issuer: "Scrimba",
      year: "2025",
      img: fullStackImg,
      link: "https://scrimba.com/certificate-cert23wfboWopQ2SSv6pWzVHgSrmSF9gqPYtSWTLot5DwyAxWL1v",
      color: "primary"
    },
    {
      title: "Advanced React Mastery",
      issuer: "Scrimba",
      year: "2025",
      img: reactImg,
      link: "https://scrimba.com/certificate-cert24zAwPPowRQV2xfEN2ZiBrLXtw1vJ4YEgPtEU",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 bg-surface" id="certifications">
      <motion.div
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">04.</span> Certificates
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-surface-container-low rounded-3xl flex flex-col border border-outline-variant/20 hover:-translate-y-2 transition-all duration-500 shadow-2xl ${
                cert.color === 'primary' 
                  ? 'hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,218,248,0.3)]' 
                  : 'hover:border-secondary/50 hover:shadow-[0_10px_40px_-15px_rgba(208,188,255,0.3)]'
              }`}
            >
              {/* Elegant Inner Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 ${
                cert.color === 'primary' 
                  ? 'from-primary/5 to-transparent' 
                  : 'from-secondary/5 to-transparent'
              }`} />

              {/* Image Section */}
              <div className="relative w-full overflow-hidden bg-surface-container/50 p-8 flex items-center justify-center min-h-[280px]">
                {/* Subtle background glow behind the image */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 blur-[80px] opacity-30 pointer-events-none ${
                  cert.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}></div>
                
                <img 
                  src={cert.img} 
                  alt={`${cert.title} Certificate`} 
                  className="w-full h-auto object-contain relative z-10 rounded-xl shadow-md transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Content Section */}
              <div className="p-8 relative flex flex-col flex-grow border-t border-outline-variant/10 z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`font-headline text-3xl font-bold text-on-surface transition-colors ${
                    cert.color === 'primary' ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                  }`}>
                    {cert.title}
                  </h3>
                  <div className={`mt-1 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 opacity-70 group-hover:opacity-100 ${
                    cert.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`}>
                    <ExternalLinkIcon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <p className={`font-label text-xl font-bold ${cert.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                    {cert.issuer}
                  </p>
                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
                  <p className="text-on-surface-variant font-medium text-lg">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
