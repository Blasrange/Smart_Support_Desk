# 🚀 Despliegue en Producción

Esta sección detalla las mejores prácticas y configuraciones necesarias para desplegar **Smart AI Support Desk** en un entorno de producción seguro, escalable y optimizado.

---

## 🧰 Requisitos del Servidor

- **Sistema Operativo**: Ubuntu 22.04 LTS o similar
- **Servidor Web**: Nginx (recomendado por rendimiento y compatibilidad con Laravel)
- **PHP**: Versión 8.3 o superior
- **Base de Datos**: MySQL 8.x o MariaDB
- **Node.js**: v18+ (para compilar assets)
- **Composer**: 2.x
- **Certbot**: para habilitar HTTPS (Let's Encrypt)
- **Supervisord**: para manejar procesos como colas y websockets
- **Redis** *(opcional pero recomendado)*: para caching y colas

---

## ⚙️ Pasos para el Despliegue

### 1. Clonar el proyecto

```bash
git clone https://github.com/usuario/smart-ai-support-desk.git
cd smart-ai-support-desk