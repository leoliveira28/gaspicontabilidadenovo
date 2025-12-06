'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Gift, Ban, FileCheck, Heart, DollarSign, Zap, Shield } from 'lucide-react'

export default function Diferenciais() {
  const diferenciais = [
    {
      icon: TrendingDown,
      title: 'Análise Tributária Trimestral',
      description: 'Revisamos sua tributação a cada 3 meses para garantir que você está no regime mais vantajoso',
      badge: 'Exclusivo',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Gift,
      title: 'IR Gratuito para Sócios',
      description: 'Declaração de Imposto de Renda completa para sócios sem custo adicional',
      badge: 'Grátis',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Ban,
      title: 'Sem 13º Honorários',
      description: 'Não cobramos 13º salário de honorários. Preço justo e transparente o ano todo',
      badge: 'Economia',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FileCheck,
      title: 'Levantamento Bimestral',
      description: 'Verificação bimestral de débitos tributários para evitar surpresas e multas',
      badge: 'Segurança',
      color: 'from-orange-500 to-red-500',
    },
  ]

  const beneficios = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Sem robôs, sem espera. Fale direto com especialistas que entendem seu negócio',
    },
    {
      icon: DollarSign,
      title: 'Preço Justo',
      description: 'Sem taxas escondidas ou surpresas. Valor fixo mensal que cabe no seu bolso',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Respostas rápidas, processos otimizados. Seu tempo é valioso para nós',
    },
    {
      icon: Shield,
      title: 'Redução de Impostos',
      description: 'Nossa especialidade é fazer você pagar menos impostos de forma legal e segura',
    },
  ]

  return (
    <section id="diferenciais" className="section-padding relative overflow-hidden">
      {/* Background Elements - Reduced */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gaspi-accent-primary)]/3 rounded-full blur-2xl" />
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
              O Que Nos Torna Únicos
            </span>
          </motion.div>

          <motion.h2
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Diferenciais</span> que Fazem a Diferença
          </motion.h2>

          <motion.p
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Veja por que mais de 500 empresas confiam na Gaspi para cuidar de sua contabilidade
          </motion.p>
        </div>

        {/* Diferenciais Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card */}
              <div className="relative glass-effect rounded-2xl p-8 border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)]/30 transition-all duration-300 h-full">
                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--gaspi-accent-primary)] text-black">
                    {item.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[var(--gaspi-accent-primary)] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--gaspi-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefícios Section */}
        <div className="text-center mb-12">
          <motion.h3
            className="heading-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nossos Pilares
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-effect rounded-2xl p-6 border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)]/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--gaspi-accent-primary)] flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--gaspi-text-secondary)]">
                  {item.description}
                </p>
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
              Simular Redução de Impostos Agora
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
