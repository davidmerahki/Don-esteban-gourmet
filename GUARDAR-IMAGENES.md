# 🖼️ Instrucciones para Guardar las Imágenes

## ⚠️ IMPORTANTE: Las imágenes NO están guardadas aún

El proyecto está usando placeholders temporales. Para ver el logo y la foto real de la fachada, debes guardar las imágenes en la carpeta correcta.

---

## 📁 Ruta donde guardar las imágenes:

```
c:\Users\compu\OneDrive\Documentos\GitHub\Don-esteban-gourmet\public\images\
```

---

## 📸 Imágenes que debes guardar:

### **1. Logo de Don Esteban Gourmet (URGENTE)**

**Archivo:** El logo que me compartiste (con la corona y ornamentos)

**Nombre exacto:** `logo-don-esteban.png`

**Ruta completa:**
```
c:\Users\compu\OneDrive\Documentos\GitHub\Don-esteban-gourmet\public\images\logo-don-esteban.png
```

**Formato:** PNG con fondo transparente

**Acción:**
1. Descarga el logo que compartiste
2. Guárdalo con el nombre exacto: `logo-don-esteban.png`
3. Colócalo en la carpeta: `public\images\`

---

### **2. Foto de la Fachada (URGENTE)**

**Archivo:** La foto de la tienda que me compartiste

**Nombre exacto:** `hero-don-esteban.jpg`

**Ruta completa:**
```
c:\Users\compu\OneDrive\Documentos\GitHub\Don-esteban-gourmet\public\images\hero-don-esteban.jpg
```

**Formato:** JPG (optimizado, menos de 500KB)

**Acción:**
1. Descarga la foto de la fachada que compartiste
2. Optimízala si es muy pesada (usa tinypng.com)
3. Guárdala con el nombre exacto: `hero-don-esteban.jpg`
4. Colócala en la carpeta: `public\images\`

---

### **3. Logo Blanco para Footer (OPCIONAL por ahora)**

**Archivo:** Versión blanca del logo (para footer con fondo oscuro)

**Nombre exacto:** `logo-don-esteban-white.png`

**Ruta completa:**
```
c:\Users\compu\OneDrive\Documentos\GitHub\Don-esteban-gourmet\public\images\logo-don-esteban-white.png
```

**Formato:** PNG con fondo transparente

**Cómo crearlo:**
1. Ve a photopea.com (editor online gratis)
2. Abre el logo original
3. Cambia el color a blanco (#FFFFFF)
4. Exporta como PNG con transparencia
5. Guárdalo con el nombre exacto

---

## ✅ Pasos para Guardar (Windows):

1. **Abre el Explorador de Archivos**
2. **Navega a:**
   ```
   c:\Users\compu\OneDrive\Documentos\GitHub\Don-esteban-gourmet\public\images\
   ```
3. **Copia/Pega las imágenes** con los nombres exactos mencionados arriba
4. **Verifica** que los archivos estén guardados correctamente
5. **Recarga el navegador** (F5 o Ctrl+R)

---

## 🎯 Qué pasará cuando guardes las imágenes:

### **Antes (ahora):**
- ❌ Navbar muestra texto "Don Esteban Gourmet"
- ❌ Hero usa foto genérica de Unsplash
- ❌ Footer muestra texto

### **Después (con imágenes guardadas):**
- ✅ Navbar mostrará tu logo real (se achica al scroll)
- ✅ Hero mostrará la fachada de tu tienda
- ✅ Footer mostrará logo blanco (cuando lo crees)

---

## 🔄 Actualizar el Código (DESPUÉS de guardar imágenes):

Una vez guardadas las imágenes, necesitas descomentar el código en 2 archivos:

### **Archivo 1: Navbar.tsx**
Línea 5 y líneas 39-49

**Cambiar:**
```typescript
// import Image from 'next/image'; // Descomentar cuando tengas logo-don-esteban.png
```

**A:**
```typescript
import Image from 'next/image';
```

Y descomentar el bloque de `<Image>` (eliminar `{/* ... */}`)

### **Archivo 2: HeroSection.tsx**
Línea 21

**Cambiar:**
```typescript
backgroundImage: 'url(https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069)',
```

**A:**
```typescript
backgroundImage: 'url(/images/hero-don-esteban.jpg)',
```

---

## 🆘 Problemas Comunes

### **"La imagen no se ve después de guardarla"**
- Verifica que el nombre sea EXACTO (mayúsculas/minúsculas importan)
- Verifica que la extensión sea correcta (.png o .jpg)
- Recarga el navegador con Ctrl+Shift+R (recarga completa)
- Revisa la consola del navegador (F12) para errores

### **"El servidor muestra error 404"**
- La imagen no está en la ruta correcta
- Verifica: `public\images\nombre-exacto.png`

### **"La imagen es muy grande/pesada"**
- Optimízala con TinyPNG.com antes de guardarla
- Tamaño recomendado: menos de 500KB

---

## 📊 Estado Actual

| Imagen | Estado | Siguiente Paso |
|--------|--------|----------------|
| Logo navbar | ⏳ Pendiente | Guardar `logo-don-esteban.png` |
| Foto hero | ⏳ Pendiente | Guardar `hero-don-esteban.jpg` |
| Logo footer | ⏳ Opcional | Crear y guardar `logo-don-esteban-white.png` |

---

## ✨ Resumen Rápido

1. Descarga las 2 imágenes que compartiste conmigo
2. Nómbralas exactamente: `logo-don-esteban.png` y `hero-don-esteban.jpg`
3. Guárdalas en: `public\images\`
4. Recarga el navegador
5. (Opcional) Avísame cuando estén guardadas para descomentar el código

**¿Necesitas ayuda con algún paso?**
