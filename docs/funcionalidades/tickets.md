# 🎫 Sistema de Tickets

El módulo de **Tickets de Soporte** es el núcleo operativo de Smart AI Support Desk. Permite a los usuarios reportar incidencias, problemas o solicitudes de soporte, y da a los agentes (o la IA) la capacidad de gestionar eficientemente estos requerimientos.

---

## 👤 Acceso por Roles

- **Usuarios**: pueden crear nuevos tickets, consultar su historial y responder comentarios.
- **Agentes**: pueden visualizar todos los tickets, responder, escalar o cerrar casos.
- **Administrador** (opcional): puede reasignar, auditar y modificar cualquier ticket.

---

## 🧱 Funcionalidades clave

- Crear un nuevo ticket con asunto, descripción y archivos adjuntos
- Ver lista y detalles de los tickets
- Responder como usuario, agente o IA
- Estado del ticket: `Abierto`, `En proceso`, `Resuelto`, `Cerrado`
- Filtro por prioridad, estado o fecha
- Adjuntar imágenes o documentos
- Exportación a PDF de cualquier ticket

---

## 🔄 Flujo de Trabajo

```plaintext
Usuario crea un ticket ──▶ Ticket asignado a IA o Agente ──▶
Respuesta enviada ──▶ Usuario recibe notificación ──▶
Ticket se resuelve o se reabre según necesidad
