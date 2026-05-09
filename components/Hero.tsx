'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Star, Award, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          // src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=85"
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
          alt="Professional carpenter working in modern workshop Lahore Pakistan"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/75 to-wood-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      {/* Decorative wood grain lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-wood-400 to-transparent"
            style={{ top: `${12 + i * 12}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass border border-wood-500/30 text-wood-300 px-4 py-2 rounded-full text-sm font-body mb-6"
          >
            <Star size={14} className="fill-wood-400 text-wood-400" />
            <span>Lahore's #1 Trusted Carpenter Service</span>
            <Star size={14} className="fill-wood-400 text-wood-400" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
          >
            <span className="hero-title">Professional</span>
            <br />
            <span className="text-cream">Carpenter Services</span>
            <br />
            <span className="text-wood-400 font-italic italic">in Lahore</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg text-cream/75 leading-relaxed mb-10 max-w-2xl"
          >
            Expert furniture repair, custom woodwork, kitchen cabinets, doors, wardrobes,
            office furniture, and premium interior wood solutions — crafted with precision
            for homes and businesses across Lahore.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-wood-600 to-wood-500 hover:from-wood-500 hover:to-wood-400 text-cream px-8 py-4 rounded-xl font-body font-bold text-base transition-all duration-300 shadow-wood-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
            >
              Book Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              href="/contact#quote"
              className="glass border border-cream/20 hover:border-wood-400/50 text-cream px-8 py-4 rounded-xl font-body font-bold text-base transition-all duration-300 hover:bg-wood-900/30 backdrop-blur-sm"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+923001234567"
              className="lg:hidden flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-bold transition-colors"
            >
              📞 Call Now
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Award, text: '10+ Years Experience' },
              { icon: Star, text: '500+ Projects Done' },
              { icon: Clock, text: 'Same Day Response' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-cream/70 text-sm font-body">
                <Icon size={16} className="text-wood-400" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} className="text-wood-400" />
        </motion.div>
      </motion.div>

      {/* Side stats panel — desktop */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute right-8 bottom-20 z-10 hidden xl:flex flex-col gap-3"
      >
        {[
          { num: '500+', label: 'Projects' },
          { num: '300+', label: 'Clients' },
          { num: '4.9★', label: 'Rating' },
        ].map(({ num, label }) => (
          <div key={label} className="glass-dark rounded-xl px-5 py-3 text-center border border-wood-500/20">
            <div className="font-display font-bold text-wood-400 text-2xl">{num}</div>
            <div className="text-cream/60 text-xs font-body">{label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
