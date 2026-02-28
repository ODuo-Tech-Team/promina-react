"use client"

import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"
import { 
  Layers,
  Hammer,
  HardHat,
  ArrowUpFromLine,
  Zap,
  Wind,
  Truck,
  Container,
  Shovel,
  Cog,
  CheckCircle2,
  MessageCircle,
  Clock,
  Shield,
  Wrench
} from "lucide-react"

const equipamentos = [
  {
    icon: Layers,
    title: "Andaimes",
    description: "Estruturas metálicas seguras para trabalho em altura",
    quantidade: "+4 modelos"
  },
  {
    icon: Layers,
    title: "Escoras",
    description: "Escoras metálicas de alta resistência para sustentação",
    quantidade: "+4 modelos"
  },
  {
    icon: Hammer,
    title: "Marteletes",
    description: "Equipamentos de demolição e perfuração de alta potência",
    quantidade: "+4 modelos"
  },
  {
    icon: HardHat,
    title: "Betoneiras",
    description: "Preparo de concreto com eficiência e qualidade",
    quantidade: "+4 modelos"
  },
  {
    icon: Cog,
    title: "Compactadores",
    description: "Compactação de solo para fundações e pavimentação",
    quantidade: "+4 modelos"
  },
  {
    icon: Wrench,
    title: "Furadeiras",
    description: "Furadeiras industriais para perfuração profissional",
    quantidade: "+3 modelos"
  },
  {
    icon: ArrowUpFromLine,
    title: "Plataformas Elevatórias",
    description: "Trabalho em altura com segurança e estabilidade",
    quantidade: "+4 modelos"
  },
  {
    icon: Zap,
    title: "Geradores de Energia",
    description: "Geradores de pequeno e grande porte para obras",
    quantidade: "Diversos"
  },
  {
    icon: Wind,
    title: "Compressores",
    description: "Compressores de ar para ferramentas pneumáticas",
    quantidade: "Diversos"
  },
  {
    icon: Truck,
    title: "Empilhadeiras",
    description: "Movimentação de cargas pesadas com precisão",
    quantidade: "+1 modelo"
  },
  {
    icon: Container,
    title: "Contêineres",
    description: "Escritório, banheiro e almoxarifado para canteiro de obras",
    quantidade: "+1 modelo"
  },
  {
    icon: Shovel,
    title: "Máquinas Elétricas e a Combustão",
    description: "Equipamentos de pequeno porte para diversas aplicações",
    quantidade: "Diversos"
  }
]

const beneficios = [
  { icon: Clock, text: "Entrega Rápida" },
  { icon: Shield, text: "Equipamentos Revisados" },
  { icon: Wrench, text: "Suporte Técnico" }
]

export function LocacaoEquipamentosSection() {
  return (
    <section id="equipamentos" className="relative py-20 lg:py-28 bg-zinc-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFCC29]" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#FFCC29]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#FFCC29]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC29]/10 border border-[#FFCC29]/20 rounded-full text-[#FFCC29] text-sm font-medium">
            <Layers className="w-4 h-4" />
            Locação Profissional
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
            Equipamentos para{" "}
            <span className="text-[#FFCC29]">Locação</span>
          </h2>
          
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Frota completa de máquinas e equipamentos para construção civil. 
            Todos revisados e prontos para o trabalho pesado.
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {beneficios.map((benefit) => (
              <div 
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700"
              >
                <benefit.icon className="w-4 h-4 text-[#FFCC29]" />
                <span className="text-sm text-zinc-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {equipamentos.map((equipamento, index) => (
            <div 
              key={equipamento.title}
              className="group relative p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-[#FFCC29]/30 transition-all duration-300 hover:bg-zinc-800/80"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#FFCC29]/10 rounded-lg group-hover:bg-[#FFCC29]/20 transition-colors">
                  <equipamento.icon className="w-6 h-6 text-[#FFCC29]" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#FFCC29] transition-colors truncate">
                    {equipamento.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1 line-clamp-2">
                    {equipamento.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#FFCC29] mt-2">
                    <CheckCircle2 className="w-3 h-3" />
                    {equipamento.quantidade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
            <p className="text-zinc-300">
              Não encontrou o equipamento que precisa?
            </p>
            <ContactButton 
              size="lg"
              className="bg-[#FFCC29] hover:bg-[#FFCC29]/90 text-[#363334] font-semibold px-6 shadow-lg shadow-[#FFCC29]/20 transition-all hover:shadow-xl hover:shadow-[#FFCC29]/30"
              message="Ola! Gostaria de informacoes sobre locacao de equipamentos."
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar Disponibilidade
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  )
}
