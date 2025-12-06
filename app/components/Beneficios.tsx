'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, TrendingUp, HeartHandshake, FileText, Headphones } from 'lucide-react'

export default function Beneficios() {
  const beneficios = [
    {
      icon: Clock,
      title: 'Emissões de notas de 2 a 4 hrs',
      description: 'Prazo máximo para geração de notas do nosso time fiscal',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Dados protegidos e conformidade garantida',
    },
    {
      icon: TrendingUp,
      title: 'Redução de até 40%',
      description: 'Economia real em impostos de forma legal',
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Humano',
      description: 'Sem robôs, apenas especialistas dedicados',
    },
    {
      icon: FileText,
      title: 'Análises Trimestrais',
      description: 'Revisão constante para otimizar seus tributos',
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Time especializado sempre disponível',
    },
  ]

  return (
    <section id="beneficios" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--gaspi-accent-success)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Por que Escolher a <span className="gradient-text">Gaspi</span>?
          </motion.h2>

          <motion.p
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Benefícios que fazem a diferença no seu negócio
          </motion.p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)]/30 transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gaspi-accent-primary)] to-[var(--gaspi-accent-success)] flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-black" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[var(--gaspi-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
