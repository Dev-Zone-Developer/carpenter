'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function CounterNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="font-display font-bold text-4xl lg:text-5xl text-wood-400">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { num: 500, suffix: '+', label: 'Projects Completed', sub: 'Across Lahore & Punjab' },
  { num: 300, suffix: '+', label: 'Happy Clients', sub: 'Satisfied homeowners' },
  { num: 20, suffix: '+', label: 'Years Experience', sub: 'Master craftsmanship' },
  { num: 20, suffix: '', label: 'Expert Craftsmen', sub: 'Skilled professionals' },
]

export default function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/Woodworking workshop Lahore.png"
          alt="Woodworking workshop Lahore"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/90 to-wood-950/88" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-cream mb-3">
            Lahore's Most Trusted Carpenter
          </h2>
          <div className="wood-divider mx-auto mb-4" />
          <p className="text-cream/60 font-body">Numbers that reflect our commitment to excellence</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-6 lg:p-8 text-center border border-wood-500/20 hover:border-wood-400/40 transition-all duration-300"
            >
              <CounterNumber target={stat.num} suffix={stat.suffix} />
              <div className="font-body font-bold text-cream text-lg mt-2">{stat.label}</div>
              <div className="font-body text-cream/50 text-xs mt-1">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
