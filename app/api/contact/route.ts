import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nombre, email, mensaje } = await request.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Kiskasoft Web <onboarding@resend.dev>',
    to: 'ask@kiskasoft.com',
    replyTo: email,
    subject: `Nuevo contacto de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`,
  })

  if (error) {
    return NextResponse.json({ error: 'No se pudo enviar el mensaje.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
