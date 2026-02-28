"use client"

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const localizacoes = [
  {
    id: 1,
    tipo: "Locação",
    nome: "Locação Campina Grande",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé, Campina Grande - PB",
    telefone: "+55 83 98717-7707",
    whatsapp: "5583987177707",
    horario: "Seg - Sex: 7h às 17h | Sáb: 7h às 12h",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
    destaque: true,
  },
  {
    id: 2,
    tipo: "Locação",
    nome: "Locação João Pessoa",
    endereco: "Av. Pres. Epitácio Pessoa, 2987, Brasimar, João Pessoa - PB",
    telefone: "+55 83 99664-0032",
    whatsapp: "5583996640032",
    horario: "Seg - Sex: 7h às 17h | Sáb: 7h às 12h",
    mapaUrl: "https://maps.google.com/?q=Av.+Pres.+Epitácio+Pessoa,+2987,+Brasimar,+João+Pessoa",
    destaque: false,
  },
  {
    id: 3,
    tipo: "Homecenter",
    nome: "Homecenter Campina Grande",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé, Campina Grande - PB",
    telefone: "+55 83 99803-0018",
    whatsapp: "5583998030018",
    horario: "Seg - Sex: 7h às 17h | Sáb: 7h às 12h",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
    destaque: false,
  },
]

export function LocalizacoesSection() {
  return (
    <section id="contato" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#FFCC29]/10 text-[#363334] text-sm font-semibold tracking-wide uppercase mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363334] mb-4">
            Onde Estamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento presencial e remoto. Escolha a unidade mais próxima de você.
          </p>
        </div>

        {/* Grid de Localizações - Design Brutalista */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizacoes.map((local) => (
            <div
              key={local.id}
              className={`
                relative bg-white border-2 border-[#363334] p-0 
                transition-all duration-300 hover:-translate-y-1
                ${local.destaque ? "ring-4 ring-[#FFCC29]" : ""}
              `}
            >
              {/* Header do Card */}
              <div className={`
                p-4 border-b-2 border-[#363334]
                ${local.tipo === "Homecenter" ? "bg-[#FFCC29]" : "bg-[#363334]"}
              `}>
                <span className={`
                  text-xs font-bold uppercase tracking-wider
                  ${local.tipo === "Homecenter" ? "text-[#363334]" : "text-[#FFCC29]"}
                `}>
                  {local.tipo}
                </span>
                <h3 className={`
                  text-xl font-bold mt-1
                  ${local.tipo === "Homecenter" ? "text-[#363334]" : "text-white"}
                `}>
                  {local.nome}
                </h3>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 space-y-4">
                {/* Endereço */}
                {local.endereco && local.mapaUrl && (
                  <a 
                    href={local.mapaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group/endereco"
                  >
                    <MapPin className="w-5 h-5 text-[#FFCC29] mt-0.5 shrink-0" />
                    <p className="text-[#363334] text-sm leading-relaxed group-hover/endereco:text-[#FFCC29] transition-colors underline-offset-2 group-hover/endereco:underline">
                      {local.endereco}
                    </p>
                  </a>
                )}

                {/* Telefone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FFCC29] shrink-0" />
                  <a 
                    href={`tel:${local.telefone.replace(/\s/g, "")}`}
                    className="text-[#363334] font-semibold hover:text-[#FFCC29] transition-colors"
                  >
                    {local.telefone}
                  </a>
                </div>

                {/* Horário */}
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FFCC29] shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {local.horario}
                  </p>
                </div>
              </div>

              {/* Footer do Card - Botões */}
              <div className="p-4 border-t-2 border-[#363334] bg-muted/30 space-y-2">
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold border-0"
                >
                  <a
                    href={`https://wa.me/${local.whatsapp}?text=Olá! Vim pelo site e gostaria de mais informações.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chamar no WhatsApp
                  </a>
                </Button>

                {local.mapaUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-[#363334] text-[#363334] hover:bg-[#363334] hover:text-white font-semibold"
                  >
                    <a
                      href={local.mapaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver no Mapa
                    </a>
                  </Button>
                )}
              </div>

              {/* Badge de Destaque */}
              {local.destaque && (
                <div className="absolute -top-3 -right-3 bg-[#FFCC29] text-[#363334] text-xs font-bold px-3 py-1 border-2 border-[#363334]">
                  Matriz
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
