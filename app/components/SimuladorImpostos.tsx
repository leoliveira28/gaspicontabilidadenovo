'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingDown, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

interface SimulacaoResultado {
  simplesNacional: number
  lucroPresumido: number
  economia: number
  percentualEconomia: number
  recomendacao: 'simples' | 'lucro'
}

export default function SimuladorImpostos() {
  const [step, setStep] = useState<'form' | 'simulacao' | 'resultado'>('form')
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [atividade, setAtividade] = useState('')
  const [faturamento, setFaturamento] = useState('')
  const [temFuncionarios, setTemFuncionarios] = useState<string>('')
  const [quantidadeFuncionarios, setQuantidadeFuncionarios] = useState('')
  const [resultado, setResultado] = useState<SimulacaoResultado | null>(null)
  const [loading, setLoading] = useState(false)

  const atividades = [
    { value: 'prestador_servico', label: 'Prestador de Serviços', aliquotaSimples: 15.5, aliquotaLucro: 16.33 },
    { value: 'corretor', label: 'Corretor de Imóveis', aliquotaSimples: 16.93, aliquotaLucro: 16.33 },
    { value: 'medico', label: 'Médico / Clínica', aliquotaSimples: 16.93, aliquotaLucro: 13.33 },
    { value: 'ti', label: 'Tecnologia / TI', aliquotaSimples: 15.5, aliquotaLucro: 13.33 },
    { value: 'comercio', label: 'Comércio / Pequena Empresa', aliquotaSimples: 10.5, aliquotaLucro: 11.33 },
    { value: 'consultoria', label: 'Consultoria', aliquotaSimples: 16.93, aliquotaLucro: 16.33 },
  ]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const parseCurrencyToNumber = (value: string): number => {
    // Remove tudo exceto dígitos
    const numbers = value.replace(/\D/g, '')
    // Converte para número (em centavos) e divide por 100
    return parseFloat(numbers) / 100 || 0
  }

  const formatCurrencyInput = (value: string): string => {
    // Remove tudo exceto dígitos
    const numbers = value.replace(/\D/g, '')
    // Converte para número em centavos
    const amount = parseFloat(numbers) || 0
    // Divide por 100 para ter o valor em reais
    return formatCurrency(amount / 100)
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value)
    setWhatsapp(formatted)
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (nome && whatsapp && atividade && faturamento && temFuncionarios) {
      setStep('simulacao')
      setTimeout(() => calcularImpostos(), 1500)
    }
  }

  const calcularImpostos = () => {
    const atividadeSelecionada = atividades.find(a => a.value === atividade)
    if (!atividadeSelecionada) return

    const valor = parseCurrencyToNumber(faturamento)

    const impostoSimples = (valor * atividadeSelecionada.aliquotaSimples) / 100
    const impostoLucro = (valor * atividadeSelecionada.aliquotaLucro) / 100

    const economia = Math.abs(impostoSimples - impostoLucro)
    const percentualEconomia = ((economia / Math.max(impostoSimples, impostoLucro)) * 100)
    const recomendacao = impostoSimples < impostoLucro ? 'simples' : 'lucro'

    const resultado: SimulacaoResultado = {
      simplesNacional: impostoSimples,
      lucroPresumido: impostoLucro,
      economia,
      percentualEconomia,
      recomendacao,
    }

    setResultado(resultado)

    // Salvar lead no Supabase
    salvarLead(resultado)

    setStep('resultado')
  }

  const salvarLead = async (resultadoCalculo: SimulacaoResultado) => {
    try {
      const response = await fetch('/api/gaspi/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          whatsapp: whatsapp.replace(/\D/g, ''),
          atividade,
          faturamento: parseCurrencyToNumber(faturamento),
          quantidade_funcionarios: temFuncionarios === 'sim' ? parseInt(quantidadeFuncionarios) || 0 : 0,
          economia_estimada: resultadoCalculo.economia,
          regime_recomendado: resultadoCalculo.recomendacao,
        }),
      })

      if (!response.ok) {
        console.error('Erro ao salvar lead')
      }
    } catch (error) {
      console.error('Erro ao salvar lead:', error)
    }
  }

  const reiniciarSimulacao = () => {
    setStep('form')
    setNome('')
    setWhatsapp('')
    setAtividade('')
    setFaturamento('')
    setTemFuncionarios('')
    setQuantidadeFuncionarios('')
    setResultado(null)
  }

  return (
    <section id="simulador" className="section-padding relative overflow-hidden bg-[var(--gaspi-surface)]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--gaspi-accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gaspi-accent-success)]/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
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
            <Calculator className="w-4 h-4 text-[var(--gaspi-accent-primary)]" />
            <span className="text-sm font-medium text-[var(--gaspi-accent-primary)]">
              Simulador Gratuito
            </span>
          </motion.div>

          <motion.h2
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Descubra Quanto Você Pode <span className="gradient-text">Economizar</span>
          </motion.h2>

          <motion.p
            className="body-large max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simule gratuitamente e veja a diferença entre Simples Nacional e Lucro Presumido
          </motion.p>
        </div>

        {/* Simulador */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Formulário */}
            {step === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-effect rounded-3xl p-8 md:p-12 border border-[var(--gaspi-border)]">
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    {/* Nome */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white placeholder-[var(--gaspi-text-secondary)] focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={whatsapp}
                        onChange={handleWhatsAppChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white placeholder-[var(--gaspi-text-secondary)] focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Atividade */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Tipo de Atividade *
                      </label>
                      <select
                        value={atividade}
                        onChange={(e) => setAtividade(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Selecione sua atividade</option>
                        {atividades.map((atv) => (
                          <option key={atv.value} value={atv.value}>
                            {atv.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Faturamento */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Faturamento Mensal (R$) *
                      </label>
                      <input
                        type="text"
                        value={faturamento}
                        onChange={(e) => {
                          const formatted = formatCurrencyInput(e.target.value)
                          setFaturamento(formatted)
                        }}
                        placeholder="R$ 0,00"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white placeholder-[var(--gaspi-text-secondary)] focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    {/* Tem Funcionários */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Possui funcionários? *
                      </label>
                      <select
                        value={temFuncionarios}
                        onChange={(e) => {
                          setTemFuncionarios(e.target.value)
                          if (e.target.value === 'nao') {
                            setQuantidadeFuncionarios('')
                          }
                        }}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                      </select>
                    </div>

                    {/* Quantidade de Funcionários - Condicional */}
                    {temFuncionarios === 'sim' && (
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Quantidade de Funcionários *
                        </label>
                        <input
                          type="number"
                          value={quantidadeFuncionarios}
                          onChange={(e) => setQuantidadeFuncionarios(e.target.value)}
                          placeholder="Ex: 5"
                          min="1"
                          className="w-full px-4 py-3 rounded-xl bg-[var(--gaspi-surface)] border border-[var(--gaspi-border)] text-white placeholder-[var(--gaspi-text-secondary)] focus:border-[var(--gaspi-accent-primary)] focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Calculator className="w-5 h-5" />
                      Calcular Economia
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {/* Step 2: Calculando */}
            {step === 'simulacao' && (
              <motion.div
                key="simulacao"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass-effect rounded-3xl p-12 border border-[var(--gaspi-border)] text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-20 h-20 mx-auto mb-6"
                  >
                    <Calculator className="w-20 h-20 text-[var(--gaspi-accent-primary)]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Calculando sua economia...</h3>
                  <p className="text-[var(--gaspi-text-secondary)]">
                    Estamos analisando a melhor opção para você
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 3: Resultado */}
            {step === 'resultado' && resultado && (
              <motion.div
                key="resultado"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-6">
                  {/* Economia Destaque */}
                  <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-[var(--gaspi-accent-primary)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gaspi-accent-primary)]/10 rounded-full blur-3xl" />

                    <div className="relative text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                      >
                        <Sparkles className="w-12 h-12 text-[var(--gaspi-accent-success)] mx-auto mb-4" />
                      </motion.div>

                      <h3 className="text-xl font-semibold mb-2 text-[var(--gaspi-accent-primary)]">
                        Você pode economizar
                      </h3>
                      <p className="text-5xl md:text-6xl font-bold mb-2 gradient-text">
                        {formatCurrency(resultado.economia)}
                      </p>
                      <p className="text-lg text-[var(--gaspi-text-secondary)]">
                        por mês ({resultado.percentualEconomia.toFixed(1)}% de economia)
                      </p>
                    </div>
                  </div>

                  {/* Comparação */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Simples Nacional */}
                    <div className={`glass-effect rounded-2xl p-6 border ${resultado.recomendacao === 'simples' ? 'border-[var(--gaspi-accent-primary)]' : 'border-[var(--gaspi-border)]'}`}>
                      {resultado.recomendacao === 'simples' && (
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                          <span className="text-sm font-bold text-[var(--gaspi-accent-primary)]">RECOMENDADO</span>
                        </div>
                      )}
                      <h4 className="text-xl font-bold mb-4">Simples Nacional</h4>
                      <p className="text-3xl font-bold mb-2">{formatCurrency(resultado.simplesNacional)}</p>
                      <p className="text-sm text-[var(--gaspi-text-secondary)]">impostos/mês</p>
                    </div>

                    {/* Lucro Presumido */}
                    <div className={`glass-effect rounded-2xl p-6 border ${resultado.recomendacao === 'lucro' ? 'border-[var(--gaspi-accent-primary)]' : 'border-[var(--gaspi-border)]'}`}>
                      {resultado.recomendacao === 'lucro' && (
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle className="w-5 h-5 text-[var(--gaspi-accent-primary)]" />
                          <span className="text-sm font-bold text-[var(--gaspi-accent-primary)]">RECOMENDADO</span>
                        </div>
                      )}
                      <h4 className="text-xl font-bold mb-4">Lucro Presumido</h4>
                      <p className="text-3xl font-bold mb-2">{formatCurrency(resultado.lucroPresumido)}</p>
                      <p className="text-sm text-[var(--gaspi-text-secondary)]">impostos/mês</p>
                    </div>
                  </div>

                  {/* Economia Anual */}
                  <div className="glass-effect rounded-2xl p-6 border border-[var(--gaspi-border)] bg-gradient-to-r from-[var(--gaspi-surface)] to-[var(--gaspi-surface-elevated)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[var(--gaspi-text-secondary)] mb-1">Economia Anual Estimada</p>
                        <p className="text-3xl font-bold gradient-text">{formatCurrency(resultado.economia * 12)}</p>
                      </div>
                      <TrendingDown className="w-12 h-12 text-[var(--gaspi-accent-primary)]" />
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/5517991131001?text=Olá! Fiz a simulação e quero economizar nos impostos!" className="flex-1">
                      <button className="btn-primary w-full">
                        Falar com Especialista
                      </button>
                    </a>
                    <button
                      onClick={reiniciarSimulacao}
                      className="btn-secondary flex-1"
                    >
                      Nova Simulação
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-center text-[var(--gaspi-text-secondary)]">
                    * Valores aproximados. Análise detalhada será feita por nossos especialistas.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
