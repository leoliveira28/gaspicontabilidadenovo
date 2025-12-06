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
          return null
        }

        // Usuário admin hardcoded (você pode adicionar mais usuários aqui ou usar banco de dados)
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@gaspicontabilidade.com.br'
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH || ''

        if (credentials.email === adminEmail) {
          // Verificar senha
          const isValid = await bcrypt.compare(credentials.password, adminPasswordHash)

          if (isValid) {
            return {
              id: '1',
              email: adminEmail,
              name: 'Admin Gaspi',
            }
          }
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
