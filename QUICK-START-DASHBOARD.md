# ⚡ Dashboard Admin - Início Rápido

## 🎯 Acesso Imediato

### **1. URL do Dashboard**
```
http://localhost:3000/admin/login
```

### **2. Credenciais Padrão** (Já Configuradas)
- **Email**: `admin@gaspicontabilidade.com.br`
- **Senha**: `admin123`

⚠️ **IMPORTANTE**: Altere esta senha após o primeiro login!

---

## 🚀 Como Usar

### **Login**
1. Acesse: http://localhost:3000/admin/login
2. Digite o email e senha acima
3. Clique em "Entrar"

### **Dashboard**
Você verá:
- 📊 **3 Cards de Estatísticas**
  - Total de leads
  - Economia total estimada
  - Faturamento médio

- 📋 **Tabela Completa de Leads**
  - Nome, WhatsApp, Atividade, Faturamento
  - Quantidade de funcionários
  - Economia estimada e regime recomendado
  - Data de cadastro

- 💾 **Botão "Exportar CSV"**
  - Baixa todos os dados em Excel/Sheets

### **Logout**
- Botão "Sair" no canto superior direito

---

## 🔐 Trocar Senha (Recomendado)

### **Passo 1: Gerar Nova Senha**
```bash
node scripts/generate-password-hash.js SuaNovaSenhaForte123!
```

### **Passo 2: Copiar o Hash**
O script mostrará algo como:
```
$2b$10$ABC...XYZ123
```

### **Passo 3: Atualizar .env.local**
Substitua a linha:
```env
ADMIN_PASSWORD_HASH=$2b$10$Q3G9BakF5hUiEz.dqxAfd.VN0xUNIwP6s6T3v8bVh6P7ju/vDTyWe
```

Por:
```env
ADMIN_PASSWORD_HASH=$2b$10$ABC...XYZ123
```

### **Passo 4: Reiniciar Servidor**
```bash
# Parar (Ctrl+C)
npm run dev
```

---

## ✅ Teste Rápido

1. ✅ Acesse http://localhost:3000/admin/login
2. ✅ Faça login com credenciais padrão
3. ✅ Veja as estatísticas no dashboard
4. ✅ Teste exportar CSV (botão no topo da tabela)
5. ✅ Clique no WhatsApp de um lead (deve abrir conversa)
6. ✅ Teste logout e login novamente

---

## 🐛 Problema?

### **"Email ou senha inválidos"**
- Verifique se digitou corretamente:
  - Email: `admin@gaspicontabilidade.com.br`
  - Senha: `admin123`

### **Página em branco ou erro**
- Reinicie o servidor: Ctrl+C e `npm run dev`
- Verifique se o arquivo `.env.local` foi salvo

### **Dashboard vazio**
- Configure credenciais do Supabase no `.env.local`
- Certifique-se que a tabela `gaspileads` existe
- Teste preenchendo o simulador na página inicial

---

## 📱 Acesso Futuro

Depois do deploy em produção, acesse:
```
https://gaspicontabilidade.com.br/admin/login
```

---

**Pronto para usar! 🎉**

Leia `DASHBOARD-SETUP.md` para configurações avançadas.
