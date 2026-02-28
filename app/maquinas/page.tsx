"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { ContactButton } from "@/components/contact-button"
import { Search, Filter, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Categorias de equipamentos
const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "plataformas", nome: "Plataformas Elevatorias" },
  { id: "soldas", nome: "Maquinas de Solda" },
  { id: "containers", nome: "Containers" },
  { id: "pesados", nome: "Equipamentos Pesados" },
  { id: "geradores", nome: "Geradores" },
]

// Produtos disponíveis
const produtos = [
  {
    id: 1,
    nome: "Plataforma Tesoura 8 metros",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20tesoura%208%20metros-Y01thz88hNWj1wUVrx6bI0GTckOqAA.jpg",
    destaque: true,
    especificacoes: ["Altura: 8m", "Eletrica", "Skyjack"],
  },
  {
    id: 2,
    nome: "Plataforma Articulada 11m Eletrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%20ELETRICA%2011%20METROS%20SJ30%20ARJE-qaj83Q7041iuyEI3W4upoA572gD2Pv.png",
    destaque: false,
    especificacoes: ["Altura: 11m", "Eletrica", "Skyjack"],
  },
  {
    id: 3,
    nome: "Plataforma Articulada 16m Eletrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2016%20m-L1AH0fqKNynMhsugnCea9wEAp97dCs.jpg",
    destaque: true,
    especificacoes: ["Altura: 16m", "Eletrica", "Zoomlion"],
  },
  {
    id: 4,
    nome: "Plataforma Articulada 16m Eletrica Haulotte",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2016%20M%20ELETRICA%20HAULOTTE-SVUBVuvt11Ss4ugxp88x1zQEzs43Zy.webp",
    destaque: false,
    especificacoes: ["Altura: 16m", "Eletrica", "Haulotte"],
  },
  {
    id: 5,
    nome: "Plataforma Articulada 16m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2016%20m%20a%20diesel-avFZq5lrSpADtjU54uTGtHMkS9fYnT.jpg",
    destaque: false,
    especificacoes: ["Altura: 16m", "Diesel", "Zoomlion"],
  },
  {
    id: 6,
    nome: "Plataforma Articulada 20m Eletrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2020%20M%20ELETRICA%20SJ60%20AJE%2B-am43K2T63us1DWDZiL2dPkLMwBA9fP.jpg",
    destaque: true,
    especificacoes: ["Altura: 20m", "Eletrica", "Skyjack"],
  },
  {
    id: 7,
    nome: "Plataforma Articulada 21m Eletrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2021%20m%20eletrica-quvWPsryNSHSbUxenJQBV2noqvFHq3.jpg",
    destaque: false,
    especificacoes: ["Altura: 21m", "Eletrica", "Zoomlion"],
  },
  {
    id: 8,
    nome: "Plataforma Articulada 21m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2021%20m%20a%20diesel-chh8vw0iEFOuULu6KLihCM6NGetk2j.jpg",
    destaque: false,
    especificacoes: ["Altura: 21m", "Diesel", "Zoomlion"],
  },
  {
    id: 9,
    nome: "Plataforma Articulada 26m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2026%20m%20a%20diesel-MrIXWf74qy6glgebA987JdqvpXLS6a.jpg",
    destaque: true,
    especificacoes: ["Altura: 26m", "Diesel", "Zoomlion"],
  },
  {
    id: 10,
    nome: "Plataforma Articulada 28m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2028%20M%20A%20DIESEL-WK6Zd2nrcpnCX7VtKaat5zmfNiUxVj.jpeg",
    destaque: false,
    especificacoes: ["Altura: 28m", "Diesel", "Skyjack"],
  },
  {
    id: 11,
    nome: "Maquina de Solda Inversora 120A Lynus",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20135523-j9aMzEoUjuL4KuUSLvupdp21jiEbqi.png",
    destaque: false,
    especificacoes: ["120A", "Inversora", "Lynus"],
  },
  {
    id: 12,
    nome: "Maquina de Solda Inversora AWT",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D_NQ_NP_654226-MLB70479272732_072023-O-M1DD4GbRSGf3al5c6YjhLgQDXot35E.webp",
    destaque: false,
    especificacoes: ["Inversora", "Portatil", "AWT"],
  },
  {
    id: 13,
    nome: "Maquina de Solda Inversora Kende",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20135635-EUXI5jfB8WBYKxSfOEbP8tm2HixPpT.png",
    destaque: true,
    especificacoes: ["160A", "Inversora", "Kende"],
  },
  {
    id: 14,
    nome: "Maquina de Solda Inversora CSM",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maquina_de_solda_inversora_120a_220v_igbt_mma120_kende_1223_1_65d501152c64ce10b7aa521d49964db8-9768YwpLPr3TujYth4PceMsszkSpAU.webp",
    destaque: false,
    especificacoes: ["120A", "220V", "CSM"],
  },
  {
    id: 15,
    nome: "Retificadora de Solda 425A Balmer",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Maquina-Retificadora-de-Solda-425A-para--balmer-br4251-eTen6E9jss8w1RFxLNnIDwruRqwHmC.webp",
    destaque: true,
    especificacoes: ["425A", "Industrial", "Balmer"],
  },
  {
    id: 16,
    nome: "Container Modulo Vitrine",
    categoria: "containers",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4523-LPqwaqeazu6pLD6Xfven4rg95x0qsx.jpg",
    destaque: true,
    especificacoes: ["Modular", "Escritorio", "Vitrine"],
  },
  {
    id: 17,
    nome: "Container Modulo Escritorio",
    categoria: "containers",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4524-Cur90215reEkl2fzZXxGRp2QvGnmIn.jpg",
    destaque: false,
    especificacoes: ["Modular", "Climatizado", "Escritorio"],
  },
  {
    id: 18,
    nome: "Retroescavadeira New Holland",
    categoria: "pesados",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-06%20101826-zaotPrijNGVkMHokJg0LFBfjyHLdFI.png",
    destaque: true,
    especificacoes: ["B95", "4x4", "New Holland"],
  },
  {
    id: 19,
    nome: "Rolo Compactador Wolkan",
    categoria: "pesados",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-06%20105033-POcICa8wOQorg4OsCEHejFTppIFfRP.png",
    destaque: false,
    especificacoes: ["RCW-900", "Compactador", "Wolkan"],
  },
  {
    id: 20,
    nome: "Gerador de Energia",
    categoria: "geradores",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gerador-7LDbG1YMYPwdVb7lOQXbBGv39OvS27.png",
    destaque: true,
    especificacoes: ["Diesel", "Industrial", "Silenciado"],
  },
]

