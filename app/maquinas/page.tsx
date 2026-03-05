"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { ContactButton } from "@/components/contact-button"
import { Search, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


// Categorias de equipamentos
const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "andaimes", nome: "Andaimes e Escoras" },
  { id: "ferramentas", nome: "Ferramentas Elétricas" },
  { id: "compactacao", nome: "Compactação e Terraplanagem" },
  { id: "plataformas", nome: "Plataformas e Containers" },
  { id: "agua", nome: "Água e Esgotamentos" },
]

// Produtos disponíveis
const produtos = [
  // ANDAIMES E ESCORAS - Tubulações e Acessórios
  {
    id: 1,
    nome: "Andaime Tubular",
    categoria: "andaimes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Balancim-3-ZnI93DXnyoxtWGUgLjQ4OlLjpWsUaT.png",
    destaque: true,
    especificacoes: ["Andaimes", "Tubular", "Modular"],
  },
  {
    id: 2,
    nome: "Escora Metálica Regulável",
    categoria: "andaimes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20115016-IgRajCCpWlSMo2I66ESlzx7TUuLjN7.png",
    destaque: true,
    especificacoes: ["Escoras Metálicas", "Regulável", "Até 4m"],
  },
  {
    id: 3,
    nome: "Escora de Muro",
    categoria: "andaimes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20120957-7kVrh4ZL17T9mNQmPgRNmuOzuVe0WR.png",
    destaque: false,
    especificacoes: ["Escoras de Muro", "Contenção", "Ajustável"],
  },
  {
    id: 4,
    nome: "Viga Metálica H20",
    categoria: "andaimes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/61ewb%2BghoPL._AC_SX425_-3NtZMyoEsrE86e6LXaqKoUG9jrojdz.jpg",
    destaque: false,
    especificacoes: ["Vigas Metálicas", "H20", "Para Formas"],
  },
  // FERRAMENTAS ELÉTRICAS - Marteletes e Furadeiras
  {
    id: 5,
    nome: "Martelo Rompedor DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20151519-Tgi7hGbfPkTzJDDgIiRDG0NhkA2K5B.png",
    destaque: true,
    especificacoes: ["Martelos Rompedores", "DeWalt", "1500W"],
  },
  {
    id: 6,
    nome: "Parafusadeira DeWalt 20V",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20140737-ASOzEpB4KThHPUBI3n1tSgXTHVPf84.jpg",
    destaque: true,
    especificacoes: ["Parafusadeiras", "DeWalt", "20V Bateria"],
  },
  {
    id: 7,
    nome: "Serra Circular DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20153704-h37obadGX0GIP0B4JZw47LFDQ51baF.png",
    destaque: true,
    especificacoes: ["Serra Circular", "DeWalt", "254mm"],
  },
  {
    id: 8,
    nome: "Serra Circular de Bancada Mecan",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%20ilustrativa-tZtbNiS5Ab5y2MH1NLXsoDn0CQfiQK.jpg",
    destaque: false,
    especificacoes: ["Serra Circular", "Mecan", "Industrial"],
  },
  {
    id: 9,
    nome: "Serra Mármore Vonder",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/320_6001150022-CtKV6aFETZee2baNx9wyo2UsQalgYm.jpg",
    destaque: false,
    especificacoes: ["Serra Mármore", "Vonder", "1300W"],
  },
  {
    id: 10,
    nome: "Serra Mármore Makita 14\"",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto1100711-ijggPakvW0ReDKcDniVfmICpcBx47s.jpg",
    destaque: false,
    especificacoes: ["Serra Mármore", "Makita", "14\""],
  },
  // COMPACTAÇÃO E TERRAPLANAGEM
  {
    id: 11,
    nome: "Retroescavadeira New Holland",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RETROESCAVADEIRA-xKIEM3HZiEVY408BETZFiXr493Beyr.jpg",
    destaque: true,
    especificacoes: ["Retroescavadeiras", "New Holland", "4x4"],
  },
  {
    id: 12,
    nome: "Rolo Compactador Buffalo BF 1500",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROLOS%20COMPACTADORES-JluVZY4gJNsfX37lUUg5LFl1a32tJE.png",
    destaque: true,
    especificacoes: ["Rolo Compactador", "Buffalo", "BF 1500"],
  },
  {
    id: 13,
    nome: "Mini Escavadeira Yanmar",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miniescavadeira-GkMrlI9ojfEt75SWn3HvzgMK8pcRyC.png",
    destaque: true,
    especificacoes: ["Mini Escavadeira", "Yanmar", "Esteiras"],
  },
  {
    id: 14,
    nome: "Compactador de Solo CSM",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COMPACTADORESDESOLOwebp-x2hg7zJrIS7ghaQISQepBCgWLFDAG9.webp",
    destaque: false,
    especificacoes: ["Compactadores", "CSM", "Sapo"],
  },
  {
    id: 15,
    nome: "Placa Vibratória Buffalo",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLACAS%20VIBRATORIAS-ydaAPhwL0Vf7PSKCo20fKNKToY4mVM.jpg",
    destaque: false,
    especificacoes: ["Placas Vibratórias", "Buffalo", "Gasolina"],
  },
  // PLATAFORMAS ELEVATÓRIAS E CONTAINERS
  {
    id: 16,
    nome: "Plataforma Articulada 11m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%20ELETRICA%2011%20METROS%20SJ30%20ARJE-qaj83Q7041iuyEI3W4upoA572gD2Pv.png",
    destaque: true,
    especificacoes: ["Plataformas Articuladas", "11m", "Elétrica"],
  },
  {
    id: 17,
    nome: "Plataforma Articulada 16m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2016%20m-L1AH0fqKNynMhsugnCea9wEAp97dCs.jpg",
    destaque: true,
    especificacoes: ["Plataformas Articuladas", "16m", "Elétrica"],
  },
  {
    id: 18,
    nome: "Plataforma Articulada 16m Haulotte",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2016%20M%20ELETRICA%20HAULOTTE-SVUBVuvt11Ss4ugxp88x1zQEzs43Zy.webp",
    destaque: false,
    especificacoes: ["Plataformas Articuladas", "16m", "Haulotte"],
  },
  {
    id: 19,
    nome: "Plataforma Articulada 16m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2016%20m%20a%20diesel-avFZq5lrSpADtjU54uTGtHMkS9fYnT.jpg",
    destaque: false,
    especificacoes: ["Plataformas Articuladas", "16m", "Diesel"],
  },
  {
    id: 20,
    nome: "Plataforma Articulada 20m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2020%20M%20ELETRICA%20SJ60%20AJE%2B-am43K2T63us1DWDZiL2dPkLMwBA9fP.jpg",
    destaque: true,
    especificacoes: ["Plataformas Articuladas", "20m", "Elétrica"],
  },
  {
    id: 21,
    nome: "Plataforma Articulada 21m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2021%20m%20eletrica-quvWPsryNSHSbUxenJQBV2noqvFHq3.jpg",
    destaque: false,
    especificacoes: ["Plataformas Articuladas", "21m", "Elétrica"],
  },
  {
    id: 22,
    nome: "Plataforma Articulada 21m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2021%20m%20a%20diesel-chh8vw0iEFOuULu6KLihCM6NGetk2j.jpg",
    destaque: false,
    especificacoes: ["Plataformas Articuladas", "21m", "Diesel"],
  },
  {
    id: 23,
    nome: "Plataforma Articulada 26m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2026%20m%20a%20diesel-MrIXWf74qy6glgebA987JdqvpXLS6a.jpg",
    destaque: true,
    especificacoes: ["Plataformas Articuladas", "26m", "Diesel"],
  },
  {
    id: 24,
    nome: "Plataforma Articulada 28m Diesel",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2028%20M%20A%20DIESEL-WK6Zd2nrcpnCX7VtKaat5zmfNiUxVj.jpeg",
    destaque: false,
    especificacoes: ["Plataformas Articuladas", "28m", "Diesel"],
  },
  {
    id: 25,
    nome: "Plataforma Tesoura 8 metros",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20tesoura%208%20metros-Y01thz88hNWj1wUVrx6bI0GTckOqAA.jpg",
    destaque: true,
    especificacoes: ["Plataformas Tesouras", "8m", "Skyjack"],
  },
  {
    id: 26,
    nome: "Módulo Escritório Container",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4524-Cur90215reEkl2fzZXxGRp2QvGnmIn.jpg",
    destaque: true,
    especificacoes: ["Módulos Escritórios", "Climatizado", "Modular"],
  },
  {
    id: 27,
    nome: "Container Almoxarifado",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4523-LPqwaqeazu6pLD6Xfven4rg95x0qsx.jpg",
    destaque: false,
    especificacoes: ["Containers Almoxarifados", "Modular", "Seguro"],
  },
  // ÁGUA E ESGOTAMENTOS
  {
    id: 28,
    nome: "Lavajato a Gasolina Toyama 3400 PSI",
    categoria: "agua",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LAVAJATO%20GASOLINA%203400-YYaaXDrQDZVNHcKU78MsXGJKsNKohq.jpg",
    destaque: true,
    especificacoes: ["Lavadora Alta Pressão", "Toyama", "3400 PSI"],
  },
  {
    id: 29,
    nome: "Lavajato Elétrico Monofásico/Trifásico",
    categoria: "agua",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LAVAJATO%20MONOFASICAS%20E%20TRIFASICAS-L0k64wCSm0bkcC9bY6Bm7xWEGuvjik.jpg",
    destaque: true,
    especificacoes: ["Lavadora Alta Pressão", "Kärcher", "Industrial"],
  },
  {
    id: 30,
    nome: "Bomba Submersa de Mangote",
    categoria: "agua",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOMBAS%20SUB%20DE%20MANGOTE-Jicu7mUxoiaBvgHILDzBkHx5vDGG4U.jpg",
    destaque: false,
    especificacoes: ["Bomba Submersa", "Vibromak", "Com Mangote"],
  },
  {
    id: 31,
    nome: "Bomba Submersível Schneider",
    categoria: "agua",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOMBAS%20SUBMERSIVEIS-0kcFOOXW8mi1e7j8FDPj2734ktWUIn.jpg",
    destaque: true,
    especificacoes: ["Bomba Submersível", "Schneider", "Esgotamento"],
  },
]

