"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowLeft, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ObrigadoPage() {
  useEffect(() => {
    // Confetti effect on load
    const colors = ["#FFCC29", "#363334", "#25D366"]
    const confettiCount = 50
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: ${Math.random() + 0.5};
        transform: rotate(${Math.random() * 360}deg);
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
        z-index: 100;
        pointer-events: none;
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      `
      document.body.appendChild(confetti)
      
      setTimeout(() => {
        confetti.remove()
      }, 5000)
    }
    
    // Add keyframes animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
    
    return () => {
      style.remove()
      document.querySelectorAll(".confetti").forEach(el => el.remove())
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <header className="bg-[#FFCC29] py-4">
        <div className="container mx-auto px-4">
          <Link href="/" prefetch={true} className="inline-block">
            <Image
              src="/images/logo-promina-colorido.png"
              alt="Promina"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#363334] mb-4">
            Obrigado pelo contato!
          </h1>

          {/* Description */}
          <p className="text-[#6B6B6B] text-lg mb-8 leading-relaxed">
            Voce sera redirecionado para o WhatsApp da unidade escolhida. 
            Nossa equipe esta pronta para atende-lo com agilidade e qualidade.
          </p>

          {/* Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <span className="font-semibold text-[#363334]">Aguarde o redirecionamento...</span>
            </div>
            <p className="text-sm text-[#6B6B6B]">
              Se nao for redirecionado automaticamente, 
              clique no botao abaixo para falar conosco.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-[#363334] text-[#363334] hover:bg-[#363334] hover:text-white"
            >
              <Link href="/" prefetch={true}>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao Site
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-semibold"
            >
              <a href="tel:+558333414000">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-[#6B6B6B] mb-4">Confie em quem tem experiencia</p>
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
                <div className="text-xs text-[#6B6B6B]">Avaliacao</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#363334] py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            Promina - Locacao de Maquinas e Equipamentos
          </p>
        </div>
      </footer>
    </main>
  )
}
