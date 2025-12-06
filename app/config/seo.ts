export const seoConfig = {
  siteName: 'Gaspi Contabilidade',
  siteUrl: 'https://gaspicontabilidade.com.br',
  defaultTitle: 'Gaspi Contabilidade | Contador em São José do Rio Preto - SP | Economize até 40% em Impostos',
  defaultDescription:
    'Escritório de contabilidade em São José do Rio Preto especializado em redução de impostos. Contador online com atendimento humanizado, análises trimestrais gratuitas e IRPF sem custo. Simule agora e economize até 40%!',
  keywords: [
    // Palavras-chave principais - Local
    'contador são josé do rio preto',
    'escritório contabilidade são josé do rio preto',
    'contabilidade são josé rio preto',
    'contador rio preto',
    'escritório contábil rio preto',

    // Serviços específicos
    'abertura de empresa são josé rio preto',
    'mei são josé rio preto',
    'simples nacional',
    'lucro presumido',
    'planejamento tributário',
    'redução de impostos',
    'economia tributária',

    // Contador online
    'contador online',
    'contabilidade digital',
    'contabilidade online são paulo',

    // Serviços diferenciados
    'análise tributária gratuita',
    'irpf gratuito',
    'imposto de renda pessoa física',
    'declaração imposto renda',

    // Público-alvo
    'contador para médicos',
    'contador para dentistas',
    'contador para advogados',
    'contador para corretores',
    'contador para e-commerce',
    'contador para prestadores de serviço',
    'contador para mei',
    'contador para pequenas empresas',

    // Localização regional
    'contador interior são paulo',
    'escritório contabilidade interior sp',
    'gaspi contabilidade',
  ],

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Gaspi Contabilidade',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gaspi Contabilidade - Economize até 40% em impostos',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@gaspicontabilidade',
  },

  // Informações do negócio (Schema.org)
  business: {
    name: 'Gaspi Contabilidade',
    legalName: 'Gaspi Contabilidade Ltda',
    description: 'Escritório de contabilidade especializado em redução de impostos e planejamento tributário',
    address: {
      streetAddress: 'Rua Cosmorama, 18, Sala 6',
      addressLocality: 'São José do Rio Preto',
      addressRegion: 'SP',
      postalCode: '15060-320',
      addressCountry: 'BR',
    },
    geo: {
      latitude: -20.8197,
      longitude: -49.3796,
    },
    telephone: '+55 17 99113-1001',
    email: 'contato@gaspicontabilidade.com.br',
    priceRange: '$$',
    areaServed: [
      'São José do Rio Preto',
      'São Paulo',
      'Brasil',
    ],
    serviceType: [
      'Contabilidade',
      'Planejamento Tributário',
      'Abertura de Empresa',
      'Consultoria Fiscal',
      'Declaração de Imposto de Renda',
    ],
  },
}

export type SEOConfig = typeof seoConfig
