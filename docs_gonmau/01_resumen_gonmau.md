# 1. Resumen Ejecutivo

## 1.1 Introducción

El presente informe documenta los resultados de una auditoría de seguridad de la información realizada al portal de clientes de la empresa ficticia **PagaFácil**, organización perteneciente al sector **Fintech**, dedicada a la administración de billeteras digitales y servicios financieros electrónicos.

PagaFácil gestiona información crítica para la continuidad de su negocio, incluyendo datos personales de clientes, credenciales de autenticación, registros de transacciones financieras, saldos de billeteras digitales y otra información sensible relacionada con operaciones monetarias. Debido a la naturaleza de estos activos, la organización requiere mecanismos de protección robustos que garanticen la confidencialidad, integridad y disponibilidad de la información.

La auditoría fue desarrollada en un entorno controlado utilizando la plataforma **DVWA (Damn Vulnerable Web Application)**, configurada como laboratorio educativo para la identificación, explotación y análisis de vulnerabilidades comunes presentes en aplicaciones web. El objetivo principal fue evaluar los riesgos asociados a debilidades de seguridad que podrían afectar a una organización con características similares a las de PagaFácil.

## 1.2 Objetivos de la Auditoría

La auditoría tuvo como propósito identificar vulnerabilidades presentes en la aplicación, evaluar su impacto potencial sobre los activos de información y determinar el nivel de riesgo que representarían para la organización en un escenario real.

Para ello se analizaron tres categorías de vulnerabilidades ampliamente reconocidas dentro de los principales riesgos de aplicaciones web:

* Inyección SQL (SQL Injection).
* Cross-Site Scripting (XSS).
* Inyección de Comandos del Sistema Operativo (Command Injection).

Adicionalmente, se evaluó la relación entre dichas vulnerabilidades y los activos críticos del negocio, se realizó una valoración de riesgos mediante criterios de probabilidad e impacto, y se propusieron medidas de prevención, mitigación y recuperación alineadas con buenas prácticas internacionales de ciberseguridad.

## 1.3 Principales Hallazgos

Durante la ejecución de la auditoría se identificaron vulnerabilidades que permiten comprometer distintos niveles de la infraestructura tecnológica y de la información administrada por la organización.

La vulnerabilidad de **Inyección SQL** evidenció la posibilidad de manipular consultas realizadas a la base de datos mediante entradas de usuario insuficientemente validadas. Este tipo de ataque podría permitir el acceso no autorizado a información sensible, incluyendo datos de clientes, registros financieros y credenciales de autenticación.

La vulnerabilidad de **Cross-Site Scripting (XSS)** demostró la capacidad de ejecutar código JavaScript malicioso dentro del navegador de los usuarios. Un atacante podría utilizar esta técnica para robar sesiones activas, capturar información confidencial o realizar acciones fraudulentas en nombre de usuarios legítimos.

Por su parte, la vulnerabilidad de **Inyección de Comandos** permitió ejecutar comandos directamente sobre el sistema operativo del servidor a través de parámetros manipulados por un atacante. Este escenario representa uno de los riesgos más críticos identificados, ya que podría facilitar el acceso al servidor, la obtención de información sensible, la alteración de configuraciones o incluso el compromiso total de la infraestructura.

## 1.4 Impacto Potencial para el Negocio

En una organización Fintech como PagaFácil, la explotación exitosa de estas vulnerabilidades podría generar consecuencias significativas tanto a nivel operativo como estratégico.

Entre los principales impactos identificados se encuentran:

* Exposición de datos personales y financieros de clientes.
* Acceso no autorizado a cuentas y billeteras digitales.
* Alteración o eliminación de registros de transacciones.
* Interrupción de servicios críticos para los usuarios.
* Pérdida de confianza por parte de clientes y socios comerciales.
* Daño reputacional y disminución de la credibilidad corporativa.
* Posibles incumplimientos normativos relacionados con la protección de datos y la seguridad de la información.
* Pérdidas económicas derivadas de fraude, sanciones regulatorias o interrupciones operativas.

Considerando que las organizaciones Fintech basan gran parte de su modelo de negocio en la confianza digital y la protección de activos financieros, la materialización de estos riesgos podría afectar significativamente la continuidad operacional de la empresa.

## 1.5 Evaluación General del Riesgo

El análisis realizado permitió concluir que las vulnerabilidades identificadas presentan un nivel de riesgo relevante para la organización.

La Inyección SQL y la Inyección de Comandos fueron clasificadas como riesgos de alta criticidad debido a su potencial para comprometer información sensible y sistemas críticos. Por otro lado, la vulnerabilidad Cross-Site Scripting presenta un impacto considerable sobre los usuarios y la seguridad de las sesiones, manteniendo un nivel de riesgo elevado aunque generalmente inferior al de las anteriores.

La combinación de estas vulnerabilidades evidencia deficiencias relacionadas con la validación de entradas, la sanitización de datos, el control de privilegios y la implementación de mecanismos de seguridad defensivos en la aplicación.

## 1.6 Conclusiones

Los resultados obtenidos demuestran que la aplicación evaluada presenta vulnerabilidades que podrían ser explotadas por atacantes para comprometer la confidencialidad, integridad y disponibilidad de la información.

Las debilidades identificadas reflejan problemas comunes de desarrollo seguro y resaltan la importancia de implementar controles preventivos desde las etapas iniciales del ciclo de vida del software. Asimismo, se evidencia la necesidad de complementar estas medidas mediante mecanismos de monitoreo, detección, respuesta ante incidentes y recuperación operativa.

Finalmente, se concluye que la adopción de prácticas alineadas con marcos de referencia reconocidos, como OWASP, CIS Controls y NIST Cybersecurity Framework, permitiría reducir significativamente la superficie de ataque y fortalecer la postura de seguridad de PagaFácil frente a amenazas actuales y futuras.
