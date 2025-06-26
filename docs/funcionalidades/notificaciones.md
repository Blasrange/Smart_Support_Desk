# 🔔 Notificaciones en el Sistema

El sistema de **Smart AI Support Desk** cuenta con un módulo de notificaciones robusto que garantiza que tanto usuarios como agentes estén informados en tiempo real sobre los eventos más importantes del sistema de soporte.

---

## 📬 Tipos de Notificaciones

### 1. ✉️ Notificaciones por Correo Electrónico

Se envían automáticamente en los siguientes casos:

- Cuando se crea un nuevo ticket
- Cuando un ticket recibe una respuesta (IA o agente humano)
- Cuando se cambia el estado de un ticket (Ej. de "abierto" a "resuelto")

Estas notificaciones son enviadas utilizando la clase `Mailable` de Laravel y son personalizadas con contenido dinámico para mejorar la experiencia del usuario.

#### 📌 Ejemplo:
> "Tu ticket #123 ha sido respondido. Haz clic aquí para ver la respuesta."

---

### 2. ⚡ Notificaciones en Tiempo Real (WebSockets)

Gracias a la integración con **Laravel Echo** y **Pusher**, los usuarios pueden recibir notificaciones instantáneas en el navegador sin necesidad de recargar la página.

#### Eventos en tiempo real:

- Nuevo mensaje agregado a un ticket
- Cambio de estado del ticket
- Nuevo ticket asignado al agente

Esto mejora significativamente la productividad del equipo y la experiencia del usuario.

---

## 🧰 Tecnologías utilizadas

- **Laravel Notifications**: sistema nativo de notificaciones por correo
- **Laravel Echo + Pusher**: WebSockets para actualizaciones en tiempo real
- **Event Broadcasting**: sistema de eventos que transmite los cambios
- **Vue 3 (composición API)**: interfaz reactiva con `watch` y `onMounted` para escuchar los eventos entrantes

---

## 🔐 Seguridad

- Los canales de WebSocket están **autenticados y privados**, asegurando que solo usuarios autorizados reciban eventos relacionados a sus tickets.
- Cada evento es verificado desde el backend antes de ser emitido.

---

## 📄 Ejemplo de evento de Laravel

```php
event(new TicketRespondido($ticket));
