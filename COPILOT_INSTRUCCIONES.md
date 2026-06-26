# Instrucciones para GitHub Copilot

# Desarrollo de la Aplicación Web React

## Proyecto: Auditoría de Seguridad Web – TI3034 – INACAP

# 1. Objetivo del Proyecto

## Rol

Actúa como un **desarrollador Full Stack senior especializado en React, Vite, Tailwind CSS y experiencia de usuario**, con experiencia en aplicaciones académicas, documentación técnica y visualización de información.

Tu objetivo es construir **la aplicación web completa**, no el informe.

Debes tomar como entrada el contenido existente del proyecto y transformarlo en una aplicación React moderna, clara, intuitiva y completamente funcional.

---

## Contexto

El proyecto corresponde a una evaluación de la asignatura **Fundamentos de Seguridad de la Información (TI3034)** de INACAP.

El informe académico ya se encuentra completamente terminado.

La aplicación React únicamente debe servir como medio de presentación del contenido del informe.

El contenido del informe **NO forma parte del trabajo que debes generar**, ya existe y no debe ser reemplazado.

---

## Objetivo principal

Construir una aplicación web React que presente el informe de auditoría de seguridad mediante una interfaz moderna, limpia, intuitiva y completamente responsive.

La aplicación debe facilitar la lectura del informe evitando presentar grandes bloques de texto continuos. Para ello deberá organizar el contenido mediante componentes, secciones, tarjetas, navegación clara, indicadores visuales y una jerarquía tipográfica adecuada.

El foco principal es mejorar la experiencia de lectura sin modificar el contenido del informe.

---

## Objetivo secundario

La aplicación debe dar la impresión de ser un informe profesional publicado como sitio web.

El usuario debe poder navegar cómodamente desde:

* Computador
* Tablet
* Teléfono móvil

sin perder legibilidad ni funcionalidad.

---

## Resultado esperado

Al finalizar el desarrollo deberá existir una aplicación React que:

* Compile correctamente mediante:

```bash
npm install
npm run dev
```

sin requerir modificaciones manuales.

* Pueda desplegarse posteriormente en Vercel sin cambios adicionales.

* Muestre todas las secciones del informe.

* Utilice exclusivamente la información disponible en el proyecto.

* Mantenga una apariencia profesional y consistente.

---

## Principio fundamental

La prioridad absoluta es la fidelidad del contenido.

La aplicación debe representar el informe existente.

No debe reinterpretarlo.

No debe resumirlo.

No debe corregirlo.

No debe ampliarlo.

No debe inventar información.

El desarrollo consiste únicamente en diseñar la mejor forma posible de visualizar el informe ya existente.

# 2. Contexto del Proyecto

## Descripción general

El proyecto corresponde a una auditoría de seguridad realizada sobre un entorno controlado de **DVWA (Damn Vulnerable Web Application)** como parte de la evaluación de la asignatura **TI3034 – Fundamentos de Seguridad de la Información**.

La auditoría ya fue desarrollada completamente y toda la información técnica, análisis, evidencias y conclusiones se encuentran almacenadas dentro del proyecto.

La aplicación React **no debe generar el informe**, únicamente debe consumirlo y presentarlo de forma visual.

---

# 3. Fuente Única de Verdad (Single Source of Truth)

## Regla más importante del proyecto

La carpeta:

```text
docs_gonmau/
```

constituye la **única fuente autorizada de información** para construir la aplicación.

Todo el contenido mostrado al usuario debe provenir exclusivamente de los archivos existentes dentro de esa carpeta.

Bajo ninguna circunstancia se debe:

* modificar archivos Markdown;
* reescribir el contenido;
* resumir información;
* completar información faltante;
* corregir redacción;
* agregar explicaciones propias;
* cambiar tablas;
* cambiar títulos;
* cambiar nombres;
* cambiar puntuaciones CVSS;
* modificar conclusiones;
* modificar referencias;
* alterar el orden del contenido sin un motivo relacionado con la presentación visual.

La información almacenada en `docs_gonmau` debe considerarse la **verdad absoluta del proyecto**.

