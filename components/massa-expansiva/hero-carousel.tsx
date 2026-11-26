"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    src: "/images/massa-expansiva/passo-1-perfuracao.webp",
    alt: "Etapa 1 — Perfuração da rocha para aplicação de massa expansiva",
    label: "1 · Perfuração",
  },
  {
    src: "/images/massa-expansiva/passo-3-aplicacao.webp",
    alt: "Etapa 2 — Aplicação da pasta de massa expansiva nos furos da rocha",
    label: "2 · Aplicação",
  },
  {
    src: "/images/massa-expansiva/passo-4-fragmentacao.webp",
    alt: "Etapa 3 — Fragmentação controlada da rocha sem explosivos",
    label: "3 · Fragmentação",
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#2a2728]">
      <div className="relative w-full aspect-[4/5]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={1000}
              priority={i === 0}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Etiqueta da etapa */}
        <div className="absolute top-3 left-3 z-20 bg-[#363334]/85 backdrop-blur-sm border border-[#FFCC29]/50 text-[#FFCC29] text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full">
          {slides[index].label}
        </div>

        {/* Botões laterais */}
        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 size-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 size-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/45 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver ${slide.label}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#FFCC29]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
