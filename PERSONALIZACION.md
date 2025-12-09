# Guía de Personalización - Don Esteban Gourmet

## 🎯 Variables a Personalizar

### 1. Información de WhatsApp

**Archivos a editar:**
- `src/components/sections/HeroSection.tsx` (línea 10)
- `src/components/sections/ContactSection.tsx` (línea 14)

```typescript
// Cambiar este número por tu número de WhatsApp con código de país
const whatsappNumber = '573000000000';
// Ejemplo para Colombia: '573001234567'
// Ejemplo para España: '34612345678'
```

### 2. Información de Ubicación

**Archivo:** `src/components/sections/LocationSection.tsx` (líneas 6-14)

```typescript
const locationData = {
  address: 'Calle Principal #123, Centro',  // Tu dirección
  city: 'Tu Ciudad',                         // Tu ciudad
  phone: '+57 300 000 0000',                 // Tu teléfono
  hours: {
    weekdays: 'Lunes a Viernes: 9:00 AM - 7:00 PM',
    saturday: 'Sábado: 9:00 AM - 6:00 PM',
    sunday: 'Domingo: 10:00 AM - 3:00 PM',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...',
};
```

**Para obtener el URL del mapa de Google Maps:**
1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca tu dirección
3. Haz clic en "Compartir" o "Share"
4. Selecciona "Incorporar un mapa" o "Embed a map"
5. Copia el URL que aparece en el src del iframe

### 3. Enlace al Menú

**Archivo:** `src/components/sections/MenuSection.tsx` (línea 6)

```typescript
// Opción 1: Enlace a un PDF
const menuLink = 'https://tu-dominio.com/menu.pdf';

// Opción 2: Enlace a una página externa
const menuLink = 'https://tu-menu-digital.com';

// Opción 3: Enlace a otra sección o página interna
const menuLink = '/menu';
```

### 4. Redes Sociales

**Archivo:** `src/components/layout/Footer.tsx` (líneas 8-11)

```typescript
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/tu-pagina', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/tu-cuenta', label: 'Instagram' },
  // Puedes agregar más redes sociales aquí
];
```

### 5. Información de Contacto del Footer

**Archivo:** `src/components/layout/Footer.tsx` (líneas 87-105)

```typescript
// Actualizar dirección, teléfono y email
<span className="text-gray-300">
  Calle Principal #123<br />
  Centro, Tu Ciudad
</span>

<a href="tel:+573000000000">+57 300 000 0000</a>

<a href="mailto:info@donestebangourmet.com">
  info@donestebangourmet.com
</a>
```

### 6. Metadatos y SEO

**Archivo:** `src/app/layout.tsx` (líneas 15-19)

```typescript
export const metadata: Metadata = {
  title: "Don Esteban Gourmet - Charcutería Europea",
  description: "Sabores de Europa, España y el mundo...",
  keywords: ["charcutería", "embutidos", "jamones", "quesos", "productos gourmet"],
};
```

### 7. Imágenes

#### Hero Section
**Archivo:** `src/components/sections/HeroSection.tsx` (línea 20)

Reemplaza la URL de Unsplash con tu propia imagen:
```typescript
style={{
  backgroundImage: 'url(/images/hero-image.jpg)',
}}
```

#### About Section
**Archivo:** `src/components/sections/AboutSection.tsx` (línea 40)

```typescript
<img
  src="/images/interior-tienda.jpg"
  alt="Interior de la charcutería"
/>
```

**Ubicación de las imágenes:**
- Coloca tus imágenes en la carpeta `public/images/`
- Accede a ellas con `/images/nombre-imagen.jpg`

### 8. Textos y Contenido

#### Nombre del Negocio
Busca y reemplaza "Don Esteban Gourmet" en todos los archivos por el nombre de tu charcutería.

#### Historia del Negocio
**Archivo:** `src/components/sections/AboutSection.tsx` (líneas 22-34)

#### Categorías de Productos
**Archivo:** `src/components/sections/MenuSection.tsx` (líneas 8-27)

## 🎨 Personalización de Colores

**Archivo:** `tailwind.config.ts`

```typescript
colors: {
  wine: {
    // Ajusta estos valores hexadecimales
    900: '#7d1b3d',  // Más oscuro
    800: '#921c43',
    // ... más tonalidades
  },
  cream: {
    // Tonos beige/crema
  },
}
```

## 📱 Añadir Google Analytics (Opcional)

1. Obtén tu código de medición de Google Analytics (G-XXXXXXXXXX)
2. Crea el archivo `src/app/analytics.tsx`
3. Importa y usa el componente en `src/app/layout.tsx`

## 🚀 Próximos Pasos

1. ✅ Personaliza todos los campos mencionados
2. ✅ Reemplaza las imágenes placeholder
3. ✅ Prueba todos los enlaces (WhatsApp, menú, redes sociales)
4. ✅ Verifica que el mapa muestre la ubicación correcta
5. ✅ Prueba el sitio en diferentes dispositivos
6. ✅ Ejecuta `npm run build` para verificar que no hay errores
7. ✅ Despliega en Vercel, Netlify o tu plataforma preferida

## 💡 Consejos

- **Imágenes**: Usa imágenes de alta calidad (mínimo 1920x1080 para el hero)
- **Optimización**: Las imágenes deben pesar menos de 500KB cada una
- **Formato**: Usa WebP para mejor rendimiento
- **Textos**: Mantén los párrafos cortos y concisos
- **SEO**: Actualiza títulos y descripciones con palabras clave relevantes

## 🆘 Ayuda

Si necesitas ayuda adicional, revisa:
- README.md - Documentación principal
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)
