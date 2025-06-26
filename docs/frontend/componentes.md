# 🖥️ Frontend Vue 3 + Inertia.js

La interfaz de usuario de **Smart AI Support Desk** está desarrollada con **Vue 3**, utilizando la **Composition API** y la arquitectura de aplicaciones de una sola página (SPA) a través de **Inertia.js**. Esto proporciona una experiencia moderna, fluida y altamente personalizable.

---

## 🧩 Componentes Vue 3

Los componentes son la base de la interfaz del sistema. Se han diseñado con enfoque modular y reutilizable, empleando buenas prácticas de Vue 3 como:

- `props` para recibir datos desde el componente padre
- `emits` para emitir eventos personalizados hacia el componente padre
- `slots` para permitir personalización del contenido interno
- `ref` y `reactive` para estados locales
- `composables` (archivos `.ts` o `.js`) para lógica compartida

---

## 🧱 Estructura de Componentes

```bash
src/
├── Components/
│   ├── Form/
│   │   └── InputText.vue
│   ├── UI/
│   │   ├── Modal.vue
│   │   ├── Button.vue
│   └── Tickets/
│       └── TicketList.vue

