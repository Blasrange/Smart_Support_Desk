# 🤖 Integración con IA

El sistema **Smart AI Support Desk** está integrado con la **API de IA** para procesar y generar respuestas automáticas a los tickets de soporte, simulando el comportamiento de un agente humano con inteligencia artificial.

---

## 🧠 ¿Cómo funciona?

Cuando un usuario crea o responde un ticket, el sistema evalúa si puede generar una respuesta automática basada en IA. Si es posible:

1. El contenido del mensaje se envía a la API de IA.
2. La IA responde con una sugerencia o solución.
3. La respuesta se almacena como un nuevo mensaje en la conversación del ticket.

---

## 🔐 Requisitos previos

- Cuenta activa en IA
- Clave API válida

### `.env`

```env
IA_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx