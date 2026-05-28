import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Truck,
  Award,
  ChevronRight,
  Warehouse,
  Briefcase,
  Bath,
  Store,
  Snowflake,
  Lock,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { ContactButton } from "@/components/contact-button"

export const metadata: Metadata = {
  title: "Locação de Containers e Módulos | Promina",
  description:
    "Aluguel de containers almoxarifado, banheiro, escritório e módulo vitrine em Campina Grande e João Pessoa. Entrega rápida, climatização e estrutura pronta para sua obra ou evento.",
  keywords:
    "locação de container, aluguel de container, container almoxarifado, container banheiro, módulo escritório, módulo vitrine, container 3m, container 6m, Campina Grande, João Pessoa, Paraíba",
  openGraph: {
    title: "Locação de Containers e Módulos | Promina",
    description:
      "Containers e módulos para canteiro de obras, eventos e expansão comercial. Almoxarifado, banheiro, escritório e vitrine.",
    type: "website",
    locale: "pt_BR",
  },
}

const modelos = [
  {
    nome: "Container Almoxarifado 3m",
    medida: "3 metros",
    tipo: "Almoxarifado",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20almoxarife%20de%203mt-YkvoJfGxLzTIOPJMCaaga5vvuMh3A0.png",
    destaque: "Compacto",
    descricao:
      "Solução compacta para canteiros menores. Armazenamento seguro de ferramentas, materiais e EPIs com porta reforçada e ventilação adequada.",
    aplicacoes: ["Obras pequenas", "Eventos", "Estoque temporário"],
  },
  {
    nome: "Container Almoxarifado 6m",
    medida: "6 metros",
    tipo: "Almoxarifado",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Almoxarife%20de%206mt-hIwEsNer8L03QwPWpmaQTXjcVFWDu6.png",
    destaque: "Mais espaço",
    descricao:
      "Container ampliado para armazenagem de grande volume de materiais. Ideal para obras de médio e grande porte que exigem organização e segurança.",
    aplicacoes: ["Obras grandes", "Indústria", "Logística"],
  },
  {
    nome: "Container Banheiro 3m",
    medida: "3 metros",
    tipo: "Sanitário",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20banheiro%203mt-eFHXrIguA3yZNcgnCFQ3Rx80jmQQbp.jpeg",
    destaque: "Higienizado",
    descricao:
      "Sanitário completo com vasos, mictórios, pias e chuveiros. Higiene e conforto para os colaboradores no canteiro de obras.",
    aplicacoes: ["Canteiros", "Eventos", "Construções rurais"],
  },
  {
    nome: "Módulo Escritório 6m",
    medida: "6 metros",
    tipo: "Escritório",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mo%CC%81dulo%20escritorio%206mt-p76IGqN6t4UQJlqWw1KusPrXgw4m6X.png",
    destaque: "Climatizado",
    descricao:
      "Escritório completo com ar-condicionado, iluminação, tomadas e janelas. Ambiente confortável para reuniões, administração e suporte à obra.",
    aplicacoes: ["Engenharia", "Administrativo", "Reuniões"],
  },
  {
    nome: "Módulo Vitrine 3m",
    medida: "3 metros",
    tipo: "Comercial",
    imagem:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mo%CC%81dulo%20Vitrine%203mt%20%282%29-7XrtDheD5CVo5kgx8LEB8m5SkciXpS.png",
    destaque: "Climatizado",
    descricao:
      "Estrutura comercial com vidros panorâmicos para ponto de venda, stand de feira ou plantão de vendas. Pronto para uso, com iluminação e climatização.",
    aplicacoes: ["Plantão de vendas", "Feiras", "Quiosques"],
  },
]

const beneficios = [
  {
    icone: Truck,
    titulo: "Entrega e remoção",
    descricao: "Entrega ágil, instalação e desmobilização dos equipamentos ao término do contrato, assegurando suporte completo para sua obra.",
  },
  {
    icone: Clock,
    titulo: "Prontos para uso",
    descricao: "Equipamentos revisados, higienizados e prontos para uso imediato.",
  },
  {
    icone: Award,
    titulo: "15 anos de experiência",
    descricao: "Atendemos canteiros, indústrias, eventos e ações comerciais em toda a Paraíba há mais de uma década.",
  },
]

const usos = [
  { icone: Warehouse, titulo: "Canteiro de Obras", descricao: "Almoxarifado, vestiário e refeitório para sua equipe na obra." },
  { icone: Briefcase, titulo: "Escritório de Obra", descricao: "Espaço administrativo climatizado para engenharia e gestão." },
  { icone: Bath, titulo: "Sanitários completos", descricao: "Conforto e higiene para os colaboradores do canteiro." },
  { icone: Store, titulo: "Plantão Comercial", descricao: "Stand de vendas, exposição e atendimento em feiras e eventos." },
  { icone: Snowflake, titulo: "Ambiente Climatizado", descricao: "Módulos com ar-condicionado para conforto em qualquer estação." },
  { icone: Lock, titulo: "Segurança Reforçada", descricao: "Estrutura metálica, fechaduras robustas e proteção contra arrombamento." },
]

