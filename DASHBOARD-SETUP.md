# 🔐 Dashboard Admin - Guia de Configuração

## ✅ Implementado

Dashboard completo de administração com:
- ✅ Autenticação segura com NextAuth (email + senha)
- ✅ Página de login protegida
- ✅ Dashboard com estatísticas de leads
- ✅ Tabela completa de leads capturados
- ✅ Exportação para CSV
- ✅ Proteção de rotas (middleware)

---

## 🚀 Configuração Rápida

### **1. Gerar Hash da Senha**

Execute o script para criar uma senha segura:

```bash
node scripts/generate-password-hash.js SuaSenhaForteAqui123!
```

Copie o hash gerado e cole no `.env.local`.

### **2. Gerar NEXTAUTH_SECRET**

```bash
openssl rand -base64 32
```

Ou use o Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### **3. Atualizar .env.local**

Edite o arquivo `.env.local`:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=cole-o-secret-gerado-aqui

# Admin Credentials
ADMIN_EMAIL=admin@gaspicontabilidade.com.br
ADMIN_PASSWORD_HASH=cole-o-hash-gerado-aqui
```

### **4. Reiniciar o Servidor**

```bash
# Pare o servidor (Ctrl+C)
# Inicie novamente
npm run dev
```

---

## 🔑 Login no Dashboard

### **Acesso:**
1. Abra: http://localhost:3000/admin/login
2. Email: `admin@gaspicontabilidade.com.br`
3. Senha: A senha que você definiu no passo 1

### **Primeiro Login:**
Se você NÃO configurou o hash, use a senha padrão temporária:
- Senha: `gaspi2025`
- ⚠️ **IMPORTANTE**: Altere imediatamente após o primeiro login!

---

## 📊 Funcionalidades do Dashboard

### **Estatísticas em Tempo Real**
- Total de leads capturados
- Economia total estimada (soma de todos os leads)
- Faturamento médio dos leads

### **Tabela de Leads**
Visualize todos os dados capturados:
- Nome completo
- WhatsApp (clicável para abrir conversa)
- Tipo de atividade
- Faturamento mensal
- Quantidade de funcionários
- Economia estimada
- Regime tributário recomendado
- Data/hora de cadastro

### **Exportação de Dados**
Botão "Exportar CSV" gera arquivo com todos os leads para:
- Análise no Excel/Google Sheets
- Importação em CRM
- Relatórios mensais
- Backup dos dados

---

## 🛡️ Segurança

### **Proteção Implementada:**
- ✅ Senha armazenada com hash bcrypt (salt rounds: 10)
- ✅ JWT tokens seguros
- ✅ Sessão server-side
- ✅ Rotas protegidas (redirecionamento automático)
- ✅ CSRF protection (Next.js padrão)
- ✅ HTTPS obrigatório em produção

### **Boas Práticas:**
1. **Senha Forte**: Mínimo 12 caracteres com letras, números e símbolos
2. **NEXTAUTH_SECRET**: Nunca commite no Git (já está no .gitignore)
3. **Email Único**: Use email profissional real
4. **Produção**: Configure NEXTAUTH_URL com domínio real

---

## 👥 Adicionar Mais Usuários

Para adicionar mais admins, edite:
`app/api/auth/[...nextauth]/route.ts`

```typescript
// Exemplo com múltiplos usuários
const users = [
  {
    email: 'admin@gaspicontabilidade.com.br',
    passwordHash: process.env.ADMIN_PASSWORD_HASH,
    name: 'Admin Principal',
  },
  {
    email: 'contador@gaspicontabilidade.com.br',
    passwordHash: process.env.CONTADOR_PASSWORD_HASH,
    name: 'Contador',
  },
]

const user = users.find(u => u.email === credentials.email)
if (user) {
  const isValid = await bcrypt.compare(credentials.password, user.passwordHash)
  // ... resto do código
}
```

Adicione novas variáveis no `.env.local`:
```env
CONTADOR_PASSWORD_HASH=hash-gerado-para-contador
```

---

## 🚀 Deploy em Produção

### **Vercel (Recomendado)**

1. **Environment Variables**
   Configure na Vercel Dashboard:
   ```
   NEXTAUTH_URL=https://gaspicontabilidade.com.br
   NEXTAUTH_SECRET=seu-secret-aqui
   ADMIN_EMAIL=admin@gaspicontabilidade.com.br
   ADMIN_PASSWORD_HASH=seu-hash-aqui
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Teste**
   Acesse: `https://gaspicontabilidade.com.br/admin/login`

