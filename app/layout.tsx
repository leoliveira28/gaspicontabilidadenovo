import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gaspi Contabilidade | Redução de Impostos & Atendimento Humanizado',
  description: 'Contabilidade com atendimento humanizado, preço justo e foco em redução de impostos. Análise tributária trimestral, IR gratuito para sócios e muito mais.',
  keywords: 'contabilidade, redução de impostos, análise tributária, simples nacional, lucro presumido, gaspi contabilidade',
  openGraph: {
    title: 'Gaspi Contabilidade | Redução de Impostos & Atendimento Humanizado',
    description: 'Contabilidade com atendimento humanizado, preço justo e foco em redução de impostos. Análise tributária trimestral, IR gratuito para sócios e muito mais.',
    type: 'website',
  },
}

export default function GaspiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}
    