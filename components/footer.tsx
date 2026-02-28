import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

const lojas = [
  {
    nome: "Locação CG",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé - CG",
    telefone: "(83) 98717-7707",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
  },
  {
    nome: "Locação JP",
    endereco: "Av. Epitácio Pessoa, 2987, Brasimar - JP",
    telefone: "(83) 99664-0032",
    mapaUrl: "https://maps.google.com/?q=Av.+Epitácio+Pessoa,+2987,+Brasimar,+João+Pessoa",
  },
  {
    nome: "Homecenter CG",
    endereco: "Rua Padre Aristides Ferreira 240, Catolé - CG",
    telefone: "(83) 99803-0018",
    mapaUrl: "https://maps.google.com/?q=Rua+Padre+Aristides+Ferreira+240,+Catolé,+Campina+Grande",
  },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white" id="footer">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/images/logo-promina-cinza.jpg"
              alt="Promina - Locação de Máquinas e Equipamentos"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Endereços e Telefones */}
          {lojas.map((loja) => (
            <div key={loja.nome} className="flex flex-col gap-2">
              <h4 className="font-bold text-white mb-1">{loja.nome}</h4>
              <a 
                href={loja.mapaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-white/70 hover:text-[#FFCC29] transition-colors"
              >
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>{loja.endereco}</span>
              </a>
              <a 
                href={`tel:${loja.telefone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#FFCC29] transition-colors"
              >
                <Phone className="size-4 shrink-0" />
                <span>{loja.telefone}</span>
              </a>
            </div>
          ))}

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-bold text-white mb-1">Siga-nos</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/prominapb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#FFCC29] text-white hover:text-[#363334] transition-all duration-300 rounded-lg"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p>© 2026 Promina - Todos os direitos reservados</p>
              <span className="hidden md:inline">|</span>
              <p>CNPJ: 12.345.678/0001-90</p>
            </div>
            <a
              href="https://wa.me/5512996767606?text=Olá! Vi a página da Promina e gostaria de um orçamento para criação de site."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#FFCC29] transition-colors"
            >
              Desenvolvido por <span className="font-semibold">V4 Augusto & Co</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
