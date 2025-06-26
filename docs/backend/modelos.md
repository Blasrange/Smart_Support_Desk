# 🗃️ Modelos en Laravel

En el sistema **Smart AI Support Desk**, los modelos Eloquent de Laravel representan la estructura principal de los datos y relaciones. A continuación, se describen los modelos clave que conforman el backend del proyecto.

---

## 👤 Modelo: `User`

Representa a los usuarios del sistema, incluyendo clientes y agentes de soporte.

### Atributos clave:

- `id`
- `name`
- `email`
- `role` (`user`, `agent`, `admin`)
- `password`

### Relaciones:

- Tiene muchos `tickets` (como creador)
- Tiene muchos `messages` (como autor)
- Puede recibir notificaciones

---

## 🎫 Modelo: `Ticket`

Contiene los datos de los tickets de soporte creados por los usuarios.

### Atributos clave:

- `id`
- `user_id` (creador)
- `subject`
- `status` (`abierto`, `en_proceso`, `cerrado`)
- `priority`
- `closed_at`

### Relaciones:

- Pertenece a un `User`
- Tiene muchos `messages`
- Tiene muchos `attachments`
- Tiene muchos `logs`

---

## 💬 Modelo: `Message`

Guarda cada respuesta o comentario en el hilo del ticket.

### Atributos clave:

- `id`
- `ticket_id`
- `user_id` (agente, cliente o sistema)
- `body`
- `is_ai_generated` (boolean)

### Relaciones:

- Pertenece a un `Ticket`
- Pertenece a un `User`

---

## 📎 Modelo: `Attachment`

Contiene archivos subidos por los usuarios o agentes al enviar un mensaje o ticket.

### Atributos clave:

- `id`
- `message_id`
- `filename`
- `path`
- `mime_type`
- `size`

### Relaciones:

- Pertenece a un `Message`

---

## 📝 Modelo: `TicketActionLog`

Registra cada acción relevante dentro de un ticket, útil para auditoría o historial.

### Atributos clave:

- `id`
- `ticket_id`
- `user_id`
- `action` (texto o enum)
- `created_at`

### Ejemplos de acciones:

- `Creación del ticket`
- `Respuesta enviada`
- `Cambio de prioridad`
- `Cierre automático por IA`

---

## 🧬 Relación entre modelos

```mermaid
erDiagram
  USERS ||--o{ TICKETS : tiene
  USERS ||--o{ MESSAGES : escribe
  TICKETS ||--o{ MESSAGES : contiene
  MESSAGES ||--o{ ATTACHMENTS : incluye
  TICKETS ||--o{ TICKETACTIONLOGS : registra