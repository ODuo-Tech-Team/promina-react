"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Zap, MapPin } from "lucide-react"

const pilares = [
  {
    icon: Shield,
    titulo: "15 Anos de Mercado",
    descricao: "Tradição e processos sólidos na Paraíba",
    detalhe: "Desde 2009 construindo parcerias duradouras com construtoras, empreiteiras e profissionais da construção civil em todo o estado.",
  },
  {
    icon: Zap,
    titulo: "Agilidade Total",
    descricao: "Sem burocracia, frota pronta para entrega",
    detalhe: "Equipamentos revisados e disponíveis para retirada ou entrega imediata. Atendimento rápido e eficiente.",
  },
  {
    icon: MapPin,
    titulo: "Presença Estratégica",
    descricao: "Cobertura forte em toda a Paraíba",
    detalhe: "Unidades em João Pessoa e Campina Grande para atender você onde a sua obra estiver.",
  },
]

function AnimatedCard({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode
  delay?: number 
}) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        mounted && isVisible 
          ? "opacity-100 translate-y-0" 
          : mounted ? "opacity-0 translate-y-8" : ""
      }`}
    >
      {children}
    </div>
  )
}

export function AutoridadeSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23363334' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedCard>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#FFCC29]/10 text-[#363334] text-sm font-semibold rounded-full mb-4">
              Por que escolher a Promina?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363334] mb-4 text-balance">
              Confiança que se Constrói
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto text-pretty">
              Três pilares que fazem da Promina a escolha certa para sua obra
            </p>
          </div>
        </AnimatedCard>

        {/* Pilares Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pilares.map((pilar, index) => (
            <AnimatedCard key={pilar.titulo} delay={index * 150}>
              <div className="group relative">
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FFCC29]/10 flex items-center justify-center group-hover:bg-[#FFCC29] transition-colors duration-500">
                      <pilar.icon className="w-8 h-8 md:w-10 md:h-10 text-[#FFCC29] group-hover:text-[#363334] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#363334] mb-2">
                    {pilar.titulo}
                  </h3>
                  <p className="text-[#FFCC29] font-semibold text-sm mb-4">
                    {pilar.descricao}
                  </p>
                  <p className="text-[#6B6B6B] leading-relaxed">
                    {pilar.detalhe}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#FFCC29] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </div>

                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#363334] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Bottom Stats Banner */}
        <AnimatedCard delay={500}>
          <div className="mt-16 md:mt-20 bg-[#363334] rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FFCC29] mb-1">15+</div>
                <div className="text-sm text-gray-400">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FFCC29] mb-1">2</div>
                <div className="text-sm text-gray-400">Unidades na Paraíba</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FFCC29] mb-1">500+</div>
                <div className="text-sm text-gray-400">Equipamentos disponíveis</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#FFCC29] mb-1">98%</div>
                <div className="text-sm text-gray-400">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
