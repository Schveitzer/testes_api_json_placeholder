# Testes para api Json Place Holder

Projeto de testes automatizados para api bla bla

Esse projeto inclui:
- Framworks:
    - Supertest
    - Jest
- Features:
    - Data driven testes
    - Validação de Json Schema
    - Cliente http compartilhado 
    - ES6 style class-based approach
    - Formatador e lint de código (ESlint, Prettier)
    - Relatórios com Allure

Estrutura do porjeto:
```
.
├── babel.config.js
├── base-files
│   └── json
│       └── retorno_posts.json
├── config
│   ├── config.json
│   └── EnvironmentVariables.js
├── helpers
│   ├── Cliente.helper.js //Cliente http compartilhado entre os testes
│   └── FileSystem.helper.js
├── jest.setup.js
├── LICENSE
├── package.json
├── README.md
├── specs
│   └── Placeholder.test.js //Arquivo com os testes automatizados
└── yarn.lock
```
    
## Requisitos
- node >= 12.18.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.21.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

## Iniciando
Instalar as dependecias:

```bash
$ yarn install
```

## Para executar os testes:
```bash
$ yarn init:tests
```

## Relatório de execução
Execute o comando para gerar o relatório:
> Você deve estar na pasta testes_place_holder_api
```bash
$ allure generate
```

Execute o comando para abrir o relatório no navegador:

```bash
$ allure serve
```

## Lint Code
Para executar o lint do código execute:

```bash
$ yarn code:format
```

## Base url e outras configurações
As variaveis de ambiente usadas no testes são carregadas a partir do arquivo [EnvironmentVariables.js](https://github.com/Schveitzer/api-tests-supertest-jest/blob/master/config/EnvironmentVariables.js) , para alterar o endereço do base_url edite o endereço no arquivo [config.json](https://github.com/Schveitzer/api-tests-supertest-jest/blob/master/config/config.json).