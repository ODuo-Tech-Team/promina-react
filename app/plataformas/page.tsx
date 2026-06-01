import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Wrench, Award, ChevronRight, Building2, Factory, HardHat, TowerControl } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const WHATSAPP_PHONE = "558398620016"
const whatsappLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`

export const metadata: Metadata = {
  title: "Locação de Plataformas Elevatórias | Promina",
  description:
    "Alugue plataformas elevatórias articuladas e tesoura em Campina Grande e João Pessoa. Operação segura em altura com equipamentos revisados, NR-18 e NR-35.",
  keywords:
    "locação de plataforma elevatória, plataforma articulada, plataforma tesoura, aluguel de plataforma, plataforma 12m, plataforma 16m, plataforma 28m, Campina Grande, João Pessoa, Paraíba",
  openGraph: {
    title: "Locação de Plataformas Elevatórias | Promina",
    description:
      "Plataformas articuladas e tesoura de 8m a 28m para sua obra. Entrega rápida, equipamentos revisados e suporte técnico incluso.",
    type: "website",
    locale: "pt_BR",
  },
}

const modelos = [
  {
    nome: "Plataforma Tesoura 12m Zoomlion",
    altura: "12 metros",
    tipo: "Tesoura Elétrica",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMASTESOURA12M-VLHsMwT2uqqG0BloXaehjRQmKNdBcR.webp",
    destaque: "Ideal para áreas internas",
    descricao:
      "Plataforma tesoura elétrica para trabalhos em altura média. Movimentação vertical estável, ideal para manutenções em galpões, supermercados e indústrias.",
    aplicacoes: ["Galpões logísticos", "Supermercados", "Industrias", "Áreas internas"],
  },
  {
    nome: "Plataforma Articulada 16m Zoomlion ZA14J",
    altura: "16 metros",
    tipo: "Articulada",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMASARTICULADAS16METROS-5MiWzEG6j8uL4JxRI9CKDGUFT4BZWB.jpg",
    destaque: "Mais procurada",
    descricao:
      "Lança articulada com alcance lateral excelente para contornar obstáculos. Perfeita para fachadas, telhados e estruturas com pontos de difícil acesso.",
    aplicacoes: ["Fachadas", "Pintura externa", "Iluminação pública", "Manutenção predial"],
  },
  {
    nome: "Plataforma Articulada 28m SkyJack SJ85 AJ",
    altura: "28 metros",
    tipo: "Articulada Diesel",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2028%20METROS-sSG9Zb2VY8dUIw9LlOCFaudDMkZipa.jpg",
    destaque: "Alta performance",
    descricao:
      "Modelo robusto para grandes alturas e operação em terreno irregular. Tração 4x4, ideal para obras industriais, torres e estruturas elevadas.",
    aplicacoes: ["Obras industriais", "Torres e estruturas", "Telecom", "Naves industriais"],
  },
]

const beneficios = [
  {
    icone: ShieldCheck,
    titulo: "Conformidade NR-18 e NR-35",
    descricao: "Equipamentos com laudos atualizados conforme as normas regulamentadoras.",
  },
  {
    icone: Clock,
    titulo: "Entrega rápida",
    descricao: "Logística própria em Campina Grande e João Pessoa. Sua plataforma na obra no menor prazo possível.",
  },
  {
    icone: Wrench,
    titulo: "Manutenção em dia",
    descricao: "Frota revisada periodicamente. Equipamentos prontos para uso imediato, sem paradas inesperadas.",
  },
  {
    icone: Award,
    titulo: "15 anos de mercado",
    descricao: "Tradição em locação de equipamentos para construção civil e indústria na Paraíba.",
  },
]

const aplicacoes = [
  { icone: Building2, titulo: "Obras e Reformas", descricao: "Mais agilidade em fachadas, acabamentos, instalações e serviços externos." },
  { icone: HardHat, titulo: "Manutenção Predial", descricao: "Soluções seguras para limpeza, pintura, reparos e conservação em altura." },
  { icone: Factory, titulo: "Operações Industriais", descricao: "Equipamentos para manutenção, inspeção, montagem e paradas programadas." },
  { icone: TowerControl, titulo: "Energia e Telecom", descricao: "Apoio para instalação e manutenção de redes, antenas, postes e estruturas elevadas." },
]

const faqs = [
  {
    pergunta: "Qual a diferença entre plataforma tesoura e articulada?",
    resposta:
      "A plataforma tesoura realiza elevação vertical e oferece maior capacidade de carga, sendo ideal para áreas internas, pisos nivelados e trabalhos com mais de um operador. Já a plataforma articulada possui uma lança que se estende e permite contornar obstáculos, sendo indicada para fachadas, áreas externas e pontos de difícil acesso.",
  },
  {
    pergunta: "Preciso de operador treinado?",
    resposta:
      "Sim. A NR-35 exige treinamento específico para trabalho em altura, e a NR-18 estabelece diretrizes para a operação de plataformas elevatórias. A Promina não fornece operador, mas oferece curso de operação para orientar sua equipe quanto ao uso correto e seguro dos equipamentos.",
  },
  {
    pergunta: "Qual o prazo mínimo de locação?",
    resposta:
      "Trabalhamos com locações diárias, semanais e mensais. Entre em contato para receber uma proposta sob medida para sua obra.",
  },
  {
    pergunta: "Vocês entregam em outras cidades da Paraíba?",
    resposta:
      "Sim. Atendemos toda a região de Campina Grande, João Pessoa e cidades vizinhas. Consulte disponibilidade e taxa de transporte para sua localização.",
  },
  {
    pergunta: "A plataforma vem com laudos e documentação?",
    resposta:
      "Sim. Todos os nossos equipamentos possuem laudo técnico atualizado, ART quando aplicável e checklist de inspeção, conforme legislação vigente.",
  },
]

export default function PlataformasPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-br from-[#363334] via-[#4a4748] to-[#363334] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC29]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFCC29]/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFCC29]/20 border border-[#FFCC29]/40 rounded-full px-4 py-2 mb-6">
                <span className="size-2 bg-[#FFCC29] rounded-full animate-pulse" />
                <span className="text-[#FFCC29] font-medium text-sm">
                  Frota disponível para entrega imediata
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Locação de{" "}
                <span className="text-[#FFCC29]">Plataformas Elevatórias</span> em Campina Grande e João Pessoa
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Plataformas articuladas e tesoura de 8 a 28 metros. Equipamentos revisados,
                conformidade com NR-18 e NR-35 e suporte técnico durante toda a locação.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {["NR-18 e NR-35", "Frota Zoomlion e SkyJack", "Suporte técnico incluso"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="size-5 text-[#FFCC29]" />
                    <span className="text-sm md:text-base">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink("Olá! Gostaria de um orçamento para locação de plataforma elevatória.")}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-8 rounded-md transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight className="size-5 ml-2" />
                </a>
                <Link
                  href="#modelos"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/10 text-white hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334] font-medium text-lg h-14 px-8 rounded-md transition-colors"
                >
                  Ver Modelos
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFCC29]/30">
              <Image
                src="/images/plataforma-hero.png"
                alt="Plataforma elevatória Promina"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Segurança em altura</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Equipamentos preparados para qualquer desafio
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Nossa frota passa por inspeções constantes para garantir máxima segurança, desempenho
              e disponibilidade no seu projeto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b) => {
              const Icone = b.icone
              return (
                <div
                  key={b.titulo}
                  className="bg-[#F5F5F5] rounded-2xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-[#FFCC29]"
                >
                  <div className="size-12 bg-[#FFCC29] rounded-xl flex items-center justify-center mb-4">
                    <Icone className="size-6 text-[#363334]" />
                  </div>
                  <h3 className="font-bold text-[#363334] text-lg mb-2">{b.titulo}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modelos */}
      <section id="modelos" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Nossa frota</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Modelos disponíveis para locação
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Cada obra tem uma necessidade diferente. Escolha o modelo ideal para sua aplicação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modelos.map((m) => (
              <div
                key={m.nome}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
              >
                <div className="relative aspect-square bg-gray-50">
                  <div className="absolute top-3 left-3 z-10 bg-[#FFCC29] text-[#363334] px-3 py-1 rounded-full text-xs font-bold">
                    {m.destaque}
                  </div>
                  <Image
                    src={m.imagem}
                    alt={m.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-[#FFCC29] font-semibold uppercase tracking-wide mb-1">
                    {m.tipo} · {m.altura}
                  </p>
                  <h3 className="font-bold text-[#363334] text-xl mb-3">{m.nome}</h3>
                  <p className="text-[#6B6B6B] text-sm mb-4 leading-relaxed">{m.descricao}</p>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {m.aplicacoes.map((a) => (
                      <span key={a} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {a}
                      </span>
                    ))}
                  </div>

                  <a
                    href={whatsappLink(`Olá! Gostaria de um orçamento para locação da ${m.nome}.`)}
                    className="w-full inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md bg-[#363334] hover:bg-[#FFCC29] hover:text-[#363334] text-white font-semibold transition-colors mt-auto"
                  >
                    Verificar disponibilidade
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/maquinas?categoria=elevacao"
              prefetch
              className="inline-flex items-center gap-2 text-[#363334] hover:text-[#FFCC29] font-semibold transition-colors"
            >
              Ver todos os equipamentos de elevação
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Onde a Promina atua</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-6">
                A plataforma certa para cada tipo de serviço
              </h2>
              <p className="text-[#6B6B6B] text-lg mb-8">
                Atendemos operações em altura que exigem segurança, estabilidade e agilidade,
                substituindo soluções improvisadas por equipamentos modernos e preparados para o trabalho.
              </p>

              <a
                href={whatsappLink("Olá! Tenho uma obra que precisa de plataforma elevatória. Pode me ajudar a escolher o modelo?")}
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold transition-colors"
              >
                Conversar com Especialista
                <ArrowRight className="size-5 ml-2" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {aplicacoes.map((a) => {
                const Icone = a.icone
                return (
                  <div
                    key={a.titulo}
                    className="bg-[#F5F5F5] rounded-xl p-5 hover:shadow-md transition-all border border-transparent hover:border-[#FFCC29]"
                  >
                    <Icone className="size-7 text-[#FFCC29] mb-3" />
                    <h3 className="font-bold text-[#363334] mb-1">{a.titulo}</h3>
                    <p className="text-[#6B6B6B] text-sm">{a.descricao}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2">
              Perguntas comuns sobre locação de plataformas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-[#363334] pr-4">{f.pergunta}</h3>
                  <ChevronRight className="size-5 text-[#FFCC29] shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-[#6B6B6B] leading-relaxed">{f.resposta}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#363334] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFCC29]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sua operação em altura começa com a <span className="text-[#FFCC29]">escolha certa</span>
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe ajuda você a encontrar a plataforma elevatória mais indicada para sua obra,
            manutenção ou projeto industrial.
          </p>
          <a
            href={whatsappLink("Olá! Preciso urgente de uma plataforma elevatória. Podem me ajudar?")}
            className="inline-flex items-center justify-center gap-2 bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-10 rounded-md transition-colors"
          >
            Solicitar Orçamento pelo WhatsApp
            <ArrowRight className="size-5 ml-2" />
          </a>
        </div>
      </section>

      <Footer />
      <a
        href={whatsappLink("Olá! Vim pela página de plataformas elevatórias e gostaria de mais informações.")}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
        style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4), 0 8px 40px rgba(37, 211, 102, 0.2)" }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  )
}
