# 🚀 Guia de SEO - Gaspi Contabilidade

## ✅ Implementações Realizadas

### 1. **Arquivos de SEO Básicos**
- ✅ `robots.txt` - Permite indexação do Google
- ✅ `sitemap.xml` - Mapa do site para motores de busca
- ✅ Metadata otimizada no `layout.tsx`
- ✅ Schema.org JSON-LD para Local Business

### 2. **Palavras-chave Otimizadas**
Configuradas em `app/config/seo.ts`:

**Principais palavras-chave locais:**
- contador são josé do rio preto
- escritório contabilidade são josé do rio preto
- contabilidade são josé rio preto
- contador rio preto 

**Serviços específicos:**
- planejamento tributário
- redução de impostos
- simples nacional
- lucro presumido
- abertura de empresa

**Público-alvo:**
- contador para médicos
- contador para dentistas
- contador para e-commerce
- contador para mei

### 3. **Schema.org (Dados Estruturados)**
Implementado JSON-LD para:
- AccountingService (tipo de negócio)
- Endereço completo
- Geolocalização
- Serviços oferecidos
- Avaliações (5 estrelas, 500 clientes)
- Redes sociais

---

## 🎯 Próximos Passos Importantes

### 1. **Google Search Console** (URGENTE)
1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: `https://gaspicontabilidade.com.br`
3. Verifique a propriedade (via DNS ou arquivo HTML)
4. Envie o sitemap: `https://gaspicontabilidade.com.br/sitemap.xml`
5. Copie o código de verificação e substitua em `app/layout.tsx` linha 46

### 2. **Google Business Profile** (ESSENCIAL)
1. Acesse: https://business.google.com
2. Crie/Reivindique seu perfil:
   - Nome: Gaspi Contabilidade
   - Endereço: Rua Cosmorama, 18, Sala 6, Vila Ideal, São José do Rio Preto - SP
   - CEP: 15060-320
   - Telefone: (17) 99113-1001
   - Categoria: Escritório de Contabilidade
3. Adicione fotos do escritório
4. Peça avaliações aos clientes satisfeitos

