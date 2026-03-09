"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"
import { Layers, Hammer, HardHat, ArrowUpFromLine, ArrowRight } from "lucide-react"

const equipamentos = [
  {
    id: 1,
    titulo: "Tubulações e Acessórios",
    descricao: "Estruturas metálicas de alta resistência para escoramento e sustentação em obras de todos os portes.",
    icon: Layers,
    itens: ["Andaimes", "Escoras Metálicas", "Escoras de Muro", "Vigas Metálicas"],
    link: "/maquinas?categoria=tubulacoes",
  },
  {
    id: 2,
    titulo: "Ferramentas Elétricas",
    descricao: "Equipamentos elétricos de alta performance para corte, perfuração e acabamento profissional.",
    icon: Hammer,
    itens: ["Martelos Rompedores", "Parafusadeiras", "Serra Circular", "Serra Mármore"],
    link: "/maquinas?categoria=ferramentas",
  },
  {
    id: 3,
    titulo: "Compactação e Terraplanagem",
    descricao: "Máquinas pesadas para movimentação de terra, compactação de solo e preparação de terreno.",
    icon: HardHat,
    itens: ["Retroescavadeiras", "Rolo Compactador", "Compactadores", "Placas Vibratórias"],
    link: "/maquinas?categoria=compactacao",
  },
  {
    id: 4,
    titulo: "Plataformas e Containers",
    descricao: "Equipamentos para trabalho em altura e soluções modulares para canteiro de obras.",
    icon: ArrowUpFromLine,
    itens: ["Plataformas Articuladas", "Plataformas Tesouras", "Módulos Escritórios", "Containers Almoxarifados"],
    link: "/maquinas?categoria=elevacao",
  },
]

export function MaquinasSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  
  // Determina qual card está em destaque: o hovered ou o primeiro por padrão
  const getIsDestaque = (id: number) => {
    if (hoveredId !== null) {
      return hoveredId === id
    }
    return id === 1 // Primeiro card é destaque por padrão
  }

  return (
    <section id="maquinas" className="py-20 md:py-28 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#FFCC29] font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Equipamentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363334] mb-6 text-balance">
            O Equipamento Certo para Cada Etapa da sua Obra
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Máquinas revisadas e prontas para o trabalho pesado. Reduza custos e aumente a produtividade.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipamentos.map((equipamento) => {
            const Icon = equipamento.icon
            const isDestaque = getIsDestaque(equipamento.id)
            
            return (
              <Card 
                key={equipamento.id}
                onMouseEnter={() => setHoveredId(equipamento.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isDestaque 
                    ? "bg-[#363334] text-white ring-2 ring-[#FFCC29]" 
                    : "bg-white"
                }`}
              >
                {isDestaque && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#FFCC29] text-[#363334] text-xs font-bold px-3 py-1 rounded-full">
                      Mais Procurado
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-2">
                  <div className={`size-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                    isDestaque 
                      ? "bg-[#FFCC29]" 
                      : "bg-[#FFCC29]/10"
                  }`}>
                    <Icon className="size-7 text-[#363334]" />
                  </div>
                  <CardTitle className={`text-xl transition-colors duration-300 ${
                    isDestaque ? "text-white" : "text-[#363334]"
                  }`}>
                    {equipamento.titulo}
                  </CardTitle>
                  <CardDescription className={`transition-colors duration-300 ${
                    isDestaque ? "text-white/70" : "text-[#6B6B6B]"
                  }`}>
                    {equipamento.descricao}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {equipamento.itens.map((item) => (
                      <li 
                        key={item} 
                        className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                          isDestaque ? "text-white/80" : "text-[#6B6B6B]"
                        }`}
                      >
                        <span className="size-1.5 rounded-full bg-[#FFCC29]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    variant="outline"
                    asChild
                    className={`w-full group/btn transition-colors duration-300 ${
                      isDestaque 
                        ? "border-[#FFCC29] text-[#FFCC29] hover:bg-[#FFCC29] hover:text-[#363334]" 
                        : "border-[#363334] text-[#363334] hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334]"
                    }`}
                  >
                    <Link href={equipamento.link}>
                      Saiba Mais
                      <ArrowRight className="size-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#363334] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Não encontrou o que precisa?
            </h3>
            <p className="text-white/70">
              Temos mais de 500 equipamentos disponíveis. Entre em contato e encontraremos a solução ideal.
            </p>
          </div>
          <ContactButton 
            size="lg"
            className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold whitespace-nowrap"
            message="Olá! Preciso de um equipamento específico."
          >
            Falar com Especialista
            <ArrowRight className="size-5 ml-2" />
          </ContactButton>
        </div>
      </div>
    </section>
  )
}
