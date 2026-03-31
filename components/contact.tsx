'use client'

import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setStatus('sent')
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-white py-24 px-6 border-t border-[#1a2233]/8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: copy */}
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6b3f2a]">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2233] text-balance">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-[#1a2233]/65 text-base leading-relaxed">
            Cuéntanos sobre tu desafío de ingeniería. Respondemos en menos de 24 horas.
          </p>
          <a
            href="mailto:ask@kiskasoft.com"
            className="inline-flex items-center gap-2 text-[#1a2233] font-semibold text-base hover:text-[#6b3f2a] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="#1a2233" strokeWidth="1.5" />
              <path d="M1.5 5.5l7.5 5 7.5-5" stroke="#1a2233" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            ask@kiskasoft.com
          </a>
        </div>

        {/* Right: form */}
        {status === 'sent' ? (
          <div className="flex flex-col gap-4 p-10 border border-[#f5a623]/40 rounded-xl bg-[#f5a623]/5">
            <p className="text-[#1a2233] font-semibold text-lg">Mensaje enviado.</p>
            <p className="text-[#1a2233]/65 text-sm leading-relaxed">
              Gracias por escribirnos. Te contactaremos pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nombre" className="text-[#1a2233] text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Tu nombre"
                className="border border-[#1a2233]/20 rounded-lg px-4 py-3 text-sm text-[#1a2233] placeholder:text-[#1a2233]/35 focus:outline-none focus:border-[#f5a623] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[#1a2233] text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="border border-[#1a2233]/20 rounded-lg px-4 py-3 text-sm text-[#1a2233] placeholder:text-[#1a2233]/35 focus:outline-none focus:border-[#f5a623] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensaje" className="text-[#1a2233] text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                required
                placeholder="Describe tu proyecto o consulta..."
                className="border border-[#1a2233]/20 rounded-lg px-4 py-3 text-sm text-[#1a2233] placeholder:text-[#1a2233]/35 focus:outline-none focus:border-[#f5a623] transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-600">
                Hubo un error al enviar. Por favor intenta de nuevo.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="self-start bg-[#f5a623] text-[#1a2233] font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-[#e09710] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5a623] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
