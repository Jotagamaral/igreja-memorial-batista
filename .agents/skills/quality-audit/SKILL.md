---
name: quality-audit
description: Instruções para auditoria estática de código, validação de React Hooks e conformidade com ESLint.
---

# Habilidade: Auditoria e Garantia de Qualidade (`Lint & Dev Check`)

## Objetivo
Garantir a ausência de erros sintáticos, violações de regras de Hooks do React e problemas de empacotamento antes de subir alterações ou gerar builds.

## Passo a Passo Operacional
1. **Executar Linter**:
   - Rodar o comando `npm run lint`.
2. **Analisar Logs**:
   - Inspecionar saídas do ESLint no terminal.
3. **Corrigir Erros**:
   - Resolver avisos de dependências em `useEffect`/`useCallback`.
   - Remover importações de arquivos ou variáveis não utilizadas.
4. **Verificar Build de Teste**:
   - Certificar-se de que a compilação do Vite não emite avisos críticos.
