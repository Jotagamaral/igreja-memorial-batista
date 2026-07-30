---
name: content-management
description: Instruções para atualização e gerenciamento do conteúdo institucional nos arquivos JSON em src/data/.
---

# Habilidade: Gerenciamento e Atualização de Conteúdo (`src/data/`)

## Objetivo
Permitir que o agente atualize informações de cultos, ministérios, história da igreja e programações sem corromper a estrutura JSON ou desalinhar os componentes React.

## Arquivos Relacionados
- `src/data/cultos_Data.json`
- `src/data/igreja_Data.json`
- `src/data/ministerios_Data.json`

## Passo a Passo Operacional
1. **Identificar o Alvo**:
   - Determine qual entidade necessita de alteração (Cultos, PGMs, Liderança ou Ministérios).
2. **Inspecionar o Esquema**:
   - Abra o arquivo correspondente em `src/data/` e observe as chaves existentes (ex: `id`, `title`, `description`, `schedule`, `leader`, `image`).
3. **Modificar os Dados**:
   - Garanta a sintaxe JSON estrita (aspas duplas nas chaves e strings, sem trailing commas).
   - Preserve formatos de data/horário padronizados no projeto.
4. **Verificar Renderização**:
   - Verifique o componente consumidor em `src/pages/` ou `src/components/` para confirmar que novos campos ou alterações são apresentados corretamente.
5. **Auditar Linter**:
   - Execute `npm run lint` para garantir que nenhuma importação de JSON foi danificada.
