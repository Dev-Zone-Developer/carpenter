'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do you provide carpenter services all over Lahore?',
    a: 'Yes! We serve all areas of Lahore including DHA, Gulberg, Johar Town, Model Town, Bahria Town, Garden Town, Cantt, Shadman, Iqbal Town, and all other localities.',
  },
  {
    q: 'How long does custom furniture take to complete?',
    a: 'Delivery times vary by project complexity. Simple furniture repairs take 1–3 days. Custom furniture typically takes 1–3 weeks. Kitchen cabinet sets take 2–4 weeks. We provide exact timelines after consultation.',
  },
  {
    q: 'Do you offer a warranty on your work?',
    a: 'Yes, we provide a 1-year warranty on all custom furniture and installations against manufacturing defects. We stand behind the quality of our craftsmanship.',
  },
  {
    q: 'Can I see your work before hiring?',
    a: 'Absolutely! Visit our portfolio page to see 50+ completed projects across Lahore. We also invite clients to our Johar Town workshop to see work in progress and material samples.',
  },
  {
    q: 'What types of wood do you use?',
    a: 'We work with premium quality sheesham (rosewood), oak, teak, walnut, pine, and MDF/plywood depending on the project requirements and budget. All wood is sourced from certified suppliers.',
  },
  {
    q: 'Do you offer on-site consultation in Lahore?',
    a: 'Yes, we offer free on-site consultation at your home or office anywhere in Lahore. Our expert will assess your space, discuss requirements, and provide a detailed quote — all at no charge.',
  },
  // {
  //   q: 'What is the minimum project cost?',
  //   a: 'We handle projects of all sizes. Minor furniture repairs start from PKR 2,000. Custom furniture starts from PKR 15,000. Kitchen cabinets start from PKR 45,000. Contact us for a free quote.',
  // },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-wood-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-wood-400 font-semibold tracking-widest text-sm uppercase mb-3 block">FAQ</span>
          <h2 className="font-display text-4xl font-bold text-cream mb-3">Frequently Asked Questions</h2>
          <div className="wood-divider mx-auto" />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-dark rounded-xl border border-wood-500/20 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-body font-semibold text-cream text-sm pr-4">{faq.q}</span>
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-wood-600/30 flex items-center justify-center">
                  {open === i
                    ? <Minus size={14} className="text-wood-400" />
                    : <Plus size={14} className="text-wood-400" />
                  }
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-cream/65 text-sm font-body leading-relaxed border-t border-wood-500/20 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
