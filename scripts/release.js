import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Read package.json and increment patch version automatically
const pkgPath = path.join(rootDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const versionParts = (pkg.version || '1.0.0').split('.').map(Number);
if (versionParts.length === 3 && !versionParts.some(isNaN)) {
  versionParts[2] += 1;
  pkg.version = versionParts.join('.');
} else {
  pkg.version = '1.0.3';
}

// Update package.json with new version
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf-8');

const version = pkg.version;
console.log(`🚀 Versão incrementada para v${version} no package.json`);

// 2. Audit & Auto-fix vulnerabilities
console.log('🔒 Verificando e corrigindo vulnerabilidades de dependências (npm audit fix)...');
try {
  execSync('npm audit fix', { cwd: rootDir, stdio: 'inherit' });
} catch (err) {
  console.log('⚠️ npm audit fix executado.');
}

// 3. Run build
console.log(`📦 Executando npm run build para v${version}...`);
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

// 4. Ensure builds/ directory exists
const buildsDir = path.join(rootDir, 'builds');
if (!fs.existsSync(buildsDir)) {
  fs.mkdirSync(buildsDir, { recursive: true });
}

// 5. RAR target path
const archiveName = `igreja-memorial-batista-v${version}.rar`;
const archivePath = path.join(buildsDir, archiveName);

// Remove existing archive if present
if (fs.existsSync(archivePath)) {
  fs.unlinkSync(archivePath);
}

// 6. Compress using WinRAR rar.exe
const winRarPath = 'C:\\Program Files\\WinRAR\\rar.exe';
const distDir = path.join(rootDir, 'dist', '*');

console.log(`🗜️ Comprimindo dist/ em ${archiveName}...`);

if (fs.existsSync(winRarPath)) {
  const cmd = `"${winRarPath}" a -r "${archivePath}" "${distDir}"`;
  execSync(cmd, { cwd: rootDir, stdio: 'inherit' });
} else {
  throw new Error(`WinRAR não foi encontrado em: ${winRarPath}`);
}

const stats = fs.statSync(archivePath);
const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

console.log(`\n✅ Release v${version} concluído com sucesso!`);
console.log(`📁 Arquivo gerado: ${archivePath}`);
console.log(`📊 Tamanho do arquivo: ${sizeInMB} MB`);
