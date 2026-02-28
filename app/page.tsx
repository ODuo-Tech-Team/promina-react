import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MaquinasSection } from "@/components/maquinas-section"
import { AvaliacoesSection } from "@/components/avaliacoes-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MaquinasSection />
      <AvaliacoesSection />
    </main>
  )
}
