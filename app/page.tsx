import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}

