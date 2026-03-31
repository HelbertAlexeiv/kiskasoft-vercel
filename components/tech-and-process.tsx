const techStack = [
  'Flutter',
  'Arduino',
  'Raspberry Pi',
  'Python',
  'Django',
  'DRF',
  'PostgreSQL',
  'Docker',
]

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Entendemos tu problema, tus usuarios y tus restricciones antes de escribir una línea de código.',
  },
  {
    number: '02',
    title: 'Diseño & Prototipo',
    description: 'Diseñamos la arquitectura del sistema —hardware y software— y validamos con prototipos rápidos.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Construimos en sprints cortos, integrando firmware, backend y frontend de forma continua.',
  },
  {
    number: '04',
    title: 'Entrega & Soporte',
    description: 'Desplegamos el sistema, documentamos y ofrecemos soporte post-entrega para que escale contigo.',
  },
]

export default function TechAndProcess() {
  return (
    <>
      {/* Tech Stack */}
      <section id="tecnologias" className="bg-white py-24 px-6 border-t border-[#1a2233]/8">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6b3f2a]">
            Stack
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1a2233] mb-12 text-balance">
            Nuestro Stack Tecnológico
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[#1a2233] text-sm font-medium border border-[#1a2233]/15 px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="bg-white py-24 px-6 border-t border-[#1a2233]/8">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6b3f2a]">
            Proceso
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1a2233] mb-16 text-balance">
            Cómo trabajamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="text-3xl font-bold text-[#f5a623]">{step.number}</span>
                <h3 className="text-[#1a2233] font-semibold text-base">{step.title}</h3>
                <p className="text-[#1a2233]/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
