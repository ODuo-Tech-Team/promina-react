"use client"

import Link from "next/link"
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
    icon: Zap,
    title: "Água e Esgotamentos",
    description: "Lavajatos, bombas submersas e equipamentos hidráulicos",
    quantidade: "+4 modelos"
  },
  {
    icon: Cog,
    title: "Compactação e Terraplanagem",
    description: "Retroescavadeiras, rolos compactadores e mini escavadeiras",
    quantidade: "+5 modelos"
  },
  {
    icon: HardHat,
    title: "Concretagem",
    description: "Betoneiras, vibradores, cortadoras e alisadoras de piso",
    quantidade: "+6 modelos"
  },
  {
    icon: ArrowUpFromLine,
    title: "Elevação de Carga e Pessoas",
    description: "Plataformas articuladas, tesouras, empilhadeiras e muncks",
    quantidade: "+6 modelos"
  },
  {
    icon: Wrench,
    title: "Ferramentas Elétricas",
    description: "Serras, parafusadeiras, esmerilhadeiras e mais",
    quantidade: "+5 modelos"
  },
  {
    icon: Zap,
    title: "Geradores de Energia",
    description: "Geradores inverter, monofásicos, trifásicos e a diesel",
    quantidade: "+3 modelos"
  },
  {
    icon: Wind,
    title: "Jardinagem",
    description: "Motosserras, roçadeiras, sopradores e aparadores",
    quantidade: "+4 modelos"
  },
  {
    icon: Hammer,
    title: "Martelos e Marteletes",
    description: "Marteletes combinados, rompedores e demolidores",
    quantidade: "+3 modelos"
  },
  {
    icon: Container,
    title: "Módulos e Containers",
    description: "Escritório, banheiro, vitrine e almoxarifado modular",
    quantidade: "+5 modelos"
  },
  {
    icon: Shovel,
    title: "Tubulações e Acessórios",
    description: "Andaimes, escoras, vigas metálicas e cruzetas",
    quantidade: "+6 modelos"
  },
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
            <Link 
              key={equipamento.title}
              href="/maquinas"
              prefetch={true}
              className="group relative p-5 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-[#FFCC29]/30 transition-all duration-300 hover:bg-zinc-800/80 cursor-pointer"
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
            </Link>
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
              message="Olá! Gostaria de informações sobre locação de equipamentos."
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
