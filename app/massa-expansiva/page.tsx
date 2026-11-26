import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, CheckCircle2, VolumeX, ShieldCheck, Target, FileX } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaZap } from "@/components/massa-expansiva/cta-zap"
import { HeroCarousel } from "@/components/massa-expansiva/hero-carousel"

export const metadata: Metadata = {
  title: "Massa Expansiva para Demolição de Rocha | Promina",
  description:
    "Massa expansiva para desmonte de rocha sem explosivos em Campina Grande, João Pessoa e toda a Paraíba. Desmonte controlado, sem vibração e com menos burocracia.",
  keywords:
    "massa expansiva, argamassa expansiva, desmonte de rocha, demolição sem explosivo, quebra de rocha, Campina Grande, João Pessoa, Paraíba",
  openGraph: {
    title: "Massa Expansiva para Demolição de Rocha | Promina",
    description:
      "Desmonte de rocha sem explosivos, controlado e sem vibração. Atendemos toda a Paraíba.",
    type: "website",
    locale: "pt_BR",
  },
}

const passos = [
  {
    titulo: "Perfuração",
    texto: "Com a utilização do compressor pneumático, perfure a rocha com espaçamento entre 10 e 20 cm.",
    imagem: "/images/massa-expansiva/passo-1-perfuracao.webp",
    alt: "Rocha perfurada para aplicação de massa expansiva",
  },
  {
    titulo: "Mistura",
    texto: "O produto é misturado com água na proporção de 0,3 L por kg.",
    imagem: "/images/massa-expansiva/passo-2-mistura.webp",
    alt: "Embalagem de 20 kg de massa expansiva Promina no palete",
  },
  {
    titulo: "Aplicação",
    texto: "A pasta é colocada nos furos sem a necessidade de equipamentos especiais.",
    imagem: "/images/massa-expansiva/passo-3-aplicacao.webp",
    alt: "Aplicação da pasta de massa expansiva nos furos da rocha",
  },
  {
    titulo: "Fragmentação",
    texto: "A expansão fratura a rocha em algumas horas, que poderá ser removida com o uso de alavanca ou martelo do compressor.",
    imagem: "/images/massa-expansiva/passo-4-fragmentacao.webp",
    alt: "Rocha fragmentada após a ação da massa expansiva",
  },
]

const beneficios = [
  { icone: FileX, titulo: "Menos burocracia", texto: "Dispensa autorização do Exército, plano de fogo e blaster habilitado." },
  { icone: VolumeX, titulo: "Sem vibração ou lançamentos", texto: "Durante o processo de expansão da massa expansiva não ocorre vibração ou lançamentos de detritos que possam abalar estruturas periféricas." },
  { icone: Target, titulo: "Desmonte controlado", texto: "A utilização da massa expansiva permite a remoção da rocha com contornos bem delimitados." },
  { icone: ShieldCheck, titulo: "Operação mais segura", texto: "Sem risco de projeção de fragmentos e sem necessidade de evacuar a área durante a fragmentação." },
]

// Valores confirmados pela Promina em 15/10/2026 (task 868m5e578).
const specs = [
  ["Diâmetro do furo", "32 a 40 mm"],
  ["Profundidade do furo", "mínimo 80 cm"],
  ["Espaçamento entre furos", "10 a 20 cm"],
  ["Período de fragmentação", "até 48 horas"],
  ["Embalagem", "caixa de 20 kg com 4 sacos de 5 kg"],
]

const faq = [
  { p: "Preciso de licença ou autorização para usar massa expansiva?", r: "Não. Por não ser um produto explosivo, a massa expansiva dispensa a autorização do Exército, o plano de fogo e o profissional blaster exigidos na detonação convencional." },
  { p: "Em quanto tempo a rocha fragmenta?", r: "A expansão fratura a rocha em algumas horas e o período de fragmentação é de até 48 horas, variando conforme a temperatura ambiente, o tipo de rocha e o diâmetro dos furos." },
  { p: "Qual a quantidade necessária para o meu serviço?", r: "Depende do volume de rocha, do tipo de material e da malha de furação. Envie as medidas do seu serviço pelo WhatsApp e nossa equipe calcula a quantidade ideal e orienta a aplicação." },
  { p: "Vocês entregam em outras cidades da Paraíba?", r: "Sim. Atendemos Campina Grande, João Pessoa e região. Consulte disponibilidade e prazo de entrega para a sua cidade." },
  { p: "A Promina orienta a aplicação?", r: "Sim. Nossa equipe orienta o dimensionamento dos furos, a proporção da mistura e os cuidados de segurança para você obter o melhor resultado no primeiro uso." },
]

