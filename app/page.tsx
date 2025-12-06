import ScrollProgress from './components/ScrollProgress'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Diferenciais from './components/Diferenciais'
import SimuladorImpostos from './components/SimuladorImpostos'
import Beneficios from './components/Beneficios'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

export default function GaspiPage() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <FloatingWhatsApp />
      <Navbar />
      <Hero />
      <Diferenciais />
      <SimuladorImpostos />
      <Beneficios />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
