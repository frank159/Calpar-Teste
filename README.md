# Calpar Teste

## Requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## Como Rodar o Projeto

### 1. Clone o Repositório

Clone o repositório para o seu computador:

git clone https://github.com/seu-usuario/seu-repositorio.git

### 2. Instalação

npm install ou yarn install

### 3. Iniciar o Projeto

npm run dev ou yarn dev

O servidor será iniciado em http://localhost:3000

# decisões

Com o desafio de criar uma aplicação utilizando o retorno da API fornecida, decidi desenvolver um sistema de busca de usuários com funcionalidades focadas em produtividade. A ideia principal foi criar uma tela que pudesse funcionar como um painel de gerenciamento de pessoal. Essa tela permite listar usuários e aplicar filtros tanto por nome quanto por status (disponível ou indisponível), proporcionando uma maneira simples e eficiente de gerenciar informações.

Além disso, segui os critérios estabelecidos e adicionei um retorno visual para o usuário, exibindo mensagens claras de sucesso ou erro em suas buscas. Para enriquecer ainda mais o projeto, implementei um botão que simula o comportamento da API, permitindo ligar e desligar o retorno dos dados. Com isso, é possível testar situações de erro e garantir que as mensagens de feedback sejam apresentadas corretamente.

O objetivo foi criar uma solução prática, intuitiva e robusta, capaz de atender às demandas de gerenciamento de forma eficiente e alinhada com as melhores práticas de desenvolvimento.

Em situações onde fosse necessário trabalhar com listas extensas e volumosas, eu adotaria a abordagem de passar os parâmetros de filtro diretamente para a API. Esses filtros seriam processados pelo back-end, realizando a busca e filtragem diretamente no banco de dados. Dessa forma, evitaríamos sobrecarregar o front-end com grandes volumes de dados, otimizando o desempenho da aplicação e garantindo uma experiência mais fluida para o usuário.

No entanto, como a lista retornada é extremamente simples e eu não tive acesso à API, optei por uma abordagem mais prática e direta para lidar com os filtros no front-end, atendendo ao escopo do projeto.
