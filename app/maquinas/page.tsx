"use client"

import { useState, useEffect, useRef, useCallback } from "react"
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
  { id: "plataformas", nome: "Plataformas Elevatórias" },
  { id: "soldas", nome: "Máquinas de Solda" },
  { id: "containers", nome: "Containers" },
  { id: "pesados", nome: "Equipamentos Pesados" },
  { id: "geradores", nome: "Geradores" },
  { id: "ferramentas", nome: "Ferramentas Elétricas" },
  { id: "jardinagem", nome: "Jardinagem" },
  { id: "seguranca", nome: "Segurança" },
  { id: "movimentacao", nome: "Movimentação de Cargas" },
  { id: "limpeza", nome: "Limpeza e Lavagem" },
  { id: "concreto", nome: "Concreto e Acabamento" },
  { id: "corte", nome: "Corte e Demolição" },
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
    nome: "Plataforma Articulada 11m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%20ELETRICA%2011%20METROS%20SJ30%20ARJE-qaj83Q7041iuyEI3W4upoA572gD2Pv.png",
    destaque: false,
    especificacoes: ["Altura: 11m", "Elétrica", "Skyjack"],
  },
  {
    id: 3,
    nome: "Plataforma Articulada 16m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2016%20m-L1AH0fqKNynMhsugnCea9wEAp97dCs.jpg",
    destaque: true,
    especificacoes: ["Altura: 16m", "Elétrica", "Zoomlion"],
  },
  {
    id: 4,
    nome: "Plataforma Articulada 16m Elétrica Haulotte",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2016%20M%20ELETRICA%20HAULOTTE-SVUBVuvt11Ss4ugxp88x1zQEzs43Zy.webp",
    destaque: false,
    especificacoes: ["Altura: 16m", "Elétrica", "Haulotte"],
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
    nome: "Plataforma Articulada 20m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PLATAFORMA%20ARTICULADA%2020%20M%20ELETRICA%20SJ60%20AJE%2B-am43K2T63us1DWDZiL2dPkLMwBA9fP.jpg",
    destaque: true,
    especificacoes: ["Altura: 20m", "Elétrica", "Skyjack"],
  },
  {
    id: 7,
    nome: "Plataforma Articulada 21m Elétrica",
    categoria: "plataformas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plataforma%20articulada%2021%20m%20eletrica-quvWPsryNSHSbUxenJQBV2noqvFHq3.jpg",
    destaque: false,
    especificacoes: ["Altura: 21m", "Elétrica", "Zoomlion"],
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
    nome: "Máquina de Solda Inversora 120A Lynus",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20135523-j9aMzEoUjuL4KuUSLvupdp21jiEbqi.png",
    destaque: false,
    especificacoes: ["120A", "Inversora", "Lynus"],
  },
  {
    id: 12,
    nome: "Máquina de Solda Inversora AWT",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D_NQ_NP_654226-MLB70479272732_072023-O-M1DD4GbRSGf3al5c6YjhLgQDXot35E.webp",
    destaque: false,
    especificacoes: ["Inversora", "Portátil", "AWT"],
  },
  {
    id: 13,
    nome: "Máquina de Solda Inversora Kende",
    categoria: "soldas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20135635-EUXI5jfB8WBYKxSfOEbP8tm2HixPpT.png",
    destaque: true,
    especificacoes: ["160A", "Inversora", "Kende"],
  },
  {
    id: 14,
    nome: "Máquina de Solda Inversora CSM",
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
    nome: "Container Módulo Vitrine",
    categoria: "containers",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4523-LPqwaqeazu6pLD6Xfven4rg95x0qsx.jpg",
    destaque: true,
    especificacoes: ["Modular", "Escritório", "Vitrine"],
  },
  {
    id: 17,
    nome: "Container Módulo Escritório",
    categoria: "containers",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4524-Cur90215reEkl2fzZXxGRp2QvGnmIn.jpg",
    destaque: false,
    especificacoes: ["Modular", "Climatizado", "Escritório"],
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
  // Ferramentas Elétricas
  {
    id: 21,
    nome: "Serra de Bancada DeWalt",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20153704-h37obadGX0GIP0B4JZw47LFDQ51baF.png",
    destaque: true,
    especificacoes: ["DeWalt", "Profissional", "254mm"],
  },
  {
    id: 22,
    nome: "Serra Circular de Bancada Mecan",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%20ilustrativa-tZtbNiS5Ab5y2MH1NLXsoDn0CQfiQK.jpg",
    destaque: false,
    especificacoes: ["Mecan", "Industrial", "Bancada"],
  },
  {
    id: 23,
    nome: "Lixadeira Orbital Makita a Bateria",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20154633-dC3pAXuEBXcACCQd2lmgD87aW7S0tG.png",
    destaque: false,
    especificacoes: ["Makita", "18V", "Bateria"],
  },
  // Jardinagem
  {
    id: 24,
    nome: "Aparador de Cerca Viva Elétrico",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20102557-8OSPycp7fQ7fZczGi9dFiXlvSP2fuB.png",
    destaque: false,
    especificacoes: ["Elétrico", "500W", "Corte 51cm"],
  },
  {
    id: 25,
    nome: "Soprador de Folhas Makita a Gasolina",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20104845-B4lvfhQxLIQGF2nuRLGw20mVQJ9lOU.png",
    destaque: true,
    especificacoes: ["Makita", "24.5cc", "Gasolina"],
  },
  {
    id: 26,
    nome: "Soprador de Folhas Makita a Bateria",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20104942-zQyYeEGPgnvogarUWxMTKaIoo2iHbx.png",
    destaque: false,
    especificacoes: ["Makita", "36V", "Com Kit Bateria"],
  },
  {
    id: 27,
    nome: "Motosserra DeWalt 16\" a Bateria",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20101710-yEYXQDLb4mZTFXVTECSR8CMJfoyArT.png",
    destaque: true,
    especificacoes: ["DeWalt", "60V FlexVolt", "40cm"],
  },
  {
    id: 28,
    nome: "Motosserra Makita 18V a Bateria",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20102128-3PbM4yCZUo5ahZHp3bKVvAj6iZNgrz.png",
    destaque: false,
    especificacoes: ["Makita", "18V", "Com Kit Bateria"],
  },
  {
    id: 29,
    nome: "Roçadeira Makita a Bateria com Kit",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20103819-EKAEBVt0vZIV8jwwLFj1AKEx13RAPO.png",
    destaque: false,
    especificacoes: ["Makita", "36V", "Com 2 Baterias"],
  },
  {
    id: 30,
    nome: "Roçadeira Makita a Bateria",
    categoria: "jardinagem",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20103650-5uC6NgTWqWCCbEX7XCDuf0AdJWibX4.png",
    destaque: false,
    especificacoes: ["Makita", "18V", "Brushless"],
  },
  // Segurança
  {
    id: 31,
    nome: "Cinto de Segurança Paraquedista com Talabarte",
    categoria: "seguranca",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20120957-7kVrh4ZL17T9mNQmPgRNmuOzuVe0WR.png",
    destaque: true,
    especificacoes: ["NR-35", "4 Pontos", "Com Talabarte"],
  },
  {
    id: 32,
    nome: "Cinto de Segurança Completo Laranja",
    categoria: "seguranca",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/61ewb%2BghoPL._AC_SX425_-3NtZMyoEsrE86e6LXaqKoUG9jrojdz.jpg",
    destaque: false,
    especificacoes: ["NR-35", "5 Pontos", "Com Absorvedor"],
  },
  {
    id: 33,
    nome: "Escada Extensível de Fibra de Vidro",
    categoria: "seguranca",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20115016-IgRajCCpWlSMo2I66ESlzx7TUuLjN7.png",
    destaque: true,
    especificacoes: ["Fibra de Vidro", "Extensível", "Isolada"],
  },
  // Movimentação de Cargas
  {
    id: 34,
    nome: "Balancim Suspenso Construmaq",
    categoria: "movimentacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Balancim-3-ZnI93DXnyoxtWGUgLjQ4OlLjpWsUaT.png",
    destaque: true,
    especificacoes: ["Construmaq", "2,5m", "Até 500kg"],
  },
  {
    id: 35,
    nome: "Guincho Hidráulico de Oficina FortG",
    categoria: "movimentacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20122152-jP18DAZuqVPu7GWiKQ6Ym9yfSRZdMx.png",
    destaque: false,
    especificacoes: ["FortG", "2 Toneladas", "Hidráulico"],
  },
  {
    id: 36,
    nome: "Mini Grua Elétrica de Coluna",
    categoria: "movimentacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20121340-UVaiNcmzmu4H6BfCXNf2q5YxVRzAxb.png",
    destaque: true,
    especificacoes: ["Elétrica", "500kg", "Rotativa"],
  },
  {
    id: 37,
    nome: "Tartaruga para Movimentação de Cargas",
    categoria: "movimentacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20120212-y52J3R3OIoeTUTLq6ftfHvn16bLn2M.png",
    destaque: false,
    especificacoes: ["6 Toneladas", "Rodas Giratórias", "Com Alavanca"],
  },
  // Compactadores
  {
    id: 38,
    nome: "Placa Vibratória Compactadora Buffalo",
    categoria: "pesados",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8102f992eba64e8efe7531921324141f-biOdbPfmRH8zPhpojgY6nORUIC4kKt.jpg",
    destaque: false,
    especificacoes: ["Buffalo", "Motor Honda", "90kg"],
  },
  {
    id: 39,
    nome: "Placa Vibratória Compactadora Reversível",
    categoria: "pesados",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/259952_1-tHcBuK54YgRiYVYyzy77nhsFTu14UI.jpg",
    destaque: true,
    especificacoes: ["Toyama", "Reversível", "160kg"],
  },
  {
    id: 40,
    nome: "Placa Vibratória Compactadora",
    categoria: "pesados",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-04%20102413-KZtNkV3JTwIHm1P2vVdPdVUeFZdoal.png",
    destaque: false,
    especificacoes: ["Gasolina", "Compactação", "Solo"],
  },
  // Limpeza e Lavagem
  {
    id: 41,
    nome: "Lavadora de Alta Pressão Kärcher HD 585",
    categoria: "limpeza",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD%20585-N3mCHE4CUMvA9JoKHSLwe5UsBAnaMA.jpg",
    destaque: true,
    especificacoes: ["Kärcher", "Profissional", "Elétrica"],
  },
  {
    id: 42,
    nome: "Lavadora de Alta Pressão Kärcher HD 555",
    categoria: "limpeza",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HD%20555-ZJCDqilsrGnsPE1PZue0LFJzrHBztr.jpg",
    destaque: false,
    especificacoes: ["Kärcher", "Compacta", "Elétrica"],
  },
  {
    id: 43,
    nome: "Lavadora de Alta Pressão Kärcher HD TRI 10/25",
    categoria: "limpeza",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HDTRI%2010%2025-fKt0hcpU2EHhuYfsAD18RLyQbRJzaX.jpg",
    destaque: true,
    especificacoes: ["Kärcher", "Industrial", "Trifásica"],
  },
  {
    id: 44,
    nome: "Lavadora de Alta Pressão Toyama XP 3400 a Gasolina",
    categoria: "limpeza",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LAVAJATO%20GASOLINA%203400-R0iGdbDLk5xKXqG15moTPzMgdkfBKR.jpg",
    destaque: true,
    especificacoes: ["Toyama", "3400 PSI", "Gasolina"],
  },
  {
    id: 45,
    nome: "Lavadora de Alta Pressão Chiaperini com Sucção",
    categoria: "limpeza",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LAVAJATOSUCC%CC%A7AO-xxY90IqoM8vjITJjTzeO1tW1SlvJiZ.png",
    destaque: false,
    especificacoes: ["Chiaperini", "Com Sucção", "LJ 3100"],
  },
  // Concreto e Acabamento
  {
    id: 46,
    nome: "Alisadora de Concreto (Helicóptero)",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ALISADORA-aWJiFhZjyTWDNwQ1TC6xULAiJKWsRm.jpg",
    destaque: true,
    especificacoes: ["Gasolina", "90cm", "Para Pisos"],
  },
  {
    id: 47,
    nome: "Desempenadeira Elétrica Menegotti",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESEMPENADEIRA-GTbyj21y6nJseA0FG4y1gDG1fwP3tR.png",
    destaque: true,
    especificacoes: ["Menegotti", "Elétrica", "Acabamento"],
  },
  {
    id: 48,
    nome: "Politriz para Concreto",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/politriz-para-concreto-3sA29CYXGy0lK2HWxR4gHp5GFfZyQs.jpg",
    destaque: false,
    especificacoes: ["Industrial", "Polimento", "Pisos"],
  },
  {
    id: 49,
    nome: "Vibrador de Concreto Portátil Lynus",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIBRADORPORTAIL-EHIXnikptF90bUC4ZNzIo21Ifv7oRK.png",
    destaque: false,
    especificacoes: ["Lynus", "Portátil", "1500W"],
  },
  {
    id: 50,
    nome: "Motor de Vibração de Concreto CSM",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTORAF2%2C40-UiUiBDLJPBjRa4kDRM6D7sceEIc9o2.jpg",
    destaque: false,
    especificacoes: ["CSM", "Com Mangote", "2,4m"],
  },
  {
    id: 51,
    nome: "Bomba Submersa com Motor a Gasolina Buffalo",
    categoria: "concreto",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bombasubmangote-A1GD0fHzxO0Z1CMob33x2BQ8Uiy0oD.jpg",
    destaque: false,
    especificacoes: ["Buffalo", "Gasolina", "Com Mangote"],
  },
  // Corte e Demolição
  {
    id: 52,
    nome: "Serra de Corte de Concreto DeWalt FlexVolt 60V",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20142703-E0PlaSPvi777WY1rXCsEd4zp1H7EWQ.png",
    destaque: true,
    especificacoes: ["DeWalt", "60V FlexVolt", "A Bateria"],
  },
  {
    id: 53,
    nome: "Cortadora de Piso e Asfalto Vibromak CPV-350",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20151056-FZ56MPKmjlsmKb6mJmUj4KkS46Nx2J.png",
    destaque: true,
    especificacoes: ["Vibromak", "14\"", "Gasolina"],
  },
  {
    id: 54,
    nome: "Serra de Corte 14\" Makita",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto1100711-ijggPakvW0ReDKcDniVfmICpcBx47s.jpg",
    destaque: false,
    especificacoes: ["Makita", "14\"", "Elétrica"],
  },
  {
    id: 55,
    nome: "Serra Policorte DeWalt 14\"",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71U62zzbuaL._AC_SL1500_-tIvjpBTOBvrcJ6uEG9Eg6oSMzw13LT.jpg",
    destaque: true,
    especificacoes: ["DeWalt", "2200W", "14\""],
  },
  {
    id: 56,
    nome: "Serra Sabre DeWalt a Bateria 20V",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20151519-Tgi7hGbfPkTzJDDgIiRDG0NhkA2K5B.png",
    destaque: false,
    especificacoes: ["DeWalt", "20V", "Com Kit Bateria"],
  },
  {
    id: 57,
    nome: "Serra Mármore Vonder",
    categoria: "corte",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/320_6001150022-CtKV6aFETZee2baNx9wyo2UsQalgYm.jpg",
    destaque: false,
    especificacoes: ["Vonder", "1300W", "125mm"],
  },
  {
    id: 58,
    nome: "Esmerilhadeira Angular DeWalt 4.5\"",
    categoria: "ferramentas",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202023-09-01%20140737-ASOzEpB4KThHPUBI3n1tSgXTHVPf84.jpg",
    destaque: true,
    especificacoes: ["DeWalt", "900W", "4.5\""],
  },
  // Movimentação
  {
    id: 59,
    nome: "Carrinho de Mão Tramontina Extraforte",
    categoria: "movimentacao",
    imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CARRINHO%20DE%20MAO-W6YhSSzKOPavrS3tPPfJ9MZ03ifwp2.png",
    destaque: false,
    especificacoes: ["Tramontina", "Extraforte", "80L"],
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
