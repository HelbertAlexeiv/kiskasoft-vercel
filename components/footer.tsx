import { Mail, Globe, Facebook, Instagram, Youtube } from 'lucide-react'

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576486641957', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/kiskasoft/', icon: Instagram },
  { label: 'Youtube', href: 'https://www.youtube.com/@Kiskasoft', icon: Youtube },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kiskasoft.oficial?is_from_webapp=1&sender_device=pc', icon: TiktokIcon },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#1a2233]/10 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-6">
        {/* Left - Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-[#1a2233] font-semibold text-lg">Kiskasoft</span>
          <p className="text-[#1a2233]/50 text-sm">
            &copy; 2026 Kiskasoft. Todos los derechos reservados.
          </p>
        </div>

        {/* Center - Contact */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:ask@kiskasoft.com"
            className="flex items-center gap-2 text-[#1a2233]/70 hover:text-[#f5a623] text-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            ask@kiskasoft.com
          </a>
          <a
            href="https://www.kiskasoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1a2233]/70 hover:text-[#f5a623] text-sm transition-colors"
          >
            <Globe className="w-4 h-4" />
            www.kiskasoft.com
          </a>
        </div>

        {/* Right - Social Media */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <span className="text-[#1a2233]/70 text-sm">Conecta con nosotros</span>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#1a2233]/60 hover:text-[#f5a623] hover:scale-110 transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