---

## 📱 Acesso Mobile

O dashboard é 100% responsivo:
- ✅ Funciona em tablets e smartphones
- ✅ Tabela com scroll horizontal automático
- ✅ Cards de estatísticas empilhados em mobile
- ✅ Botões adaptados para touch

---

## 🔄 Atualização de Dados

Os dados são atualizados automaticamente quando:
- ✅ Alguém preenche o simulador de impostos
- ✅ Lead é salvo no Supabase
- ✅ Dashboard recarrega a página (F5)

**Atualizar manualmente:**
- Recarregue a página (F5)
- Faça logout e login novamente

---

## 📊 Estrutura de Dados

### **Lead Completo:**
```typescript
{
  id: string                    // UUID único
  nome: string                  // Nome completo
  whatsapp: string              // Telefone (apenas números)
  atividade: string             // Tipo de negócio
  faturamento: number           // R$ mensal
  quantidade_funcionarios: number  // Quantidade de empregados
  economia_estimada: number     // R$ de economia calculada
  regime_recomendado: string    // 'simples' ou 'lucro'
  created_at: string            // Data/hora ISO 8601
}
```

---

## 🐛 Troubleshooting

### **Erro: "Email ou senha inválidos"**
- Verifique se o hash foi gerado corretamente
- Confirme que o email está correto no `.env.local`
- Teste gerar novo hash: `node scripts/generate-password-hash.js novaSenha`

### **Erro: "Unauthorized" ou redirecionamento infinito**
- Certifique-se que `NEXTAUTH_SECRET` está definido
- Reinicie o servidor após alterar `.env.local`
- Limpe cookies do navegador (Ctrl+Shift+Del)

### **Dashboard vazio/não carrega leads**
- Verifique credenciais do Supabase no `.env.local`
- Confirme que a tabela `gaspileads` existe
- Teste a API diretamente: `/api/leads` (deve retornar JSON)

### **Erro 500 no login**
- Verifique logs do servidor
- Confirme que bcryptjs está instalado: `npm install bcryptjs`
- Hash da senha está em formato válido bcrypt

---

## 📈 Próximos Passos (Opcionais)

### **Melhorias Futuras:**
1. **Filtros e Busca**
   - Filtrar por data
   - Buscar por nome/atividade
   - Ordenar colunas

2. **Gráficos e Analytics**
   - Gráfico de leads por dia
   - Funil de conversão
   - Atividades mais comuns

3. **Notificações**
   - Email quando novo lead entra
   - WhatsApp automático para o time
   - Dashboard de tempo real (WebSockets)

4. **CRM Integrado**
   - Adicionar status do lead (novo, contatado, convertido)
   - Notas e histórico de interações
   - Pipeline de vendas

5. **Múltiplos Usuários**
   - Sistema completo de usuários
   - Permissões (admin, contador, vendedor)
   - Auditoria de ações

---

## 🔐 Backup e Segurança

### **Backup Regular:**
1. **Exportar CSV semanalmente**
2. **Backup do Supabase** (automático)
3. **Logs de acesso** (Vercel Analytics)

### **Auditoria:**
- Quem acessou: Vercel/Next.js logs
- Quando: Timestamp nos logs
- O que fez: Vercel Function logs

---

## ✅ Checklist de Configuração

- [ ] Gerar hash de senha forte
- [ ] Gerar NEXTAUTH_SECRET
- [ ] Atualizar .env.local com credenciais
- [ ] Reiniciar servidor
- [ ] Testar login em http://localhost:3000/admin/login
- [ ] Verificar dashboard carrega leads
- [ ] Testar exportação CSV
- [ ] Testar logout e login novamente
- [ ] Configurar variáveis na Vercel (produção)
- [ ] Fazer backup inicial dos dados

---

**Dashboard criado por:** Claude Code
**Data:** 06/12/2025
**Versão:** 1.0

🎉 **Seu dashboard está pronto para uso!**
