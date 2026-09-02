---
name: quality-audit
description: Instruções para auditoria estática de código, validação de React Hooks, verificação de vulnerabilidades e conformidade com ESLint.
---

# Habilidade: Auditoria e Garantia de Qualidade (`Lint, Audit & Dev Check`)

## Objetivo
Garantir a ausência de erros sintáticos, violações de regras de Hooks do React, vulnerabilidades conhecidas em dependências e problemas de empacotamento.

## Passo a Passo Operacional
1. **Executar Correção Automática de Vulnerabilidades**:
   - Rodar `npm audit fix`.
2. **Executar Linter**:
   - Rodar o comando `npm run lint`.
3. **Analisar Logs**:
   - Inspecionar saídas do ESLint e do npm audit no terminal.
4. **Corrigir Erros**:
   - Resolver avisos de dependências em `useEffect`/`useCallback`.
   - Remover importações de arquivos ou variáveis não utilizadas.
5. **Verificar Build de Teste**:
   - Certificar-se de que a compilação do Vite não emite avisos críticos.
