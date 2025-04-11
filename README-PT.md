# Lista de Contatos com Vuetify, Vue-Router, Axios API e ViaCep 

Utilizando Vue JS e algumas bibliotecas, criei uma lista de contatos.
Sua funcionalidade é baseada em páginas Not Authorized(401), Not Found (404), página de Login, página de Lista de Contatos e componentes, como modos de edição, visualização e adição.
Contém também o ViaCep, que busca o endereço do novo contato quando o usuário digita o CEP (Código de Endereçamento Postal em território brasileiro). Recebi o JSON com a API do Axios.

## ❗️ Links Importantes

- 📄 [Documentação](https://vuetifyjs.com/)

## 💿 Instalação

Configure seu projeto com o gerenciador de pacotes da sua preferência. Use o comando correspondente para instalar as dependências:

| Gerenciador de Pacotes                                           | Comando         |
|------------------------------------------------------------------|-----------------|
| [yarn](https://yarnpkg.com/getting-started)                     | `yarn install`  |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)       | `npm install`   |
| [pnpm](https://pnpm.io/installation)                            | `pnpm install`  |
| [bun](https://bun.sh/#getting-started)                          | `bun install`   |

Depois de instalar tudo, seu ambiente estará pronto para desenvolver com Vuetify.

## ✨ Funcionalidades

- 🖼️ **Front-End moderno e otimizado**: Aproveite o melhor do Vue 3 e Vuetify 3 para uma experiência de desenvolvimento reativa e atual. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/pt-BR/)
- 🗃️ **Gerenciamento de Estado**: Integrado com [Pinia](https://pinia.vuejs.org/), uma solução modular e intuitiva para gerenciar estado no Vue, apesar de não ter sido necessário a utilização.
- 🚦 **Roteamento e Layouts**: Usei o Vue Router para navegação SPA e vite-plugin-vue-layouts para organizar os layouts dos arquivos Vue. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 💻 **Desenvolvimento com Qualidade**: Beneficie-se do TypeScript com checagem de tipos estática e o conjunto de plugins ESLint para Vue. [TypeScript](https://www.typescriptlang.org/) | [ESLint Plugin Vue](https://eslint.vuejs.org/)
- ⚡ **Ferramentas de nova geração**: Com Vite, tenha inicializações rápidas e HMR (Hot Module Replacement) instantâneo. [Vite](https://vitejs.dev/)

Essas funcionalidades foram pensadas para oferecer uma experiência de desenvolvimento fluida, desde o início até a publicação da aplicação.

## 💡 Uso

Pode ser usado para analisar o comportamento de um site e demonstrar habilidades com Vue (e suas bibliotecas).

### Iniciando o Servidor de Desenvolvimento

Para rodar o servidor de desenvolvimento com recarregamento automático, use o comando abaixo. O servidor estará disponível em [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

> Repita o comando com `npm`, `pnpm` ou `bun`, dependendo do gerenciador de pacotes que você estiver usando.

> Adicione `NODE_OPTIONS='--no-warnings'` para suprimir os avisos de importação JSON causados pelo mapeamento do Vuetify.  
> Se estiver usando Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) ou superior, você pode usar `NODE_OPTIONS='--disable-warning=5401'`.  
> Se os avisos não forem um problema, você pode remover isso do script `dev` no `package.json`.

### Gerando Versão de Produção

Para gerar os arquivos otimizados para produção, use:

```bash
yarn build
```

> Também é possível usar `npm build`, `pnpm build` ou `bun build`, conforme o gerenciador escolhido.

Após o processo, sua aplicação estará pronta para ser publicada em ambiente de produção.

## 💪 Apoie o Desenvolvimento o desenvolvedor front-end Vitor Brito Rocha!

### · [Email](mailto:vitorbritorochaa@gmail.com)


### · [Linkedin](https://www.linkedin.com/in/vitor-rocha-557317348/)


Contribuia com sugestões ou edições no código!


## 📑 Licença

[MIT](http://opensource.org/licenses/MIT)  
Copyright (c) 2016-presente Vuetify, LLC
```

