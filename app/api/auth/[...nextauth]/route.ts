import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

// Configuração do NextAuth
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Credenciais faltando')
          return null
        }

        // Usuário admin hardcoded
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@gaspicontabilidade.com.br'
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || ''

        console.log('🔍 Tentativa de login:', {
          emailDigitado: credentials.email,
          adminEmail: adminEmail,
          hashDisponivel: !!adminPasswordHash,
          hashLength: adminPasswordHash.length
        })

        if (credentials.email === adminEmail) {
          if (!adminPasswordHash) {
            console.log('❌ Hash da senha não configurado no .env.local')
            return null
          }

          try {
            // Verificar senha
            const isValid = await bcrypt.compare(credentials.password, adminPasswordHash)

            console.log('🔐 Resultado da verificação:', isValid)

            if (isValid) {
              console.log('✅ Login bem-sucedido!')
              return {
                id: '1',
                email: adminEmail,
                name: 'Admin Gaspi',
              }
            } else {
              console.log('❌ Senha incorreta')
            }
          } catch (error) {
            console.error('❌ Erro ao comparar senha:', error)
          }
        } else {
          console.log('❌ Email não corresponde ao admin')
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
