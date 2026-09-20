import type { Metadata } from "next"
import { ArrowRight, CheckCircle2, VolumeX, ShieldCheck, Target, FileX } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CtaZap } from "@/components/massa-expansiva/cta-zap"

export const metadata: Metadata = {
  title: "Massa Expansiva para Demolição de Rocha e Concreto | Promina",
  description:
    "Massa expansiva para desmonte de rocha e demolição de concreto sem explosivos em Campina Grande, João Pessoa e toda a Paraíba. Sem ruído, sem vibração e sem licença de detonação.",
  keywords:
    "massa expansiva, argamassa expansiva, desmonte de rocha, demolição sem explosivo, quebra de rocha, demolição de concreto, Campina Grande, João Pessoa, Paraíba",
  // Página ainda com imagens/valores pendentes do cliente: fora do Google até fechar (remover ao concluir a task 868m5e578)
  robots: { index: false, follow: false },
  openGraph: {
    title: "Massa Expansiva para Demolição de Rocha e Concreto | Promina",
    description:
      "Desmonte de rocha e concreto sem explosivos. Sem ruído, sem vibração e sem licença de detonação. Atendemos toda a Paraíba.",
    type: "website",
    locale: "pt_BR",
  },
}

const passos = [
  { titulo: "Perfuração", texto: "Furos são feitos na rocha ou no concreto seguindo o espaçamento recomendado para o material." },
  { titulo: "Mistura", texto: "O produto é misturado com água na proporção indicada, formando uma pasta fluida." },
  { titulo: "Aplicação", texto: "A pasta é vertida nos furos, sem necessidade de equipamentos especiais ou detonação." },
  { titulo: "Fragmentação", texto: "A expansão fragmenta o material em algumas horas, pronto para remoção com equipamento convencional." },
]

const beneficios = [
  { icone: FileX, titulo: "Sem licença de detonação", texto: "Dispensa autorização do Exército, plano de fogo e blaster habilitado. Menos burocracia e mais agilidade para a obra." },
  { icone: VolumeX, titulo: "Sem ruído nem vibração", texto: "Ideal para áreas urbanas, próximas a edificações, hospitais e estruturas sensíveis, onde detonar não é uma opção." },
  { icone: ShieldCheck, titulo: "Operação mais segura", texto: "Sem risco de projeção de fragmentos e sem necessidade de evacuar a área durante a fragmentação." },
  { icone: Target, titulo: "Controle do resultado", texto: "A fragmentação segue a direção dos furos, permitindo preservar estruturas vizinhas e cortar somente onde é preciso." },
]

const aplicacoes = [
  { titulo: "Desmonte de rocha em obras", texto: "Fundações, valas, terraplanagem e rebaixamento de rocha em terrenos de construção." },
  { titulo: "Demolição de concreto", texto: "Bases de máquinas, blocos de fundação, vigas e estruturas de concreto armado." },
  { titulo: "Pedreiras e mineração", texto: "Extração de blocos e fragmentação de matacões sem comprometer o material." },
  { titulo: "Áreas urbanas e sensíveis", texto: "Serviços próximos a redes, tubulações, edificações vizinhas e locais onde a detonação é inviável." },
]

// Valores de referência de mercado — CONFIRMAR com a Promina antes de publicar (task 868m5e578).
const specs = [
  ["Diâmetro do furo", "30 a 50 mm"],
  ["Profundidade do furo", "80% a 90% da altura do bloco"],
  ["Espaçamento entre furos", "8 a 12 vezes o diâmetro do furo"],
  ["Consumo aproximado", "1,5 a 1,8 kg por metro de furo (Ø 38 mm)"],
  ["Início da fragmentação", "a partir de 2 a 8 horas, conforme temperatura"],
  ["Embalagem", "sacos de 5 kg / caixas de 20 kg"],
]

const faq = [
  { p: "Preciso de licença ou autorização para usar massa expansiva?", r: "Não. Por não ser um produto explosivo, a massa expansiva dispensa a autorização do Exército, o plano de fogo e o profissional blaster exigidos na detonação convencional." },
  { p: "Em quanto tempo a rocha fragmenta?", r: "A fragmentação normalmente se inicia entre 2 e 8 horas após a aplicação, variando conforme a temperatura ambiente, o tipo de material e o diâmetro dos furos." },
  { p: "Funciona em concreto armado?", r: "Sim. A massa expansiva fragmenta o concreto e expõe a armadura, que é então cortada com ferramentas convencionais. É um dos usos mais comuns em demolição de bases e blocos de fundação." },
  { p: "Qual a quantidade necessária para o meu serviço?", r: "Depende do volume de rocha ou concreto, do tipo de material e da malha de furação. Envie as medidas do seu serviço pelo WhatsApp e nossa equipe calcula a quantidade ideal e orienta a aplicação." },
  { p: "Vocês entregam em outras cidades da Paraíba?", r: "Sim. Atendemos Campina Grande, João Pessoa e região. Consulte disponibilidade e prazo de entrega para a sua cidade." },
  { p: "A Promina orienta a aplicação?", r: "Sim. Nossa equipe orienta o dimensionamento dos furos, a proporção da mistura e os cuidados de segurança para você obter o melhor resultado no primeiro uso." },
]

