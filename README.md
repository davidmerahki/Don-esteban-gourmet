# Don Esteban Gourmet - Landing Page

Landing page moderna y elegante para charcutería europea, construida con Next.js 14, TypeScript y TailwindCSS.

## 🎨 Características

- **Diseño Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **Paleta de Colores Gourmet**: Tonos cálidos (vino tinto, beige, crema)
- **Secciones Completas**:
  - Hero con imagen de fondo y CTAs
  - Sobre Nosotros con historia y valores
  - Menú con categorías de productos
  - Ubicación con mapa integrado
  - Formulario de contacto
  - Integración con WhatsApp
- **Navegación Fluida**: Scroll suave entre secciones
- **SEO Optimizado**: Metadatos y estructura semántica
- **Animaciones Elegantes**: Transiciones y efectos hover

## 🚀 Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework React con App Router
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [TailwindCSS](https://tailwindcss.com/) - Estilos utility-first
- [Lucide React](https://lucide.dev/) - Iconos modernos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones (opcional)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎯 Configuración

### Variables Personalizables

Edita los siguientes archivos para personalizar el contenido:

1. **WhatsApp**: En `HeroSection.tsx` y `ContactSection.tsx`
   ```typescript
   const whatsappNumber = '573000000000'; // Reemplazar con tu número
   ```

2. **Ubicación**: En `LocationSection.tsx`
   ```typescript
   const locationData = {
     address: 'Tu dirección',
     city: 'Tu ciudad',
     phone: '+57 300 000 0000',
     mapEmbedUrl: 'URL del mapa de Google Maps',
   };
   ```

3. **Menú**: En `MenuSection.tsx`
   ```typescript
   const menuLink = 'URL_DE_TU_MENU'; // Enlace a PDF o página de menú
   ```

4. **Redes Sociales**: En `Footer.tsx`
   ```typescript
   const socialLinks = [
     { icon: Facebook, href: 'https://facebook.com/tu-pagina' },
     { icon: Instagram, href: 'https://instagram.com/tu-cuenta' },
   ];
   ```

## 🎨 Paleta de Colores

La paleta está definida en `tailwind.config.ts`:

- **Wine**: Tonos vino tinto/granate (#7d1b3d - #fdf4f3)
- **Cream**: Tonos beige/crema (#3e2718 - #fdfcf8)
- **Primary**: Tonos principales (#460a1e - #fdf2f4)

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Barra de navegación
│   │   └── Footer.tsx      # Pie de página
│   └── sections/
│       ├── HeroSection.tsx        # Sección hero
│       ├── AboutSection.tsx       # Sobre nosotros
│       ├── MenuSection.tsx        # Menú de productos
│       ├── LocationSection.tsx    # Ubicación y mapa
│       └── ContactSection.tsx     # Contacto y WhatsApp
```

## 🌐 Despliegue

### Vercel (Recomendado)

1. Push tu código a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y desplegará

### Otros Proveedores

- **Netlify**: Compatible con Next.js
- **AWS Amplify**: Soporte completo
- **Railway**: Deploy automático desde Git

## ✨ Personalización Adicional

### Imágenes

Reemplaza las URLs de Unsplash con tus propias imágenes:
- Hero: `HeroSection.tsx` - Imagen de la tienda o productos
- About: `AboutSection.tsx` - Interior del local
- Usa Next/Image para optimización automática

### Fuentes

Las fuentes se cargan desde Google Fonts en `layout.tsx`:
- Sans-serif: Inter
- Serif: Playfair Display

### Animaciones

Para agregar animaciones con Framer Motion, instala:
```bash
npm install framer-motion
```

## 📝 Checklist de Lanzamiento

- [ ] Actualizar número de WhatsApp
- [ ] Configurar dirección y mapa de Google Maps
- [ ] Agregar enlace al menú/PDF
- [ ] Actualizar enlaces de redes sociales
- [ ] Reemplazar imágenes placeholder
- [ ] Configurar dominio personalizado
- [ ] Agregar Google Analytics (opcional)
- [ ] Probar formulario de contacto
- [ ] Verificar responsive en todos los dispositivos

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para Don Esteban Gourmet**