export default function MassaExpansivaPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
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
      <section className="pt-32 md:pt-40 pb-20 bg-gradient-to-br from-[#363334] via-[#4a4748] to-[#363334] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC29]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFCC29]/20 border border-[#FFCC29]/40 rounded-full px-4 py-2 mb-6">
                <span className="size-2 bg-[#FFCC29] rounded-full animate-pulse" />
                <span className="text-[#FFCC29] font-medium text-sm">Pronta entrega em Campina Grande e João Pessoa</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance">
                <span className="text-[#FFCC29]">Massa expansiva</span> para demolição de rocha
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Fragmente rocha com segurança, sem vibração e com menos burocracia. Atendemos obras e mineração
                em toda a Paraíba.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {["Sem explosivos e sem licença", "Desmonte controlado e sem vibração", "Mais segurança para sua obra", "Orientação técnica de aplicação"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-white/90">
                    <CheckCircle2 className="size-5 text-[#FFCC29]" />
                    <span className="text-sm md:text-base">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CtaZap
                  posicao="hero"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold text-lg h-14 px-8 rounded-md transition-colors"
                >
                  Solicitar Orçamento
                  <ArrowRight className="size-5 ml-2" />
                </CtaZap>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white bg-white/10 text-white hover:bg-[#FFCC29] hover:border-[#FFCC29] hover:text-[#363334] font-medium text-lg h-14 px-8 rounded-md transition-colors"
                >
                  Ver como funciona
                </a>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Como funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">Demolição controlada em 4 etapas</h2>
            <p className="text-[#6B6B6B] text-lg">
              A massa expansiva é um agente demolidor não explosivo: depois de aplicada, expande gradualmente dentro
              do furo e fragmenta a rocha de forma controlada e sem vibração.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((p, i) => (
              <div
                key={p.titulo}
                className="bg-[#F5F5F5] rounded-2xl p-6 border border-transparent hover:border-[#FFCC29] transition-all flex flex-col"
              >
                <div
                  aria-hidden="true"
                  className="size-10 bg-[#FFCC29] rounded-full flex items-center justify-center font-extrabold text-[#363334] shadow-sm mb-4"
                >
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#363334] text-lg mb-2">{p.titulo}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334]">Por que usar massa expansiva</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b) => {
              const Icone = b.icone
              return (
                <div key={b.titulo} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all border border-transparent hover:border-[#FFCC29]">
                  <div className="size-12 bg-[#FFCC29] rounded-xl flex items-center justify-center mb-4">
                    <Icone className="size-6 text-[#363334]" />
                  </div>
                  <h3 className="font-bold text-[#363334] text-lg mb-2">{b.titulo}</h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{b.texto}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Especificações */}
      <section id="especificacoes" className="py-20 bg-[#363334] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Informações técnicas</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Especificações e rendimento</h2>
            <p className="text-white/70 text-lg">
              Dados de referência para dimensionar a quantidade de produto do seu serviço. Nossa equipe orienta o
              cálculo conforme o tipo de rocha.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <table className="w-full text-left text-sm md:text-base bg-white/5 rounded-2xl overflow-hidden">
                <thead>
                  <tr>
                    <th colSpan={2} className="bg-[#FFCC29]/15 text-[#FFCC29] font-bold px-5 py-3">
                      Parâmetros de aplicação
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map(([k, v]) => (
                    <tr key={k} className="border-t border-white/10">
                      <td className="px-5 py-3.5 font-medium">{k}</td>
                      <td className="px-5 py-3.5 text-white/80">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-white/75 mt-3">
                Nossa equipe confirma a especificação para o seu tipo de rocha e temperatura ambiente.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#2a2728]">
                <Image
                  src="/images/massa-expansiva/saco-20kg.webp"
                  alt="Saco de 20 kg de massa expansiva Promina"
                  width={1600}
                  height={1067}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <CtaZap
                  posicao="specs"
                  className="inline-flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#116b33] text-white font-bold h-12 px-6 rounded-md transition-colors"
                >
                  Falar com um especialista
                </CtaZap>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-10">
            <span className="text-[#8A6A00] font-bold text-sm uppercase tracking-wider">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2">Perguntas comuns sobre massa expansiva</h2>
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

      {/* CTA final */}
      <section className="py-20 bg-[#FFCC29] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#363334] max-w-2xl mx-auto mb-4">
            Precisa quebrar rocha sem explosivo?
          </h2>
          <p className="text-[#363334]/80 text-lg max-w-xl mx-auto mb-8">
            Envie as informações do seu serviço e receba a orientação de aplicação e o orçamento da quantidade certa de
            massa expansiva.
          </p>
          <CtaZap
            posicao="cta_final"
            className="inline-flex items-center justify-center gap-2 bg-[#363334] hover:bg-[#4a4748] text-white font-bold text-lg h-14 px-8 rounded-md transition-colors"
          >
            Solicitar Orçamento pelo WhatsApp
            <ArrowRight className="size-5 ml-2" />
          </CtaZap>
        </div>
      </section>

      <Footer />
    </main>
  )
}
