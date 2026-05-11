

import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import AboutSection from '@/components/AboutSection'
import StatsSection from '@/components/StatsSection'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Lahore Carpenter Services — 10+ Years of Expert Woodwork',
  description: 'Learn about Lahore Carpenter Services — 10+ years of expert woodwork, 500+ projects completed, and 15+ master craftsmen serving all areas of Lahore, Pakistan.',
}

const team = [
  { name: 'Ustad Ahmed Khan', role: 'Master Carpenter', exp: '15 years', initials: 'AK' },
  { name: 'Bashir Ahmad', role: 'Kitchen Specialist', exp: '12 years', initials: 'BA' },
  { name: 'Tariq Mehmood', role: 'Interior Wood Expert', exp: '10 years', initials: 'TM' },
  { name: 'Naveed Iqbal', role: 'Furniture Designer', exp: '8 years', initials: 'NI' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about.png"
            alt="Lahore carpenter workshop"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">About Us</h1>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-cream/60 text-lg">10+ years crafting Lahore's finest woodwork</p>
        </div>
      </section>

      <AboutSection />
      <StatsSection />

      {/* Team Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-3">Our Expert Team</h2>
            <div className="wood-divider mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-wood hover:shadow-wood-lg transition-all hover:-translate-y-1">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-wood-600 to-wood-800 flex items-center justify-center text-cream font-bold text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-charcoal mb-1">{member.name}</h3>
                <p className="text-wood-600 text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-bark-500 text-xs">{member.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
