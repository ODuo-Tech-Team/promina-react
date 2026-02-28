"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactButton } from "@/components/contact-button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#maquinas", label: "Máquinas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
]

const enderecos = [
  {
    nome: "Locação CG",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé - Campina Grande",
    telefone: "(83) 98717-7707",
    whatsapp: "5583987177707",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
  },
  {
    nome: "Locação JP",
    endereco: "Av. Epitácio Pessoa, 2987, Brasimar - João Pessoa",
    telefone: "(83) 99664-0032",
    whatsapp: "5583996640032",
    mapaUrl: "https://maps.google.com/?q=Av.+Epitácio+Pessoa,+2987,+Brasimar,+João+Pessoa",
  },
  {
    nome: "Homecenter CG",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé - Campina Grande",
    telefone: "(83) 99803-0018",
    whatsapp: "5583998030018",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentEnderecoIndex, setCurrentEnderecoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEnderecoIndex((prev) => (prev + 1) % enderecos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const currentEndereco = enderecos[currentEnderecoIndex]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] shadow-lg">
      {/* Top Bar - Rotating Addresses */}
      <div className="hidden md:block bg-[#FFCC29] py-2 overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-between text-[#363334] text-sm font-medium">
          <div className="flex items-center gap-6 min-w-0 flex-1">
            <a 
              href={`tel:${currentEndereco.telefone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
            >
              <Phone className="size-4" />
              <span className="font-bold">{currentEndereco.nome}:</span>
              <span>{currentEndereco.telefone}</span>
            </a>
            <a 
              href={currentEndereco.mapaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity truncate"
            >
              <MapPin className="size-4 shrink-0" />
              <span className="truncate">{currentEndereco.endereco}</span>
            </a>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex gap-1">
              {enderecos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEnderecoIndex(index)}
                  className={`size-2 rounded-full transition-all ${
                    index === currentEnderecoIndex 
                      ? "bg-[#363334]" 
                      : "bg-[#363334]/30 hover:bg-[#363334]/50"
                  }`}
                  aria-label={`Ver endereço ${index + 1}`}
                />
              ))}
            </div>
            <span className="hidden lg:inline border-l border-[#363334]/30 pl-4">Seg - Sex: 7h às 17h | Sáb: 7h às 12h</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-promina-colorido.png"
              alt="Promina - Locação de Máquinas e Equipamentos"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#363334] font-medium hover:text-[#FFCC29] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <ContactButton 
              className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold px-6"
              message="Ola! Gostaria de solicitar um orcamento."
            >
              Solicitar Orcamento
            </ContactButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#363334] p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#363334]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#363334] font-medium hover:text-[#FFCC29] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <ContactButton 
                className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold mt-2 w-full"
                message="Ola! Gostaria de solicitar um orcamento."
              >
                Solicitar Orcamento
              </ContactButton>
              
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#363334]/20 text-[#6B6B6B] text-sm">
                <a href="tel:+558333414000" className="flex items-center gap-2 hover:text-[#FFCC29]">
                  <Phone className="size-4" />
                  <span>(83) 3341-4000</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  <span>Campina Grande e João Pessoa - PB</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
