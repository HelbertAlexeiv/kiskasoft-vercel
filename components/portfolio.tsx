"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, X } from 'lucide-react'

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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleOpenModal = (projectTitle: string) => {
    setSelectedProject(projectTitle)
    setIsModalOpen(true)
  }

  const isPsycodatappModal = selectedProject === 'Psycodatapp'

  const handleContactRedirect = () => {
    handleCloseModal()

    requestAnimationFrame(() => {
      const contactSection = document.getElementById('contacto')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

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
                <button
                  type="button"
                  onClick={() => handleOpenModal(project.title)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a2233] hover:text-[#f5a623] transition-colors mt-2 w-fit"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 px-4 py-8"
          onClick={handleCloseModal}
          role="presentation"
        >
          <div
            className="relative mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-[#1a2233]/10"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="volteapp-modal-title"
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-[#1a2233]/70 hover:text-[#1a2233] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <h3
              id="volteapp-modal-title"
              className="text-3xl md:text-4xl font-bold text-[#1a2233]"
            >
              {selectedProject}
            </h3>

            {isPsycodatappModal ? (
              <div className="mt-8 space-y-4 text-[#1a2233]/80">
                <section>
                  <h4 className="text-lg font-semibold text-[#1a2233]">
                    Estado del proyecto
                  </h4>
                  <p className="mt-2 leading-relaxed">
                    Este proyecto aun esta en desarrollo. Pronto compartiremos
                    mas detalles sobre funcionalidades, arquitectura y avances.
                  </p>
                </section>
              </div>
            ) : (
              <>
                <div className="mt-8 space-y-6 text-[#1a2233]/80">
                  <section>
                    <h4 className="text-lg font-semibold text-[#1a2233]">El Desafio</h4>
                    <p className="mt-2 leading-relaxed">
                      Las ulceras por presion representan un riesgo clinico grave en
                      pacientes hospitalizados, donde un control preciso y constante
                      de cambios de postura es clave para prevenir complicaciones.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-[#1a2233]">
                      Nuestra Solucion
                    </h4>
                    <p className="mt-2 leading-relaxed">
                      Desarrollamos una aplicacion enfocada en el sector salud para
                      registrar, alertar y gestionar los cambios de postura,
                      mejorando la prevencion medica y facilitando el seguimiento
                      operativo del personal clinico.
                    </p>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-[#1a2233]">Stack Tecnologico</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['React + Vite', 'Django', 'Django REST Framework', 'PostgreSQL'].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-sm font-medium px-3 py-1 rounded-full bg-[#f5a623]/10 text-[#6b3f2a]"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </section>

                  <section>
                    <h4 className="text-lg font-semibold text-[#1a2233]">Galeria</h4>
                    <div className="mt-3 w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#1a2233]/8 border border-[#1a2233]/10">
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src="/VolteApp/FuncionamientoVolteApp.mp4" type="video/mp4" />
                        Tu navegador no soporta la reproduccion de video.
                      </video>
                    </div>
                  </section>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={handleContactRedirect}
                    className="inline-flex items-center justify-center rounded-lg bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#1a2233] hover:bg-[#e59514] transition-colors"
                  >
                    Tienes un desafio similar? Hablemos
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
