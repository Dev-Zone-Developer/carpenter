"use client"

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
// import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { SiFacebook, SiInstagram, SiWhatsapp, SiYoutube } from 'react-icons/si';
import { useStore } from './Store/Store';
import { useEffect, useState } from 'react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Furniture Repair', 'Custom Furniture', 'Kitchen Cabinets',
  'Wooden Doors', 'Wardrobes', 'Office Furniture',
  'Ceiling Woodwork', 'Interior Design',
]

export default function Footer() {
  const { client_Phone, client_email, client_map_address_text } = useStore();
  const [authName, setAuthName] = useState('');
  const [authLink, setAuthLink] = useState('');


  useEffect(() => {
    // Giving Attribute to Orinal Developer from this repo

    const checkAuthor = async () => {
      const data = await fetch('https://raw.githubusercontent.com/Dev-Zone-Developer/website-data/main/carpenter.json')
      const response = await data.json();

      if (response) {
        setAuthName(response.author);
        setAuthLink(response.authorLink);
      } else {
        setAuthName('Abid Hussain');
        setAuthLink('https://wa.me/+923436544231');
      }

    }

    checkAuthor()
  }, []);


  return (
    <footer className="bg-charcoal text-cream/70 relative overflow-hidden">
      {/* Wood grain top border */}
      <div className="h-1 bg-gradient-to-r from-wood-700 via-wood-500 to-wood-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo image */}
              <div className="w-10 h-10 bg-gradient-to-br from-wood-500 to-wood-700 rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/header6.png"
                  alt="Lahore Carpenter Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-bold text-cream text-lg leading-tight block">
                  Lahore Carpenter
                </span>
                <span className="text-wood-400 text-xs tracking-widest uppercase">
                  Services
                </span>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6">
              Lahore's trusted carpenter service for custom furniture, kitchen cabinets,
              wardrobes, and premium interior wood solutions since 2013.
            </p>
            {/* Social icons But Hide */}
            {/* <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-wood-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <SiFacebook size={16} />
              </a>
               <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-wood-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={16} />
              </a> 
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-wood-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-wood-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                aria-label="YouTube"
              >
                <SiYoutube size={16} />
              </a>
              <a
                href={`https://wa.me/${client_Phone.replace(/\D/g, '')}`}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-wood-600 flex items-center justify-center transition-all hover:-translate-y-0.5"
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={16} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm hover:text-wood-400 transition-colors flex items-center gap-1">
                    <span className="text-wood-600">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services" className="font-body text-sm hover:text-wood-400 transition-colors flex items-center gap-1">
                    <span className="text-wood-600">›</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-cream text-base mb-5">Contact Info</h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: client_map_address_text },
                { icon: Phone, text: client_Phone, href: `tel:${client_Phone}` },
                { icon: Mail, text: client_email, href: `mailto:${client_email}` },
                { icon: Clock, text: 'Saturday–Thursday: 24/7\nFriday: 6am–10pm' },
              ].map(({ icon: Icon, text, href }, i) => {
                const inner = (
                  <div className="flex gap-3">
                    <Icon size={16} className="text-wood-500 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm leading-relaxed whitespace-pre-line">{text}</span>
                  </div>
                )
                return href ? (
                  <a key={i} href={href} className="block hover:text-wood-400 transition-colors">{inner}</a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body">
          <a href={authLink} target="_blank" rel="noopener noreferrer">
            © {new Date().getFullYear()} {authName}. All rights reserved.
          </a>
          <span className="text-wood-500">{client_map_address_text}</span>
        </div>
      </div>
    </footer >
  )
}