const faqs = [
  {
    pergunta: "Os containers vêm com energia e ar-condicionado instalados?",
    resposta:
      "Nossos containers banheiro possuem instalação completa. Já os nossos módulos escritório e vitrine, além de instalação elétrica para iluminação e tomadas, também contam com ar-condicionado. O ponto de energia no local fica por conta do cliente!",
  },
  {
    pergunta: "Como funciona a entrega no canteiro?",
    resposta:
      "Realizamos a entrega com os caminhões muncks de nossa frota, posicionando o container exatamente onde você precisa. É necessário que o local tenha acesso para o caminhão e espaço para a operação do munck.",
  },
  {
    pergunta: "Qual o prazo mínimo de locação?",
    resposta:
      "Trabalhamos com locações de dias, semanas e meses. Fale com nossa equipe para um plano sob medida!",
  },
  {
    pergunta: "O que vem no container banheiro?",
    resposta:
      "Nossos containers sanitários têm vasos, mictórios, pias e chuveiros. Entregamos higienizados e prontos para uso, com conforto e praticidade para os colaboradores do canteiro.",
  },
  {
    pergunta: "Posso usar o módulo vitrine para um evento ou feira?",
    resposta:
      "Sim. O módulo vitrine é perfeito para stands de feiras, plantões de venda e pontos comerciais temporários. Sua estrutura envidraçada e climatizada chama atenção e oferece conforto para clientes e equipe.",
  },
  {
    pergunta: "Atendem fora de Campina Grande e João Pessoa?",
    resposta:
      "Sim. Atendemos toda a região metropolitana e cidades vizinhas. Consulte taxa de transporte para sua localização.",
  },
]

export default function ContainersPage() {
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
                  Frota disponível — entrega na sua obra
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
                Locação de{" "}
                <span className="text-[#FFCC29]">Containers e Módulos</span> para sua obra ou evento
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Almoxarifado, banheiro, escritório e módulo vitrine. Estrutura completa, climatizada
                e pronta para canteiros de obras e ações comerciais.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {["Climatizados", "Higienizados", "Entrega rápida"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="size-5 text-[#FFCC29]" />
                    <span className="text-sm md:text-base">{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <ContactButton
                  size="lg"
                  className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-8"
                  message="Olá! Gostaria de um orçamento para locação de container/módulo."
                >
                  Solicitar Orçamento
                  <ArrowRight className="size-5 ml-2" />
                </ContactButton>
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mo%CC%81dulo%20escritorio%206mt-p76IGqN6t4UQJlqWw1KusPrXgw4m6X.png"
                alt="Módulo escritório climatizado Promina"
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
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Por que a Promina</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Estrutura modular pronta para operar
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Nossos containers e módulos chegam prontos para operar, oferecendo conforto,
              praticidade e rapidez na implantação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Nossa linha</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Containers e módulos disponíveis
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Escolha o modelo certo para sua aplicação. Combinação de módulos sob consulta.
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
                    {m.tipo} · {m.medida}
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

                  <ContactButton
                    className="w-full bg-[#363334] hover:bg-[#FFCC29] hover:text-[#363334] text-white font-semibold transition-colors mt-auto"
                    message={`Olá! Gostaria de um orçamento para locação do ${m.nome}.`}
                  >
                    Verificar disponibilidade
                  </ContactButton>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/maquinas?categoria=modulos"
              prefetch
              className="inline-flex items-center gap-2 text-[#363334] hover:text-[#FFCC29] font-semibold transition-colors"
            >
              Ver todos os módulos e containers
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Para o que servem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Soluções para diferentes aplicações
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Equipamentos completos para canteiros de obras, áreas administrativas, apoio
              operacional, stands de vendas e muito mais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usos.map((u) => {
              const Icone = u.icone
              return (
                <div
                  key={u.titulo}
                  className="bg-[#F5F5F5] rounded-xl p-6 hover:shadow-md transition-all border border-transparent hover:border-[#FFCC29]"
                >
                  <Icone className="size-8 text-[#FFCC29] mb-4" />
                  <h3 className="font-bold text-[#363334] text-lg mb-2">{u.titulo}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{u.descricao}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Dúvidas Frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2">
              Perguntas comuns sobre locação de containers
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
            Monte sua estrutura de obra com a <span className="text-[#FFCC29]">Promina</span>!
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Alugue containers para escritório, banheiro e almoxarifado para sua obra. Fale conosco
            e receba seu orçamento pelo WhatsApp.
          </p>
          <ContactButton
            size="lg"
            className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-10"
            message="Olá! Preciso de containers/módulos para minha obra. Podem montar um orçamento?"
          >
            Solicitar Orçamento pelo WhatsApp
            <ArrowRight className="size-5 ml-2" />
          </ContactButton>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
