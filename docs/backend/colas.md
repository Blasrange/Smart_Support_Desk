# ⚙️ Colas y WebSockets en Laravel

El sistema **Smart AI Support Desk** hace uso intensivo de **colas de trabajos (queues)** y **WebSockets** para asegurar una experiencia fluida, rápida y escalable, tanto para usuarios como para agentes de soporte.

---

## 🧵 ¿Por qué usar colas?

Las **colas de trabajos** permiten ejecutar tareas pesadas en segundo plano, sin afectar la experiencia del usuario en el frontend. En este proyecto, se utilizan para:

- Procesar respuestas automáticas con la API de IA
- Enviar correos de notificación (ticket creado, respondido, cerrado)
- Registrar logs o actividad del usuario
- Generar PDFs bajo demanda

---

## ⚙️ Configuración de la Cola

### `.env`

```env
QUEUE_CONNECTION=database