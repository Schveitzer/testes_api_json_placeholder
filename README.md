# Testes para api Json Place Holder

Projeto de testes automatizados para api Json Place Holder
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

## Conteúdo
- [Estrutura do porjeto](#Estrutura-do-porjeto)
- [Requisitos](#Requisitos)
- [Iniciando](#Iniciando)
- [Executando os testes](#Executando-os-testes)
- [Relatório da execução](#Relatório-da-execução)
- [Lint do Código](#Lint-do-Código)
- [Base url e outras configurações](#Base-url-e-outras-configurações)

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

## Executando os testes:
```bash
$ yarn init:tests
```

## Relatório da execução:
Execute o comando para gerar o relatório:
> Você deve estar na pasta testes_api_json_placeholder
```bash
$ allure generate
```

Execute o comando para abrir o relatório no navegador:

```bash
$ allure serve
```

## Lint do Código
Para executar o lint do código execute:

```bash
$ yarn code:format
```

## Base url e outras configurações
As variáveis de ambiente usadas nos testes são carregadas a partir do arquivo [EnvironmentVariables.js](https://github.com/Schveitzer/testes_api_json_placeholder/blob/master/config/EnvironmentVariables.js) , para alterar o endereço do base_url edite o endereço no arquivo [config.json](https://github.com/Schveitzer/testes_api_json_placeholder/blob/master/config/config.json).
