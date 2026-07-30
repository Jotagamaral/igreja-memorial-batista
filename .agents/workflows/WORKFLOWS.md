# Orquestração de Fluxos de Trabalho (Workflows) - Igreja Memorial Batista

Este documento define como as Regras (Rules) e Habilidades (Skills) se conectam para executar processos complexos no projeto.

---

## W01: Fluxo de Atualização Institucional e de Conteúdo
- **Gatilho**: Atualização de horários de cultos, novos ministérios, células/PGMs ou texto da história da igreja.
- **Regras Ativadas**: `R02` (Integridade da Camada de Dados), `R05` (Linting e Qualidade de Código).
- **Sequência de Habilidades**:
  1. `content-management`: Editar arquivos em `src/data/*.json`.
  2. `quality-audit`: Executar `npm run lint`.
  3. **Validação Visual**: Confirmar renderização no componente consumidor.

---

## W02: Fluxo de Implementação de Novas Funcionalidades de UI / Páginas
- **Gatilho**: Solicitação de novas telas, modais, cards ou seções interativas.
- **Regras Ativadas**: `R02` (Data Layer), `R03` (Security & DOMPurify), `R04` (UI/UX Standards), `R05` (Quality Audit), `R06` (Routing Integrity).
- **Sequência de Habilidades**:
  1. `ui-development`: Criar ou alterar componentes JSX em `src/components/` com Tailwind CSS e Framer Motion.
  2. `content-management` (se necessário): Atualizar dados nos arquivos JSON.
  3. **Roteamento**: Atualizar rotas/referências em `App.jsx` e `Header.jsx`.
  4. `quality-audit`: Executar `npm run lint`.

---

## W03: Fluxo Completo de Release e Deploy para Produção
- **Gatilho**: Conclusão de uma demanda ou versão pronta para envio a produção.
- **Regras Ativadas**: `R01` (Build & RAR Compression Obrigatório), `R03` (Security Check), `R05` (Quality Audit).
- **Sequência de Habilidades**:
  1. `quality-audit`: Rodar `npm run lint` para garantir código limpo.
  2. `production-release`: Executar `npm run release` para rodar o build Vite, empacotar `dist/` em `.rar` e salvar no diretório `builds/`.
  3. **Notificação ao Usuário**: Reportar o arquivo `.rar` gerado em `builds/` pronto para deploy.
