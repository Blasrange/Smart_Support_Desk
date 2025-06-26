import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'es-ES',
  title: 'Smart AI Support Desk',
  description: 'Documentación técnica profesional del sistema de soporte impulsado por inteligencia artificial',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: '🏠 Inicio', link: '/' },
      { text: '📚 Documentación', link: '/introduccion/presentacion' }
    ],

    sidebar: [
      {
        text: '📖 Introducción',
        collapsed: false,
        items: [
          // { text: '🧠 Presentación', link: '/introduccion/presentacion' },
          { text: '👨‍💻 Sobre mí', link: '/introduccion/personal' },
          { text: '📋 Descripción del Proyecto', link: '/introduccion/proyecto' },
        ],
      },
      {
        text: '🚀 Guía Inicial',
        collapsed: true,
        items: [
          { text: '⚙️ Instalación', link: '/guia/instalacion' },
          { text: '🛠️ Tecnologías Usadas', link: '/guia/tecnologias' },
        ],
      },
      {
        text: '🧩 Funcionalidades',
        collapsed: true,
        items: [
          { text: '🎫 Sistema de Tickets', link: '/funcionalidades/tickets' },
          { text: '🤖 Asistente de IA', link: '/funcionalidades/ai' },
          { text: '🔔 Notificaciones', link: '/funcionalidades/notificaciones' },
          { text: '📄 Exportación a PDF', link: '/funcionalidades/exportar' },
        ],
      },
      {
        text: '🧬 Backend (Laravel)',
        collapsed: true,
        items: [
          { text: '🗃️ Modelos', link: '/backend/modelos' },
          { text: '📡 Colas y WebSockets', link: '/backend/colas' },
          { text: '🧠 Integración con IA', link: '/backend/ia' },
        ],
      },
      {
        text: '🎨 Frontend (Vue)',
        collapsed: true,
        items: [
          { text: '🧩 Componentes Vue 3', link: '/frontend/componentes' },
        ],
      },
      {
        text: '📦 Despliegue',
        collapsed: true,
        items: [
          { text: '🌐 Producción', link: '/deploy/produccion' },
        ],
      },
    ],
     docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },
    outline: {
      label: 'En esta página'
    },

    lastUpdatedText: 'Última actualización',
  },
})