"use client"

import { useState, useEffect, useRef, useCallback, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { ContactButton } from "@/components/contact-button"
import { Search, ArrowLeft, CheckCircle2, Loader2, ChevronRight, X, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


// Categorias de equipamentos
const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "agua", nome: "Água e Esgotamentos" },
  { id: "compactacao", nome: "Compactação e Terraplanagem" },
  { id: "concretagem", nome: "Concretagem" },
  { id: "elevacao", nome: "Elevação de Carga e Pessoas" },
  { id: "ferramentas", nome: "Ferramentas Elétricas" },
  { id: "geradores", nome: "Geradores de Energia" },
  { id: "jardinagem", nome: "Jardinagem" },
  { id: "martelos", nome: "Martelos e Marteletes" },
  { id: "modulos", nome: "Módulos e Containers" },
  { id: "tubulacoes", nome: "Tubulações e Acessórios" },
]

// Produtos disponíveis — ordenados alfabeticamente por categoria
const produtos = [
  // ÁGUA E ESGOTAMENTOS (A-Z)
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
  // COMPACTAÇÃO E TERRAPLANAGEM (A-Z)
  {
    id: 14,
    nome: "Compactador de Solo CSM",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COMPACTADORESDESOLOwebp-x2hg7zJrIS7ghaQISQepBCgWLFDAG9.webp",
    destaque: false,
    especificacoes: ["Compactadores", "CSM", "Sapo"],
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
    id: 15,
    nome: "Placa Vibratória Buffalo",
    categoria: "compactacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLACAS%20VIBRATORIAS-ydaAPhwL0Vf7PSKCo20fKNKToY4mVM.jpg",
    destaque: false,
    especificacoes: ["Placas Vibratórias", "Buffalo", "Gasolina"],
  },
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
  // CONCRETAGEM (A-Z)
  {
    id: 69,
    nome: "Alisadora de Piso Buffalo",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ALISADORA%20DE%20PISO-NNLhfpHnXfZ87nEpTRdpILHXH2Nvfz.webp",
    destaque: true,
    especificacoes: ["Alisadora de Piso", "Buffalo", "Gasolina"],
  },
  {
    id: 65,
    nome: "Betoneira Elétrica ou a Gasolina Menegotti Infinity 400",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BETONEIRAS%20ELE%CC%81TRICAS%20OU%20A%20GASOLINA-uzWX1aiDb6bilDG5LPHgdb9my7g2J1.jpg",
    destaque: true,
    especificacoes: ["Betoneira", "Menegotti Infinity 400", "Elétrica/Gasolina"],
  },
  {
    id: 66,
    nome: "Cortadora de Piso Vibromak CPV-350",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CORTADORAS%20DE%20PISO-tnknaX1HS6RpU1DaA5lszsNxhW5rvJ.png",
    destaque: true,
    especificacoes: ["Cortadora de Piso", "Vibromak CPV-350", "Gasolina"],
  },
  {
    id: 64,
    nome: "Forma Plástica para Pilares Planex",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Planex.jpg.jpeg-uuSatCEygiATwq5tUfB30xPQlbDhnj.webp",
    destaque: true,
    especificacoes: ["Forma Plástica", "Planex", "Pilares"],
  },
  {
    id: 68,
    nome: "Régua Vibratória para Concreto",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/REGUAS%20VIBRATORIAS.jfif-D5PO0JhF5W0BHd5FIBfgi4Qj5MWdDX.jpeg",
    destaque: false,
    especificacoes: ["Régua Vibratória", "Concreto", "Nivelamento"],
  },
  {
    id: 67,
    nome: "Vibrador de Concreto Lynus LMP-1500",
    categoria: "concretagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIBRADORES%20DE%20CONCRETO-r9Nm9KKH8zoZ5Oti42bbAgySIzBo53.webp",
    destaque: false,
    especificacoes: ["Vibrador de Concreto", "Lynus LMP-1500", "1500W"],
  },
  // ELEVAÇÃO DE CARGA E PESSOAS (A-Z)
  {
    id: 61,
    nome: "Balancim Menegotti 2 a 6 metros",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BALANCIM%20DE%202%20A%206%20METROS-bD8aVorzVweAcyR8Q9DX0tr01BoFLd.png",
    destaque: false,
    especificacoes: ["Balancim", "Menegotti", "2 a 6 metros"],
  },
  {
    id: 62,
    nome: "Caminhão Munck 7 a 52 Toneladas",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CAMINHAO%20MUNCK%20DE%207%20ATE%2052%20TON-AXz4Buwlaw8vV5dPHDm7M3GlMNmP9h.png",
    destaque: true,
    especificacoes: ["Caminhão Munck", "Promina", "7 a 52 ton"],
  },
  {
    id: 59,
    nome: "Empilhadeira a Combustão ou Elétrica Strongway",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EMPILHADEIRAS%20A%20COMBUSTAO%CC%83%20OU%20ELETRICA-qUV4Ca5QfVJRvhYJ9GAo6a2WwgVhBe.png",
    destaque: true,
    especificacoes: ["Empilhadeira", "Strongway", "Elétrica/Combustão"],
  },
  {
    id: 63,
    nome: "Plataforma Articulada 28m SkyJack SJ85 AJ",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2028%20METROS-sSG9Zb2VY8dUIw9LlOCFaudDMkZipa.jpg",
    destaque: true,
    especificacoes: ["Plataforma Articulada", "SkyJack SJ85 AJ", "28 metros"],
  },
  {
    id: 58,
    nome: "Plataforma Articulada 16m Zoomlion ZA14J",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMASARTICULADAS16METROS-5MiWzEG6j8uL4JxRI9CKDGUFT4BZWB.jpg",
    destaque: true,
    especificacoes: ["Plataforma Articulada", "Zoomlion", "16 metros"],
  },
  {
    id: 60,
    nome: "Plataforma Tesoura 12m Zoomlion",
    categoria: "elevacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMASTESOURA12M-VLHsMwT2uqqG0BloXaehjRQmKNdBcR.webp",
    destaque: true,
    especificacoes: ["Plataforma Tesoura", "Zoomlion", "12 metros"],
  },
  // FERRAMENTAS ELÉTRICAS (A-Z)
  {
    id: 55,
    nome: "Esmerilhadeira DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESMERILHADEIRAS-ijkx9QTxBbJ8qmDysB0cgiybj57no6.webp",
    destaque: false,
    especificacoes: ["Esmerilhadeira", "DeWalt", "850W"],
  },
  {
    id: 54,
    nome: "Parafusadeiras DeWalt 12V",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PARAFUSADEIRAS-mRnxgHV4jzZlWWU3z5gp7qDKXKvEGu.webp",
    destaque: true,
    especificacoes: ["Parafusadeira", "DeWalt", "12V Max"],
  },
  {
    id: 53,
    nome: "Serra de Bancada DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SERRA%20DE%20BANCADA-B3NNod3imzvH85nN097tWETJdOKKaU.png",
    destaque: true,
    especificacoes: ["Serra de Bancada", "DeWalt", "1800W"],
  },
  {
    id: 56,
    nome: "Serra Circular DeWalt 7.1/4\" 1400W",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DWE560-SERRA-CIRCULAR-DEWALT-7-1-4-POL.-1400W-110V-Qp9kDdCfzmD6XPwqH4AwCfjLYy3ZtI.webp",
    destaque: true,
    especificacoes: ["Serra Circular", "DeWalt", "7.1/4\" 1400W"],
  },
  {
    id: 57,
    nome: "Serra Mármore DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SERRAMARMORE-DXTaS6Ntcvxb6ncmjcj2iaswjsY6oB.webp",
    destaque: false,
    especificacoes: ["Serra Mármore", "DeWalt", "1050W"],
  },
  // GERADORES DE ENERGIA (A-Z)
  {
    id: 46,
    nome: "Geradores 11 a 18 KVA Mono/Trifásicos Buffalo",
    categoria: "geradores",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GERADORES%20DE%2011%20A%2018%20KVA%20MONOFASICOS%20E%20TRIFASICOS-28TABPDSWAhqfl1bXmLcoPHfOXCjec.webp",
    destaque: true,
    especificacoes: ["Gerador", "Buffalo BFGE 15000", "11 a 18 KVA"],
  },
  {
    id: 47,
    nome: "Geradores Inverter 2,5 a 9 KVA Buffalo",
    categoria: "geradores",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GERADORES%20INVERTER%20DE%202%2C5%20A%209%20KVA-bOGfqy45hWkeBwU7QDZdO1QuCyCGjf.webp",
    destaque: false,
    especificacoes: ["Gerador Inverter", "Buffalo BFG 2000", "2,5 a 9 KVA"],
  },
  {
    id: 45,
    nome: "Geradores Trifásicos a Diesel 50 a 200 KVA MWM",
    categoria: "geradores",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GERADORES%20%20TRIFASICOS%20A%20DIESEL%20DE%2050%20A%20200%20KVAs-FBGDrpWXOMSsohzCPQ9Z0D29URL3dW.webp",
    destaque: true,
    especificacoes: ["Gerador Trifásico", "MWM", "50 a 200 KVA"],
  },
  // JARDINAGEM (A-Z)
  {
    id: 35,
    nome: "Aparador de Cerca Viva Makita",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APARADORES%20DE%20CERCA%20VIVA%20ELETRICOS%20E%20A%20BATERIA-vfM7iUt85rKjGsjNl8RuF4jZ7Jbu3C.png",
    destaque: false,
    especificacoes: ["Aparador Cerca Viva", "Makita", "18V Bateria"],
  },
  {
    id: 32,
    nome: "Motosserra a Bateria DeWalt",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTOSSERRAS%20A%20BATERIA-xZzRanxNxKQYIoZv6Q6YBnzeUh4TiP.png",
    destaque: true,
    especificacoes: ["Motosserra", "DeWalt", "60V FlexVolt"],
  },
  {
    id: 33,
    nome: "Roçadeira a Bateria e a Gasolina Makita",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ROC%CC%A7ADEIRAS%20A%20BATERIA%20E%20A%20GASOLINA-uohoXsff5v433wFZ6TmfTX5YWn5s0K.png",
    destaque: true,
    especificacoes: ["Roçadeira", "Makita", "18V Bateria"],
  },
  {
    id: 34,
    nome: "Soprador e Aspirador a Bateria Makita",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOPRADORES%20E%20ASPIRADORES%20A%20GASOLINA%20E%20A%20BATERIA-KOW1h6yjO7tH1TxFpjwUWcTUEzKNsh.png",
    destaque: false,
    especificacoes: ["Soprador", "Makita", "36V Brushless"],
  },
  // MARTELOS E MARTELETES (A-Z)
  {
    id: 42,
    nome: "Marteletes Combinados 2,3 a 4,4 kg Makita",
    categoria: "martelos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MARTELETES%20COMBINADOS%20DE%202%2C3%20A%204%2C4%20KG-c65IkxhjZrm7J9vEnDpOf3LbogZ3Dz.webp",
    destaque: true,
    especificacoes: ["Martelete", "Makita", "2,3 a 4,4 kg"],
  },
  {
    id: 44,
    nome: "Martelos Demolidores 16 a 30 kg DeWalt",
    categoria: "martelos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MARTELOSDEMOLIDORES%20DE%2016%20A%2030%20KG-JfGwkEoCWiHeHXUGczh0Oakpl8nBgA.png",
    destaque: false,
    especificacoes: ["Martelo Demolidor", "DeWalt", "16 a 30 kg"],
  },
  {
    id: 43,
    nome: "Martelos Rompedores 5 a 12 kg Menegotti",
    categoria: "martelos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MARTELOS%20ROMPEDORES%20DE%205%20A%2012%20KG-EhW2FlkJoIdEV0sxW8HlNeJSr6V4mB.jpg",
    destaque: true,
    especificacoes: ["Martelo Rompedor", "Menegotti", "5 a 12 kg"],
  },
  // MÓDULOS E CONTAINERS (A-Z)
  {
    id: 52,
    nome: "Container Almoxarifado 6m",
    categoria: "modulos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Almoxarife%20de%206mt-hIwEsNer8L03QwPWpmaQTXjcVFWDu6.png",
    destaque: false,
    especificacoes: ["Container", "Almoxarifado", "6 metros"],
  },
  {
    id: 49,
    nome: "Container Almoxarifado 3m",
    categoria: "modulos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20almoxarife%20de%203mt-YkvoJfGxLzTIOPJMCaaga5vvuMh3A0.png",
    destaque: true,
    especificacoes: ["Container", "Almoxarifado", "3 metros"],
  },
  {
    id: 50,
    nome: "Container Banheiro 3m",
    categoria: "modulos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Container%20banheiro%203mt-eFHXrIguA3yZNcgnCFQ3Rx80jmQQbp.jpeg",
    destaque: false,
    especificacoes: ["Container Banheiro", "Sanitários", "3 metros"],
  },
  {
    id: 51,
    nome: "Módulo Escritório 6m",
    categoria: "modulos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mo%CC%81dulo%20escritorio%206mt-p76IGqN6t4UQJlqWw1KusPrXgw4m6X.png",
    destaque: true,
    especificacoes: ["Módulo Escritório", "Ar-condicionado", "6 metros"],
  },
  {
    id: 48,
    nome: "Módulo Vitrine 3m",
    categoria: "modulos",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mo%CC%81dulo%20Vitrine%203mt%20%282%29-7XrtDheD5CVo5kgx8LEB8m5SkciXpS.png",
    destaque: true,
    especificacoes: ["Módulo Vitrine", "3 metros", "Climatizado"],
  },
  // TUBULAÇÕES E ACESSÓRIOS (A-Z)
  {
    id: 37,
    nome: "Andaimes Tubulares",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANDAIMES-OoCZJbh5YMhaGEm1YXVxh3ClsV9mQt.jpg",
    destaque: true,
    especificacoes: ["Andaimes", "Tubular", "Modular"],
  },
  {
    id: 39,
    nome: "Cruzetas Metálicas",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CRUZETAS%20METALICAS-WlHYLaJ3sXfkRgLnpGA6sN8ysdtjYU.jpg",
    destaque: false,
    especificacoes: ["Cruzetas", "Metálicas", "Acessório"],
  },
  {
    id: 38,
    nome: "Escora de Muro",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESCORADEMURO-KYYlC36z19Y349QzuigcsGiiRmYEie.png",
    destaque: false,
    especificacoes: ["Escora de Muro", "Regulável", "Metálica"],
  },
  {
    id: 40,
    nome: "Escoras Metálicas Reguláveis",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ESCORAS-dN77oarPGLlgusuWtOlR2WI06CgPiJ.png",
    destaque: true,
    especificacoes: ["Escoras", "Metálicas", "Regulável"],
  },
  {
    id: 36,
    nome: "Painéis de Escoramento",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PAINEIS%20DE%20ESCORAMENTO-Kc3hVYESRjMEkDisrERLKjV16hAQlA.webp",
    destaque: true,
    especificacoes: ["Painéis", "Escoramento", "Modular"],
  },
  {
    id: 41,
    nome: "Vigas Metálicas",
    categoria: "tubulacoes",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIGASMETALICAS-ukfSh0PMSSOil7nCK08Fy6VZeHrvbt.webp",
    destaque: false,
    especificacoes: ["Vigas Metálicas", "Perfil", "Estrutural"],
  },
]

