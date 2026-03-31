import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-8">
        {/* Eyebrow */}
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6b3f2a] border border-[#6b3f2a]/30 px-3 py-1 rounded-full">
          Empresa de desarrollo tecnológico
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#1a2233] leading-tight text-balance">
          De la idea a la solución: tecnología a tu{' '}
          <span className="relative inline-block">
            <span className="relative z-10">medida</span>
            <span
              className="absolute bottom-1 left-0 w-full h-3 bg-[#f5a623]/30 -z-0 rounded"
              aria-hidden="true"
            />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#1a2233]/65 text-lg md:text-xl leading-relaxed max-w-2xl text-pretty">
          Somos una empresa de desarrollo tecnológico integral. Ya sea que necesites una aplicación
          web, móvil (iOS y Android) o de escritorio (Mac, Windows o Linux), podemos ayudarte.
          Nuestro trabajo va más allá del software: también creamos soluciones IoT (Internet de las
          Cosas), todo con el firme propósito de satisfacer las necesidades específicas de nuestros
          clientes.
        </p>

        {/* CTA */}
        <a
          href="#contacto"
          className="inline-block bg-[#f5a623] text-[#1a2233] font-semibold text-base px-8 py-4 rounded-lg hover:bg-[#e09710] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623]"
        >
          Iniciar Proyecto
        </a>


      </div>
    </section>
  )
}
