# 3. Cross-Site Scripting (XSS)

## 3.1 Descripción de la Vulnerabilidad

**Cross-Site Scripting (XSS)** es una vulnerabilidad de aplicaciones web que permite a un atacante inyectar código ejecutable, generalmente JavaScript, dentro de páginas web visualizadas por otros usuarios.

Esta vulnerabilidad ocurre cuando una aplicación incorpora datos proporcionados por el usuario en la respuesta HTML sin realizar una validación o sanitización adecuada. Como resultado, el navegador interpreta el contenido malicioso como código legítimo y lo ejecuta dentro del contexto del sitio web.

XSS es una de las vulnerabilidades más comunes en aplicaciones web y se encuentra incluida dentro de las principales categorías de riesgo identificadas por OWASP.

En el contexto de una empresa Fintech como PagaFácil, una vulnerabilidad XSS podría permitir el robo de sesiones autenticadas, la captura de credenciales, la manipulación de transacciones y la ejecución de acciones fraudulentas en nombre de usuarios legítimos.

---

## 3.2 Evidencia de la Vulnerabilidad

Durante la auditoría se evaluó el módulo vulnerable de Cross-Site Scripting disponible en DVWA.

Se ingresó el siguiente payload de prueba:

```html id="px1x6u"
<script>alert('XSS')</script>
```

El objetivo del payload es verificar si la aplicación interpreta y ejecuta código JavaScript enviado por el usuario.

### Evidencia 1 – Ejecución de Código JavaScript

![alt text](img_gonmau/sql_injection.png)

**Figura 2.** Ejecución exitosa de un ataque Cross-Site Scripting (XSS). La aplicación procesa el código JavaScript inyectado y el navegador muestra una ventana emergente con el mensaje "XSS", demostrando que el script fue ejecutado correctamente.

### Resultado Obtenido

La aplicación generó una ventana emergente con las siguientes características:

| Elemento          | Valor                  |
| ----------------- | ---------------------- |
| Origen            | dvwa-dnwe.onrender.com |
| Mensaje mostrado  | XSS                    |
| Acción disponible | Aceptar                |

La aparición de esta alerta confirma que el navegador ejecutó el código JavaScript inyectado por el usuario.

---

## 3.3 Explicación Técnica del Ataque

Una aplicación vulnerable puede incorporar directamente los datos ingresados por el usuario dentro del código HTML generado.

Por ejemplo:

```html id="5ehfja"
<p>Bienvenido, NOMBRE_USUARIO</p>
```

Si el usuario introduce:

```html id="r6s3di"
<script>alert('XSS')</script>
```

La aplicación podría generar la siguiente respuesta:

```html id="xwot29"
<p>Bienvenido,
<script>alert('XSS')</script>
</p>
```

Cuando el navegador interpreta esta respuesta, detecta la etiqueta `<script>` y ejecuta el código JavaScript contenido en ella.

En este caso se utilizó una función simple (`alert()`) con fines demostrativos. Sin embargo, un atacante real podría ejecutar scripts mucho más peligrosos para capturar información sensible o manipular la interacción del usuario con el sistema.

---

## 3.4 Análisis de Funcionamiento

La explotación fue posible debido a que la aplicación presenta varias deficiencias de seguridad.

### Falta de Sanitización de Salidas

La aplicación devuelve información proporcionada por el usuario sin eliminar etiquetas HTML o código JavaScript potencialmente peligroso.

### Validación Insuficiente de Entradas

No existen controles adecuados para detectar y bloquear contenido activo como scripts.

### Confianza Excesiva en el Navegador

La aplicación asume que los datos recibidos son seguros y los envía directamente al navegador para su procesamiento.

### Ausencia de Políticas de Seguridad

No se observan mecanismos que restrinjan la ejecución de scripts potencialmente peligrosos dentro de la aplicación.

Estas condiciones permiten que código arbitrario sea ejecutado en el navegador de los usuarios.

---

## 3.5 Impacto sobre Usuarios y Activos de Información