const ITEMS_PER_PAGE = 12

function MaquinasLoading() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] flex items-center justify-center">
      <Loader2 className="size-8 animate-spin text-[#FFCC29]" />
    </div>
  )
}

export default function MaquinasPage() {
  return (
    <Suspense fallback={<MaquinasLoading />}>
      <MaquinasContent />
    </Suspense>
  )
}

function MaquinasContent() {
  const searchParams = useSearchParams()
  const [categoriaAtiva, setCategoriaAtiva] = useState(() => {
    return searchParams.get("categoria") ?? "todos"
  })
  const [busca, setBusca] = useState("")
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)

  // Sync category from URL params on mount and navigation
  useEffect(() => {
    const cat = searchParams.get("categoria")
    if (cat) {
      setCategoriaAtiva(cat)
      setVisibleItems(ITEMS_PER_PAGE)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [searchParams])

  const produtosFiltrados = produtos
    .filter((produto) => {
      const matchCategoria = categoriaAtiva === "todos" || produto.categoria === categoriaAtiva
      const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase())
      return matchCategoria && matchBusca
    })
    .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))

  const produtosVisiveis = produtosFiltrados.slice(0, visibleItems)
  const hasMore = visibleItems < produtosFiltrados.length

  const handleCategoriaClick = (categoriaId: string) => {
    setCategoriaAtiva(categoriaId)
    setSidebarOpen(false)
  }

  // Contagem de produtos por categoria
  const contagemPorCategoria = categorias.reduce((acc, cat) => {
    if (cat.id === "todos") {
      acc[cat.id] = produtos.length
    } else {
      acc[cat.id] = produtos.filter(p => p.categoria === cat.id).length
    }
    return acc
  }, {} as Record<string, number>)

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

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="font-bold text-lg text-[#363334]">Categorias</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="size-5 text-gray-600" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => handleCategoriaClick(categoria.id)}
                className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                  categoriaAtiva === categoria.id
                    ? "bg-[#FFCC29]/10 text-[#363334] border-l-4 border-[#FFCC29]"
                    : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                }`}
              >
                <span className="font-medium">{categoria.nome}</span>
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  categoriaAtiva === categoria.id
                    ? "bg-[#FFCC29] text-[#363334]"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {contagemPorCategoria[categoria.id]}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content with Sidebar */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-[160px] bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="p-4 bg-[#363334]">
                  <h2 className="font-bold text-white">Categorias</h2>
                </div>
                <nav className="py-2">
                  {categorias.map((categoria) => (
                    <button
                      key={categoria.id}
                      onClick={() => handleCategoriaClick(categoria.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                        categoriaAtiva === categoria.id
                          ? "bg-[#FFCC29]/10 text-[#363334] border-l-4 border-[#FFCC29]"
                          : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      <span className="font-medium text-sm">{categoria.nome}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        categoriaAtiva === categoria.id
                          ? "bg-[#FFCC29] text-[#363334]"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        {contagemPorCategoria[categoria.id]}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Products Area */}
            <div className="flex-1 min-w-0">
              {/* Search and Mobile Filter Button */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-[#363334] text-white rounded-lg font-medium shrink-0"
                >
                  <SlidersHorizontal className="size-5" />
                  <span>Filtros</span>
                </button>
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar equipamento..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="pl-10 bg-white border-gray-200 focus:border-[#FFCC29] focus:ring-[#FFCC29]"
                  />
                </div>
              </div>

              {/* Active Category Badge */}
              {categoriaAtiva !== "todos" && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Categoria:</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFCC29] text-[#363334] rounded-full text-sm font-medium">
                    {categorias.find(c => c.id === categoriaAtiva)?.nome}
                    <button 
                      onClick={() => setCategoriaAtiva("todos")}
                      className="ml-1 hover:bg-[#363334]/10 rounded-full p-0.5"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                </div>
              )}

              {/* Results count */}
              <p className="text-gray-600 mb-6">
                {produtosFiltrados.length} equipamento{produtosFiltrados.length !== 1 ? "s" : ""} encontrado{produtosFiltrados.length !== 1 ? "s" : ""}
                <span className="text-gray-400 text-sm ml-2">(ordenados de A-Z)</span>
              </p>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          </div>
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
