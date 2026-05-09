import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Contact from '@/components/Contact'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact Us | Lahore Carpenter Services — Book a Free Consultation',
  description: 'Contact Lahore Carpenter Services for a free consultation and quote. Located in Johar Town, Lahore. Call or WhatsApp: +92 300 1234567. Serving all areas of Lahore.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Contact Lahore Carpenter Services.png"
            alt="Contact Lahore Carpenter Services"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">Contact Us</h1>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-cream/60 text-lg">Free consultation · Free quote · Same-day response</p>
        </div>
      </section>
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
}