### 3. **Imagem Open Graph**
Crie uma imagem `og-image.png` (1200x630px) e coloque em `/public/`:
- Deve conter: Logo + "Economize até 40% em Impostos"
- Fundo: Verde/amarelo da marca (#C2E648)
- Essa imagem aparecerá quando compartilharem o site no WhatsApp/Facebook

### 4. **Atualizar URL do Site**
No arquivo `app/config/seo.ts`, linha 3, atualize:
```typescript
siteUrl: 'https://gaspicontabilidade.com.br', // ← Substitua pela URL real
```

### 5. **Configurar Domínio**
Se ainda não tiver domínio:
1. Registre: `gaspicontabilidade.com.br`
2. Configure DNS apontando para seu host
3. Ative certificado SSL (HTTPS)

---

## 📊 Monitoramento e Análise

### **Google Analytics 4** (Recomendado)
1. Crie conta: https://analytics.google.com
2. Adicione o código de tracking no `layout.tsx`
3. Configure conversões:
   - Envio do formulário do simulador
   - Cliques no WhatsApp
   - Tempo na página

### **Meta Pixel** (Facebook/Instagram Ads)
Se for fazer anúncios no Facebook/Instagram:
1. Crie pixel: https://business.facebook.com
2. Adicione código no `layout.tsx`
3. Configure eventos de conversão

---

## 🔍 Dicas de Conteúdo para SEO

### **Blog** (Futuro)
Crie artigos sobre:
- "Como reduzir impostos legalmente em 2026"
- "Simples Nacional vs Lucro Presumido: qual escolher?"
- "MEI: quando migrar para ME?"
- "Reforma tributária 2026: o que muda para sua empresa"

### **FAQ Expandido**
Adicione mais perguntas focadas em long-tail keywords:
- "Quanto custa abrir uma empresa em São José do Rio Preto?"
- "Como fazer IRPF sem pagar contador?"
- "O que é planejamento tributário?"

---

## 📱 Redes Sociais (Importante para SEO Local)

### **Instagram** (@gaspicontabilidade)
- Poste 3-5x por semana
- Use hashtags locais: #contadorsjrp #riopreto #empresasriopreto
- Stories com dicas rápidas
- Depoimentos de clientes

### **Google Posts** (via Google Business)
- Poste novidades, promoções, artigos
- Aparece diretamente na busca do Google

---

## ⚡ Otimizações de Performance

### **Imagens**
Todas as imagens devem estar otimizadas:
```bash
# Instalar sharp para otimização automática
npm install sharp
```

### **Core Web Vitals**
- ✅ Next.js já otimiza automaticamente
- ✅ Imagens com `next/image` (lazy loading)
- ✅ Framer Motion para animações performáticas

---

## 📈 Estratégia de Backlinks

### **Citações Locais** (NAP - Name, Address, Phone)
Liste seu negócio em:
- Google Business Profile ⭐ PRIORITÁRIO
- Bing Places
- Guia Mais (guiamais.com.br)
- Apontador (apontador.com.br)
- Hotfrog Brasil
- Brasil 247 Empresas

### **Parcerias Locais**
- Associação Comercial de São José do Rio Preto
- SEBRAE local
- Parceiros: advogados, corretores, médicos

---

## 🎯 Palavras-chave para Google Ads (Futuro)

### **Alta Intenção de Compra:**
- "contador são josé rio preto urgente"
- "abrir empresa rio preto"
- "contador online barato"
- "reduzir impostos empresa"

### **Long-tail (mais baratas):**
- "como economizar impostos pequena empresa"
- "quanto custa contador para mei"
- "melhor regime tributário para médicos"

---

## 📞 Conversão (CRO)

### **Botões de WhatsApp**
- ✅ Implementados em toda a página
- ✅ Mensagem pré-formatada
- ✅ Floating button sempre visível

### **Simulador de Impostos**
- ✅ Captura leads automaticamente
- ✅ Salva no Supabase
- ✅ Mostra economia estimada

---

## 🔐 Segurança e Privacidade

### **LGPD - Política de Privacidade** (Obrigatório)
Crie uma página `/politica-privacidade` explicando:
- Dados coletados (nome, WhatsApp, faturamento)
- Uso dos dados (simulação, contato comercial)
- Direitos do usuário
- Base legal: legítimo interesse

### **SSL Certificate**
- ✅ Certifique-se que o site está em HTTPS
- ✅ Redirecione HTTP → HTTPS automaticamente

---

## ✅ Checklist de Lançamento SEO

- [ ] Configurar Google Search Console
- [ ] Criar Google Business Profile
- [ ] Criar imagem Open Graph (1200x630px)
- [ ] Atualizar URL real no `seo.ts`
- [ ] Configurar domínio e SSL
- [ ] Adicionar Google Analytics
- [ ] Pedir primeiras 10 avaliações no Google
- [ ] Criar perfil completo no Instagram
- [ ] Listar em guias locais (NAP)
- [ ] Criar política de privacidade (LGPD)
- [ ] Testar site no PageSpeed Insights
- [ ] Testar compartilhamento no WhatsApp

---

## 📊 Métricas para Acompanhar

### **Mensalmente:**
- Posicionamento no Google (palavras-chave principais)
- Tráfego orgânico (Google Analytics)
- Conversões (formulário simulador)
- Novos leads captados
- Taxa de conversão WhatsApp

### **Ferramentas Gratuitas:**
- Google Search Console (tráfego orgânico)
- Google Analytics (comportamento do usuário)
- Google Business Insights (busca local)
- PageSpeed Insights (performance)

---

## 🚀 Resultados Esperados

### **Primeiros 30 dias:**
- Site indexado no Google
- Primeiras posições em palavras long-tail
- Google Business Profile ativo com avaliações

### **90 dias:**
- Top 10 para "contador são josé rio preto"
- Top 5 no Google Maps (busca local)
- 50-100 visitas orgânicas/mês

### **6 meses:**
- Top 3 para palavras-chave locais principais
- 200-500 visitas orgânicas/mês
- 10-20 leads qualificados/mês

---

**Implementado por:** Claude Code
**Data:** 06/12/2025
**Versão:** 1.0
