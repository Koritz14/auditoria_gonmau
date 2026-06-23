# 4. Inyección de Comandos (Command Injection)

## 4.1 Descripción de la Vulnerabilidad

La **Inyección de Comandos (Command Injection)** es una vulnerabilidad que permite a un atacante ejecutar comandos arbitrarios del sistema operativo a través de una aplicación web vulnerable.

Este tipo de vulnerabilidad ocurre cuando la aplicación incorpora entradas proporcionadas por el usuario dentro de comandos del sistema sin realizar validaciones o controles adecuados. Como consecuencia, el sistema operativo interpreta parte de la entrada como instrucciones legítimas y las ejecuta con los privilegios del proceso que ejecuta la aplicación.

La inyección de comandos se considera una de las vulnerabilidades más peligrosas en aplicaciones web debido a que puede conducir al compromiso total del servidor, acceso a información sensible, escalamiento de privilegios e interrupción de servicios críticos.

En una organización Fintech como PagaFácil, una vulnerabilidad de este tipo podría permitir a un atacante acceder a servidores de producción, obtener información financiera sensible, manipular sistemas internos o afectar la disponibilidad de los servicios ofrecidos a los clientes.

---

## 4.2 Evidencia de la Vulnerabilidad

Durante la auditoría se evaluó el módulo vulnerable de Command Injection presente en DVWA.

El sistema solicita una dirección IP para realizar una prueba de conectividad mediante el comando `ping`.

Se utilizó el siguiente payload:

```bash id="l8n7q1"
127.0.0.1; cat /etc/passwd
```

El carácter `;` permite finalizar el comando original e iniciar un segundo comando ejecutado directamente por el sistema operativo.

### Evidencia 1 – Ejecución de Comandos Arbitrarios

![docs\_gonmau/img\_gonmau/command\_injection.png](img_gonmau/command_injection.png)

**Figura 3.** Explotación exitosa de una vulnerabilidad de Inyección de Comandos. El atacante introduce una dirección IP válida seguida del comando `cat /etc/passwd`, logrando acceder al contenido de un archivo sensible del sistema operativo Linux.

### Resultados Obtenidos

La aplicación devolvió información correspondiente al archivo:

```text id="b92j3x"
/etc/passwd
```

Entre los registros obtenidos se identificaron cuentas del sistema como:

```text id="s4hm8n"
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
mysql:x:101:101:MySQL Server,,,:/nonexistent:/bin/false
```

La exposición de esta información demuestra que el servidor ejecutó correctamente el comando inyectado por el atacante.

---

## 4.3 Explicación Técnica del Ataque

Una aplicación vulnerable puede construir comandos del sistema de la siguiente manera:

```php id="0dtz1a"
system("ping -c 4 " . $ip);
```

Si el usuario introduce:

```text id="onkv8h"
127.0.0.1
```

El comando ejecutado sería:

```bash id="h6pm3v"
ping -c 4 127.0.0.1
```

Sin embargo, al ingresar:

```text id="2a9bwf"
127.0.0.1; cat /etc/passwd
```

El sistema interpreta:

```bash id="u6x0rg"
ping -c 4 127.0.0.1;
cat /etc/passwd
```

El operador `;` indica al intérprete de comandos que debe ejecutar una segunda instrucción una vez finalizada la primera.

Como resultado, el servidor ejecuta tanto el comando legítimo como el comando malicioso introducido por el atacante.

En este caso se utilizó la lectura del archivo `/etc/passwd` con fines demostrativos, pero un atacante real podría ejecutar comandos mucho más peligrosos dependiendo de los permisos disponibles.

---

## 4.4 Análisis de Funcionamiento

La explotación fue posible debido a múltiples deficiencias de seguridad.

### Ausencia de Validación de Entradas

La aplicación acepta caracteres especiales utilizados por los intérpretes de comandos del sistema operativo.

### Ejecución Directa de Comandos

Los datos proporcionados por el usuario son incorporados directamente dentro de comandos del sistema.

### Falta de Listas Blancas

No existen restricciones que limiten los valores permitidos para el parámetro de entrada.

### Privilegios Excesivos

Si el proceso vulnerable posee permisos elevados, el impacto potencial aumenta significativamente.

### Falta de Separación entre Datos y Comandos

La aplicación no distingue adecuadamente entre información ingresada por el usuario e instrucciones ejecutables.

Estas debilidades facilitan la ejecución de comandos arbitrarios por parte de un atacante remoto.

---

## 4.5 Impacto sobre la Infraestructura y los Activos

