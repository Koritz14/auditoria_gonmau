# Auditoría de Seguridad Web – Informe Interactivo

Este proyecto consiste en una aplicación web desarrollada con React, Vite y Tailwind CSS para presentar de forma visual y profesional un informe académico de auditoría de seguridad web.

El contenido técnico del informe se encuentra en la carpeta [docs_gonmau](docs_gonmau) y la aplicación sirve como interfaz interactiva para navegar por las distintas secciones del documento.

## Propósito del proyecto

La aplicación permite explorar un informe de seguridad que abarca:

- Resumen ejecutivo
- Inyección SQL
- Cross-Site Scripting (XSS)
- Inyección de comandos
- Activos identificados
- Matriz de riesgos
- Controles recomendados
- Plan de recuperación
- Bitácora de uso de IA

## Características principales

- Navegación por secciones del informe
- Renderizado de contenido desde archivos Markdown
- Diseño responsive para escritorio, tablet y móviles
- Estilo moderno con tema claro/oscuro
- Botón para descarga de versión en PDF
- Estructura preparada para despliegue en Vercel

## Tecnologías utilizadas

- React 19
- Vite 8
- Tailwind CSS 4
- React Markdown
- Lucide React
- ESLint

## Requisitos previos

Asegúrate de tener instalado:

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la URL que indique Vite en tu navegador.

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Estructura del proyecto

```text
src/
  components/      # Componentes reutilizables y secciones
  context/         # Contexto de tema
  data/            # Configuración de secciones
  hooks/           # Hooks personalizados
  services/        # Carga de contenido Markdown
  App.jsx          # Componente principal

docs_gonmau/        # Fuente principal del contenido del informe
public/docs_gonmau/ # Copia pública de los documentos Markdown
```

## Nota importante

El contenido del informe se considera la fuente principal de verdad del proyecto y debe mantenerse en [docs_gonmau](docs_gonmau). La aplicación solo se encarga de presentarlo de forma interactiva y visualmente más clara.

## Autor

Proyecto desarrollado como parte de una evaluación académica relacionada con seguridad de la información y presentación de informes técnicos.