Si existe alguna diferencia entre lo esperado y el contenido de los Markdown, siempre prevalece el contenido de los Markdown.

---

## Archivos del informe

Dentro de `docs_gonmau` existen nueve archivos Markdown correspondientes a las distintas secciones del informe.

Cada uno representa una sección independiente que debe visualizarse mediante componentes React.

Ejemplo de organización:

* Resumen
* Inyección SQL
* XSS
* Inyección de comandos
* Activos
* Matriz de riesgo
* Controles
* Recuperación
* Bitácora de uso de IA

La aplicación debe detectar estos archivos y utilizarlos como fuente del contenido mostrado.

---

## Imágenes del informe

La carpeta:

```text
docs_gonmau/img_gonmau/
```

contiene todas las imágenes oficiales utilizadas en el informe.

Estas imágenes forman parte del contenido del documento y deben mantenerse sin modificaciones.

No deben:

* reemplazarse;
* editarse;
* recrearse;
* comprimirse;
* mejorarse mediante IA;
* sustituirse por imágenes de Internet.

La aplicación debe mostrar exactamente esas imágenes cuando sean referenciadas desde los archivos Markdown.

---

## Principio de integridad documental

Toda modificación visual debe limitarse exclusivamente a la forma de presentar la información.

Se permite:

* mejorar la distribución visual;
* utilizar tarjetas;
* utilizar acordeones;
* utilizar pestañas;
* utilizar columnas;
* utilizar componentes reutilizables;
* mejorar la navegación;
* mejorar la jerarquía tipográfica;
* mejorar el espaciado;
* mejorar la experiencia de usuario.

No se permite modificar el contenido documental.

---

# 4. Restricciones Obligatorias

Todas las siguientes reglas son obligatorias.

Su incumplimiento se considera un error del desarrollo.

## Restricción 1

No modificar ningún archivo dentro de:

```text
docs_gonmau/
```

---

## Restricción 2

No modificar ninguna imagen dentro de:

```text
docs_gonmau/img_gonmau/
```

---

## Restricción 3

No duplicar el contenido de los Markdown dentro de componentes JSX si puede obtenerse directamente desde los archivos `.md`.

Siempre que sea técnicamente posible, el contenido debe renderizarse desde los archivos Markdown.

---

## Restricción 4

No utilizar texto "hardcodeado" para representar el informe.

Todo contenido perteneciente al informe debe provenir de los archivos Markdown.

Las únicas excepciones son elementos propios de la interfaz, por ejemplo:

* botones;
* menús;
* etiquetas de navegación;
* mensajes del sistema;
* footer;
* textos de ayuda.

---

## Restricción 5

No eliminar archivos existentes.

No renombrarlos.

No reorganizar la carpeta `docs_gonmau`.

La aplicación debe adaptarse a la estructura existente del proyecto.

---

## Restricción 6

No instalar dependencias innecesarias.

Cada nueva dependencia debe justificarse por aportar una funcionalidad concreta que no pueda implementarse razonablemente con React, Vite o Tailwind CSS.

Priorizar una aplicación ligera, mantenible y fácil de desplegar.

---

## Restricción 7

El proyecto debe funcionar correctamente ejecutando únicamente:

```bash
npm install
npm run dev
```

No deben requerirse pasos manuales adicionales para iniciar la aplicación.

---

## Restricción 8

Toda decisión técnica importante (por ejemplo, incorporación de una dependencia o elección de una arquitectura específica) debe quedar documentada brevemente mediante comentarios o documentación técnica, explicando el motivo de dicha decisión.
# 5. Arquitectura Esperada

## Objetivo de la arquitectura

La arquitectura debe priorizar:

* mantenibilidad;
* reutilización de componentes;
* escalabilidad;
* separación de responsabilidades;
* simplicidad.

El proyecto debe ser fácil de comprender por otro desarrollador sin necesidad de modificar el contenido del informe.

---

## Stack tecnológico

La aplicación debe utilizar exclusivamente tecnologías modernas y ampliamente soportadas.

Tecnologías principales:

* React
* Vite
* Tailwind CSS

