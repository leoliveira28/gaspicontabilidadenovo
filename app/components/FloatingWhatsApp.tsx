'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function FloatingWhatsApp() {
  const [isExpanded, setIsExpanded] = useState(false)
  const whatsappLink = "https://wa.me/5517991131001?text=Olá! Vim do site e gostaria de saber mais sobre os serviços de contabilidade da Gaspi."

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 shadow-lg flex items-center gap-3 hover:scale-105 transition-transform overflow-hidden"
      animate={{
        width: isExpanded ? 'auto' : '64px',
        paddingLeft: isExpanded ? '18px' : '20px',
        paddingRight: isExpanded ? '18px' : '20px',
      }}
      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-3 h-16">
        <Image
          src="/logo-wpp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          className="brightness-0 invert shrink-0"
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-white font-semibold text-sm whitespace-nowrap"
            >
              Fale com Especialista
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  )
}
