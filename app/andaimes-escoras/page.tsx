import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  ShieldCheck,
  Star,
  Truck,
  Wrench,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaZap } from "@/components/andaimes-escoras/cta-zap"

export const metadata: Metadata = {
  title: "Venda de Andaimes e Escoras Metálicas em Campina Grande | Promina",
  description:
    "Compre andaimes, escoras metálicas e acessórios na Promina Home Center, em Campina Grande. Orientação técnica na escolha e entrega na sua obra. Peça seu orçamento pelo WhatsApp.",
  keywords:
    "venda de andaimes, comprar andaime, escoras metálicas, andaime tubular, escoramento de laje, escora de muro, Campina Grande, Paraíba, Promina",
  // Aguardando aprovação do cliente (task 1gab6jjzrqb) antes de liberar indexação
  robots: { index: false, follow: false },
  openGraph: {
    title: "Venda de Andaimes e Escoras Metálicas em Campina Grande | Promina",
    description:
      "Compre andaimes, escoras metálicas e acessórios na Promina Home Center, em Campina Grande. Orientação técnica na escolha e entrega na sua obra. Peça seu orçamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
}

const barraConfianca = [
  { valor: "15+ anos", label: "de mercado" },
  { valor: "15 mil+", label: "obras atendidas" },
  { valor: "4,9 no Google", label: "247+ avaliações" },
  { valor: "Entrega", label: "na obra" },
]

const produtos = [
  {
    nome: "Andaimes Tubulares (NP e N)",
    imagem: "/images/andaimes-escoras/andaimes-tubulares.webp",
    descricao:
      "Modelos NP (1,0 × 1,0 m) e N galvanizado (1,0 × 1,5 m), fixos ou com rodízios para trabalho em altura.",
  },
  {
    nome: "Painéis de Escoramento",
    imagem: "/images/andaimes-escoras/paineis-escoramento.webp",
    descricao:
      "Sistema modular de alta resistência para escoramento de lajes e grandes vãos com montagem ágil.",
  },
  {
    nome: "Escoras Metálicas Reguláveis",
    imagem: "/images/andaimes-escoras/escoras-metalicas.webp",
    descricao:
      "Altura regulável de 2,10 m a 6 m para sustentação provisória de lajes, vigas e formas de concreto.",
  },
  {
    nome: "Escora de Muro",
    imagem: "/images/andaimes-escoras/escora-de-muro.webp",
    descricao:
      "Escora metálica regulável com 3 m de altura para contenções, muros e apoio provisório em obra.",
  },
  {
    nome: "Base Ajustável",
    imagem: "/images/andaimes-escoras/base-ajustavel.webp",
    descricao:
      "Sapata regulável para nivelamento e apoio seguro na base de andaimes e torres de escoramento.",
  },
  {
    nome: "Piso Metálico",
    imagem: "/images/andaimes-escoras/piso-metalico.webp",
    descricao:
      "Plataforma metálica encaixada e travada (1,0 / 1,5 m) para circulação e trabalho seguro no andaime.",
  },
  {
    nome: "Rodinha com Freio",
    imagem: "/images/andaimes-escoras/rodinha-com-freio.webp",
    descricao:
      "Rodízio giratório com freio e encaixe para tubo de andaime, ideal para movimentação em piso plano.",
  },
  {
    nome: "Forcado Metálico",
    imagem: "/images/andaimes-escoras/forcado-metalico.webp",
    descricao:
      "Acessório metálico para apoio e encaixe no sistema de escoramento de obras.",
  },
]

const beneficios = [
  {
    icone: Layers,
    titulo: "Linha completa",
    texto: "Andaimes, escoras e acessórios no mesmo lugar.",
  },
  {
    icone: MessageCircle,
    titulo: "Orientação técnica",
    texto: "Nossa equipe ajuda a escolher o produto e a quantidade certa.",
  },
  {
    icone: Building2,
    titulo: "Todos os portes de obra",
    texto: "Atendimento da reforma à construtora.",
  },
  {
    icone: Truck,
    titulo: "Entrega na obra",
    texto: "Retire na loja ou receba no endereço da sua obra.",
  },
  {
    icone: ShieldCheck,
    titulo: "Mais de 15 anos",
    texto: "Atendendo obras na Paraíba.",
  },
]

const aplicacoes = [
  {
    icone: Layers,
    titulo: "Lajes",
    texto: "Sustentação segura durante a concretagem e cura de lajes residenciais e comerciais.",
  },
  {
    icone: Building2,
    titulo: "Vigas",
    texto: "Apoio provisório para formas e armaduras de vigas com ajuste preciso de altura.",
  },
  {
    icone: Paintbrush,
    titulo: "Fachadas",
    texto: "Acesso estável para reboco, pintura, revestimento e manutenção predial.",
  },
  {
    icone: Wrench,
    titulo: "Reformas",
    texto: "Praticidade para obras internas e externas com andaimes fixos ou móveis com rodízios.",
  },
  {
    icone: ShieldCheck,
    titulo: "Contenção de muro",
    texto: "Escoramento provisório de muros e estruturas em fase de execução ou reforço.",
  },
]

const passos = [
  {
    titulo: "Chame a gente no WhatsApp",
    texto: "Clique em qualquer botão da página e fale com o Promina Home Center.",
  },
  {
    titulo: "Informe o que precisa",
    texto: "Diga os produtos e as quantidades de que precisa.",
  },
  {
    titulo: "Receba o orçamento",
    texto: "Você recebe o orçamento com a orientação da nossa equipe.",
  },
  {
    titulo: "Retire ou receba",
    texto: "Retire na loja ou receba na sua obra.",
  },
]

// Especificações extraídas da ficha técnica enviada no catálogo (comment [1] da task 1gab6jjzrqb).
// Confirmar eventuais ajustes adicionais com o cliente antes de remover o noindex.
const specs = [
  ["Andaime NP", "1,0 × 1,0 m | Piso metálico | Fixo ou com rodízios"],
  ["Andaime N", "1,0 × 1,5 m | Modelo galvanizado | Fixo ou com rodízios"],
  ["Escora Metálica Regulável", "Altura de 2,10 m a 6 m | Lajes, vigas e formas"],
  ["Escora para Muro", "Altura 3 m | Contenções e apoio provisório"],
  ["Piso Metálico", "Dimensão nominal 1,0 / 1,5 m | Encaixado e travado"],
  ["Base Ajustável", "Comprimento ajustável | Nivelamento na base"],
  ["Rodinha com Freio", "Rodízio giratório com freio | Encaixe para tubo"],
]

const faq = [
  {
    p: "Vocês vendem para obra pequena e para construtora?",
    r: "Sim. Atendemos de reformas a grandes obras. Informe o que precisa e a quantidade, e montamos o orçamento.",
  },
  {
    p: "Como sei quantas escoras ou peças de andaime preciso?",
    r: "Mande as medidas da laje ou da área de trabalho pelo WhatsApp. Nossa equipe ajuda a calcular.",
  },
  {
    p: "Vocês fazem entrega?",
    r: "Sim, entregamos na sua obra. Consulte pelo WhatsApp a entrega para a sua cidade.",
  },
  {
    p: "Quais as formas de pagamento?",
    r: "Consulte as condições com a nossa equipe pelo WhatsApp.",
  },
  {
    p: "Posso comprar só os acessórios?",
    r: "Sim. Base ajustável, piso metálico, rodinha com freio e os demais itens podem ser comprados separadamente.",
  },
]

export default function AndaimesEscorasPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] pb-20 md:pb-0">
      <Navbar
        customCta={
          <CtaZap
            posicao="topo"
            className="inline-flex items-center justify-center bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold px-6 h-10 rounded-md transition-colors"
          >
            Solicitar Orçamento
          </CtaZap>
        }
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-br from-[#363334] via-[#4a4748] to-[#363334] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC29]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#FFCC29]/20 border border-[#FFCC29]/40 rounded-full px-4 py-2 mb-6">
              <span className="size-2 bg-[#FFCC29] rounded-full animate-pulse" />
              <span className="text-[#FFCC29] font-medium text-sm">
                Promina Home Center — Campina Grande
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
              Venda de <span className="text-[#FFCC29]">andaimes e escoras metálicas</span> em Campina Grande e região
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              Andaimes, escoras e acessórios para obras de todos os portes, da reforma à construtora. Compre com
              orientação da nossa equipe e receba na sua obra.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <CtaZap
                posicao="hero"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-8 rounded-md transition-colors"
              >
                Solicitar orçamento pelo WhatsApp
                <ArrowRight className="size-5 ml-1" />
              </CtaZap>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/10 text-white hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334] font-medium text-lg h-14 px-8 rounded-md transition-colors"
              >
                Ver produtos
              </a>
            </div>

            {/* Barra de confiança */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/15">
              {barraConfianca.map((item) => (
                <div key={item.valor} className="bg-white/5 rounded-xl px-4 py-3 border border-white/10">
                  <div className="flex items-center gap-1.5 text-[#FFCC29] font-extrabold text-lg">
                    {item.valor.includes("4,9") && <Star className="size-4 fill-[#FFCC29]" />}
                    <span>{item.valor}</span>
                  </div>
                  <p className="text-white/75 text-xs md:text-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {beneficios.map((b) => {
              const Icone = b.icone
              return (
                <div
                  key={b.titulo}
                  className="bg-[#F5F5F5] rounded-2xl p-6 border border-transparent hover:border-[#FFCC29] transition-all"
                >
                  <div className="size-12 bg-[#FFCC29] rounded-xl flex items-center justify-center mb-4">
                    <Icone className="size-6 text-[#363334]" />
                  </div>
                  <h2 className="font-bold text-[#363334] text-lg mb-2">{b.titulo}</h2>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.texto}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Catálogo para venda</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">
              Andaimes, escoras e acessórios à venda
            </h2>
            <p className="text-[#6B6B6B] text-lg">
              Escolha o produto ideal para a sua obra e peça o orçamento ao Promina Home Center, em Campina Grande.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {produtos.map((prod) => (
              <div
                key={prod.nome}
                className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#FFCC29] hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-square w-full bg-white p-4 border-b border-black/5">
                  <Image
                    src={prod.imagem}
                    alt={prod.nome}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#363334] text-lg mb-2">{prod.nome}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5 flex-1">{prod.descricao}</p>
                  <CtaZap
                    posicao={`produto_${prod.nome}`}
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#363334] hover:bg-[#FFCC29] text-white hover:text-[#363334] font-bold text-sm h-11 px-4 rounded-md transition-colors"
                  >
                    Pedir orçamento
                    <ArrowRight className="size-4" />
                  </CtaZap>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para que serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Aplicações na obra</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">Para que serve</h2>
            <p className="text-[#6B6B6B] text-lg">
              Estruturas versáteis para diferentes etapas da construção civil, do escoramento ao acabamento.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {aplicacoes.map((a) => {
              const Icone = a.icone
              return (
                <div
                  key={a.titulo}
                  className="bg-[#F5F5F5] rounded-2xl p-6 border border-transparent hover:border-[#FFCC29] transition-all"
                >
                  <div className="size-10 bg-[#FFCC29] rounded-xl flex items-center justify-center mb-4">
                    <Icone className="size-5 text-[#363334]" />
                  </div>
                  <h3 className="font-bold text-[#363334] text-lg mb-2">{a.titulo}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{a.texto}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Processo simples</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">Como funciona a compra</h2>
            <p className="text-[#6B6B6B] text-lg">
              Do primeiro contato até a retirada na loja ou a entrega na obra.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((p, i) => (
              <div
                key={p.titulo}
                className="bg-white rounded-2xl p-6 border border-transparent hover:border-[#FFCC29] transition-all"
              >
                <div className="size-10 bg-[#FFCC29] rounded-full flex items-center justify-center font-extrabold text-[#363334] mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#363334] text-lg mb-2">{p.titulo}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabela técnica */}
      <section id="especificacoes" className="py-20 bg-[#363334] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Informações técnicas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Especificações dos produtos</h2>
            <p className="text-white/75 text-lg">
              Dimensões de referência do catálogo Promina. Nossa equipe confirma a configuração ideal no WhatsApp.
            </p>
          </div>

          <div className="overflow-x-auto bg-white/5 rounded-2xl">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr>
                  <th className="bg-[#FFCC29]/15 text-[#FFCC29] font-bold px-5 py-3.5">Produto</th>
                  <th className="bg-[#FFCC29]/15 text-[#FFCC29] font-bold px-5 py-3.5">Especificação</th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([equipamento, detalhe]) => (
                  <tr key={equipamento} className="border-t border-white/10">
                    <td className="px-5 py-3.5 font-semibold text-white">{equipamento}</td>
                    <td className="px-5 py-3.5 text-white/80">{detalhe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <CtaZap
              posicao="specs"
              className="inline-flex items-center justify-center gap-2 bg-[#FFCC29] hover:bg-[#FFCC29]/90 text-[#363334] font-bold h-12 px-6 rounded-md transition-colors"
            >
              Confirmar medidas no WhatsApp
              <ArrowRight className="size-4" />
            </CtaZap>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2">
              Perguntas comuns sobre a compra de andaimes e escoras
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.p} className="group bg-[#F5F5F5] rounded-xl">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 font-semibold text-[#363334]">
                  {f.p}
                  <span className="text-[#E6B415] text-xl font-extrabold group-open:hidden">+</span>
                  <span className="text-[#E6B415] text-xl font-extrabold hidden group-open:inline">−</span>
                </summary>
                <p className="px-5 pb-5 text-[#6B6B6B] text-sm md:text-base leading-relaxed">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final + Home Center */}
      <section className="py-20 bg-[#FFCC29]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#363334] max-w-2xl mx-auto mb-4">
            Precisa de andaimes ou escoras para sua obra?
          </h2>
          <p className="text-[#363334]/85 text-lg max-w-xl mx-auto mb-8">
            Fale com o Promina Home Center e solicite seu orçamento pelo WhatsApp.
          </p>

          <CtaZap
            posicao="cta_final"
            className="inline-flex items-center justify-center gap-2 bg-[#363334] hover:bg-[#4a4748] text-white font-bold text-lg h-14 px-8 rounded-md transition-colors mb-10"
          >
            Solicitar orçamento pelo WhatsApp
            <ArrowRight className="size-5 ml-1" />
          </CtaZap>

          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 text-left bg-white/75 backdrop-blur rounded-2xl p-6 border border-black/10">
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-[#363334] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#363334] text-sm">Promina Home Center</p>
                <p className="text-[#363334]/80 text-sm">
                  R. Padre Aristides Ferreira da Cruz, 240, Bloco C — Catolé, Campina Grande - PB
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-[#363334] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-[#363334] text-sm">Horário de atendimento</p>
                <p className="text-[#363334]/80 text-sm">
                  Seg–Sex: 07:30–17:30 | Sáb: 08:00–12:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer unidade="Home Center Campina Grande" />

      {/* Botão WhatsApp fixo no mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <CtaZap
          posicao="mobile_fixo"
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base h-13 rounded-full shadow-2xl transition-colors"
        >
          <CheckCircle2 className="size-5" />
          Solicitar orçamento no WhatsApp
        </CtaZap>
      </div>
    </main>
  )
}