const ITEMS_PER_PAGE = 12

export default function MaquinasPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos")
  const [busca, setBusca] = useState("")
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE)
  const loaderRef = useRef<HTMLDivElement>(null)

  const produtosFiltrados = produtos.filter((produto) => {
    const matchCategoria = categoriaAtiva === "todos" || produto.categoria === categoriaAtiva
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase())
    return matchCategoria && matchBusca
  })

  const produtosVisiveis = produtosFiltrados.slice(0, visibleItems)
  const hasMore = visibleItems < produtosFiltrados.length

  // Reset visible items when filter changes
  useEffect(() => {
    setVisibleItems(ITEMS_PER_PAGE)
  }, [categoriaAtiva, busca])

  // Infinite scroll observer
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries
    if (target.isIntersecting && hasMore) {
      setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, produtosFiltrados.length))
    }
  }, [hasMore, produtosFiltrados.length])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "200px",
      threshold: 0
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loaderRef.current) observer.observe(loaderRef.current)
    
    return () => observer.disconnect()
  }, [handleObserver])

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
              prefetch={true}
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#FFCC29] transition-colors mb-6"
            >
              <ArrowLeft className="size-4" />
              Voltar para o início
            </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Máquinas e <span className="text-[#FFCC29]">Equipamentos</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Locação de equipamentos para construção civil, obras e indústria. 
              Equipamentos revisados e prontos para uso imediato.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span className="text-white text-sm">Entrega rápida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle2 className="size-5 text-[#FFCC29]" />
                <span className="text-white text-sm">Suporte técnico</span>
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
            {produtosVisiveis.map((produto) => (
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
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    quality={75}
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
                    message={`Olá! Gostaria de verificar disponibilidade e orçamento para: ${produto.nome}`}
                  >
                    Verificar disponibilidade
                  </ContactButton>
                </div>
              </div>
            ))}
          </div>

          {/* Infinite scroll loader */}
          {hasMore && (
            <div ref={loaderRef} className="col-span-full flex justify-center py-8">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-6 h-6 border-2 border-[#FFCC29] border-t-transparent rounded-full animate-spin" />
                <span>Carregando mais equipamentos...</span>
              </div>
            </div>
          )}

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
            Não encontrou o que procura?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Temos uma ampla variedade de equipamentos. Entre em contato e nossos 
            especialistas vão ajudar você a encontrar a solução ideal para sua obra.
          </p>
          <ContactButton
            size="lg"
            className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold px-8"
            message="Olá! Estou procurando um equipamento específico para locação."
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
