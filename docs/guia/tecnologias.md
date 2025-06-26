# 🧪 Tecnologías Usadas

El proyecto **Smart AI Support Desk** está construido sobre una arquitectura moderna de desarrollo full-stack, utilizando herramientas potentes y actuales tanto para el backend como para el frontend. A continuación, se detallan las principales tecnologías empleadas:

---

## 🧱 Backend

### 🔹 Laravel 12
Framework PHP robusto y moderno utilizado para:

- Definir APIs RESTful.
- Control de autenticación (Laravel Breeze/Jetstream).
- Gestión de base de datos con Eloquent ORM.
- Validación, colas y controladores limpios.

> 📘 Laravel ofrece una base sólida para proyectos escalables y seguros.

---

## 🎨 Frontend

### 🔹 Vue 3 + Inertia.js
El frontend está construido como una **SPA (Single Page Application)** usando:

- **Vue 3 Composition API**: para crear componentes reactivos, reutilizables y organizados.
- **Inertia.js**: puente entre Laravel y Vue sin necesidad de usar una API REST explícita.

> ⚡ Esto permite una experiencia fluida sin recargar páginas, como una aplicación nativa.

---

## 💅 Estilos y UI

### 🔹 TailwindCSS
Framework de utilidades para CSS moderno y eficiente. Se usa para:

- Crear interfaces limpias y responsivas.
- Aplicar estilos sin escribir CSS personalizado.
- Construir componentes reutilizables.

> 🎯 Perfecto para mantener una estética consistente y profesional.

---

## 🧠 Inteligencia Artificial

### 🔹 IA API (GPT-4/3.5)
El sistema se integra con la API de IA para:

- Responder automáticamente a tickets de soporte.
- Sugerencias inteligentes a agentes humanos.
- Generación de respuestas en lenguaje natural.

> 🤖 Mejora la eficiencia del soporte y reduce el tiempo de respuesta.

---

## 🔴 WebSockets y Tiempo Real

### 🔹 Laravel Echo + Pusher
Tecnologías utilizadas para:

- Actualización en tiempo real del estado de tickets.
- Notificaciones push en vivo.
- Comunicación fluida entre usuarios y agentes.

> 📡 Ideal para mejorar la experiencia del usuario y la colaboración.

---

## 🛠️ Herramientas adicionales

- **Vite**: Compilador rápido para el frontend.
- **Axios**: Para llamadas HTTP desde Vue.
- **Composer & NPM**: Gestión de dependencias.
- **MySQL**: Base de datos relacional del sistema.
- **Git + GitHub**: Control de versiones y colaboración.

---

## 📈 Arquitectura General

```txt
[ Laravel (API + DB) ]
        |
  Inertia.js (puente)
        |
[ Vue 3 SPA + Tailwind ]
        |
[ Echo + Pusher ] <— WebSockets
        |
[ IA API ] <— IA inteligente
