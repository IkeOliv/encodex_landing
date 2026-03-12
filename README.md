# encodex Landing Page

Landing page de encodex construida con **Vue 3**, **Composition API**, **Tailwind CSS** y **Pinia**.

## 🚀 Stack

| Herramienta | Versión | Uso |
|---|---|---|
| Vue 3 | ^3.4 | Framework principal |
| Vite | ^5.0 | Build tool / Dev server |
| Tailwind CSS | ^3.4 | Estilos utilitarios |
| Pinia | ^2.1 | State management |
| Vue Router | ^4.2 | Navegación / scroll |

## 📁 Estructura del Proyecto

```
sicov-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css          # Tailwind + estilos globales
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TheNavbar.vue  # Navbar fija con scroll activo
│   │   │   └── TheFooter.vue  # Footer con redes sociales
│   │   ├── sections/
│   │   │   ├── HeroSection.vue
│   │   │   ├── AboutSection.vue
│   │   │   ├── ModulesSection.vue
│   │   │   ├── BenefitsSection.vue
│   │   │   ├── ImprovementsSection.vue
│   │   │   └── ContactSection.vue
│   │   └── ui/               # Componentes reutilizables (botones, modales, etc.)
│   ├── stores/
│   │   ├── ui.js             # Estado global: navbar, sección activa
│   │   └── contact.js        # Formulario de contacto
│   ├── views/
│   │   └── HomeView.vue      # Página principal
│   ├── router/
│   │   └── index.js          # Vue Router
│   ├── App.vue
│   └── main.js
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ⚙️ Instalación

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Personalización

- **Colores**: Edita `tailwind.config.js` → `theme.extend.colors`
- **Fuentes**: Cambia en `index.html` (Google Fonts) y `tailwind.config.js`
- **Contenido**: Cada sección tiene sus datos en el `<script setup>` del componente
- **API Contacto**: En `src/stores/contact.js`, reemplaza el `setTimeout` con tu endpoint real

## 🏪 Stores (Pinia)

- **`useUIStore`**: Maneja el estado del navbar (abierto/cerrado) y la sección activa en scroll
- **`useContactStore`**: Maneja el formulario de contacto (estado, validación, envío)
