"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"
import { Play, ArrowRight, CheckCircle2 } from "lucide-react"

const beneficios = [
  "Entrega rápida em toda região",
  "Equipamentos revisados",
  "Suporte técnico incluso",
]

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoStarted, setVideoStarted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Inicia o vídeo quando a pessoa começa a rolar
      if (scrollY > 10 && video.paused && !videoStarted) {
        video.play()
        setVideoStarted(true)
      }
    }

    // Pausa o vídeo quando termina (não faz loop)
    const handleEnded = () => {
      video.pause()
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    video.addEventListener("ended", handleEnded)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      video.removeEventListener("ended", handleEnded)
    }
  }, [videoStarted])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-40 md:pt-36 pb-24">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-[#363334]">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover"
        >
          <source src="/videos/promina-hero-new.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#363334]/95 via-[#363334]/80 to-[#363334]/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFCC29]/20 border border-[#FFCC29]/40 rounded-full px-4 py-2 mb-6">
            <span className="size-2 bg-[#FFCC29] rounded-full animate-pulse" />
            <span className="text-[#FFCC29] font-medium text-sm">
              15 anos de experiência no mercado
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Locação de Máquinas e Equipamentos para{" "}
            <span className="text-[#FFCC29]">Construção Civil</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
            Equipamentos de alta performance para sua obra. Andaimes, escoras, 
            marteletes, betoneiras e muito mais em Campina Grande e João Pessoa.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-4 mb-8">
            {beneficios.map((beneficio) => (
              <div key={beneficio} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span>{beneficio}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactButton 
              size="lg"
              className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-8"
              message="Ola! Gostaria de solicitar um orcamento."
            >
              Solicitar Orcamento
              <ArrowRight className="size-5 ml-2" />
            </ContactButton>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-white bg-white/10 text-white hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334] font-medium text-lg h-14 px-8"
            >
              <a href="#maquinas">
                <Play className="size-5 mr-2" />
                Ver Equipamentos
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFCC29]">+ de 15</div>
              <div className="text-white/70 text-sm md:text-base">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFCC29]">+ de 2000</div>
              <div className="text-white/70 text-sm md:text-base">Obras Atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFCC29]">+ de 500</div>
              <div className="text-white/70 text-sm md:text-base">Equipamentos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - posicionado abaixo dos stats */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#maquinas" className="flex flex-col items-center gap-2 text-white/60 hover:text-[#FFCC29] transition-colors">
          <span className="text-sm">Rolar para baixo</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  )
}
