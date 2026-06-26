# reflecciones y correcciones
Se corrigio los siguientes errores en la generacion del informe:

1.  se corrigio un error de la IA donde califico el puntaje CVSS 6.8 como riesgo **medio-alto**, cuando la especificacion tecnica de CVSS especifica que el rango 4.0-6.9 es estrictamente **medio** 

2. 
# prompts (ChatGPT)
## 1. handoff con el contexto de la evaluacion
Genera un archivo markdown tipo handoff para entregar a la IA con el contexto completo de esta evaluacion. Antes de responder, hazme tres preguntas técnicas o estratégicas para asegurarte de que tu respuesta sea exactamente lo que necesito.
Repite este proceso hasta estar 99 % seguro de que puedes ofrecer una solución precisa y ajustada al contexto del problema informático.

## 2. Analisis del caso y generacion del informe
Actúa como un Auditor de Seguridad de la Información y elabora un informe académico sobre una auditoría realizada a la empresa ficticia PagaFácil (Fintech), utilizando DVWA como entorno de pruebas. Desarrolla un resumen ejecutivo y analiza las vulnerabilidades de Inyección SQL, Cross-Site Scripting (XSS) e Inyección de Comandos, incluyendo descripción técnica, evidencias, impacto sobre el negocio, evaluación CVSS, medidas de prevención y controles de mitigación. Además, identifica los activos críticos de información, evalúa los riesgos mediante una matriz y mapa de calor, prioriza las vulnerabilidades y propone mejoras tecnológicas junto con un Plan de Recuperación ante Desastres (DR), manteniendo un enfoque técnico, académico y profesional.

## 3. Evaluacion/correccion del informe
Con el informe ya completo, ahora asumiendo el rol de un profesor de ingenieria en informatica y ciberseguridad exigente evalua segun la rubrica este informe.

## 4. Pre generacion de instrucciones a copilot para crear aplicacion web en react
el informe esta completo, ahora paso a la fase de generar la aplicacion web en react del informe, antes de empesar quiero saber que cosas deberia tener en cuenta para generar las instrucciones a darle a copilot para que cree la aplicacion web.

Antes de responder, hazme tres preguntas técnicas o estratégicas para asegurarte de que tu respuesta sea exactamente lo que necesito.

Repite este proceso hasta estar 99 % seguro de que puedes ofrecer una solución precisa y ajustada al contexto del problema informático.

# prompts (Copilot)
# 1. Inicio de creacion aplicacion web en react
Antes de comenzar el desarrollo, lee completamente el archivo `COPILOT_INSTRUCCIONES.md`. Analízalo como la especificación técnica del proyecto. No implementes nada todavía. Resume tu comprensión de la arquitectura, restricciones, objetivos y fases de desarrollo. Si detectas alguna ambigüedad o decisión técnica que deba resolverse antes de comenzar, indícalo. 

## 2. Desarrollo apliacion
Lee primero `COPILOT_INSTRUCCIONES.md`.

Analiza el estado actual del proyecto.

Verifica qué fases ya están implementadas.

Comienza únicamente con la Fase 1.

No modifiques funcionalidades de fases anteriores salvo que exista un error que impida continuar.

*Esto se repitio por cada una de las 8 fases*

## 3. Arreglar problemas de visualizacion
Existen algunos problemas con la navegación actual. El informe completo se muestra en una sola página, lo que hace que la aplicación sea demasiado extensa y obligue a realizar mucho desplazamiento. En su lugar, modifica la navegación para que al seleccionar una sección desde el índice se muestre únicamente ese contenido, funcionando de manera similar a una presentación con diapositivas (slides), donde cada sección del informe ocupa una vista independiente.

## 4. Arreglar problemas de indices duplicados
Existe una redundancia en la navegación, ya que actualmente se muestran dos índices. Conserva únicamente el índice ubicado en el lado izquierdo de la pantalla y elimina el otro. Además, haz que este índice permanezca fijo (sticky) mientras el usuario navega, de modo que siempre esté accesible y no sea necesario volver al inicio de la página para cambiar de sección.

## 5. Arreglar problemas de contenido en pagina
Revisa toda la interfaz de la aplicación y elimina cualquier texto o elemento que dé la impresión de que está "en desarrollo" o que funcione como nota informativa sobre la propia aplicación. Ahora que el proyecto está funcional, la interfaz debe verse como un producto terminado. Conserva únicamente la información relevante para el usuario y el contenido del informe, reemplazando o eliminando textos como "Diseño visual mejorado", "Presentación interactiva", "Diapositiva activa" u otros similares que parezcan temporales o de demostración.

