'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Andreia Cristina',
      image: '/depoimentos/andreia cristina.jpeg',
    },
    {
      name: 'Cassio',
      image: '/depoimentos/cassio.jpeg',
    },
    {
      name: 'Darlan',
      image: '/depoimentos/darlan.jpeg',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-[var(--gaspi-surface)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[var(--gaspi-accent-success)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              borderColor: 'var(--gaspi-accent-primary)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[var(--gaspi-accent-primary)]">
              Depoimentos Reais
            </span>
          </motion.div>

          <motion.h2
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            O Que Nossos <span className="gradient-text">Clientes</span> Dizem
          </motion.h2>

          <motion.p
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mais de 500 empresas confiam na Gaspi para cuidar de sua contabilidade
          </motion.p>
        </div>

        {/* Grid de Depoimentos - WhatsApp Prints */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-4 border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)]/30 transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* WhatsApp Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-semibold text-[var(--gaspi-text-secondary)]">
                  Depoimento via WhatsApp
                </span>
              </div>

              {/* WhatsApp Print Image */}
              <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border-2 border-[var(--gaspi-border)] mb-4">
                <Image
                  src={testimonial.image}
                  alt={`Depoimento de ${testimonial.name}`}
                  fill
                  className="object-contain bg-[var(--gaspi-surface-elevated)]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Author Name */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gaspi-accent-primary)] to-[var(--gaspi-accent-success)] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a href="#simulador">
            <button className="btn-primary">
              Faça Sua Simulação Gratuita
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
