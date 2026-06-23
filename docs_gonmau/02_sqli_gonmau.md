# 2. Inyección SQL (SQL Injection)

## 2.1 Descripción de la Vulnerabilidad

La **Inyección SQL (SQL Injection)** es una vulnerabilidad de seguridad que ocurre cuando una aplicación incorpora datos proporcionados por el usuario directamente dentro de una consulta SQL sin realizar una validación o sanitización adecuada.

Esta debilidad permite que un atacante modifique la estructura lógica de las consultas ejecutadas por la base de datos, pudiendo acceder, modificar o eliminar información sin autorización.

La vulnerabilidad se encuentra catalogada dentro de los principales riesgos de aplicaciones web identificados por OWASP debido a su alta frecuencia de explotación y al elevado impacto que puede generar sobre la confidencialidad, integridad y disponibilidad de la información.

En una organización Fintech como PagaFácil, una vulnerabilidad de este tipo podría comprometer información altamente sensible, incluyendo datos personales de clientes, credenciales de acceso, historiales de transacciones y registros financieros.

---

## 2.2 Evidencia de la Vulnerabilidad

Durante la auditoría se evaluó el módulo vulnerable de SQL Injection presente en DVWA.

Se utilizó como entrada el siguiente payload:

```sql
' or '1'='1
```

El valor fue ingresado en el campo **User ID** del formulario vulnerable.

### Evidencia 1 – Explotación de SQL Injection

![docs\_gonmau/img\_gonmau/sql\_injection.png](img_gonmau/sql_injection.png)

**Figura 1.** Explotación exitosa de una vulnerabilidad SQL Injection en DVWA. El payload `' or '1'='1` altera la lógica de la consulta SQL y provoca que el sistema retorne múltiples registros de usuarios almacenados en la base de datos.

### Resultados Obtenidos

La aplicación devolvió múltiples registros pertenecientes a distintos usuarios:

| ID ingresado | Nombre | Apellido |
| ------------ | ------ | -------- |
| ' or '1'='1  | admin  | admin    |
| ' or '1'='1  | Gordon | Brown    |
| ' or '1'='1  | Hack   | Me       |
| ' or '1'='1  | Pablo  | Picasso  |
| ' or '1'='1  | Bob    | Smith    |

La respuesta demuestra que el sistema no validó adecuadamente la entrada proporcionada por el usuario y ejecutó una consulta modificada por el atacante.

---

## 2.3 Explicación Técnica del Ataque

Normalmente, una aplicación vulnerable podría construir una consulta similar a la siguiente:

```sql
SELECT first_name, last_name
FROM users
WHERE user_id = '$id';
```

Si el usuario introduce el valor:

```sql
1
```

La consulta resultante sería:

```sql
SELECT first_name, last_name
FROM users
WHERE user_id = '1';
```

Sin embargo, al introducir:

```sql
' or '1'='1
```

La consulta se transforma en:

```sql
SELECT first_name, last_name
FROM users
WHERE user_id = '' OR '1'='1';
```

La expresión:

```sql
'1'='1'
```

siempre es verdadera.

Como consecuencia, la condición completa del `WHERE` también resulta verdadera para todos los registros existentes en la tabla, provocando que la base de datos devuelva la totalidad de los usuarios almacenados.

Este comportamiento demuestra que la entrada del usuario está siendo concatenada directamente dentro de la consulta SQL sin utilizar mecanismos de protección adecuados.

---

## 2.4 Análisis de Explotabilidad

La vulnerabilidad resulta explotable debido a diversas deficiencias de seguridad presentes en la aplicación:

### Ausencia de consultas parametrizadas

La aplicación construye consultas SQL mediante concatenación de cadenas, permitiendo que los datos proporcionados por el usuario sean interpretados como instrucciones SQL válidas.

### Falta de validación de entradas

No existen controles que restrinjan el formato o contenido esperado para el parámetro recibido.

### Ausencia de sanitización

Los caracteres especiales utilizados en SQL (`'`, `"`, `;`, `--`) son procesados directamente por el motor de base de datos.

### Exposición directa de resultados

La aplicación devuelve información obtenida de la base de datos sin aplicar mecanismos adecuados de control de acceso o filtrado.

Estas condiciones facilitan significativamente la explotación de la vulnerabilidad incluso por atacantes con conocimientos técnicos básicos.

---

## 2.5 Impacto sobre los Activos de Información