Aunque el ejemplo mostrado utiliza una ventana emergente inofensiva, una explotación real podría generar consecuencias significativas para PagaFácil.

### Credenciales de Usuarios

Un atacante podría crear formularios falsos para capturar nombres de usuario y contraseñas.

### Cookies de Sesión

Las sesiones autenticadas podrían ser robadas y utilizadas para acceder a cuentas legítimas.

### Información Financiera

Los usuarios podrían visualizar información manipulada o ser redirigidos a sitios fraudulentos.

### Historial de Transacciones

La información mostrada al usuario podría ser alterada para ocultar operaciones o engañar a las víctimas.

### Reputación Corporativa

La explotación exitosa de XSS puede afectar la confianza de los clientes en la plataforma financiera.

---

## 3.6 Evaluación CVSS

La vulnerabilidad fue evaluada utilizando el estándar CVSS v3.1.

| Métrica                  | Valor        |
| ------------------------ | ------------ |
| Attack Vector (AV)       | Network (N)  |
| Attack Complexity (AC)   | Low (L)      |
| Privileges Required (PR) | None (N)     |
| User Interaction (UI)    | Required (R) |
| Scope (S)                | Changed (C)  |
| Confidentiality (C)      | High (H)     |
| Integrity (I)            | Low (L)      |
| Availability (A)         | None (N)     |

### Puntaje CVSS Estimado

**6.8 / 10 — Medio-Alto (Medium)**

### Justificación

La explotación requiere que un usuario interactúe con contenido manipulado por el atacante. Sin embargo, una vez ejecutado el código malicioso, es posible comprometer sesiones autenticadas, capturar información sensible y realizar acciones no autorizadas dentro de la aplicación.

---

## 3.7 Medidas de Prevención

### Escape de Salida (Output Encoding)

Todo dato ingresado por usuarios debe codificarse antes de ser mostrado en el navegador.

Ejemplo:

```php id="ov8nmt"
echo htmlspecialchars(
    $comentario,
    ENT_QUOTES,
    'UTF-8'
);
```

### Validación de Entradas

Filtrar caracteres y patrones potencialmente peligrosos antes de procesarlos.

### Sanitización de Contenido

Eliminar etiquetas HTML y scripts cuando no sean estrictamente necesarios.

### Desarrollo Seguro

Aplicar prácticas de codificación segura y revisiones de código enfocadas en vulnerabilidades XSS.

### Frameworks Seguros

Utilizar frameworks modernos que implementen protección automática contra XSS.

---

## 3.8 Controles de Mitigación

### Content Security Policy (CSP)

Implementar políticas CSP para restringir la ejecución de scripts no autorizados.

**Marco relacionado:** OWASP, NIST CSF.

### Cookies Seguras

Configurar atributos:

* HttpOnly
* Secure
* SameSite

Esto dificulta el robo de sesiones mediante JavaScript.

**Marco relacionado:** OWASP ASVS.

### Web Application Firewall (WAF)

Detectar y bloquear intentos conocidos de explotación XSS.

**Marco relacionado:** OWASP y CIS Controls.

### Monitoreo de Actividades Sospechosas

Registrar eventos relacionados con inyecciones de scripts y comportamientos anómalos.

**Marco relacionado:** NIST CSF y CIS Controls.

### Capacitación de Usuarios

Capacitar a los usuarios para identificar intentos de phishing y enlaces sospechosos.

**Marco relacionado:** NIST Cybersecurity Framework.

---

## 3.9 Conclusión

La vulnerabilidad Cross-Site Scripting identificada durante la auditoría demuestra que la aplicación permite la ejecución de código JavaScript proporcionado por usuarios sin aplicar controles adecuados de validación y sanitización.

Si bien la prueba realizada utilizó una alerta simple para demostrar la ejecución de código, un atacante podría emplear técnicas más avanzadas para robar sesiones, capturar credenciales o manipular información financiera presentada a los clientes.

La implementación de mecanismos de escape de salida, Content Security Policy, validación de entradas y controles defensivos adicionales resulta fundamental para proteger los activos de información de PagaFácil y reducir la superficie de ataque de la aplicación.
