import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'VolteApp',
    description:
      'Aplicación enfocada en el sector salud para la prevención del desarrollo de úlceras por presión en pacientes hospitalizados.',
    tags: ['Software a Medida', 'Aplicación Web', 'Prevención Médica'],
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8i6cmh8i6cmh8i6c.png-33BKNSxji1T3rT7gj7dRZID0Chu5vE.jpeg',
  },
  {
    title: 'Psycodatapp',
    description:
      'Plataforma para la gestión eficiente y segura de historias clínicas, diseñada específicamente para psicólogos independientes.',
    tags: ['Software a Medida', 'Web App', 'Gestión de Datos'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Portfolio() {
  return (
    <section
      id="proyectos"
      className="bg-white py-24 px-6 border-t border-[#1a2233]/8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6b3f2a]">
            Portafolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1a2233] text-balance">
            Lo que hemos construido
          </h2>
          <p className="mt-4 text-[#1a2233]/65 text-lg max-w-2xl leading-relaxed">
            Proyectos que reflejan nuestro compromiso con la innovación y la
            excelencia técnica.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col border border-[#1a2233]/10 rounded-xl overflow-hidden hover:border-[#f5a623]/50 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] bg-[#1a2233]/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3 className="text-xl font-bold text-[#1a2233]">
                  {project.title}
                </h3>
                <p className="text-[#1a2233]/65 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[#f5a623]/10 text-[#6b3f2a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a2233] hover:text-[#f5a623] transition-colors mt-2 w-fit"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
