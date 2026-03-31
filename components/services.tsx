const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="16" rx="2" stroke="#f5a623" strokeWidth="1.75" />
        <path d="M10 28h12M16 22v6" stroke="#f5a623" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M9 12l3 3-3 3" stroke="#f5a623" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 18h5" stroke="#f5a623" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Software a Medida',
    description:
      'Diseñamos y desarrollamos aplicaciones web y móviles adaptadas exactamente a los requerimientos de tu negocio, con arquitecturas limpias y escalables.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="20" height="12" rx="2" stroke="#f5a623" strokeWidth="1.75" />
        <circle cx="16" cy="16" r="2.5" stroke="#f5a623" strokeWidth="1.75" />
        <path d="M16 4v4M16 24v4M4 16H8M24 16h4" stroke="#f5a623" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="16" cy="4" r="1.5" fill="#f5a623" />
        <circle cx="16" cy="28" r="1.5" fill="#f5a623" />
        <circle cx="4" cy="16" r="1.5" fill="#f5a623" />
        <circle cx="28" cy="16" r="1.5" fill="#f5a623" />
      </svg>
    ),
    title: 'Soluciones IoT',
    description:
      'Diseñamos e implementamos sistemas IoT completos: desde dispositivos físicos hasta plataformas de monitoreo y control.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 24l8-8 4 4 8-12" stroke="#f5a623" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="24" r="2" stroke="#f5a623" strokeWidth="1.5" />
        <circle cx="14" cy="16" r="2" stroke="#f5a623" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="2" stroke="#f5a623" strokeWidth="1.5" />
        <circle cx="26" cy="12" r="2" stroke="#f5a623" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Prototipado y MVP tecnológico',
    description:
      'Desarrollamos prototipos funcionales combinando software y hardware para validar ideas rápidamente antes de escalar.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24 px-6 border-t border-[#1a2233]/8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6b3f2a]">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1a2233] text-balance">
            Lo que construimos
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-5 p-8 border border-[#1a2233]/10 rounded-xl hover:border-[#f5a623]/50 transition-colors"
            >
              <div>{service.icon}</div>
              <h3 className="text-[#6b3f2a] font-semibold text-lg leading-snug">
                {service.title}
              </h3>
              <p className="text-[#1a2233]/65 text-sm leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
