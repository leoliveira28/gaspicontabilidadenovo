'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

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
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.a>
  )
}
