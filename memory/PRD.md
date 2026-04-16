# El Callejero - Website Moderna

## Problema Original
Crear una página web moderna, elegante e interactiva basada en el contenido de https://linktr.ee/ElCallejero para el restaurante "El Callejero" (street food gourmet en Liberia, Costa Rica).

## Arquitectura
- **Frontend**: React + Tailwind CSS + Shadcn UI components
- **Backend**: FastAPI + MongoDB (Pendiente de implementación)
- **Diseño**: Landing page de una sola página (SPA) con scroll suave

## Información del Negocio
- **Nombre**: El Callejero
- **Tipo**: Street Food Gourmet
- **Ubicación**: JHM5+5XM, Liberia, Los Cerros, Costa Rica
- **Teléfono**: 2665-4111
- **WhatsApp**: +506 8864 4396
- **Calificación**: 4.6★
- **Horario**:
  - Lunes: Cerrado
  - Martes a Domingo: 11:00 - 22:00

## Redes Sociales
- Facebook: https://www.facebook.com/share/19RTBffDvQ/
- Instagram: @el_callejero_liberia
- TikTok: @el.callejero5
- PedidosYa: https://www.pedidosya.cr/restaurantes/liberia/el-callejero-liberia-menu
- Menú Digital: http://entucelular.com/callejero

## Lo Implementado (Fecha: 16 Abril 2026)

### ✅ Componentes Frontend Creados
1. **Header.jsx** - Navegación fija con scroll transparente/sólido
2. **Hero.jsx** - Sección principal con carrusel de imágenes y CTAs
3. **MenuSection.jsx** - Grid de categorías del menú con tarjetas interactivas
4. **LocationSection.jsx** - Mapa de Google Maps integrado + info de contacto
5. **SocialSection.jsx** - Enlaces a redes sociales con efectos hover
6. **Footer.jsx** - Pie de página con links rápidos y contacto
7. **FloatingButtons.jsx** - Botón flotante estilo burbuja con WhatsApp y PedidosYa
8. **Homepage.jsx** - Página principal que integra todos los componentes

### ✅ Características Implementadas
- ✨ Diseño moderno con gradientes suaves y efectos glassmorphism
- 🎨 Paleta de colores: Negro, Dorado/Amber (#f59e0b), Blanco
- 🎭 Animaciones suaves (fade-in, slide-up, hover effects)
- 📱 100% responsive (mobile-first design)
- 🎯 Botones CTA prominentes (Ver Menú, Pedir Ahora, Ubicación)
- 🗺️ Google Maps integrado con botones Waze/Google Maps
- 💬 Botón flotante moderno (estilo PedidosYa) con WhatsApp + PedidosYa
- 🔄 Carrusel automático de imágenes en hero section
- 🎪 Microinteracciones en hover y clicks
- 📊 Tarjetas de menú expandibles al click
- ⚡ Scroll suave entre secciones
- 🎚️ Custom scrollbar con color amber

### 🖼️ Imágenes Utilizadas
- 6 imágenes profesionales de comida gourmet/street food
- Logo del restaurante extraído de Linktree
- Todas las imágenes optimizadas para web

### 📂 Estructura de Archivos
```
/app/frontend/src/
├── mock.js                    # Datos mock del restaurante
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── MenuSection.jsx
│   ├── LocationSection.jsx
│   ├── SocialSection.jsx
│   ├── Footer.jsx
│   └── FloatingButtons.jsx
├── pages/
│   └── Homepage.jsx
├── App.js
├── App.css                   # Animaciones custom
└── index.css                 # Tailwind + variables
```

## Backlog Priorizado

### P0 (Alta Prioridad - Esencial)
- [ ] **Backend API Development**
  - [ ] Sistema de gestión de menú (CRUD)
  - [ ] Sistema de pedidos
  - [ ] Autenticación admin
  - [ ] Base de datos MongoDB

### P1 (Media Prioridad - Importante)
- [ ] **Formulario de Contacto**
  - [ ] Envío de emails
  - [ ] Validación de formularios
- [ ] **Sistema de Reservas**
  - [ ] Calendario de disponibilidad
  - [ ] Notificaciones WhatsApp/Email
- [ ] **Galería de Fotos**
  - [ ] Upload de imágenes
  - [ ] Lightbox modal
- [ ] **Optimización SEO**
  - [ ] Meta tags
  - [ ] Open Graph
  - [ ] Schema markup

### P2 (Baja Prioridad - Nice to Have)
- [ ] **Blog/Noticias**
- [ ] **Sistema de Reviews**
- [ ] **Multi-idioma** (Español/Inglés)
- [ ] **Dark/Light Mode**
- [ ] **PWA** (Progressive Web App)

## Próximos Pasos

1. **Testing completo de frontend** ✅ (En progreso)
2. **Diseño y desarrollo de Backend API**
3. **Integración Frontend-Backend**
4. **Testing end-to-end**
5. **Deployment a producción**

## Notas Técnicas

- Hot reload funcional en frontend
- Componentes Shadcn UI disponibles en `/app/frontend/src/components/ui/`
- Variables CSS personalizadas en index.css
- Animaciones CSS personalizadas en App.css
- Frontend compilando exitosamente sin errores

## Datos Mock Disponibles

El archivo `mock.js` contiene:
- Información del restaurante (nombre, dirección, horarios)
- 4 categorías de menú con items
- Enlaces a redes sociales
- 3 imágenes hero para carrusel
- Testimonios de clientes
