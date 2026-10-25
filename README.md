# MS Caçambas — Site Institucional

Site institucional desenvolvido para a **MS Caçambas**, empresa especializada em remoção de entulho, limpeza de ambientes e coleta de resíduos em São José dos Campos — SP.

O projeto tem como objetivo apresentar os serviços da empresa, facilitar o contato com clientes e oferecer uma experiência de navegação intuitiva, responsiva e adaptada a diferentes dispositivos.

> Projeto desenvolvido como parte do portfólio de desenvolvimento web.

---

## 📸 Sobre o projeto

O site apresenta uma página institucional com identidade visual própria, informações comerciais e chamadas para contato. O layout foi desenvolvido para destacar os serviços da empresa e facilitar a solicitação de orçamentos.

### Objetivos

- Apresentar os serviços oferecidos pela empresa.
- Facilitar o contato de clientes pelo WhatsApp.
- Disponibilizar informações de localização e horário de atendimento.
- Oferecer uma interface responsiva para computadores, tablets e celulares.
- Desenvolver uma presença digital simples e profissional para o negócio.

---

## ✨ Funcionalidades

- **Página inicial:** apresentação da empresa e chamada para solicitar orçamento.
- **Identidade visual:** aplicação das cores e dos elementos visuais da marca.
- **Seção de serviços:** apresentação dos principais serviços oferecidos.
- **Seção sobre a empresa:** conteúdo institucional.
- **Contato pelo WhatsApp:** acesso direto para iniciar uma conversa e solicitar orçamento.
- **Informações comerciais:** telefone, endereço e horários de atendimento.
- **Integração com o Google Maps:** acesso à localização da empresa.
- **Layout responsivo:** adaptação dos elementos para diferentes tamanhos de tela.
- **Navegação por seções:** links para acessar rapidamente as áreas da página.
- **Header fixo:** acesso facilitado à navegação durante a rolagem.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React | Construção da interface por componentes |
| JavaScript (ES6+) | Lógica e comportamento da aplicação |
| Vite | Ambiente de desenvolvimento e build |
| Tailwind CSS | Estilização e responsividade |
| HTML5 | Estrutura semântica da página |
| CSS3 | Recursos complementares de apresentação |
| Git e GitHub | Controle de versão e hospedagem do código |

---

## 🎨 Identidade visual

O projeto utiliza uma paleta de cores inspirada na identidade da MS Caçambas.

| Cor | Código | Aplicação |
|---|---|---|
| Dourado | `#D7A007` | Destaques, botões e elementos de ação |
| Cinza-escuro | `#33363A` | Cabeçalho, fundos e identidade visual |
| Cinza-claro | `#EDEFE E` | Referência de cor clara para superfícies e elementos visuais |

A identidade visual foi planejada para transmitir clareza, profissionalismo e consistência ao longo da navegação.

---

## 📂 Estrutura do projeto

A organização pode variar conforme a evolução do projeto. A estrutura principal esperada é:

```text
ms-cacambas/
├── public/
│   └── (arquivos públicos)
├── src/
│   ├── assets/
│   │   ├── (logo da empresa)
│   │   └── (imagens utilizadas no site)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

### Principais arquivos

- `src/App.jsx`: componente principal e estrutura das seções do site.
- `src/main.jsx`: ponto de entrada da aplicação React.
- `src/index.css`: estilos globais e configurações de CSS.
- `src/assets/`: imagens, logo e demais recursos visuais.
- `index.html`: documento HTML inicial.
- `package.json`: dependências e scripts do projeto.
- `vite.config.js`: configuração do Vite.

---

## 🚀 Como executar o projeto localmente

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- npm, incluído normalmente na instalação do Node.js
- [Git](https://git-scm.com/), caso queira clonar o repositório

### 1. Clone o repositório

Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub e ajuste o nome do repositório, se necessário.

```bash
git clone https://github.com/SEU_USUARIO/ms-cacambas.git
```

### 2. Acesse a pasta do projeto

```bash
cd ms-cacambas
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

