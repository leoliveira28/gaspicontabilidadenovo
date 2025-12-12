'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Calculator } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-24 h-24">
              <Image
                src="/icone.png"
                alt="Gaspi Contabilidade"
                fill
                className="object-contain"
              />
            </div>

          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--gaspi-text-secondary)] hover:text-[var(--gaspi-accent-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://connect.calima.app/" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 text-sm font-medium text-[var(--gaspi-accent-primary)] border border-[var(--gaspi-accent-primary)] rounded-lg hover:bg-[var(--gaspi-accent-primary)] hover:text-white transition-all">
                Área do Cliente
              </button>
            </a>
            <a href="#simulador">
              <button className="btn-primary flex items-center gap-2 py-2.5 px-6 text-sm">
                <Calculator className="w-4 h-4" />
                Simular Impostos
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--gaspi-accent-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--gaspi-accent-primary)]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass-effect border-t border-[var(--gaspi-border)]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-base font-medium text-[var(--gaspi-text-secondary)] hover:text-[var(--gaspi-accent-primary)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="https://connect.calima.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2.5 text-sm font-medium text-[var(--gaspi-accent-primary)] border border-[var(--gaspi-accent-primary)] rounded-lg hover:bg-[var(--gaspi-accent-primary)] hover:text-white transition-all">
                  Área do Cliente
                </button>
              </a>
              <a href="#simulador" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="btn-primary w-full flex items-center justify-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Simular Impostos
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
