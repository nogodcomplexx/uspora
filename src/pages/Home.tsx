import { Navbar } from '../sections/Navbar'
import { Hero } from '../sections/Hero'
import { Benefits } from '../sections/Benefits'
import { Packages } from '../sections/Packages'
import { HowItWorks } from '../sections/HowItWorks'
import { TechSpecs } from '../sections/TechSpecs'
import { Gallery } from '../sections/Gallery'
import { Trust } from '../sections/Trust'
import { Contact } from '../sections/Contact'
import { FinalCTA } from '../sections/FinalCTA'
import { Footer } from '../sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Packages />
      <Gallery />
      <HowItWorks />
      <TechSpecs />
      <Trust />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  )
}
