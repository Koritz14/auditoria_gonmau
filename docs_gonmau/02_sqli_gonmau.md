# Auditoría de Seguridad — SQL Injection (DVWA)
## Objetivo del análisis
Documentar una vulnerabilidad de SQL Injection (SQLi) detectada en el entorno DVWA (Damn Vulnerable Web Application) en nivel de seguridad Low, evaluando su impacto técnico y su impacto en una plataforma fintech ficticia (PagaFácil).

## Descripción de la vulnerabilidad
La SQL Injection es una vulnerabilidad que ocurre cuando una aplicación construye consultas SQL incorporando directamente entradas del usuario sin validación ni parametrización.

Esto permite a un atacante alterar la lógica de la consulta y acceder a información o funcionalidades no autorizadas en la base de datos.

## Contexto en DVWA
Se utiliza el módulo vulnerable de DVWA (Low Security Level), donde el parámetro de entrada User ID es directamente concatenado en una consulta SQL.

El ataque se ejecuta ingresando el siguiente payload: **' OR '1'='1**

**1. Evidencia del ataque :**

Tras usar el payload **' OR '1'='1** se observo el siguiente resultado: 
* Se devuelven múltiples registros de usuarios sin necesidad de un ID válido.
* Se puede observar información de distintos usuarios.
* El sistema ignora la lógica de autenticación o filtrado por ID

**2. Que ocurre**

En el backend la aplicacion probablemente ejecuta una consulta similar a: 

**SELECT first_name, last_name FROM users WHERE id = '<input>';**

al injectar **' OR '1'='1** la consulta se transforma en:

**SELECT first_name, last_name FROM users WHERE id = '' OR '1'='1';**

**3. Por que funciona**
* '1'='1' siempre es verdadero
* La condición del WHERE se vuelve siempre válida
* La base de datos retorna todos los registros
* No existe validación ni escape de caracteres

## Impacto en el negocio (Fintech — PagaFácil)
En un sistema financiero real, esta vulnerabilidad tendría impacto crítico:

**1. Acceso no autorizado**

Un atacante podría acceder a:

* Billeteras digitales de otros usuarios
* Saldos disponibles
* Historial de transacciones

**2. Exposición de datos sensibles**

* Información personal (nombre, correo, identificadores)
* Datos financieros
* Posibles credenciales si están mal almacenadas

**Fraude financiero**
* Manipulación de registros
* Suplantación de usuarios
* Transferencias no autorizadas