export default function MaquinasPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")
  const [busca, setBusca] = useState("")

  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria = categoriaAtiva === "todos" || produto.categoria === categoriaAtiva
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 md:pt-40 pb-12 bg-gradient-to-br from-[#363334] via-[#4a4748] to-[#363334] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC29]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFCC29]/5 rounded-full blur-2xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-[#FFCC29] transition-colors mb-6"
          >
            <ArrowLeft className="size-4" />
            Voltar para o inicio
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Maquinas e <span className="text-[#FFCC29]">Equipamentos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Locacao de equipamentos para construcao civil, obras e industria. 
              Equipamentos revisados e prontos para uso imediato.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span className="text-white text-sm">Entrega rapida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span className="text-white text-sm">Suporte tecnico</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span className="text-white text-sm">Equipamentos revisados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[88px] md:top-[136px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar equipamento..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200 focus:border-[#FFCC29] focus:ring-[#FFCC29]"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categorias.map((categoria) => (
                <button
                  key={categoria.id}
                  onClick={() => setCategoriaAtiva(categoria.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    categoriaAtiva === categoria.id
                      ? "bg-[#FFCC29] text-[#363334]"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {categoria.nome}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results count */}
          <p className="text-gray-600 mb-6">
            {produtosFiltrados.length} equipamento{produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
                  produto.destaque ? "border-[#FFCC29]" : "border-gray-100"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  {produto.destaque && (
                    <div className="absolute top-3 left-3 z-10 bg-[#FFCC29] text-[#363334] px-3 py-1 rounded-full text-xs font-bold">
                      Destaque
                    </div>
                  )}
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Category */}
                  <p className="text-xs text-[#FFCC29] font-semibold uppercase tracking-wide mb-1">
                    {categorias.find((c) => c.id === produto.categoria)?.nome}
                  </p>

                  {/* Name */}
                  <h3 className="font-bold text-[#363334] text-lg mb-3 line-clamp-2 min-h-[56px]">
                    {produto.nome}
                  </h3>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {produto.especificacoes.map((spec, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <ContactButton
                    className="w-full bg-[#363334] hover:bg-[#FFCC29] hover:text-[#363334] text-white font-semibold transition-colors"
                    message={`Ola! Gostaria de verificar disponibilidade e orcamento para: ${produto.nome}`}
                  >
                    Verificar disponibilidade
                  </ContactButton>
                </div>
              </div>
            ))}
          </div>

          {/* No results */}
          {produtosFiltrados.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Nenhum equipamento encontrado
              </h3>
              <p className="text-gray-600 mb-6">
                Tente buscar por outro termo ou selecione outra categoria
              </p>
              <Button
                onClick={() => {
                  setBusca("")
                  setCategoriaAtiva("todos")
                }}
                className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#363334]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nao encontrou o que procura?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Temos uma ampla variedade de equipamentos. Entre em contato e nossos 
            especialistas vao ajudar voce a encontrar a solucao ideal para sua obra.
          </p>
          <ContactButton
            size="lg"
            className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold px-8"
            message="Ola! Estou procurando um equipamento especifico para locacao."
          >
            Falar com Especialista
          </ContactButton>
        </div>
      </section>

      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
