'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useStore } from './Store/Store';

export default function BookingCTA() {
  const { client_Phone } = useStore();
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Luxury wooden interior Lahore.png"
          alt="Luxury wooden interior Lahore"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wood-900/95 via-wood-800/90 to-charcoal/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-cream mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="font-body text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
            Get a <strong className="text-wood-300">free consultation</strong> and quote from Lahore's
            most trusted carpenter. We cover DHA, Gulberg, Bahria Town, Johar Town & all Lahore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-wood-500 to-wood-400 hover:from-wood-400 hover:to-wood-300 text-cream px-10 py-4 rounded-xl font-body font-bold text-lg transition-all shadow-wood-lg hover:-translate-y-1"
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/+923241012395`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-xl font-body font-bold text-lg transition-all hover:-translate-y-1"
            >
              💬 WhatsApp Now
            </a>
            <a
              href={`tel:${client_Phone}`}
              className="flex items-center gap-2 glass border border-cream/20 text-cream px-8 py-4 rounded-xl font-body font-bold text-lg hover:border-wood-400/50 transition-all"
            >
              📞 {client_Phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
