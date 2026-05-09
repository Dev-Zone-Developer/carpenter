'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Asif Mahmood Khan',
    location: 'DHA Phase 6, Lahore',
    rating: 5,
    review: 'Lahore Carpenter Services transformed our kitchen completely. The cabinets are of outstanding quality and the team was professional throughout. Highly recommended for anyone in Lahore looking for premium woodwork!',
    service: 'Kitchen Cabinets',
    avatar: 'AK',
  },
  {
    name: 'Sana Fatima',
    location: 'Gulberg III, Lahore',
    rating: 5,
    review: 'Got a custom wardrobe made for our master bedroom. The finishing is absolutely beautiful — exactly what I had envisioned. The carpenter understood our requirements perfectly and delivered on time.',
    service: 'Custom Wardrobe',
    avatar: 'SF',
  },
  {
    name: 'Muhammad Bilal',
    location: 'Johar Town, Lahore',
    rating: 5,
    review: 'Excellent furniture repair work! Had an old sheesham dining set that needed complete restoration. They did a magnificent job — looks brand new now. Fair pricing and very professional behavior.',
    service: 'Furniture Repair',
    avatar: 'MB',
  },
  {
    name: 'Ayesha Noor',
    location: 'Bahria Town, Lahore',
    rating: 5,
    review: 'We hired them for complete office furniture setup. The workstations, reception desk, and conference table are stunning. Our clients are impressed every time they visit. Will definitely use their services again.',
    service: 'Office Furniture',
    avatar: 'AN',
  },
  {
    name: 'Tariq Hussain Mirza',
    location: 'Model Town, Lahore',
    rating: 5,
    review: 'The wooden ceiling paneling in our living room is the showstopper of our house. Every guest asks about it. The team worked neatly and finished ahead of schedule. 10/10 for professionalism.',
    service: 'Ceiling Woodwork',
    avatar: 'TM',
  },
  {
    name: 'Zainab Raza',
    location: 'Defence, Lahore',
    rating: 5,
    review: 'Beautiful carved wooden main door — exactly the design we wanted. Our neighbors are always complimenting the entrance. The quality and craftsmanship is truly remarkable. Thank you Lahore Carpenter Services!',
    service: 'Wooden Door',
    avatar: 'ZR',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wood-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wood-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-body text-wood-600 font-semibold tracking-widest text-sm uppercase mb-3 block">
            Client Reviews
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-bark-600 max-w-xl mx-auto">
            Real feedback from real clients across Lahore — 4.9★ average rating
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="testimonial-card rounded-2xl p-7 shadow-wood hover:shadow-wood-lg transition-all duration-300 hover:-translate-y-1 relative border border-wood-100"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-wood-200 absolute top-5 right-5 fill-wood-100" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-wood-500 text-wood-500" />
                ))}
              </div>

              {/* Review */}
              <p className="font-body text-bark-700 leading-relaxed mb-6 text-sm relative z-10">
                "{t.review}"
              </p>

              {/* Service tag */}
              <span className="inline-block bg-wood-100 text-wood-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-wood-600 to-wood-800 flex items-center justify-center text-cream font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-body font-bold text-charcoal text-sm">{t.name}</div>
                  <div className="font-body text-bark-500 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
