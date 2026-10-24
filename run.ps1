Write-Host "=== Iniciando Proceso de Seeding en MongoDB (PowerShell) ===" -ForegroundColor Cyan

# 1. Instalación de dependencias
Write-Host "`n[1/3] Instalando dependencias..." -ForegroundColor Yellow
npm install

# 2. Ejecutar Seeder
Write-Host "`n[2/3] Poblando las 20 colecciones en MongoDB..." -ForegroundColor Yellow
node src/seeders/seeders.js

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n Error al ejecutar el seeder." -ForegroundColor Red
    exit 1
}

Write-Host "`n[3/3] Resumen de documentos generados:" -ForegroundColor Green

$summaryScript = @"
import { MongoClient } from 'mongodb';
const client = new MongoClient('mongodb://localhost:27017');
async function run() {
  try {
    await client.connect();
    const db = client.db('ecommerce_db');
    const collections = await db.listCollections().toArray();
    for (const col of collections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`- \${col.name}: \${count} documentos`);
    }
  } finally {
    await client.close();
  }
}
run();
"@

node --input-type=module -e "$summaryScript"

Write-Host "`nProceso finalizado" -ForegroundColor Cyan