La vulnerabilidad identificada representa una amenaza directa para múltiples activos críticos de PagaFácil.

### Infraestructura de Servidores

Un atacante podría obtener información interna del sistema operativo o comprometer completamente el servidor.

### Base de Datos de Clientes

Mediante comandos adicionales podría accederse a archivos de configuración que contengan credenciales de bases de datos.

### Información Financiera

La exposición de datos financieros podría afectar gravemente la confidencialidad de la organización.

### Credenciales y Secretos del Sistema

Podrían obtenerse claves, tokens, configuraciones o información utilizada para la autenticación de servicios.

### Disponibilidad Operacional

La ejecución de comandos destructivos podría provocar interrupciones de servicio o pérdida de información.

### Registros de Auditoría

Los registros podrían ser alterados o eliminados para ocultar actividades maliciosas.

---

## 4.6 Evaluación CVSS

La vulnerabilidad fue evaluada utilizando el estándar CVSS v3.1.

| Métrica                  | Valor       |
| ------------------------ | ----------- |
| Attack Vector (AV)       | Network (N) |
| Attack Complexity (AC)   | Low (L)     |
| Privileges Required (PR) | None (N)    |
| User Interaction (UI)    | None (N)    |
| Scope (S)                | Changed (C) |
| Confidentiality (C)      | High (H)    |
| Integrity (I)            | High (H)    |
| Availability (A)         | High (H)    |

### Puntaje CVSS Estimado

**9.8 / 10 — Crítico (Critical)**

### Justificación

La explotación puede realizarse remotamente sin autenticación y permite la ejecución directa de comandos sobre el servidor. El impacto potencial afecta simultáneamente la confidencialidad, integridad y disponibilidad de los sistemas, pudiendo derivar en el compromiso total de la infraestructura tecnológica.

---

## 4.7 Medidas de Prevención

### Evitar la Ejecución de Comandos del Sistema

Siempre que sea posible, utilizar funciones nativas del lenguaje en lugar de invocar comandos del sistema operativo.

### Validación Estricta de Entradas

Permitir únicamente caracteres válidos mediante listas blancas.

Ejemplo:

```php id="4xuqzt"
if (!filter_var($ip, FILTER_VALIDATE_IP)) {
    exit("IP inválida");
}
```

### Escape Seguro de Argumentos

Utilizar mecanismos que impidan la interpretación de caracteres especiales.

### Principio de Mínimo Privilegio

Las aplicaciones deben ejecutarse con los permisos mínimos necesarios para operar.

### Desarrollo Seguro

Incorporar revisiones de código enfocadas específicamente en la detección de vulnerabilidades de ejecución de comandos.

---

## 4.8 Controles de Mitigación

### Hardening de Servidores

Reducir servicios innecesarios y limitar funcionalidades disponibles para procesos web.

**Marco relacionado:** CIS Controls.

### Segmentación de Red

Separar servidores web, aplicaciones y bases de datos para limitar el movimiento lateral.

**Marco relacionado:** NIST CSF y CIS Controls.

### Monitoreo de Comandos Sospechosos

Implementar herramientas capaces de detectar ejecuciones anómalas dentro del sistema operativo.

**Marco relacionado:** NIST CSF.

### Sistemas EDR y Detección de Intrusiones

Utilizar soluciones que identifiquen comportamientos maliciosos en endpoints y servidores.

**Marco relacionado:** CIS Controls.

### Web Application Firewall (WAF)

Bloquear patrones conocidos asociados a inyección de comandos.

**Marco relacionado:** OWASP y NIST CSF.

### Gestión Centralizada de Logs

Registrar y correlacionar eventos para facilitar la detección temprana y la respuesta ante incidentes.

**Marco relacionado:** CIS Controls y NIST CSF.

---

## 4.9 Conclusión

La vulnerabilidad de Inyección de Comandos identificada durante la auditoría representa el riesgo técnico más significativo encontrado en la aplicación evaluada.

La evidencia obtenida demuestra que el sistema ejecuta comandos proporcionados por el usuario sin aplicar controles adecuados de validación o separación entre datos e instrucciones. Como consecuencia, un atacante podría obtener acceso a información sensible del sistema operativo, comprometer activos críticos e incluso tomar control del servidor.

Para una organización Fintech como PagaFácil, este tipo de vulnerabilidad supone una amenaza directa para la continuidad operacional, la protección de los datos financieros y la confianza de los clientes. La implementación de controles preventivos, mecanismos de monitoreo y medidas de endurecimiento de la infraestructura resulta esencial para reducir este riesgo.
