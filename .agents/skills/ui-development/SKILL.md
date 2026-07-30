---
name: ui-development
description: Instruções para criação e modificação de componentes visuais utilizando React, Tailwind CSS v4 e Framer Motion.
---

# Habilidade: Desenvolvimento e Ajuste de Componentes UI / Animações

## Objetivo
Desenvolver e ajustar componentes visuais garantindo consistência estética, animações fluidas, responsividade e sanitização de segurança.

## Arquivos Relacionados
- `src/components/*.jsx`
- `src/pages/*.jsx`
- `src/index.css`

## Passo a Passo Operacional
1. **Modelagem de Componentes**:
   - Defina as propriedades (`props`) e estado interno do componente.
   - Utilize a sintaxe moderna do React 19.
2. **Estilização com Tailwind CSS v4**:
   - Use utilitários flexbox e grid responsivos (`md:`, `lg:`).
   - Mantenha a paleta de cores e tipografia consistentes com o tema da igreja.
3. **Animações com Framer Motion**:
   - Aplique variantes simples para entradas (`initial`, `animate`, `transition`).
   - Evite animações excessivas que causem gargalos em dispositivos móveis.
4. **Sanitização de Segurança (DOMPurify)**:
   - Se o componente renderizar HTML dinâmico, utilize `dompurify` antes da injeção no DOM.
5. **Conexão e Teste**:
   - Conecte o componente nas rotas ou seções apropriadas.