Para una empresa Fintech como PagaFácil, la explotación de SQL Injection podría afectar activos críticos del negocio.

### Base de datos de clientes

Un atacante podría obtener nombres, correos electrónicos, números de identificación y otra información personal.

### Credenciales de autenticación

Dependiendo de la estructura de la base de datos, podrían exponerse usuarios y contraseñas almacenadas.

### Historial de transacciones

La información financiera de los clientes podría ser consultada, modificada o eliminada.

### Información financiera

Los saldos de billeteras digitales y registros contables podrían verse comprometidos.

### Registros de auditoría

Un atacante con privilegios suficientes podría alterar evidencias utilizadas para investigaciones forenses posteriores.

---

## 2.6 Evaluación CVSS

La vulnerabilidad fue evaluada utilizando el estándar **CVSS v3.1**.

| Métrica                  | Valor         |
| ------------------------ | ------------- |
| Attack Vector (AV)       | Network (N)   |
| Attack Complexity (AC)   | Low (L)       |
| Privileges Required (PR) | None (N)      |
| User Interaction (UI)    | None (N)      |
| Scope (S)                | Unchanged (U) |
| Confidentiality (C)      | High (H)      |
| Integrity (I)            | High (H)      |
| Availability (A)         | Low (L)       |

### Puntaje CVSS Estimado

**8.8 / 10 — Alto (High)**

### Justificación

La explotación puede realizarse remotamente mediante una simple petición web, sin requerir autenticación ni interacción de otros usuarios. Además, permite comprometer información sensible y potencialmente modificar datos críticos para el negocio.

---

## 2.7 Medidas de Prevención

Las siguientes medidas permiten eliminar o reducir significativamente la probabilidad de explotación.

### Consultas Parametrizadas (Prepared Statements)

Separar los datos de las instrucciones SQL evita que la entrada del usuario sea interpretada como código ejecutable.

Ejemplo:

```php
$stmt = $pdo->prepare(
    "SELECT first_name, last_name
     FROM users
     WHERE user_id = ?"
);

$stmt->execute([$id]);
```

### Validación de Entradas

Verificar que los datos recibidos correspondan al formato esperado antes de procesarlos.

Por ejemplo, si el identificador debe ser numérico:

```php
if (!is_numeric($id)) {
    exit("Entrada inválida");
}
```

### Principio de Mínimo Privilegio

Las cuentas utilizadas por la aplicación deben poseer únicamente los permisos estrictamente necesarios para operar.

### Desarrollo Seguro

Incorporar revisiones de código y pruebas de seguridad durante el ciclo de vida del desarrollo.

---

## 2.8 Controles de Mitigación

Incluso implementando medidas preventivas, es recomendable establecer controles adicionales que reduzcan el impacto de una eventual explotación.

### Web Application Firewall (WAF)

Un WAF puede detectar y bloquear patrones comunes de SQL Injection antes de que lleguen a la aplicación.

**Marco relacionado:** OWASP, NIST CSF.

### Monitoreo y Correlación de Eventos

Implementar registros centralizados y sistemas SIEM que permitan detectar comportamientos anómalos.

**Marco relacionado:** CIS Controls 8 y NIST CSF.

### Segmentación de Red

Separar servidores web y bases de datos reduce la superficie de ataque y limita el movimiento lateral.

**Marco relacionado:** CIS Controls.

### Gestión de Privilegios

Restringir los permisos de las cuentas de base de datos utilizadas por la aplicación.

**Marco relacionado:** NIST CSF y CIS Controls.

### Auditorías Periódicas

Realizar pruebas de penetración y análisis de vulnerabilidades de forma regular para detectar debilidades antes de que sean explotadas.

**Marco relacionado:** OWASP Testing Guide.

---

## 2.9 Conclusión

La vulnerabilidad SQL Injection identificada durante la auditoría representa un riesgo significativo para una organización como PagaFácil debido a su capacidad para comprometer información sensible y afectar procesos críticos del negocio.

La evidencia obtenida demuestra que la aplicación permite alterar la lógica de las consultas SQL mediante entradas manipuladas por el usuario, lo que podría derivar en accesos no autorizados, fuga de información financiera y afectación de la confianza de los clientes.

La implementación de consultas parametrizadas, validación estricta de entradas y controles defensivos complementarios constituye una medida esencial para reducir este riesgo y fortalecer la postura de seguridad de la organización.
