export default function TechEcosystem() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl font-bold mb-16 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span> Tech Ecosystem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">code</span>
              <h3 className="font-headline text-xl font-bold">Languages</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> TypeScript</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Python</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> JavaScript</li>
            </ul>
          </div>
          {/* Frontend */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">layers</span>
              <h3 className="font-headline text-xl font-bold">Frontend</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> React / Next.js</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Tailwind CSS</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> HTML5 / CSS3</li>
            </ul>
          </div>
          {/* Backend */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">dns</span>
              <h3 className="font-headline text-xl font-bold">Backend</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Node.js / Express</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> FastAPI</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> REST APIs / WebSockets</li>
            </ul>
          </div>
          {/* Databases */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">database</span>
              <h3 className="font-headline text-xl font-bold">Databases</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> PostgreSQL</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> MongoDB</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Redis (Caching/Store)</li>
            </ul>
          </div>
          {/* AI/ML */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              <h3 className="font-headline text-xl font-bold">AI &amp; Agentic</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> LangChain / LangGraph</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> OpenAI / Anthropic APIs</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Vector DBs / RAG</li>
            </ul>
          </div>
          {/* DevOps */}
          <div className="bg-surface-container p-8 rounded-full border border-outline-variant/10 hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <h3 className="font-headline text-xl font-bold">DevOps &amp; Cloud</h3>
            </div>
            <ul className="space-y-4 text-base font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> GCP (Google Cloud)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Docker / Containers</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> GitHub Actions CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
