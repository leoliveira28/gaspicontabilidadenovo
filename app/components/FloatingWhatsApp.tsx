'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/5517991131001?text=Olá! Vim do site e gostaria de saber mais sobre os serviços de contabilidade da Gaspi."

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src="/logo-wpp.svg"
        alt="WhatsApp"
        width={32}
        height={32}
        className="brightness-0 invert"
      />
    </motion.a>
  )
}
