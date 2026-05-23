'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { useStore } from './Store/Store'


const services = [
  'Furniture Repair', 'Custom Furniture', 'Kitchen Cabinets',
  'Wooden Doors', 'Wardrobes', 'Office Furniture',
  'Ceiling Woodwork', 'Interior Wood Design', 'Other',
]

export default function Contact() {
  const { client_Phone, client_map_address_link, client_email, client_map_address_text } = useStore();

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Our Location',
      value: client_map_address_text,
      sub: 'We serve all areas of Lahore',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: client_Phone,
      sub: 'Call or WhatsApp any time',
      href: `tel:${client_Phone}`,
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Saturday–Thursday: 24/7',
      sub: 'Friday: 6am–10pm',
    },
    {
      icon: Mail,
      label: 'Email',
      value: `${client_email}`,
      sub: 'We reply within 24 hours',
      href: `mailto:${client_email}`,
    },
  ]

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  // Helper: delay for retries
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Retry logic: attempts = total attempts (1 initial + retries)
  const sendWithRetry = async (data: any, maxAttempts = 3) => {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return; // Success – exit
      } catch (err) {
        lastError = err;
        if (attempt < maxAttempts) {
          // Wait 1 second before retry (simple backoff)
          await delay(1000);
        }
      }
    }
    // After all attempts failed
    console.error('Failed to send email after', maxAttempts, 'attempts:', lastError);
    // Optional: show a small non‑intrusive error (e.g., toast) – but do NOT change submitted state
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 1. Instant success UI
    setSubmitted(true);

    // 2. Background sending with retries (up to 2 retries = 3 total attempts)
    sendWithRetry(form, 3).finally(() => {
      // 3. After background process finishes (success or fail), reset form and hide success message
      setForm({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-body text-wood-600 font-semibold tracking-widest text-sm uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Contact Us
          </h2>
          <div className="wood-divider mx-auto mb-5" />
          <p className="font-body text-bark-600 max-w-xl mx-auto">
            Book a free consultation or get a quick quote — we respond within 2 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-wood">
              <h3 className="font-display font-bold text-2xl text-charcoal mb-6">Send Us a Message</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="font-display font-bold text-xl text-charcoal mb-2">Message Sent!</h4>
                  <p className="text-bark-600 font-body">We'll contact you within 2 hours. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-sm font-semibold text-bark-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all bg-cream"
                      placeholder="Muhammad Ali"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-bark-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all bg-cream"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-bark-700 mb-2">Service Required</label>
                    <select
                      value={form.service}
                      required
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all bg-cream appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-bark-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      required
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-wood-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-wood-500 focus:ring-2 focus:ring-wood-100 transition-all bg-cream resize-none"
                      placeholder="Describe your project or requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-wood-700 to-wood-600 hover:from-wood-600 hover:to-wood-500 text-cream py-4 rounded-xl font-body font-bold text-base transition-all hover:-translate-y-0.5 shadow-wood flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon
                const content = (
                  <div
                    className="bg-white rounded-xl p-5 shadow-wood hover:shadow-wood-lg transition-all border border-wood-100 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-wood-600 to-wood-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-cream" />
                    </div>
                    <div className="font-body text-xs text-bark-500 uppercase tracking-wide mb-1">{info.label}</div>
                    <div className="font-body font-bold text-charcoal text-sm">{info.value}</div>
                    <div className="font-body text-bark-500 text-xs mt-0.5">{info.sub}</div>
                  </div>
                )
                return info.href ? (
                  <a key={i} href={info.href}>{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                )
              })}
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-wood h-56 sm:h-64 border border-wood-200">
              <iframe
                src={client_map_address_link}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lahore Carpenter Services Location - Johar Town Lahore"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${client_Phone.replace(/\s/g, '')}?text=Hi!%20I%20need%20carpenter%20services%20in%20Lahore.%20Please%20send%20me%20a%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white py-4 rounded-xl font-body font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — Get Free Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
