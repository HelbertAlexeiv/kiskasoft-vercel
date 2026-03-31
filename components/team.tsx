import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'

const teamMembers = [
  {
    name: 'Helbert Alexeiv Correa Uribe',
    role: 'Backend & Cloud Engineer',
    image: '/miembro-1-2.jpg',
    skills: ['Machine Learning', 'IoT', 'Despliegue en la Nube'],
    linkedin: 'https://www.linkedin.com/in/helber-alexeiv-correa-uribe-68a4ba338/',
    github: 'https://github.com/HelbertAlexeiv',
  },
  {
    name: 'Julian Javier Lizcano Villarreal',
    role: 'Frontend & Mobile Developer',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miembro%202-XjIOFmgQ1PRx5G6Xjs5gLdEywjiuai.png',
    skills: ['Desarrollo Web', 'Apps Móviles', 'Desktop'],
    linkedin: 'https://www.linkedin.com/in/jjlizcano/',
    github: 'https://github.com/jjlizcano',
  },
  {
    name: 'Camilo Ivan Palacio Perez',
    role: 'QA Engineer & Software Developer',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miembro%203.png-VzqHLki3GKcnc5dYKEQo0zr4JKXq9l.jpeg',
    skills: ['Quality Assurance', 'Testing', 'Apps Móviles y Desktop'],
    linkedin: '#',
    github: 'https://github.com/Capape29',
  },
]

export default function Team() {
  return (
    <section
      id="equipo"
      className="bg-white py-24 px-6 border-t border-[#1a2233]/8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2233] mb-4 text-balance">
            El talento detrás de Kiskasoft
          </h2>
          <p className="text-[#1a2233]/60 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-pretty">
            Somos un equipo de estudiantes de Ingeniería de Sistemas unidos por la misión de
            transformar problemas complejos en soluciones eficientes. Combinamos el rigor analítico
            de nuestra formación con una profunda pasión por la innovación y la Inteligencia
            Artificial para construir tecnología robusta y escalable.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#fafafa] hover:bg-[#f5f5f5] transition-colors"
            >
              {/* Photo */}
              <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 ring-4 ring-[#f5a623]/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className={`object-cover ${member.name.includes('Helbert') ? 'object-[50%_24%] scale-110' : 'object-top'}`}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-[#1a2233] mb-1">{member.name}</h3>

              {/* Role */}
              <p className="text-[#f5a623] font-medium text-sm mb-4">{member.role}</p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-[#1a2233]/70 bg-[#1a2233]/5 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${member.name}`}
                  className="text-[#1a2233]/50 hover:text-[#f5a623] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${member.name}`}
                  className="text-[#1a2233]/50 hover:text-[#f5a623] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
