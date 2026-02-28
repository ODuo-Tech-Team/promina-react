"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#maquinas", label: "Máquinas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#363334] shadow-lg">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#FFCC29] py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-[#363334] text-sm font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+558333414000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="size-4" />
              <span>(83) 3341-4000</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>Campina Grande e João Pessoa - PB</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>Seg - Sex: 7h às 17h | Sáb: 7h às 12h</span>
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
                className="text-white font-medium hover:text-[#FFCC29] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              asChild
              className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold px-6"
            >
              <a 
                href="https://wa.me/5583991429Se6?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium hover:text-[#FFCC29] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-[#FFCC29] text-[#363334] hover:bg-[#FFCC29]/90 font-bold mt-2"
              >
                <a 
                  href="https://wa.me/5583991429596?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </Button>
              
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/20 text-white/80 text-sm">
                <a href="tel:+558333414000" className="flex items-center gap-2">
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