Se permite incorporar librerías adicionales únicamente cuando aporten una funcionalidad concreta y justificada (por ejemplo, renderizado de Markdown, generación del PDF o creación del código QR).

---

## Organización del proyecto

Se espera una estructura similar a la siguiente (puede ajustarse si existe una justificación técnica clara):

```text
auditoria_gonmau/
│
├── docs_gonmau/
│   ├── *.md
│   └── img_gonmau/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── markdown/
│   │   ├── common/
│   │   └── sections/
│   │
│   ├── hooks/
│   ├── utils/
│   ├── services/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

La estructura puede variar, pero debe mantener una organización clara y coherente.

---

## Componentes reutilizables

Evitar componentes excesivamente grandes.

Siempre que sea posible, dividir la interfaz en componentes pequeños y reutilizables.

Ejemplos:

* Navbar
* Sidebar
* Footer
* ThemeToggle
* MarkdownRenderer
* SectionCard
* TableRenderer
* ImageViewer
* ScrollToTop
* PDFButton
* QRCodeCard
* HeatMap
* SectionHeader

No crear componentes duplicados para resolver el mismo problema.

---

## Separación de responsabilidades

Cada componente debe tener una única responsabilidad.

Ejemplos:

El componente que renderiza Markdown no debe encargarse de:

* generar PDF;
* controlar el tema oscuro;
* administrar la navegación;
* gestionar el menú lateral.

Cada responsabilidad debe estar correctamente separada.

---

## Renderizado del informe

La aplicación debe construirse alrededor de un sistema capaz de mostrar los archivos Markdown.

La lógica de presentación debe estar desacoplada del contenido.

Idealmente:

Markdown

↓

Procesamiento

↓

Componentes React

↓

Interfaz de usuario

Esto permitirá que futuras modificaciones del informe solo requieran actualizar los archivos Markdown.

---

## Estado global

Utilizar estado global únicamente cuando sea realmente necesario.

Ejemplos apropiados:

* modo claro / oscuro;
* menú lateral;
* preferencias visuales.

Evitar complejidad innecesaria.

Si React Context es suficiente, no incorporar gestores de estado externos.

---

# 6. Requisitos Funcionales

La aplicación debe implementar como mínimo las siguientes funcionalidades.

---

## RF-01 – Visualización del informe

Mostrar todas las secciones del informe.

Cada sección debe visualizarse correctamente utilizando el contenido de los archivos Markdown.

---

## RF-02 – Navegación

El usuario debe poder desplazarse fácilmente entre todas las secciones.

Se recomienda una navegación lateral fija o una barra superior fija.

La navegación debe:

* indicar la sección actual;
* permitir desplazamiento automático (scroll suave);
* facilitar el acceso rápido a cualquier apartado.

---

## RF-03 – Índice del informe

La aplicación debe incluir un índice general del informe.

Desde este índice el usuario debe poder acceder directamente a cualquier sección.

Idealmente el índice debe permanecer accesible durante la navegación.

---

## RF-04 – Renderizado de imágenes

Todas las imágenes referenciadas desde los Markdown deben mostrarse correctamente.

Las imágenes deben:

* mantener su calidad;
* adaptarse al tamaño de pantalla;
* poder ampliarse si resulta conveniente para mejorar la lectura.

---

## RF-05 – Modo claro / oscuro

Incorporar un selector para alternar entre:

* modo claro;
* modo oscuro.

El cambio debe afectar toda la interfaz de forma consistente.

La preferencia del usuario debería conservarse entre sesiones utilizando almacenamiento local cuando sea apropiado.

---

## RF-06 – Descarga del informe en PDF

Incorporar un botón que permita descargar un PDF del contenido mostrado por la aplicación.

Este PDF debe generarse a partir del contenido actualmente renderizado.

No debe construirse un documento independiente.

No debe utilizar información diferente a la mostrada en pantalla.

---

## RF-07 – Código QR

Mostrar un código QR que permita abrir la aplicación desde un dispositivo móvil.

El componente debe ser discreto y ubicarse preferentemente en el footer o en una sección de información del proyecto.

El QR debe apuntar a la URL pública del proyecto una vez desplegado.

Durante el desarrollo puede utilizarse un valor configurable que posteriormente sea reemplazazado por la URL definitiva.

---

## RF-08 – Footer

La aplicación debe incluir un footer visible en todas las páginas.

Debe contener, al menos:

* nombre del proyecto;
* asignatura;
* institución;
* nombre del estudiante;
* carrera;
* enlace al repositorio de GitHub;
* año correspondiente.

Información del autor:

**Mauro Gonzalez Soto**

Estudiante de Ingeniería en Informática

INACAP

Repositorio:

https://github.com/Koritz14

El diseño debe ser limpio, profesional y consistente con el resto de la aplicación.

---

## RF-09 – Diseño Responsive

Toda la aplicación debe adaptarse correctamente a:

* computadores;
* notebooks;
* tablets;
* teléfonos móviles.

No deben existir:

* desbordamientos horizontales;
* texto cortado;
* botones inaccesibles;
* tablas ilegibles;
* imágenes fuera de pantalla.

La experiencia de usuario debe mantenerse consistente independientemente del tamaño del dispositivo.
# 7. Requisitos No Funcionales

Los siguientes requisitos definen los estándares mínimos de calidad que debe cumplir la aplicación. No agregan funcionalidades nuevas, pero establecen cómo debe implementarse el proyecto.

---

## RNF-01 – Legibilidad

El informe contiene una cantidad importante de información técnica.

La aplicación debe facilitar la lectura mediante:

* buena jerarquía visual;
* títulos claramente diferenciados;
* subtítulos consistentes;
* separación adecuada entre secciones;
* espaciado uniforme;
* longitud de línea confortable para lectura.

Evitar presentar grandes bloques continuos de texto ("muro de texto").

Siempre que sea posible, utilizar tarjetas, contenedores o elementos visuales que ayuden a organizar la información sin alterar el contenido original.

---

## RNF-02 – Diseño visual

La apariencia debe transmitir la sensación de un informe profesional.

Se espera un diseño:

* moderno;
* limpio;
* minimalista;
* sobrio;
* consistente.

Evitar:

* colores excesivamente llamativos;
* animaciones invasivas;
* degradados innecesarios;
* efectos visuales exagerados;
* elementos decorativos que distraigan del contenido.

El protagonista debe ser el informe.

---

## RNF-03 – Tailwind CSS

Toda la interfaz debe desarrollarse utilizando **Tailwind CSS**.

Priorizar clases utilitarias antes que hojas CSS tradicionales.

Solo crear CSS personalizado cuando Tailwind no permita implementar correctamente una funcionalidad específica.

---

## RNF-04 – Accesibilidad

La aplicación debe seguir buenas prácticas básicas de accesibilidad.

Como mínimo:

* contraste suficiente entre texto y fondo;
* botones claramente identificables;
* navegación mediante teclado cuando sea posible;
* etiquetas descriptivas;
* textos alternativos (`alt`) para imágenes;
* estados de foco visibles.

---

## RNF-05 – Responsive

La aplicación debe ofrecer una experiencia consistente en:

* escritorio;
* portátil;
* tablet;
* teléfono móvil.

No debe depender de un tamaño específico de pantalla.

Todos los componentes deben adaptarse correctamente.

---

## RNF-06 – Rendimiento

La aplicación debe cargar rápidamente.

Evitar:

* renderizados innecesarios;
* componentes excesivamente grandes;
* dependencias pesadas sin justificación;
* duplicación de información.

Mantener el proyecto ligero y mantenible.

---

## RNF-07 – Mantenibilidad

El código debe ser fácil de comprender.

Se espera:

* componentes pequeños;
* nombres descriptivos;
* organización coherente;
* separación clara de responsabilidades;
* reutilización cuando sea posible.

---

## RNF-08 – Escalabilidad

La arquitectura debe permitir incorporar nuevas secciones del informe sin necesidad de modificar gran parte de la aplicación.

Idealmente, agregar un nuevo archivo Markdown debería requerir cambios mínimos.

---

## RNF-09 – Consistencia visual

Todos los componentes deben compartir un mismo lenguaje de diseño.

Mantener consistencia en:

* colores;
* márgenes;
* espaciados;
* tipografía;
* iconografía;
* botones;
* tarjetas;
* tablas;
* títulos.

No mezclar estilos diferentes dentro del mismo proyecto.

---

## RNF-10 – Animaciones

Las animaciones deben ser discretas.

Ejemplos aceptables:

* aparición suave (fade);
* desplazamiento leve;
* transición de colores;
* animación del menú.

Evitar animaciones largas o que distraigan de la lectura.

---

# 8. Diseño Visual

## Objetivo

El sitio debe sentirse como una aplicación profesional utilizada para presentar un informe técnico.

Debe ser agradable de recorrer incluso cuando el documento sea extenso.

El usuario nunca debe sentir que está leyendo un único bloque gigante de texto.

---

## Estilo visual

Se busca una interfaz inspirada en dashboards modernos y documentación técnica.

Características esperadas:

* diseño minimalista;
* predominio de espacios en blanco;
* tarjetas bien delimitadas;
* colores neutros;
* excelente legibilidad;
* jerarquía visual clara.

No debe parecer una plantilla genérica ni una presentación tipo diapositivas.

---

## Tipografía

Utilizar una tipografía limpia y de fácil lectura.

Debe existir una clara diferencia visual entre:

* título principal;
* títulos de sección;
* subtítulos;
* texto normal;
* tablas;
* código;
* notas.

---

## Colores

Utilizar una paleta sobria.

Ejemplos:

* grises;
* blancos;
* tonos oscuros para modo nocturno;
* colores de acento discretos.

Los colores deben utilizarse principalmente para:

* navegación;
* botones;
* resaltados;
* mapa de calor;
* indicadores.

No abusar del color.

---

## Tarjetas

Siempre que sea apropiado, organizar el contenido dentro de tarjetas.

Las tarjetas deben:

* separar visualmente las secciones;
* facilitar la lectura;
* mantener un diseño uniforme.

---

## Tablas

Las tablas del informe deben conservar su contenido original.

Visualmente deben:

* ser responsivas;
* permitir desplazamiento horizontal cuando sea necesario;
* mantener una buena legibilidad.

---

## Imágenes

Las imágenes del informe deben:

* visualizarse completas;
* mantener su resolución;
* adaptarse al ancho disponible;
* poder ampliarse si mejora la experiencia del usuario.

No recortarlas automáticamente.

---

## Mapa de calor

La sección correspondiente a la matriz de riesgo debe destacar visualmente.

El mapa de calor debe ser un componente React independiente.

Debe representar claramente:

* probabilidad;
* impacto;
* ubicación de las vulnerabilidades.

La representación visual debe ser clara, intuitiva y consistente con el resto del diseño.

Si el informe ya contiene una tabla de matriz, utilizar esa información como base para construir la visualización sin alterar los datos.

---

## Navegación

La navegación debe permanecer accesible durante toda la lectura.

Puede implementarse mediante:

* barra lateral fija;
* barra superior fija;
* combinación de ambas.

Debe indicar visualmente la sección activa.

El desplazamiento entre secciones debe utilizar **scroll suave**.

---

## Experiencia de lectura

El usuario debe poder leer el informe de principio a fin sin sensación de desorden.

Cada sección debe sentirse claramente delimitada.

Los cambios entre apartados deben ser naturales y visualmente agradables.

La aplicación debe priorizar siempre la comprensión del contenido por sobre los efectos visuales.

# 9. Estructura de Componentes

## Objetivo

La aplicación debe construirse utilizando componentes reutilizables y desacoplados.

Cada componente debe tener una única responsabilidad y poder reutilizarse cuando sea apropiado.

No crear componentes excesivamente grandes que concentren múltiples funcionalidades.

---

## Componentes principales

La siguiente estructura es una referencia esperada. Puede modificarse si existe una justificación técnica clara, siempre manteniendo una arquitectura limpia y modular.

```text
App
│
├── Layout
│   ├── Navbar
│   ├── Sidebar
│   ├── MainContent
│   └── Footer
│
├── ThemeProvider
│
├── ScrollToTop
│
├── MarkdownRenderer
│
├── SectionContainer
│
├── SectionHeader
│
├── MarkdownImage
│
├── TableRenderer
│
├── HeatMap
│
├── PDFDownloadButton
│
├── QRCodeCard
│
└── NavigationMenu
```

Esta estructura no es obligatoria, pero representa el nivel de modularidad esperado.

---

## Layout principal

El componente principal debe encargarse únicamente de organizar la interfaz.

Debe contener:

* navegación;
* contenido principal;
* footer;
* selector de tema.

No debe contener lógica específica del informe.

---

## Renderizador Markdown

Debe existir un componente encargado exclusivamente de renderizar archivos Markdown.

Este componente debe:

* cargar el archivo;
* interpretar Markdown;
* mostrar correctamente:

  * títulos;
  * tablas;
  * listas;
  * imágenes;
  * bloques de código;
  * citas;
  * enlaces.

No debe modificar el contenido.

---

## Contenedor de sección

Cada uno de los nueve archivos Markdown debe visualizarse dentro de un contenedor reutilizable.

Este contenedor debe proporcionar:

* separación visual;
* título;
* espaciado uniforme;
* comportamiento consistente.

No debe alterar el contenido recibido.

---

## Componente HeatMap

La sección de matriz de riesgo merece un tratamiento especial.

Debe implementarse como un componente independiente.

Debe utilizar exclusivamente los datos presentes en el informe.

No debe inventar probabilidades, impactos ni posiciones.

---

## Footer

Debe ser un componente independiente.

Debe contener:

### Información del proyecto

* Auditoría de Seguridad Web
* TI3034 – Fundamentos de Seguridad de la Información
* INACAP

### Información del autor

* Mauro Gonzalez Soto
* Estudiante de Ingeniería en Informática
* GitHub:
  https://github.com/Koritz14

### Información adicional

* Año del proyecto
* Botón para descargar PDF
* Código QR
* Enlace al repositorio

---

## Botón PDF

Debe implementarse como un componente reutilizable.

Debe generar un PDF utilizando el contenido actualmente mostrado por la aplicación.

No debe crear un documento diferente.

No debe utilizar información externa.

---

## Código QR

Debe implementarse como un componente independiente.

La URL debe ser fácilmente configurable para reemplazar la dirección local por la URL de producción antes del despliegue en Vercel.

---

# 10. Flujo de Navegación

## Objetivo

La navegación debe permitir recorrer un informe extenso de manera rápida, intuitiva y sin perder el contexto.

---

## Página principal

Al abrir la aplicación el usuario debe visualizar:

* título del proyecto;
* breve presentación;
* índice del informe;
* acceso directo a todas las secciones.

La primera impresión debe comunicar inmediatamente que se trata de un informe técnico profesional.

---

## Navegación entre secciones

El usuario debe poder desplazarse entre secciones mediante:

* menú lateral fijo; o
* barra superior fija.

La navegación debe utilizar desplazamiento suave (*smooth scrolling*).

Cada opción del menú debe llevar directamente a la sección correspondiente.

---

## Indicador de sección activa

Durante el desplazamiento debe resaltarse visualmente la sección actualmente visible.

Esto facilita que el usuario sepa en qué parte del informe se encuentra.

---

## Navegación en dispositivos móviles

En pantallas pequeñas el menú debe adaptarse correctamente.

Ejemplos aceptables:

* menú hamburguesa;
* panel lateral desplegable;
* navegación compacta.

Debe mantenerse completamente funcional.

---

## Retorno al inicio

Incorporar un botón que permita volver al inicio del informe.

Este botón debe aparecer únicamente cuando resulte útil (por ejemplo, después de cierto nivel de desplazamiento).

La transición debe ser suave.

---

# 11. Plan de Desarrollo

El desarrollo debe realizarse por etapas.

Cada etapa debe finalizar con una aplicación completamente funcional antes de continuar con la siguiente.

No avanzar a una nueva fase mientras la anterior presente errores.

---

## Fase 1 — Preparación del proyecto

Objetivos:

* revisar la estructura existente;
* identificar los archivos Markdown;
* identificar las imágenes;
* instalar únicamente las dependencias necesarias;
* configurar Tailwind CSS;
* verificar que el proyecto compile correctamente.

Resultado esperado:

Una base funcional sin errores.

---

## Fase 2 — Arquitectura

Objetivos:

* crear la estructura de carpetas;
* crear los componentes base;
* organizar el layout;
* preparar la navegación;
* preparar el sistema de temas.

Resultado esperado:

Arquitectura limpia y modular lista para recibir contenido.

---

## Fase 3 — Renderizado del informe

Objetivos:

* implementar el renderizador Markdown;
* mostrar correctamente:

  * texto;
  * listas;
  * tablas;
  * imágenes;
  * bloques de código;
  * enlaces.

Resultado esperado:

Todo el contenido del informe visible sin modificaciones.

---

## Fase 4 — Navegación

Objetivos:

* construir el índice;
* implementar la barra lateral o superior;
* habilitar el desplazamiento suave;
* indicar la sección activa.

Resultado esperado:

Navegación cómoda entre todas las secciones.

---

## Fase 5 — Diseño visual

Objetivos:

* aplicar Tailwind CSS;
* mejorar tipografía;
* organizar tarjetas;
* mejorar espaciado;
* optimizar colores;
* adaptar modo claro y oscuro.

Resultado esperado:

Interfaz moderna, profesional y agradable de leer.

---

## Fase 6 — Componentes especiales

Objetivos:

* implementar el mapa de calor;
* implementar el botón de descarga en PDF;
* implementar el código QR;
* completar el footer.

Resultado esperado:

Todas las funcionalidades adicionales operativas.

---

## Fase 7 — Responsive

Objetivos:

* verificar escritorio;
* verificar tablet;
* verificar teléfono móvil;
* corregir desbordamientos;
* ajustar tablas e imágenes.

Resultado esperado:

Aplicación completamente adaptable a cualquier dispositivo.

---

## Fase 8 — Optimización y revisión final

Objetivos:

* eliminar código duplicado;
* mejorar reutilización;
* revisar accesibilidad;
* optimizar rendimiento;
* verificar que no exista contenido inventado;
* confirmar que toda la información proviene de `docs_gonmau`;
* verificar que ningún archivo del informe haya sido modificado.

Resultado esperado:

Una aplicación lista para desplegar en Vercel, estable, mantenible y alineada con los requisitos del proyecto.

---

# 12. Criterios de Finalización

El proyecto solo podrá considerarse terminado cuando se cumplan **todos** los siguientes criterios:

* La aplicación compila correctamente con `npm install` y `npm run dev`.
* No se modificó ningún archivo dentro de `docs_gonmau`.
* No se modificó ninguna imagen dentro de `docs_gonmau/img_gonmau`.
* Todo el contenido mostrado proviene exclusivamente de los archivos Markdown.
* No existen datos inventados, resumidos ni reinterpretados.
* La interfaz utiliza Tailwind CSS.
* El diseño es limpio, profesional y completamente responsive.
* La navegación permite acceder fácilmente a todas las secciones.
* Existe un índice del informe.
* Se implementó modo claro y oscuro.
* El botón de descarga genera un PDF con el contenido mostrado en la aplicación.
* Se muestra un código QR configurable para acceder a la aplicación desde un dispositivo móvil.
* El footer contiene la información del proyecto y del autor.
* El código es modular, reutilizable y fácil de mantener.
* Las decisiones técnicas relevantes quedaron documentadas.
* La aplicación está preparada para desplegarse en Vercel sin cambios adicionales.

## Instrucción final

Antes de implementar cualquier funcionalidad, analiza la estructura completa del proyecto y verifica que todas las decisiones de diseño respeten este documento.

Si alguna decisión técnica entra en conflicto con estas especificaciones, **estas especificaciones tienen prioridad**. La aplicación debe adaptarse al proyecto existente, nunca al revés.

Cada vez que inicies una nueva conversación, debes asumir que no existe contexto previo. Antes de realizar cualquier modificación, vuelve a leer completamente este documento y analiza el estado actual del proyecto para determinar qué fases ya están implementadas. Nunca supongas que recuerdas conversaciones anteriores.