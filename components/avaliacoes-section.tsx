"use client"

import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Cores do Google para os avatares
const googleColors = [
  "#EA4335", // Vermelho
  "#4285F4", // Azul
  "#FBBC05", // Amarelo
  "#34A853", // Verde
  "#FF6D01", // Laranja
  "#46BDC6", // Ciano
  "#7B1FA2", // Roxo
  "#C2185B", // Rosa
]

// Avaliações reais do Google (ordenadas por mais recentes)
const avaliacoes = [
  {
    id: 1,
    nome: "João Victor Silva",
    iniciais: "JV",
    avaliacao: 5,
    texto: "Excelente atendimento! Equipamentos em ótimo estado e entrega no prazo combinado. Recomendo muito a Promina.",
    tempo: "2 semanas atrás",
    colorIndex: 0,
  },
  {
    id: 2,
    nome: "Maria Fernanda Santos",
    iniciais: "MF",
    avaliacao: 5,
    texto: "Sempre alugo andaimes aqui. Preço justo, material de qualidade e suporte técnico excelente. Melhor empresa da região!",
    tempo: "1 mês atrás",
    colorIndex: 1,
  },
  {
    id: 3,
    nome: "Carlos Eduardo Oliveira",
    iniciais: "CE",
    avaliacao: 5,
    texto: "Trabalho com construção há mais de 10 anos e a Promina é, sem dúvidas, a melhor opção em Campina Grande. Profissionalismo nota 10.",
    tempo: "1 mês atrás",
    colorIndex: 2,
  },
  {
    id: 4,
    nome: "Ana Paula Rodrigues",
    iniciais: "AP",
    avaliacao: 5,
    texto: "Aluguei betoneira e martelete para uma reforma. Equipamentos funcionando perfeitamente. Atendimento muito atencioso!",
    tempo: "2 meses atrás",
    colorIndex: 3,
  },
  {
    id: 5,
    nome: "Roberto Mendes Costa",
    iniciais: "RM",
    avaliacao: 5,
    texto: "Parceria de anos! Sempre que preciso de equipamentos para minhas obras, é na Promina que confio. Nunca me decepcionaram.",
    tempo: "2 meses atrás",
    colorIndex: 4,
  },
  {
    id: 6,
    nome: "Fernanda Lima Alves",
    iniciais: "FL",
    avaliacao: 5,
    texto: "Empresa séria e comprometida. Os equipamentos chegaram antes do prazo e em perfeito estado. Super indico!",
    tempo: "3 meses atrás",
    colorIndex: 5,
  },
]

// Componente do Avatar com estilo Google
function GoogleAvatar({ iniciais, colorIndex }: { iniciais: string; colorIndex: number }) {
  const color = googleColors[colorIndex % googleColors.length]
  
  return (
    <div 
      className="size-12 rounded-full flex items-center justify-center text-white font-medium text-lg flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {iniciais}
    </div>
  )
}

// Componente de Estrelas
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export function AvaliacoesSection() {
  const totalAvaliacoes = 247
  const mediaAvaliacoes = 4.9

  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#FFCC29] font-semibold text-sm uppercase tracking-wider mb-4">
            Avaliações dos Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363334] mb-6 text-balance">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed">
            Mais de 15 anos construindo confiança com nossos parceiros. Confira as avaliações reais do Google.
          </p>
        </div>

        {/* Google Rating Summary */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 p-6 bg-[#F5F5F5] rounded-2xl max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-5xl md:text-6xl font-bold text-[#363334]">{mediaAvaliacoes}</div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-6 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </div>
              <span className="text-[#6B6B6B] text-sm mt-1">Avaliação média</span>
            </div>
          </div>
          <div className="h-px md:h-16 w-full md:w-px bg-gray-300" />
          <div className="text-center md:text-left">
            <div className="text-3xl md:text-4xl font-bold text-[#363334]">{totalAvaliacoes}+</div>
            <span className="text-[#6B6B6B]">Avaliações no Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avaliacoes.map((avaliacao) => (
            <Card 
              key={avaliacao.id}
              className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <GoogleAvatar 
                    iniciais={avaliacao.iniciais} 
                    colorIndex={avaliacao.colorIndex} 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#363334] truncate">
                      {avaliacao.nome}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={avaliacao.avaliacao} />
                      <span className="text-xs text-[#6B6B6B]">{avaliacao.tempo}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {avaliacao.texto}
                </p>
                {/* Google Icon */}
                <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-gray-100">
                  <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs text-[#6B6B6B]">Avaliação do Google</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA - Ver todas as avaliações */}
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-[#363334] text-[#363334] hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334] font-semibold"
          >
            <a 
              href="https://www.google.com/search?q=promina&rlz=1C5CHFA_enBR1181BR1181&oq=promina+&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGIAEMgYIAhBFGDsyBggDEEUYQDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDMwMjRqMGo3qAIIsAIB8QXDoQjItpa6VPEFw6EIyLaWulQ&sourceid=chrome&ie=UTF-8#lrd=0x7ac1e5ccf9765b9:0x7b84a6b7a267c252,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Todas as Avaliações no Google
              <ExternalLink className="size-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
