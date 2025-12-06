'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Calculator, MessageCircle, Instagram } from 'lucide-react'

export default function FinalCTA() {
  const benefits = [
    'Análise tributária trimestral gratuita',
    'IR para sócios sem custo adicional',
    'Sem cobrança de 13º honorários',
    'Resposta em até 24 horas',
    'Levantamento bimestral de débitos',
    'Economia média de 40% nos impostos',
  ]

  return (
    <section id="contato" className="section-padding relative overflow-hidden bg-gradient-to-b from-[var(--gaspi-background)] to-[var(--gaspi-surface)]">
      {/* Background Elements - Reduced */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card Principal */}
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-[var(--gaspi-accent-primary)]/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  borderColor: 'var(--gaspi-accent-primary)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >

              </motion.div>

              {/* Headline */}
              <motion.h2
                className="heading-2 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Pronto para <span className="gradient-text">Reduzir seus Impostos</span>?
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                className="body-large mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Junte-se a mais de 500 empresas que já economizam com a Gaspi Contabilidade
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                className="grid md:grid-cols-2 gap-4 mb-10 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--gaspi-accent-primary)] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-black font-bold" />
                    </div>
                    <span className="text-[var(--gaspi-text-secondary)]">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="https://wa.me/5517991131001?text=Olá! Quero economizar nos impostos com a Gaspi!" className="flex-1 sm:flex-initial">
                  <button className="btn-primary w-full flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Falar com Especialista
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
                <a href="#simulador" className="flex-1 sm:flex-initial">
                  <button className="btn-secondary w-full flex items-center justify-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Fazer Simulação Gratuita
                  </button>
                </a>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--gaspi-text-secondary)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                    <Check className="w-5 h-5 text-black font-bold" />
                  </div>
                  <span>Atendimento em 24h</span>
                </div>
                <div className="h-4 w-px bg-[var(--gaspi-border)]" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                    <Check className="w-5 h-5 text-black font-bold" />
                  </div>
                  <span>Sem 13º honorários</span>
                </div>
                <div className="h-4 w-px bg-[var(--gaspi-border)]" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                    <Check className="w-5 h-5 text-black font-bold" />
                  </div>
                  <span>IR gratuito</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Redes Sociais */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="https://instagram.com/gaspicontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)] transition-colors group"
              >
                <Instagram className="w-5 h-5 text-[var(--gaspi-text-secondary)] group-hover:text-[var(--gaspi-accent-primary)] transition-colors" />
                <span className="text-sm text-[var(--gaspi-text-secondary)] group-hover:text-[var(--gaspi-accent-primary)] transition-colors">
                  @gaspicontabilidade
                </span>
              </a>
              <a
                href="https://wa.me/5517991131001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)] transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-[var(--gaspi-text-secondary)] group-hover:text-[var(--gaspi-accent-primary)] transition-colors" />
                <span className="text-sm text-[var(--gaspi-text-secondary)] group-hover:text-[var(--gaspi-accent-primary)] transition-colors">
                  WhatsApp
                </span>
              </a>
            </div>

            <p className="text-sm text-[var(--gaspi-text-secondary)]">© 2025 Gaspi Contabilidade. Todos os direitos reservados.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