O terminal exibirá o endereço local disponibilizado pelo Vite. Abra esse endereço no navegador para visualizar o site.

### 5. Gere a versão de produção

```bash
npm run build
```

Os arquivos otimizados para publicação serão gerados na pasta `dist/`.

### 6. Teste a versão de produção localmente

```bash
npm run preview
```

O endereço local será informado pelo terminal.

---

## 📱 Responsividade

A interface utiliza classes responsivas do Tailwind CSS para adaptar o conteúdo a diferentes larguras de tela.

Os ajustes incluem:

- Redimensionamento de imagens.
- Adaptação do cabeçalho e dos botões.
- Reorganização de colunas em telas menores.
- Controle de espaçamentos e larguras.
- Prevenção de transbordamento horizontal.
- Ajustes de tipografia e elementos de navegação.

A responsividade deve ser validada em navegadores e dispositivos de diferentes tamanhos.

---

## 📍 Informações comerciais

**MS Caçambas**

- **Telefone:** (12) 3906-0787
- **Endereço:** R. dos Periquitos, 515 — Vila Tatetuba, São José dos Campos — SP, 12220-130

### Horário de atendimento

| Dia | Horário |
|---|---|
| Segunda a sexta-feira | 08h às 17h |
| Sábado | 08h às 12h |
| Domingo | Fechado |

### Serviços apresentados

- Remoção de entulho.
- Limpeza de casas e garagens.
- Coleta de resíduos.

---

## 🔗 Contato pelo WhatsApp

O site utiliza um link de WhatsApp para permitir que o visitante inicie uma conversa com a empresa.

A implementação recebe uma mensagem inicial e direciona o usuário ao WhatsApp, tornando o processo de solicitação de orçamento mais simples.

O link e as informações de contato devem ser conferidos antes da publicação em produção.

---

## 🌐 Publicação

O projeto pode ser publicado em serviços que oferecem hospedagem para aplicações front-end estáticas, como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Para uma aplicação React com Vite, a configuração de build normalmente utiliza:

- **Comando de build:** `npm run build`
- **Diretório de publicação:** `dist`

A configuração final pode variar conforme o provedor de hospedagem e o roteamento utilizado no projeto.

---

## 🔒 Boas práticas

- Manter as dependências atualizadas.
- Não enviar credenciais, tokens ou dados privados ao repositório.
- Utilizar imagens otimizadas para melhorar o carregamento.
- Conferir os links e as informações comerciais antes da publicação.
- Testar a interface em dispositivos móveis e desktops.
- Verificar acessibilidade, contraste e navegação por teclado.
- Manter o repositório organizado e documentar alterações relevantes.

---

## 🗺️ Possíveis melhorias futuras

- Implementar formulário de solicitação de orçamento.
- Adicionar galeria de fotos dos serviços realizados.
- Criar depoimentos de clientes, quando disponíveis e autorizados.
- Melhorar SEO e metadados para mecanismos de busca.
- Otimizar imagens e desempenho de carregamento.
- Integrar métricas de acesso respeitando a privacidade dos visitantes.
- Adicionar testes automatizados.

---

## 👨‍💻 Desenvolvedor

**Marcus Arruda**

Desenvolvedor web em formação, com interesse em criação de sites institucionais, interfaces responsivas e soluções digitais para pequenos negócios.

- **GitHub:** [Adicionar perfil do GitHub](https://github.com/)
- **Instagram profissional:** [@marcusarruda.dev](https://www.instagram.com/marcusarruda.dev/)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de portfólio e demonstração de habilidades em desenvolvimento web.

A utilização, distribuição ou reprodução do código, da marca e dos materiais visuais deve respeitar os direitos de seus respectivos proprietários. Caso deseje disponibilizar o código publicamente sob uma licença específica, adicione um arquivo `LICENSE` com os termos escolhidos.

---

Desenvolvido com React, Vite e Tailwind CSS.
