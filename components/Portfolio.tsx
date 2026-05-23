'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, X } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Kitchen Cabinet Set',
    category: 'Kitchen',
    location: 'DHA Phase 5, Lahore',
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
  },
  {
    id: 2,
    title: 'Custom Wardrobe with Mirror',
    category: 'Wardrobe',
    location: 'Gulberg III, Lahore',
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 3,
    title: 'Luxury Wooden Living Room',
    category: 'Interior',
    location: 'Bahria Town, Lahore',
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
  },
  {
    id: 4,
    title: 'Executive Office Furniture',
    category: 'Office',
    location: 'MM Alam Road, Lahore',
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  },
  {
    id: 5,
    title: 'Wooden Panel Ceiling Design',
    category: 'Ceiling',
    location: 'Model Town, Lahore',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
  },
  {
    id: 6,
    title: 'Custom Bedroom Set',
    category: 'Furniture',
    location: 'Johar Town, Lahore',
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80',
  },
  {
    id: 7,
    title: 'Carved Wooden Main Door',
    category: 'Doors',
    location: 'Defence, Lahore',
    src: '/wood Door.jpg',
  },
  {
    id: 8,
    title: 'Restaurant Interior Woodwork',
    category: 'Interior',
    location: 'Gulberg II, Lahore',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
]

const categories = ['All', 'Kitchen', 'Wardrobe', 'Interior', 'Office', 'Ceiling', 'Furniture', 'Doors']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<typeof portfolioItems[0] | null>(null)

  const filtered = active === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-wood-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-wood-400 font-semibold tracking-widest text-sm uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">
            Portfolio Gallery
          </h2>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-cream/50 max-w-xl mx-auto">
            Real projects delivered across Lahore — from custom kitchens to luxury interior woodwork
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${active === cat
                  ? 'bg-wood-500 text-cream shadow-wood'
                  : 'glass-dark text-cream/60 hover:text-cream hover:border-wood-500/50'
                } border border-wood-500/20`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="portfolio-item group relative rounded-xl overflow-hidden cursor-pointer aspect-square shadow-lg"
              onClick={() => setLightbox(item)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent flex flex-col justify-end p-5">
                <span className="text-wood-400 text-xs font-semibold font-body uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-cream text-base leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-cream/60 text-xs font-body">{item.location}</p>
                <div className="mt-3 flex items-center gap-1 text-wood-400 text-xs font-semibold">
                  <ExternalLink size={12} /> View Project
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-wood-500/40 hover:border-wood-400 text-cream hover:text-wood-400 px-8 py-4 rounded-xl font-body font-semibold transition-all"
          >
            View Full Portfolio →
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-wood-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={30} />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={lightbox.src.replace('w=600', 'w=1200')}
                alt={lightbox.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
            <div className="bg-charcoal p-6">
              <span className="text-wood-400 text-xs font-semibold uppercase tracking-wider">{lightbox.category}</span>
              <h3 className="font-display font-bold text-cream text-2xl mt-1">{lightbox.title}</h3>
              <p className="text-cream/60 text-sm mt-1">{lightbox.location}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
