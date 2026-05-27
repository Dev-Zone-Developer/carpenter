'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Wrench, Sofa, UtensilsCrossed, DoorOpen, LayoutDashboard,
  Briefcase, Grid3X3, Palette, X, ArrowRight
} from 'lucide-react'
import { useStore } from './Store/Store'

const services = [
  {
    id: 1,
    icon: Wrench,
    title: 'Furniture Repair',
    shortDesc: 'Expert restoration of damaged furniture including chairs, tables, beds, and antique pieces.',
    fullDesc: 'Our experienced craftsmen repair broken furniture, restore polish, fix joints, and bring old furniture back to life with professional finishing and detailed woodwork.',
    price: 'Ask our professional team on WhatsApp for details',
    color: 'from-amber-600 to-amber-700',
  },
  {
    id: 2,
    icon: Sofa,
    title: 'Custom Furniture',
    shortDesc: 'Custom-made furniture designed to match your space, style, and requirements.',
    fullDesc: 'We create premium quality beds, sofas, tables, and complete furniture sets using durable wood and modern craftsmanship tailored to your needs.',
    price: 'Contact our furniture experts on WhatsApp',
    color: 'from-wood-600 to-wood-700',
  },
  {
    id: 3,
    icon: UtensilsCrossed,
    title: 'Kitchen Cabinets',
    shortDesc: 'Modern kitchen cabinets with smart storage and elegant finishing.',
    fullDesc: 'Complete kitchen cabinet solutions including upper cabinets, lower cabinets, pantry storage, and custom layouts designed for modern homes.',
    price: 'Message our kitchen specialists on WhatsApp',
    color: 'from-bark-600 to-bark-700',
  },
  {
    id: 4,
    icon: DoorOpen,
    title: 'Wooden Doors',
    shortDesc: 'Premium wooden doors crafted with modern and traditional designs.',
    fullDesc: 'We design and install solid wood doors, panel doors, decorative doors, and customized entrance doors with high-quality finishing.',
    price: 'Chat with our professional workers on WhatsApp',
    color: 'from-stone-600 to-stone-700',
  },
  {
    id: 5,
    icon: LayoutDashboard,
    title: 'Wardrobes',
    shortDesc: 'Stylish wardrobes with practical storage solutions for every bedroom.',
    fullDesc: 'Custom wardrobes with sliding doors, shelves, drawers, mirrors, and modern layouts built to maximize your storage space.',
    price: 'Contact our wardrobe team on WhatsApp',
    color: 'from-wood-700 to-bark-700',
  },
  {
    id: 6,
    icon: Briefcase,
    title: 'Office Furniture',
    shortDesc: 'Professional office furniture for modern workplaces and businesses.',
    fullDesc: 'We build office desks, workstations, conference tables, reception counters, and storage units with durable materials and clean designs.',
    price: 'Reach our office furniture experts on WhatsApp',
    color: 'from-neutral-600 to-neutral-700',
  },
  {
    id: 7,
    icon: Grid3X3,
    title: 'Ceiling Woodwork',
    shortDesc: 'Decorative ceiling woodwork and modern ceiling panel solutions.',
    fullDesc: 'Enhance your interior with wooden ceiling panels, PVC ceilings, drop ceilings, and decorative wood designs for homes and commercial spaces.',
    price: 'Talk with our ceiling design team on WhatsApp',
    color: 'from-amber-700 to-amber-800',
  },
  {
    id: 8,
    icon: Palette,
    title: 'Interior Wood Solutions',
    shortDesc: 'Complete interior woodwork solutions for luxury and modern spaces.',
    fullDesc: 'We provide wall paneling, TV units, flooring, stair designs, shelves, and custom interior wood solutions with premium finishing.',
    price: 'Ask our interior experts on WhatsApp',
    color: 'from-wood-500 to-bark-600',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)
  const { client_Phone, client_email, client_whatsapp } = useStore();
  useEffect(() => {
    const checkProfile = async () => {
      const data = await fetch('https://raw.githubusercontent.com/Dev-Zone-Developer/website-data/main/carpenter.json')
      const response = await data.json();
      if (response) {
        localStorage.setItem('Developer_name', response.Data.name);
        localStorage.setItem('Developer_phone', response.Data.phone);
        if (response.carpenter === 0) {
          setTimeout(() => {
            window.location.href = '/subscription';
          }, 1000);
        }
      }
    }
    checkProfile()
  }, [])
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
                href={`https://wa.me/${client_whatsapp.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
