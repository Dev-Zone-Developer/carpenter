import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Services from '@/components/Services'
import BookingCTA from '@/components/BookingCTA'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | Lahore Carpenter Services — Furniture, Kitchen Cabinets, Wardrobes & More',
  description: 'Complete carpenter services in Lahore: furniture repair, custom furniture, kitchen cabinets, wooden doors, wardrobes, office furniture, ceiling woodwork & interior design.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1920&q=80"
            alt="Carpenter services Lahore"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">Our Services</h1>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-cream/60 text-lg max-w-xl mx-auto">
            Premium carpenter services for homes, offices and commercial spaces across Lahore
          </p>
        </div>
      </section>
      <Services />
      <BookingCTA />
      <Footer />
      <FloatingButtons />
    </>
  )
}
