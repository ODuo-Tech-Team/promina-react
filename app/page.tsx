import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LocacaoEquipamentosSection } from "@/components/locacao-equipamentos-section"
import { MaquinasSection } from "@/components/maquinas-section"
import { HomecenterSection } from "@/components/homecenter-section"
import { AutoridadeSection } from "@/components/autoridade-section"
import { AvaliacoesSection } from "@/components/avaliacoes-section"
import { LocalizacoesSection } from "@/components/localizacoes-section"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MaquinasSection />
      <HomecenterSection />
      <AutoridadeSection />
      <LocacaoEquipamentosSection />
      <AvaliacoesSection />
      <LocalizacoesSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
