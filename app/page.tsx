import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <Navigation />
      <Hero />
      <FeatureCards />
      <Footer />
    </main>
  )
}
