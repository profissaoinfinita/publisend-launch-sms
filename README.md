# 📱 Publisend - SMS Marketing SaaS

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</div>

<br>

<div align="center">
  <strong>🚀 Plataforma profissional de SMS marketing para lançamentos digitais e e-commerce</strong>
</div>

<br>

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [🚀 Instalação e Configuração](#-instalação-e-configuração)
- [📱 Demonstração](#-demonstração)
- [🏗️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🎨 Design System](#-design-system)
- [📊 Performance](#-performance)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🌐 Deploy](#-deploy)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)

## 🎯 Sobre o Projeto

O **Publisend** é uma plataforma SaaS completa de SMS marketing desenvolvida para profissionais de marketing digital, infoprodutores e e-commerces. A plataforma oferece uma solução robusta para automação de campanhas, gestão de listas de contatos e criação de templates personalizados.

### 🎪 Principais Características

- **🎨 Interface Moderna**: Design responsivo e intuitivo
- **📱 Mobile-First**: Totalmente otimizado para dispositivos móveis
- **⚡ Performance**: Build otimizado com code splitting
- **🔒 Seguro**: Autenticação e roteamento protegido
- **📊 Analytics**: Dashboard com métricas em tempo real

## ✨ Funcionalidades

### 🏠 Landing Page Persuasiva
- **Hero Section** com call-to-action otimizado
- **Seção de Benefícios** com 3 pilares principais
- **Demonstração Visual** do produto
- **Prova Social** com depoimentos e logos
- **Formulário de Conversão** otimizado
- **Design Responsivo** para todos os dispositivos

### 📊 Dashboard Completo
- **Métricas em Tempo Real**: SMS enviados, taxa de entrega, CTR
- **Campanhas Recentes**: Visualização rápida do status
- **Performance por Template**: Análise de efetividade
- **Tutorial Modal**: Vídeo integrado do YouTube
- **Navegação Intuitiva**: Sidebar responsiva

### 📧 Gestão de Campanhas
- **Criação de Campanhas**: Wizard em 4 etapas
- **Templates Personalizáveis**: Editor visual de mensagens
- **Agendamento**: Campanhas programadas
- **Segmentação**: Listas de contatos organizadas
- **Analytics**: Relatórios detalhados de performance

### 📋 Gestão de Listas
- **Importação de Contatos**: CSV/Excel com validação
- **Modal de Importação**: 5 etapas com navegação livre
- **Mapeamento de Colunas**: Interface intuitiva
- **Validação de Dados**: Verificação automática
- **Organização**: Categorização por fonte e status

### 🎨 Editor de Templates
- **Criação Visual**: Interface com abas (Básico/Prévia)
- **Categorização**: 8 categorias predefinidas
- **Contador de Caracteres**: Limite SMS em tempo real
- **Variáveis Dinâmicas**: `{nome}`, `{link}`, `{produto}`
- **Prévia em Tempo Real**: Simulação de SMS

### 👤 Perfil do Usuário
- **Dados Pessoais**: Suporte a CPF e CNPJ
- **Endereço Completo**: Formulário validado
- **Configurações**: Preferências de notificação
- **Segurança**: Alteração de senha e dados

## 🛠️ Tecnologias

### Frontend
- **React 18.3.1** - Biblioteca principal
- **TypeScript 5.8.3** - Tipagem estática
- **Vite 5.4.19** - Build tool e dev server
- **React Router DOM 6.30.1** - Roteamento SPA

### UI/UX
- **Tailwind CSS 3.4.17** - Framework CSS
- **shadcn/ui** - Componentes acessíveis
- **Radix UI** - Primitivos de UI
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações (via Tailwind)

### Estado e Dados
- **React Context API** - Estado global
- **TanStack Query 5.83.0** - Cache e sincronização
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas

### Desenvolvimento
- **ESLint** - Linting de código
- **TypeScript ESLint** - Linting TypeScript
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade CSS

## 🚀 Instalação e Configuração

### Pré-requisitos
- **Node.js** 18+ ([instalar via nvm](https://github.com/nvm-sh/nvm))
- **npm** ou **yarn**
- **Git**

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/profissaoinfinita/publisend-launch-sms.git
cd publisend-launch-sms
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
# Edite o arquivo .env.local com suas configurações
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse a aplicação**
```
http://localhost:8080
```

## 📱 Demonstração

### 🎬 Funcionalidades em Ação

- **Landing Page**: [Demo da Landing](https://publisend.vercel.app)
- **Dashboard**: Interface completa com métricas
- **Modal de Importação**: Fluxo de 5 etapas
- **Editor de Templates**: Criação visual de mensagens
- **Responsividade**: Testado em todos os dispositivos

### 🔐 Credenciais de Teste
```
Email: demo@publisend.com
Senha: demo123
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── auth/            # Autenticação
│   ├── dashboard/       # Componentes do dashboard
│   ├── layout/          # Layout principal
│   └── ui/              # Componentes base (shadcn/ui)
├── contexts/            # Contextos React
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários e configurações
├── pages/               # Páginas da aplicação
│   ├── Landing.tsx      # Landing page
│   ├── Index.tsx        # Dashboard
│   ├── Campaigns.tsx    # Gestão de campanhas
│   ├── Templates.tsx    # Editor de templates
│   ├── Lists.tsx        # Gestão de listas
│   ├── Profile.tsx      # Perfil do usuário
│   └── ...
└── main.tsx             # Ponto de entrada
```

## 🎨 Design System

### 🎨 Paleta de Cores
- **Primary**: Laranja vibrante (#FF6B35)
- **Secondary**: Azul profissional (#2563EB)
- **Success**: Verde (#10B981)
- **Warning**: Amarelo (#F59E0B)
- **Error**: Vermelho (#EF4444)
- **Neutral**: Escala de cinzas

### 📐 Tipografia
- **Font Family**: Inter (sistema)
- **Headings**: Font weights 600-800
- **Body**: Font weight 400
- **Responsive**: Escalas adaptativas

### 🧩 Componentes
- **Cards**: Bordas arredondadas, sombras sutis
- **Buttons**: Estados hover, disabled, loading
- **Forms**: Validação visual, feedback imediato
- **Modals**: Overlay, animações suaves
- **Tables**: Responsivas, ações contextuais

## 📊 Performance

### ⚡ Otimizações Implementadas

- **Code Splitting**: Chunks separados por funcionalidade
- **Lazy Loading**: Componentes carregados sob demanda
- **Tree Shaking**: Bundle otimizado
- **Image Optimization**: Assets comprimidos
- **Caching**: Headers otimizados para produção

### 📈 Métricas de Build

```
Build otimizado:
├── index.html: 1.44 kB
├── index.css: 70.29 kB
├── router.js: 20.38 kB
├── icons.js: 20.95 kB
├── ui.js: 101.46 kB
├── vendor.js: 141.28 kB
└── index.js: 244.42 kB

Total: ~600 kB (gzipped: ~165 kB)
```

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Linting do código

# Build específico
npm run build:dev    # Build em modo desenvolvimento
```

## 🌐 Deploy

### 🚀 Vercel (Recomendado)

1. **Conecte o repositório** na [Vercel](https://vercel.com)
2. **Configure o build**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy automático** a cada push

### 📁 Outras Plataformas

- **Netlify**: Compatível com Vite
- **GitHub Pages**: Com GitHub Actions
- **AWS S3**: Para hospedagem estática
- **Firebase Hosting**: Google Cloud

### ⚙️ Configuração de Produção

O projeto inclui:
- `vercel.json` - Configuração para SPA
- `.vercelignore` - Arquivos excluídos do deploy
- Headers de cache otimizados
- Roteamento configurado para evitar 404

## 🤝 Contribuição

### 🛠️ Como Contribuir

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### 📋 Padrões de Código

- **ESLint**: Configuração rigorosa
- **TypeScript**: Tipagem obrigatória
- **Conventional Commits**: Mensagens padronizadas
- **Responsive Design**: Mobile-first
- **Acessibilidade**: ARIA labels e semântica

### 🐛 Reportar Bugs

Use o [GitHub Issues](https://github.com/profissaoinfinita/publisend-launch-sms/issues) para reportar bugs ou solicitar features.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <strong>Desenvolvido com ❤️ para revolucionar o SMS Marketing</strong>
  
  <br><br>
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/profissaoinfinita/publisend-launch-sms)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://publisend.vercel.app)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/profissaoinfinita)
</div>