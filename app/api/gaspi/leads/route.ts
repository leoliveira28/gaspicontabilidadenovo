import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface GaspiLead {
  id?: string
  nome: string
  whatsapp: string
  atividade: string
  faturamento: number
  quantidade_funcionarios?: number
  economia_estimada: number
  regime_recomendado: 'simples' | 'lucro'
  created_at?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: Omit<GaspiLead, 'id' | 'created_at'> = await request.json()

    // Validação básica
    if (!body.nome || !body.whatsapp || !body.atividade || !body.faturamento) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Salvar no Supabase
    const { data, error } = await supabase
      .from('gaspileads')
      .insert([
        {
          nome: body.nome,
          whatsapp: body.whatsapp,
          atividade: body.atividade,
          faturamento: body.faturamento,
          quantidade_funcionarios: body.quantidade_funcionarios || 0,
          economia_estimada: body.economia_estimada,
          regime_recomendado: body.regime_recomendado,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao salvar lead:', error)
      return NextResponse.json(
        { error: 'Erro ao salvar lead', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 201 })
  } catch (error) {
    console.error('Erro ao processar requisição:', error)
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('gaspileads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    if (error) {
      console.error('Erro ao buscar leads:', error)
      return NextResponse.json(
        { error: 'Erro ao buscar leads', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('Erro ao processar requisição:', error)
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    )
  }
}
