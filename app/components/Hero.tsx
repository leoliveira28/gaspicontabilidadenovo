'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Users, Clock, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements - Reduced for sober design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: 'var(--gaspi-accent-primary)',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 bg-[var(--gaspi-accent-primary)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--gaspi-accent-primary)]">
                Redução de até 40% nos impostos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="heading-1 mb-6"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="gradient-text">Reduza seus Impostos</span>
              <br className="hidden md:block" />
              com quem entende do assunto
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="body-large mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Contabilidade com preço justo, agilidade e foco em gerar economia de tributos para sua empresa.
            </motion.p>

            {/* Badge Reforma Tributária */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
              style={{
                backgroundColor: 'rgba(194, 230, 72, 0.1)',
                borderColor: 'var(--gaspi-accent-primary)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-sm font-medium text-[var(--gaspi-text-secondary)]">
                Atualizados com a reforma tributária vigente em 2026
              </span>
            </motion.div>

            <motion.p
              className="body-normal mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Análises trimestrais para reduções de impostos + IRPF para sócios sem custo adicional
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="#simulador">
                <button className="btn-primary w-full sm:w-auto">
                  Simular Redução de Impostos
                </button>
              </a>
              <a href="#diferenciais">
                <button className="btn-secondary w-full sm:w-auto">
                  Conhecer Diferenciais
                </button>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                <span className="text-sm text-[var(--gaspi-text-secondary)]">-40% impostos</span>
              </div>
              <div className="h-4 w-px bg-[var(--gaspi-border)]" />
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                <span className="text-sm text-[var(--gaspi-text-secondary)]">Resposta em 24h</span>
              </div>
              <div className="h-4 w-px bg-[var(--gaspi-border)]" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                <span className="text-sm text-[var(--gaspi-text-secondary)]">+500 clientes</span>
              </div>
            </motion.div>
          </div>

          {/* Visual - Foto do Cliente com Destaque */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Card Principal */}
            <div className="relative">
              {/* Card */}
              <div className="relative glass-effect rounded-3xl p-8 shadow-xl border border-[var(--gaspi-accent-primary)]/20">
                {/* Foto do Cliente - DESTAQUE */}
                <div className="relative mb-6">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[var(--gaspi-accent-primary)]/30">
                    <Image
                      src="/ze-perfil.png"
                      alt="José Eduardo - Fundador Gaspi Contabilidade"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info do Cliente */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-1">José Henrique</h3>
                  <p className="text-[var(--gaspi-accent-primary)] font-medium mb-2">Fundador & Contador</p>

                </div>

                {/* Destaques */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--gaspi-surface)]">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                      <span className="text-lg font-bold text-black">5+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Anos de Experiência</p>
                      <p className="text-xs text-[var(--gaspi-text-secondary)]">em redução tributária</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--gaspi-surface)]">
                    <div className="w-12 h-12 rounded-lg bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                      <span className="text-lg font-bold text-black">40%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Redução Média</p>
                      <p className="text-xs text-[var(--gaspi-text-secondary)]">de impostos para clientes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-[var(--gaspi-text-secondary)]" />
      </motion.div>
    </section>
  )
}