function ImagemPendente({ titulo, detalhe, className = "" }: { titulo: string; detalhe: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${titulo} — imagem em breve`}
      className={`flex flex-col items-center justify-center text-center rounded-2xl border-2 border-dashed border-white/25 bg-white/5 text-white/60 p-6 ${className}`}
    >
      <span className="text-xs font-bold uppercase tracking-widest text-[#FFCC29]/80 mb-1">Imagem pendente</span>
      <strong className="text-sm">{titulo}</strong>
      <span className="text-xs mt-1">{detalhe}</span>
    </div>
  )
}

export default function MassaExpansivaPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />

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
                <span className="text-[#FFCC29]">Massa expansiva</span> para demolição de rocha e concreto sem explosivos
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                Fragmente rocha e estruturas de concreto com segurança, sem ruído, sem vibração e sem licença de
                detonação. Atendemos obras e mineração em toda a Paraíba.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {["Sem explosivos e sem licença", "Sem ruído e sem vibração", "Orientação técnica de aplicação"].map((b) => (
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
            {/* IMG: foto/vídeo real da aplicação em Baraúna (material do Drive do cliente) */}
            <ImagemPendente
              titulo="Aplicação real em rocha — registro de Baraúna"
              detalhe="Substituir pela foto/vídeo do cliente"
              className="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Como funciona</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">Demolição controlada em 4 etapas</h2>
            <p className="text-[#6B6B6B] text-lg">
              A massa expansiva é um agente demolidor não explosivo: depois de aplicada, expande gradualmente dentro
              do furo e fragmenta a rocha ou o concreto de forma silenciosa e controlada.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map((p, i) => (
              <div key={p.titulo} className="bg-[#F5F5F5] rounded-2xl p-6 border border-transparent hover:border-[#FFCC29] transition-all">
                <div className="size-10 bg-[#FFCC29] rounded-xl flex items-center justify-center font-extrabold text-[#363334] mb-4">
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
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Por que usar massa expansiva</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2">A alternativa segura ao desmonte com explosivos</h2>
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

      {/* Aplicações */}
      <section id="aplicacoes" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Onde é usada</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363334] mt-2 mb-4">Aplicações da massa expansiva</h2>
            <p className="text-[#6B6B6B] text-lg">
              Do desmonte de rocha em fundações à demolição de estruturas de concreto armado, a massa expansiva
              substitui o explosivo em serviços que exigem controle.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aplicacoes.map((a) => (
              <div key={a.titulo} className="bg-[#F5F5F5] rounded-2xl p-6">
                <h3 className="font-bold text-[#363334] text-lg mb-2">{a.titulo}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{a.texto}</p>
              </div>
            ))}
          </div>
          {/* IMG: galeria com 2–3 fotos reais de aplicações (obras da Promina / registro de Baraúna) */}
          <ImagemPendente
            titulo="Galeria — fotos reais de aplicação em obras atendidas"
            detalhe="Substituir por 2–3 fotos do cliente"
            className="min-h-[220px] mt-10 !border-[#C4CAD6] !bg-[#F5F5F5] !text-[#6B6B6B]"
          />
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
              cálculo conforme o tipo de rocha ou estrutura.
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
                      <td data-confirmar="true" className="px-5 py-3.5 text-white/80">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-white/50 mt-3">
                — Valores de referência. Confirme com nossa equipe a especificação para o seu tipo de rocha e
                temperatura ambiente.
              </p>
            </div>
            <div>
              {/* IMG: vídeo curto da fragmentação em andamento (Baraúna) */}
              <ImagemPendente titulo="Vídeo — fragmentação da rocha em tempo real" detalhe="Substituir pelo vídeo do cliente" className="min-h-[300px]" />
              <div className="mt-6">
                <CtaZap
                  posicao="specs"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FB959] text-white font-bold h-12 px-6 rounded-md transition-colors"
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
            <span className="text-[#FFCC29] font-bold text-sm uppercase tracking-wider">Dúvidas frequentes</span>
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
            Precisa quebrar rocha ou concreto sem explosivo?
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
