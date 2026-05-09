import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import BookingCTA from '@/components/BookingCTA'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <StatsSection />
        <AboutSection />
        <Portfolio />
        <Testimonials />
        <BookingCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
