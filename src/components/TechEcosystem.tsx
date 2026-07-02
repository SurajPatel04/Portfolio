import { motion, AnimatePresence } from 'motion/react';
import { CodeXml, Layers, Server, Database, BrainCircuit, Terminal, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { 
  SiTypescript, SiPython, SiJavascript, 
  SiReact, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiFastapi, 
  SiPostgresql, SiMongodb, SiRedis, 
  SiOpenai, SiGooglecloud, SiDocker, SiGithubactions 
} from 'react-icons/si';
import { FaNetworkWired, FaBrain, FaDatabase } from 'react-icons/fa';

const technologies = [
  {
    title: "Languages",
    icon: CodeXml,
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    title: "Frontend",
    icon: Layers,
    items: [
      { name: "React / Redux", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5 / CSS3", icon: SiHtml5 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js / Express", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs / WebSockets", icon: FaNetworkWired }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis (Caching/Store)", icon: SiRedis }
    ]
  },
  {
    title: "AI & Agentic",
    icon: BrainCircuit,
    items: [
      { name: "LangChain / LangGraph", icon: FaBrain },
      { name: "OpenAI / Anthropic APIs", icon: SiOpenai },
      { name: "Vector DBs / RAG", icon: FaDatabase }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    items: [
      { name: "GCP (Google Cloud)", icon: SiGooglecloud },
      { name: "Docker / Containers", icon: SiDocker },
      { name: "GitHub Actions CI/CD", icon: SiGithubactions }
    ]
  }
];

export default function TechEcosystem() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const isAllOpen = openItems.length === technologies.length;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenItems([]); 
    } else {
      setOpenItems(technologies.map((_, index) => index));
    }
  };

  const toggleItem = (index: number) => {
    if (openItems.includes(index) && openItems.length === 1) {
      setOpenItems([]);
    } else {
      setOpenItems([index]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="tech">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex justify-between items-baseline mb-10 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold flex items-center gap-3 md:gap-4">
            <span className="text-primary font-mono text-lg md:text-xl">01.</span> Skills
          </h2>
          <button
            onClick={toggleAll}
            className="md:hidden text-[13px] sm:text-sm font-medium text-primary/80 hover:text-primary transition-colors active:scale-95 focus:outline-none min-w-[90px] text-right"
          >
            {isAllOpen ? 'Hide All Skills' : 'Show All Skills'}
          </button>
        </div>
        
        {/* Desktop Layout: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative overflow-hidden bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(0,218,248,0.3)] transition-all duration-500">
              {/* Blur blob background on hover like Certifications */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[70px] opacity-0 group-hover:opacity-20 bg-primary pointer-events-none transition-opacity duration-700 z-0"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="text-primary w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{tech.title}</h3>
                </div>
                <ul className="space-y-4 text-base font-medium">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface-variant group-hover:text-on-surface transition-colors">
                      <item.icon className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout: Accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {technologies.map((tech, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={index}
                className={`bg-surface-container border transition-all duration-300 rounded-[28px] overflow-hidden ${isOpen ? 'border-primary/30 shadow-[0_8px_30px_-10px_rgba(0,218,248,0.2)] bg-surface-container-high' : 'border-outline-variant/10'
                  }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0 text-left">
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isOpen ? 'bg-primary/20' : 'bg-primary/5'}`}>
                      <tech.icon className={`w-4 h-4 transition-colors ${isOpen ? 'text-primary' : 'text-primary/60'}`} />
                    </div>
                    <div className="flex items-center gap-2 flex-1 min-w-0 pr-2">
                      <span className={`font-headline font-bold text-[15px] transition-colors tracking-tight shrink-0 ${isOpen ? 'text-primary' : 'text-on-surface'}`}>
                        {tech.title}
                      </span>

                      {!isOpen && (
                        <span className="text-[13px] text-on-surface-variant/60 truncate mt-[1.5px]">
                          <span className="text-primary/60 mr-1.5 hidden sm:inline">→</span>
                          <span className="text-primary/60 mr-1.5 sm:hidden">-</span>
                          {tech.items.map(i => i.name).join(' • ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronDown className={`shrink-0 w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant/70'}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="pb-4 pr-4 pl-[60px] pt-0 text-[13.5px] text-on-surface-variant/90 font-medium leading-relaxed">
                        <ul className="space-y-3 mt-1">
                          {tech.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2.5">
                              <item.icon className="w-4 h-4 text-primary/80 shrink-0" />
                              <span>{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
