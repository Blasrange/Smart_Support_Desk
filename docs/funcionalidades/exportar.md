# 📝 Exportación a PDF

La funcionalidad de **Exportación a PDF** permite a usuarios y agentes descargar un ticket de soporte completo en formato PDF, incluyendo:

- Detalles del ticket
- Conversaciones con la IA o el agente
- Archivos adjuntos (referenciados)
- Fecha y estado del ticket

Esto facilita el respaldo externo, impresión o envío por otros medios como correo electrónico.

---

## 🎯 Objetivos

- Facilitar auditorías o reportes de soporte
- Proveer documentación para usuarios finales
- Permitir respaldo físico o digital de la atención brindada

---

## ⚙️ ¿Cómo funciona?

1. El usuario o agente hace clic en el botón "Exportar a PDF" en la vista del ticket.
2. Se genera un documento PDF con formato profesional y estructura clara.
3. Se descarga automáticamente o se abre en una nueva pestaña para impresión.

---

## 🧰 Herramientas utilizadas

- **DOMPDF (Laravel)**  
  Utilizado para generar el PDF desde una vista Blade. Permite crear diseños personalizados y estructurados con HTML/CSS.

- **Snappy PDF (opcional)**  
  Alternativa basada en `wkhtmltopdf` para mayor control sobre estilos y compatibilidad con CSS avanzado.

---

## 📄 Ejemplo visual del contenido del PDF

