'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import {
  Wrench, Sofa, UtensilsCrossed, DoorOpen, LayoutDashboard,
  Briefcase, Grid3X3, Palette, X, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Wrench,
    title: 'Furniture Repair',
    shortDesc: 'Expert restoration of damaged furniture — chairs, tables, beds, and antiques revived to their original glory.',
    fullDesc: 'Our skilled craftsmen in Lahore specialize in furniture repair for all types of wood furniture. From cracked legs to broken joints, polish restoration, and complete refinishing, we bring your beloved furniture back to life. We serve DHA, Gulberg, Johar Town, Model Town and all areas of Lahore.',
    price: 'Starting from PKR 2,000',
    color: 'from-amber-600 to-amber-700',
  },
  {
    id: 2,
    icon: Sofa,
    title: 'Custom Furniture',
    shortDesc: 'Bespoke furniture crafted to your exact specifications — beds, sofas, tables, and more with premium wood.',
    fullDesc: 'We design and build custom furniture tailored to your space and style. Using premium sheesham, oak, and teak wood, our Lahore workshop crafts unique pieces that reflect your personality. Bedroom sets, dining tables, center tables, and complete room furniture.',
    price: 'Starting from PKR 15,000',
    color: 'from-wood-600 to-wood-700',
  },
  {
    id: 3,
    icon: UtensilsCrossed,
    title: 'Kitchen Cabinets',
    shortDesc: 'Modern modular kitchen designs with premium wood and laminates. Complete kitchen makeovers in Lahore.',
    fullDesc: 'Transform your kitchen with our custom-built cabinets. We offer complete kitchen solutions including upper cabinets, lower cabinets, island units, and pantry storage. Available in wood veneer, high-gloss, and matte finishes to match your Lahore home.',
    price: 'Starting from PKR 45,000',
    color: 'from-bark-600 to-bark-700',
  },
  {
    id: 4,
    icon: DoorOpen,
    title: 'Wooden Doors',
    shortDesc: 'Premium solid wood doors — main entrance, bedroom, and bathroom doors crafted with intricate designs.',
    fullDesc: 'High-quality wooden doors for residential and commercial properties in Lahore. We craft solid wood doors, panel doors, glass-panel doors, and carved decorative doors. Available in all sizes with custom designs, polishes, and hardware fittings.',
    price: 'Starting from PKR 8,000',
    color: 'from-stone-600 to-stone-700',
  },
  {
    id: 5,
    icon: LayoutDashboard,
    title: 'Wardrobes',
    shortDesc: 'Built-in and freestanding wardrobes with smart storage solutions for bedrooms in Lahore homes.',
    fullDesc: 'Custom-designed wardrobes that maximize your storage space. We build sliding door wardrobes, walk-in closets, fitted wardrobes with drawers, shelves, and hanging rails. Perfect for apartments and houses across Lahore with mirror panel options.',
    price: 'Starting from PKR 25,000',
    color: 'from-wood-700 to-bark-700',
  },
  {
    id: 6,
    icon: Briefcase,
    title: 'Office Furniture',
    shortDesc: 'Professional office workstations, reception desks, conference tables, and storage units for Lahore offices.',
    fullDesc: 'Complete office furniture solutions for businesses in Lahore. Executive desks, workstation clusters, reception counters, conference tables, filing cabinets, and bookshelves. We serve corporate offices, banks, schools, and commercial spaces throughout Lahore.',
    price: 'Starting from PKR 20,000',
    color: 'from-neutral-600 to-neutral-700',
  },
  {
    id: 7,
    icon: Grid3X3,
    title: 'Ceiling Woodwork',
    shortDesc: 'Decorative wooden ceiling panels, PVC ceiling, drop ceilings, and wood cladding for luxurious interiors.',
    fullDesc: 'Enhance your interiors with beautiful ceiling woodwork. We install wooden ceiling panels, coffered ceilings, beamed ceilings, and decorative moldings. Available for bedrooms, living rooms, restaurants, and commercial spaces in Lahore and surrounding areas.',
    price: 'Starting from PKR 35,000',
    color: 'from-amber-700 to-amber-800',
  },
  {
    id: 8,
    icon: Palette,
    title: 'Interior Wood Solutions',
    shortDesc: 'Complete interior wood design — wall paneling, flooring, stairs, and bespoke woodwork for luxury homes.',
    fullDesc: 'Full-service interior wood solutions for your Lahore property. Wall paneling, hardwood flooring, staircase crafting, library shelves, TV units, and complete interior woodwork packages. We work with architects and interior designers across Lahore, DHA, Bahria Town.',
    price: 'Starting from PKR 50,000',
    color: 'from-wood-500 to-bark-600',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #3a1d0a 0, #3a1d0a 1px, transparent 0, transparent 50%)',
        backgroundSize: '20px 20px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-body text-wood-600 font-semibold tracking-widest text-sm uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Our Carpenter Services
          </h2>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-bark-600 max-w-2xl mx-auto text-lg">
            From furniture repair to complete interior wood solutions — we deliver
            premium craftsmanship across all of Lahore, Pakistan.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group service-card bg-white rounded-2xl p-6 shadow-wood hover:shadow-wood-lg transition-all duration-400 hover:-translate-y-2 cursor-pointer border border-wood-100/50"
                onClick={() => setSelectedService(service)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-wood transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-charcoal text-xl mb-3 group-hover:text-wood-700 transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-bark-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {service.shortDesc}
                </p>
                <button className="flex items-center gap-1 text-wood-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-charcoal hover:bg-wood-900 text-cream px-8 py-4 rounded-xl font-body font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-cream max-w-md w-full rounded-2xl p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-bark-400 hover:text-charcoal transition-colors"
            >
              <X size={22} />
            </button>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-5 shadow-wood`}>
              <selectedService.icon size={30} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-charcoal mb-3">{selectedService.title}</h3>
            <p className="font-body text-bark-700 leading-relaxed mb-4">{selectedService.fullDesc}</p>
            <div className="bg-wood-50 rounded-lg px-4 py-3 mb-6">
              <span className="text-wood-700 font-semibold text-sm">{selectedService.price}</span>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="flex-1 bg-gradient-to-r from-wood-600 to-wood-500 text-cream py-3 rounded-xl font-semibold text-center hover:from-wood-500 hover:to-wood-400 transition-all"
              >
                Book This Service
              </Link>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-400 transition-colors"
              >
                💬
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
