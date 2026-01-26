# Favero Advocacia - Site Estático

Site institucional estático para Favero Advocacia, desenvolvido em HTML, CSS e JavaScript puro.

## 📁 Estrutura de Arquivos

```
static-site/
├── css/
│   └── styles.css          # Todos os estilos do site
├── js/
│   ├── i18n.js             # Sistema de internacionalização (PT/EN/ES)
│   └── main.js             # JavaScript principal (tema, menu, formulários)
├── img/
│   └── sobre-eduardo_favero.jpg  # Foto do advogado
├── index.html              # Página inicial
├── about.html              # Página Sobre
├── practice-areas.html     # Áreas de Atuação
├── blog.html               # Blog (listagem)
├── contact.html            # Contato
├── privacy.html            # Política de Privacidade
├── terms.html              # Termos de Uso
└── README.md               # Este arquivo
```

## 🚀 Como Usar

### Hospedagem Local
1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Ou use um servidor local como:
   - VS Code Live Server
   - Python: `python -m http.server 8080`
   - Node.js: `npx serve`

### Deploy
O site pode ser hospedado em qualquer serviço de hospedagem estática:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Qualquer servidor web (Apache, Nginx, etc.)

## ✨ Funcionalidades

### 🌐 Internacionalização (i18n)
- Suporte a 3 idiomas: Português, Inglês e Espanhol
- Troca de idioma dinâmica
- Preferência salva no localStorage

### 🌙 Tema Claro/Escuro
- Alterna entre tema claro e escuro
- Respeita preferência do sistema operacional
- Preferência salva no localStorage

### 📱 Responsivo
- Layout adaptativo para todos os tamanhos de tela
- Menu mobile com animações suaves
- Otimizado para dispositivos touch

### ⚡ Performance
- Sem dependências de frameworks JavaScript
- CSS otimizado
- Ícones carregados via Lucide CDN
- Fontes Google Fonts com preconnect

## 🎨 Personalização

### Cores
Edite as variáveis CSS no início de `css/styles.css`:

```css
:root {
    --primary: #171717;
    --secondary: #f5f5f5;
    --accent: #f5f5f5;
    /* ... outras variáveis */
}

.dark {
    --primary: #fafafa;
    --secondary: #262626;
    /* ... variáveis para tema escuro */
}
```

### Fontes
O site usa:
- **Inter** - Texto geral
- **Playfair Display** - Títulos

Para alterar, modifique o link do Google Fonts em cada HTML e as variáveis:
```css
--font-sans: 'Inter', sans-serif;
--font-serif: 'Playfair Display', serif;
```

### Conteúdo
- **Textos**: Edite diretamente nos arquivos HTML ou no objeto `dictionaries` em `js/i18n.js`
- **Posts do Blog**: Adicione itens no array `blogPosts` em `js/i18n.js`
- **Áreas de Atuação**: Edite o objeto `areaServices` em `js/i18n.js`

## 📧 Formulários

Os formulários de contato e newsletter são mockados (simulam envio).
Para adicionar funcionalidade real:

1. **FormSubmit** (gratuito): Adicione `action="https://formsubmit.co/SEU-EMAIL"` ao form
2. **Netlify Forms**: Adicione `data-netlify="true"` ao form
3. **Custom**: Modifique `js/main.js` para integrar com seu backend

## 🔧 Dependências Externas (CDN)

- **Lucide Icons**: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
- **Google Fonts**: Inter e Playfair Display

## 📄 Licença

Desenvolvido para Favero Advocacia.
Design e desenvolvimento por Marcos Roberto Grechaki.
