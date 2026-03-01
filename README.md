# 💈 Mr. Fat Barbearia

Website profissional da **Mr. Fat Barbearia**, localizada em Piedade, Jaboatão dos Guararapes. Desenvolvido com foco em alta performance, SEO, acessibilidade e experiência do usuário premium.

## ✨ Principais Características

- **🌐 Multilingue (i18n)**: Suporte completo para Português, Inglês e Espanhol.
- **🌓 Design Adaptativo**: Suporte nativo a Temas Escuro e Claro, gerenciado via Vuetify.
- **🚀 SEO Premium**: Implementação completa de Meta Tags, OpenGraph, Twitter Cards e dados estruturados JSON-LD (`BarberShop`).
- **♿ Acessibilidade**: Interface otimizada para leitores de tela com `aria-labels` e HTML semântico.
- **🛡️ Segurança Avançada**:
  - Content-Security-Policy (CSP) robusta via Firebase.
  - Proteção contra Clickjacking e XSS.
  - Links externos seguros com `rel="noreferrer noopener"`.
- **🏗️ Arquitetura Modular**: Separação clara entre `Pages` (seções do site) e `Components` reutilizáveis.

## 🛠️ Tecnologias Utilizadas

- **Vue 3**: Framework progressivo para a interface.
- **Vite**: Build tool ultrarrápida.
- **Vuetify 3**: Framework de UI baseado em Material Design.
- **Vue-i18n**: Gestão de internacionalização.
- **SCSS**: Estilização dinâmica e modular.
- **Firebase**: Hospedagem segura e escalável.

## 📁 Estrutura do Projeto

```text
src/
├── assets/          # Imagens, logotipos e fotos dos cortes
├── components/      # Componentes reutilizáveis (Navbar, Cards, Itens)
├── locales/         # Arquivos de tradução JSON (PT-BR, EN, ES)
├── pages/           # Seções principais do site (Home, Barber, Price, etc)
├── plugins/         # Configurações de Vuetify e i18n
├── App.vue          # Componente raiz e estruturação do layout
└── main.js          # Ponto de entrada da aplicação
```

## 🚀 Como Iniciar

### Instalação de dependências

```bash
npm install
```

### Rodar projeto localmente (Vite Dev Server)

```bash
npm run dev
```

### Compilar para produção

```bash
npm run build
```

---

Desenvolvido com foco em resultados e estética moderna. ✂️
