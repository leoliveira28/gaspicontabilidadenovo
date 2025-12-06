'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogOut, Users, TrendingDown, Calendar, Download } from 'lucide-react'
import type { GaspiLead } from '../../api/gaspi/leads/route'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [leads, setLeads] = useState<GaspiLead[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    total: 0,
    economiaTotalEstimada: 0,
    mediaFaturamento: 0,
  })

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetchLeads()
    }
  }, [status])

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/gaspi/leads')
      const data = await response.json()

      if (data.success) {
        const leadsData = data.data as GaspiLead[]
        setLeads(leadsData)

        // Calcular estatísticas
        const total = leadsData.length
        const economiaTotalEstimada = leadsData.reduce(
          (acc, lead) => acc + (lead.economia_estimada || 0),
          0
        )
        const mediaFaturamento =
          leadsData.reduce((acc, lead) => acc + (lead.faturamento || 0), 0) / total || 0

        setStats({ total, economiaTotalEstimada, mediaFaturamento })
      }
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar leads:', error)
      setLoading(false)
    }
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const exportToCSV = () => {
    const headers = ['Nome', 'WhatsApp', 'Atividade', 'Faturamento', 'Funcionários', 'Economia Estimada', 'Regime Recomendado', 'Data']
    const rows = leads.map(lead => [
      lead.nome,
      lead.whatsapp,
      lead.atividade,
      lead.faturamento,
      lead.quantidade_funcionarios || 0,
      lead.economia_estimada,
      lead.regime_recomendado,
      lead.created_at ? new Date(lead.created_at).toLocaleDateString('pt-BR') : '',
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `leads-gaspi-${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--gaspi-background)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[var(--gaspi-accent-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[var(--gaspi-text-secondary)]">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-[var(--gaspi-background)] pb-12">
      {/* Header */}
      <div className="border-b border-[var(--gaspi-border)] bg-[var(--gaspi-surface)]">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">Dashboard Admin</h1>
              <p className="text-[var(--gaspi-text-secondary)]">
                Bem-vindo, {session.user?.email}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="btn-secondary flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom mt-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect rounded-2xl p-6 border border-[var(--gaspi-border)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                <Users className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-[var(--gaspi-text-secondary)]">Total de Leads</p>
                <p className="text-2xl font-bold">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-[var(--gaspi-border)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gaspi-accent-success)] flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-[var(--gaspi-text-secondary)]">Economia Total</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.economiaTotalEstimada)}</p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-[var(--gaspi-border)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--gaspi-accent-primary)] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-[var(--gaspi-text-secondary)]">Faturamento Médio</p>
                <p className="text-2xl font-bold">{formatCurrency(stats.mediaFaturamento)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Leads Capturados</h2>
          <button
            onClick={exportToCSV}
            className="btn-secondary flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Exportar CSV
          </button>
        </div>

        {/* Table */}
        <div className="glass-effect rounded-2xl border border-[var(--gaspi-border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--gaspi-surface-elevated)]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Nome</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">WhatsApp</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Atividade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Faturamento</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Funcionários</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Economia</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Regime</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Data</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-[var(--gaspi-text-secondary)]">
                      Nenhum lead capturado ainda
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-t border-[var(--gaspi-border)] hover:bg-[var(--gaspi-surface)]/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm">{lead.nome}</td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={`https://wa.me/55${lead.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--gaspi-accent-primary)] hover:underline"
                        >
                          {lead.whatsapp}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm capitalize">{lead.atividade.replace('_', ' ')}</td>
                      <td className="px-6 py-4 text-sm">{formatCurrency(lead.faturamento)}</td>
                      <td className="px-6 py-4 text-sm text-center">{lead.quantidade_funcionarios || 0}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-[var(--gaspi-accent-success)]">
                        {formatCurrency(lead.economia_estimada)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          lead.regime_recomendado === 'simples'
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-purple-500/10 text-purple-500'
                        }`}>
                          {lead.regime_recomendado === 'simples' ? 'Simples Nacional' : 'Lucro Presumido'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--gaspi-text-secondary)]">
                        {lead.created_at ? formatDate(lead.created_at) : '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
