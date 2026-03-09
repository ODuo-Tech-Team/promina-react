"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowLeft, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ObrigadoHomeCenterPage() {
  useEffect(() => {
    const colors = ["#FFCC29", "#363334", "#25D366"]
    const confettiCount = 50
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti-hc"
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: ${Math.random() + 0.5};
        transform: rotate(${Math.random() * 360}deg);
        animation: fall-hc ${Math.random() * 3 + 2}s linear forwards;
        z-index: 100;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      `
      document.body.appendChild(confetti)
      setTimeout(() => confetti.remove(), 5000)
    }
    const style = document.createElement("style")
    style.textContent = `@keyframes fall-hc { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }`
    document.head.appendChild(style)
    return () => {
      style.remove()
      document.querySelectorAll(".confetti-hc").forEach(el => el.remove())
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <header className="bg-[#FFCC29] py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block">
            <Image src="/images/logo-promina-pb.png" alt="Promina" width={150} height={50} className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 bg-[#FFCC29] text-[#363334] text-sm font-bold tracking-wide uppercase mb-4 rounded-full">
            Home Center
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#363334] mb-4">
            Obrigado pelo contato!
          </h1>

          <p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed">
            Você será redirecionado para o WhatsApp do Home Center Campina Grande.
            Nossa equipe está pronta para atendê-lo com agilidade.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 text-left space-y-4 border-t-4 border-[#FFCC29]">
            <h2 className="font-bold text-[#363334] text-lg text-center mb-2">Home Center Campina Grande</h2>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FFCC29] mt-0.5 shrink-0" />
              <p className="text-[#363334] text-sm leading-relaxed">
                R. Padre Aristides Ferreira da Cruz, 240, Catolé, Campina Grande - PB
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FFCC29] shrink-0" />
              <a href="tel:+558333227707" className="text-[#363334] font-semibold hover:text-[#FFCC29] transition-colors">
                (83) 3322-7707
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#FFCC29] shrink-0" />
              <p className="text-[#6B6B6B] text-sm">Seg - Sex: 07:30 às 17:30 | Sáb: 08:00 às 12:00</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-[#363334] text-[#363334] hover:bg-[#363334] hover:text-white">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Site
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold">
              <a href="https://wa.me/5583998030018?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Home%20Center." target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Abrir WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-[#6B6B6B] mb-4">Confie em quem tem experiência</p>
            <div className="flex items-center justify-center gap-6 text-[#363334]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFCC29]">15+</div>
                <div className="text-xs text-[#6B6B6B]">Anos</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFCC29]">2000+</div>
                <div className="text-xs text-[#6B6B6B]">Clientes</div>
              </div>
              <div className="w-px h-8 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FFCC29]">4.9</div>
                <div className="text-xs text-[#6B6B6B]">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#363334] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">Promina - Home Center Campina Grande</p>
        </div>
      </footer>
    </main>
  )
}
