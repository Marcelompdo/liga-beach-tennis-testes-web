# Testes Web — Liga Beach Tennis

Projeto de testes automatizados de interface (WEB) para a aplicação [liga-beach-tennis](https://github.com/Marcelompdo/liga-beach-tennis). Os cenários usam Cypress com JavaScript e verificam os principais fluxos de cadastro, autenticação e gerenciamento de ligas pela interface.

## Componentes do projeto

- **Cypress**: executa os testes end-to-end no navegador.
- **Custom Commands**: encapsulam interações reutilizáveis com cadastro, login, ligas e elementos comuns da interface.
- **Fixtures**: armazenam dados de usuários e credenciais usados pelos cenários.
- **cypress-mochawesome-reporter**: gera relatórios das execuções.
- **`cypress.config.js`**: define a URL base (`http://localhost:3000/`), o reporter e o carregamento do plugin.

Estrutura principal:

```text
├── cypress/
│   ├── e2e/                 # Specs dos testes
│   ├── fixtures/            # Dados de teste
│   └── support/
│       ├── commands/        # Implementações dos Custom Commands
│       ├── commands.js      # Registro dos comandos
│       └── e2e.js           # Inicialização e registro do reporter
├── cypress.config.js
├── package.json
└── README.md
```

## Requisitos

- Node.js e npm instalados.
- A aplicação [liga-beach-tennis](https://github.com/Marcelompdo/liga-beach-tennis) deve estar instalada e em execução em `http://localhost:3000` antes de iniciar os testes. O Cypress visita essa URL, configurada como `baseUrl`.

## Instalação e execução

1. Clone este repositório e entre na pasta do projeto de testes:

   ```bash
   git clone https://github.com/Marcelompdo/liga-beach-tennis-testes-web.git
   cd liga-beach-tennis-testes-web
   ```

2. Instale as dependências listadas no `package.json`:

   ```bash
   npm install
   ```

3. Em outro terminal, inicie a aplicação `liga-beach-tennis` e confirme que está disponível em `http://localhost:3000`.

4. Execute os testes conforme necessário:

   ```bash
   npm test       # executa todos os specs em modo headless
   npm run cy:headed  # executa os specs com o navegador visível
   npm run cy:open    # abre a interface do Cypress para selecionar e executar specs
   ```

Os comandos `npm test` e `npm run cy:headed` rodam os testes configurados em `cypress/e2e`. A interface aberta por `npm run cy:open` permite escolher os testes e acompanhar a execução interativamente.

## Testes automatizados

Os testes estão organizados por funcionalidade. Cada spec visita a página inicial antes de cada cenário.

| Spec | Cenários cobertos |
| --- | --- |
| `cypress/e2e/cadastro.cy.js` | Cadastra um novo usuário com perfil de organizador e valida a mensagem de boas-vindas. O email é tornado único com `Date.now()`. |
| `cypress/e2e/login.cy.js` | Valida login com credenciais de organizador e mensagem de boas-vindas; valida tentativa com credenciais inválidas e a mensagem de erro. |
| `cypress/e2e/ligas.cy.js` | Como organizador, cria uma liga e valida o sucesso; como organizador, sorteia uma liga aberta que tenha mais de quatro inscritos; como participante, inscreve-se em uma liga disponível. |

Os cenários usam os dados definidos em `cypress/fixtures/usuarios.json` e `cypress/fixtures/credenciais.json`. Para que os fluxos de sorteio e inscrição funcionem, a aplicação deve disponibilizar ligas que atendam aos critérios selecionados pelo comando (liga aberta com mais de quatro inscritos para sorteio e uma liga com botão **Participar** habilitado para inscrição).

## Custom Commands

Os comandos são carregados por `cypress/support/commands.js`, que importa os módulos de `cypress/support/commands/`.

## Relatórios

O `cypress-mochawesome-reporter` está configurado em `cypress.config.js` e registrado em `cypress/support/e2e.js`. Ao executar os testes, o reporter gera o relatório HTML em `cypress/reports/html/index.html` (e os arquivos de dados em `cypress/reports`). Abra o `index.html` no navegador para consultar o resultado e os detalhes dos cenários.
