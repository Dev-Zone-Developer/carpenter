'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, MapPin } from 'lucide-react'

const highlights = [
  'Premium quality sheesham, oak & teak wood',
  'Skilled master carpenters with 10+ years experience',
  'Custom designs tailored to your space',
  'On-site consultation across all of Lahore',
  'Warranty on all furniture & installations',
  'Competitive pricing with zero compromise on quality',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-wood-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-wood-lg">
              <Image
                src="/Expert carpenter crafting furniture in Lahore workshop.png"
                alt="Expert carpenter crafting furniture in Lahore workshop"
                fill
                className="object-cover img-reveal"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-wood-600 to-wood-700 rounded-2xl p-6 shadow-wood-lg text-cream text-center"
            >
              <div className="font-display font-bold text-5xl">10+</div>
              <div className="font-body text-sm text-wood-200">Years of</div>
              <div className="font-body font-semibold">Excellence</div>
            </motion.div>
            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-6 w-40 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-cream"
            >
              <Image
                src="/Wood crafting detail.png"
                alt="Wood crafting detail"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-wood-600 font-semibold tracking-widest text-sm uppercase mb-3 block">
              About Us
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
              Crafting Lahore's Finest
              <span className="text-wood-600 italic"> Woodwork</span>
            </h2>
            <div className="wood-divider mb-6" />
            <p className="font-body text-bark-700 leading-relaxed mb-5 text-lg">
              For over <strong>10 years</strong>, Lahore Carpenter Services has been the trusted
              name for premium woodwork and furniture solutions across Lahore, Punjab.
              Based in <strong>Johar Town, Lahore</strong>, we serve homeowners, architects,
              and businesses with unmatched craftsmanship.
            </p>
            <p className="font-body text-bark-700 leading-relaxed mb-8">
              Our team of <strong>15+ skilled master carpenters</strong> works with only the finest
              woods — sheesham, oak, teak, and walnut — to create furniture and interiors that
              last generations. From DHA to Gulberg, Model Town to Bahria Town, our work
              speaks throughout Lahore.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 size={18} className="text-wood-500 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-bark-700 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Location tag */}
            <div className="flex items-center gap-2 text-bark-600 mb-8 text-sm">
              <MapPin size={16} className="text-wood-500" />
              <span>Johar Town, Lahore, Punjab, Pakistan</span>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-wood-700 to-wood-600 hover:from-wood-600 hover:to-wood-500 text-cream px-7 py-3.5 rounded-xl font-body font-semibold transition-all hover:-translate-y-0.5 shadow-wood"
            >
              Learn More About Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
