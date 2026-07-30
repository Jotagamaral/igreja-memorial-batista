# Diretrizes e Regras do Agente Autônomo - Igreja Memorial Batista

Este arquivo define as regras gerais, diretrizes de negócio e padrões técnicos inegociáveis que devem ser respeitados em qualquer alteração realizada neste repositório.

## 1. Regras (Rules)

### R01 - Empacotamento de Produção Obrigatório (Build & RAR Archive)
- **Descrição**: Toda atualização concluída para publicação em produção deve passar pelo processo de compilação e empacotamento em `.rar`.
- **Ação**: Executar `npm run release` ou `npm run build` seguido da compactação da pasta `dist/` em um arquivo `.rar` na pasta `builds/` (com padrão `igreja-memorial-batista-v<VERSION>.rar`).

### R02 - Integridade da Camada de Dados (JSON Driven Content)
- **Descrição**: O conteúdo dinâmico da aplicação (cultos, ministérios, história, células/PGMs) é mantido em `src/data/`.
- **Ação**: Nunca inserir textos institucionais diretamente hardcoded nos componentes JSX sem manter sincronia com os arquivos JSON em `src/data/` (`cultos_Data.json`, `ministerios_Data.json`, `igreja_Data.json`).

### R03 - Segurança e Sanitização de Dados (Security & DOMPurify)
- **Descrição**: A aplicação previne vulnerabilidades de injeção XSS sanitizando conteúdos dinâmicos.
- **Ação**: Sempre utilizar `dompurify` para sanitizar qualquer string formatada em HTML/rich-text. Seguir rigorosamente as políticas descritas em `SECURITY.md`.

### R04 - Padrão Visuais e de UI/UX Modernos
- **Descrição**: O design system é baseado em **Tailwind CSS v4** e **Framer Motion**.
- **Ação**: Garantir layout responsivo (mobile-first), temas visuais coerentes, navegação fluída entre seções e animações de alta performance sem quebrar o visual existente.

### R05 - Qualidade de Código e Compilação Limpa (Lint & Clean Build)
- **Descrição**: O código fonte deve estar livre de erros estáticos e de compilação.
- **Ação**: Executar `npm run lint` e garantir 0 erros de sintaxe ou React Hooks antes de submeter alterações.

### R06 - Preservação de Roteamento e Referências Globais
- **Descrição**: As rotas e referências de scroll mantêm a integridade da navegação.
- **Ação**: Manter compatibilidade com `App.jsx`, `Header.jsx` e `react-router-dom` v7.

### R07 - Auditoria e Correção Automática de Vulnerabilidades (NPM Audit Fix)
- **Descrição**: Toda atualização de dependências ou processo de release deve executar a correção automática de vulnerabilidades conhecidas.
- **Ação**: Executar `npm audit fix` como rotina antes de builds e releases para manter a segurança do repositório no GitHub limpa.

---

## 2. Habilidades Disponíveis (Skills)
As instruções detalhadas de cada habilidade estão disponíveis na pasta `.agents/skills/`:
- `content-management`: Gerenciamento de conteúdo nos arquivos JSON.
- `ui-development`: Criação e estilização de componentes React com Tailwind CSS e Framer Motion.
- `quality-audit`: Análise de linter, integridade do código e auditoria de vulnerabilidades.
- `production-release`: Geração de build, verificação de vulnerabilidades e empacotamento em `.rar` para produção.

---

## 3. Fluxos de Trabalho (Workflows)
Os fluxos completos de orquestração estão documentados em `.agents/workflows/WORKFLOWS.md`.
