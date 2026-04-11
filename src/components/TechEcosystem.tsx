import { motion } from 'motion/react';
import { CodeXml, Layers, Server, Database, BrainCircuit, Terminal } from 'lucide-react';

const technologies = [
  {
    title: "Languages",
    icon: CodeXml,
    items: ["TypeScript", "Python", "JavaScript"]
  },
  {
    title: "Frontend",
    icon: Layers,
    items: ["React / Next.js", "Tailwind CSS", "HTML5 / CSS3"]
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js / Express", "FastAPI", "REST APIs / WebSockets"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis (Caching/Store)"]
  },
  {
    title: "AI & Agentic",
    icon: BrainCircuit,
    items: ["LangChain / LangGraph", "OpenAI / Anthropic APIs", "Vector DBs / RAG"]
  },
  {
    title: "DevOps & Cloud",
    icon: Terminal,
    items: ["GCP (Google Cloud)", "Docker / Containers", "GitHub Actions CI/CD"]
  }
];

export default function TechEcosystem() {
  return (
    <section className="py-24 bg-surface-container-low" id="tech">
      <motion.div 
        className="max-w-7xl mx-auto px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span> Tech Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="group relative overflow-hidden bg-surface-container p-8 rounded-[2rem] border border-outline-variant/10 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(0,218,248,0.3)] transition-all duration-300">
              {/* Elegant Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tech.icon className="text-primary w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">{tech.title}</h3>
                </div>
                <ul className="space-y-4 text-base font-medium">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface-variant group-hover:text-on-surface transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,218,248,0.6)] group-hover:bg-secondary group-hover:shadow-[0_0_8px_rgba(208,188,255,0.6)] transition-all duration-300"></span> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
