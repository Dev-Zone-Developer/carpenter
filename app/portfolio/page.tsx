import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Portfolio from '@/components/Portfolio'
import BookingCTA from '@/components/BookingCTA'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio | Lahore Carpenter Services — 500+ Completed Projects',
  description: 'Browse our portfolio of 500+ completed carpenter projects in Lahore — kitchen cabinets, wardrobes, custom furniture, wooden doors, office furniture and interior woodwork.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Carpenter portfolio Lahore.png"
            alt="Carpenter portfolio Lahore"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">Our Portfolio</h1>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-cream/60 text-lg">500+ projects completed across Lahore</p>
        </div>
      </section>
      <Portfolio />
      <BookingCTA />
      <Footer />
      <FloatingButtons />
    </>
  )
}
