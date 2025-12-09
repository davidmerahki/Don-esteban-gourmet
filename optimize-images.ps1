# Script de Optimización de Imágenes para Don Esteban Gourmet
# Requiere: Node.js instalado

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Optimizador de Imágenes" -ForegroundColor Cyan
Write-Host "  Don Esteban Gourmet" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si sharp está instalado
Write-Host "Verificando dependencias..." -ForegroundColor Yellow

$sharpInstalled = npm list sharp 2>&1 | Select-String "sharp@"

if (-not $sharpInstalled) {
    Write-Host "Instalando sharp (herramienta de optimización)..." -ForegroundColor Yellow
    npm install --save-dev sharp
}

Write-Host ""
Write-Host "Optimizando imágenes..." -ForegroundColor Green
Write-Host ""

# Crear script Node.js temporal para optimización
$nodeScript = @"
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = './public/images';

const images = [
  {
    input: 'Foto chef para seccion historia.png',
    output: 'Foto chef para seccion historia.jpg',
    quality: 80,
    originalSize: 0,
    optimizedSize: 0
  },
  {
    input: 'Foto tabla para seccion historia.png',
    output: 'Foto tabla para seccion historia.jpg',
    quality: 80,
    originalSize: 0,
    optimizedSize: 0
  }
];

async function optimizeImages() {
  console.log('🎨 Iniciando optimización de imágenes...\n');
  
  for (const img of images) {
    const inputPath = path.join(imagesDir, img.input);
    const outputPath = path.join(imagesDir, img.output);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  ${img.input} no encontrada, saltando...\n`);
      continue;
    }
    
    try {
      // Obtener tamaño original
      const originalStats = fs.statSync(inputPath);
      img.originalSize = originalStats.size;
      
      // Optimizar imagen
      await sharp(inputPath)
        .jpeg({ quality: img.quality, mozjpeg: true })
        .toFile(outputPath);
      
      // Obtener tamaño optimizado
      const optimizedStats = fs.statSync(outputPath);
      img.optimizedSize = optimizedStats.size;
      
      const reduction = ((1 - img.optimizedSize / img.originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${img.input}`);
      console.log(`   Original:   ${(img.originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`   Optimizado: ${(img.optimizedSize / 1024).toFixed(0)} KB`);
      console.log(`   Reducción:  ${reduction}%\n`);
      
      // Eliminar original PNG si la optimización fue exitosa
      if (img.optimizedSize < img.originalSize) {
        fs.unlinkSync(inputPath);
        console.log(`   🗑️  Archivo PNG original eliminado\n`);
      }
      
    } catch (error) {
      console.error(`❌ Error optimizando ${img.input}:`, error.message, '\n');
    }
  }
  
  console.log('🎉 ¡Optimización completada!');
}

optimizeImages().catch(console.error);
"@

# Guardar script temporal
$nodeScript | Out-File -FilePath "optimize-temp.js" -Encoding UTF8

# Ejecutar script de optimización
node optimize-temp.js

# Limpiar archivo temporal
Remove-Item "optimize-temp.js" -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Optimización Completada" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona cualquier tecla para continuar..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
