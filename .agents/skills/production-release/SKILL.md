---
name: production-release
description: Instruções para execução do build e empacotamento do diretório dist em formato .rar para publicação em produção.
---

# Habilidade: Empacotamento para Produção (`Build & RAR Compression`)

## Objetivo
Compilar o projeto via Vite e empacotar a saída `/dist` em um arquivo `.rar` padronizado dentro do diretório `builds/`.

## Script Automatizado
O repositório possui o script automatizado `npm run release` (`scripts/release.js`).

## Passo a Passo Operacional
1. **Verificar Versão**:
   - Confira o campo `"version"` em `package.json`. Se for uma nova versão, incremente conforme o versionamento semântico.
2. **Executar Release**:
   - Rode o comando:
     ```bash
     npm run release
     ```
3. **Validação do Resultado**:
   - Verifique a mensagem de sucesso no console.
   - Confirme a existência do arquivo em `builds/igreja-memorial-batista-v<VERSION>.rar`.
   - Verifique o tamanho do arquivo gerado.
