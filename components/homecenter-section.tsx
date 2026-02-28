"use client"

import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"
import { 
  Paintbrush, 
  Droplets, 
  Wrench, 
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Shield,
  Award
} from "lucide-react"

const features = [
  {
    icon: Paintbrush,
    title: "Tintas Sherwin Williams",
    description: "Cores vibrantes e durabilidade excepcional para sua obra",
    highlights: ["+2.000 cores", "Alto rendimento", "Garantia de fábrica"]
  },
  {
    icon: Droplets,
    title: "Impermeabilização",
    description: "Soluções definitivas contra umidade e infiltrações",
    highlights: ["Mantas asfálticas", "Impermeabilizantes", "Aplicação técnica"]
  },
  {
    icon: Wrench,
    title: "Ferramentas Elétricas e Manuais",
    description: "As melhores marcas para profissionais exigentes",
    highlights: ["Bosch", "Makita", "DeWalt"]
  }
]

const benefits = [
  { icon: Award, text: "Marcas Premium" },
  { icon: Shield, text: "Garantia Estendida" },
  { icon: Sparkles, text: "Consultoria Técnica" }
]

export function HomecenterSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFCC29]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#FFCC29]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#FFCC29]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC29]/10 border border-[#FFCC29]/20 rounded-full text-[#FFCC29] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Novidade Promina
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Promina{" "}
                <span className="text-[#FFCC29]">Homecenter</span>
                : Acabamento e Manutenção
              </h2>
              
              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                A expertise de quem entende de máquinas pesadas, agora no varejo. 
                Produtos de alta qualidade para finalizar sua obra com excelência.
              </p>
            </div>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.text}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 rounded-full border border-zinc-700"
                >
                  <benefit.icon className="w-4 h-4 text-[#FFCC29]" />
                  <span className="text-sm text-zinc-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton 
                size="lg"
                className="bg-[#FFCC29] hover:bg-[#FFCC29]/90 text-[#363334] font-semibold px-8 py-6 text-base shadow-lg shadow-[#FFCC29]/20 transition-all hover:shadow-xl hover:shadow-[#FFCC29]/30"
                message="Olá! Gostaria de informações sobre os produtos do Homecenter."
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com a Promina
              </ContactButton>
            </div>

            {/* Store Info */}
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-sm text-zinc-500">
                Av. Canal de Bodocongó, 1230 - Bodocongó
              </p>
              <p className="text-sm text-zinc-400 mt-1">
                Segunda a Sexta: 7h às 17h | Sábado: 7h às 12h
              </p>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 hover:border-[#FFCC29]/30 transition-all duration-300 hover:bg-zinc-800/80"
              >
                {/* Feature Number */}
                <span className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-[#FFCC29] text-[#363334] text-sm font-bold rounded-full">
                  {index + 1}
                </span>

                <div className="flex gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#FFCC29]/10 rounded-xl group-hover:bg-[#FFCC29]/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-[#FFCC29]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#FFCC29] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-700/50 px-3 py-1.5 rounded-full"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#FFCC29]" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div className="p-5 bg-gradient-to-r from-[#FFCC29]/10 to-transparent rounded-xl border border-[#FFCC29]/20">
              <p className="text-sm text-zinc-300 flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#FFCC29] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Compra segura:</strong> Equipe técnica especializada para orientar 
                  a escolha dos melhores produtos para sua necessidade.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
