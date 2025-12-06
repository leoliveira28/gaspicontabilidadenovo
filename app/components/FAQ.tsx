'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Como funciona a análise tributária trimestral?',
      answer: 'A cada 3 meses, nossa equipe revisa toda sua situação tributária para identificar oportunidades de economia. Analisamos faturamento, regime tributário, enquadramento e sugerimos mudanças quando benéficas para você.',
    },
    {
      question: 'O IR para sócios é realmente gratuito?',
      answer: 'Sim! Todos os sócios das empresas que atendem conosco têm direito ao serviço de declaração de Imposto de Renda Pessoa Física sem custo adicional. É nosso diferencial.',
    },
    {
      question: 'Quanto posso economizar com a troca de regime tributário?',
      answer: 'A economia varia de acordo com sua atividade e faturamento, mas nossos clientes economizam em média 35-40% nos impostos. Use nosso simulador para ter uma estimativa personalizada.',
    },
    {
      question: 'Como funciona o levantamento bimestral de débitos?',
      answer: 'A cada 2 meses, verificamos junto à Receita Federal, Estadual e Municipal se há débitos tributários em aberto. Isso evita surpresas, multas e juros, mantendo sua empresa sempre regular.',
    },
    {
      question: 'Qual o prazo de resposta para dúvidas?',
      answer: 'Na maioria dos casos respondemos no mesmo momento. Temos um time dedicado para atendimento ágil e humanizado.',
    },
    {
      question: 'Como é feita a transição de outra contabilidade?',
      answer: 'Cuidamos de todo o processo de migração. Solicitamos os arquivos da contabilidade anterior, fazemos uma análise completa e assumimos a operação sem interrupções para seu negócio.',
    },
    {
      question: 'Atendem empresas de todos os portes?',
      answer: 'Sim! Atendemos desde MEI até empresas de médio porte. Nosso atendimento é personalizado de acordo com o tamanho e necessidades de cada cliente.',
    },
    {
      question: 'Como funciona a precificação?',
      answer: 'Trabalhamos com mensalidade fixa de acordo com o porte e complexidade da empresa. Sem taxas escondidas, sem 13º honorários, sem surpresas. Preço justo e transparente.',
    },
  ]

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--gaspi-accent-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--gaspi-accent-success)]/5 rounded-full blur-3xl" />
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
              Perguntas Frequentes
            </span>
          </motion.div>

          <motion.h2
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dúvidas <span className="gradient-text">Frequentes</span>
          </motion.h2>

          <motion.p
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ainda tem dúvidas? Entre em contato e teremos prazer em ajudar
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl border border-[var(--gaspi-border)] hover:border-[var(--gaspi-accent-primary)]/30 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-[var(--gaspi-text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
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
          <p className="text-[var(--gaspi-text-secondary)] mb-4">Não encontrou sua resposta?</p>
          <a href="https://wa.me/5517991131001?text=Olá! Tenho algumas dúvidas sobre os serviços.">
            <button className="btn-primary">
              Falar com Especialista
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
