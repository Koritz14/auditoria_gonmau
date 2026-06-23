# 1. Descripción de la empresa

**PagaFácil** es una plataforma fintech de billetera digital que permite a los usuarios realizar operaciones financieras completamente en línea. Su modelo de negocio se basa en la gestión de dinero digital y la intermediación de pagos entre usuarios y comercios.

Entre sus principales funcionalidades se incluyen:

- Transferencias de dinero entre usuarios
- Pagos en comercios adheridos
- Almacenamiento de saldo digital dentro de la plataforma
- Gestión de datos personales sensibles (RUT, correo electrónico, historial financiero)
- Registro y trazabilidad de transacciones en tiempo real

Desde una perspectiva de seguridad, este tipo de plataforma es altamente crítica debido a que concentra **activos financieros y datos personales de alto valor**, lo que la convierte en un objetivo prioritario para atacantes externos e internos.

---

# 2. Superficie de ataque

La superficie de ataque de una fintech como PagaFácil es amplia debido a su naturaleza digital y su dependencia de servicios web.

### Componentes expuestos típicamente:

- **Aplicación web**
  - Interfaz de usuario para login, transferencias y consultas
- **API REST / servicios backend**
  - Exposición de endpoints para operaciones financieras
- **Sistema de autenticación**
  - Login, recuperación de contraseña, tokens de sesión
- **Base de datos**
  - Almacenamiento de usuarios, transacciones y credenciales
- **Comunicación cliente-servidor**
  - Intercambio de datos sensibles vía HTTP/HTTPS

### Riesgo estructural

En este tipo de sistemas, cualquier punto de entrada puede convertirse en un vector de ataque, ya que:

- Existe alta exposición pública (internet-facing services)
- Se procesan transacciones en tiempo real
- Los datos tienen impacto económico directo
- La disponibilidad del servicio es crítica para la operación del negocio

---

# 3. Amenazas principales

Las amenazas más relevantes para PagaFácil se agrupan en ataques orientados a **confidencialidad, integridad y disponibilidad**.

### Robo de credenciales
- Phishing, fuerza bruta o reutilización de contraseñas
- Acceso no autorizado a cuentas de usuarios
- Toma de control de billeteras digitales

### Fraude financiero
- Transferencias no autorizadas
- Manipulación de saldos
- Uso de cuentas comprometidas para lavado de dinero

### Exfiltración de datos personales
- Filtración de RUT, correos y datos financieros
- Venta de bases de datos en mercados ilegales
- Violación de privacidad de usuarios

### Manipulación de transacciones
- Alteración de montos o destinatarios
- Repetición de transacciones válidas (replay attacks)
- Inyección de datos maliciosos en procesos financieros

### Ataques a la disponibilidad
- Denegación de servicio (DoS/DDoS)
- Saturación de APIs de pago
- Interrupción del servicio financiero

---

# 4. Impacto de un incidente

Un incidente de seguridad en PagaFácil no solo es técnico, sino también crítico a nivel de negocio.

## Impacto financiero
- Pérdida directa de fondos de usuarios
- Costos de compensación y reembolsos
- Interrupción de operaciones de pago
- Costos de respuesta a incidentes y recuperación

## Impacto reputacional
- Pérdida de confianza de los usuarios
- Migración masiva hacia competidores
- Daño a la marca en el ecosistema fintech
- Dificultad para adquirir nuevos clientes

## Impacto legal y normativo
- Incumplimiento de normativas de protección de datos
- Posibles sanciones regulatorias
- Demandas colectivas de usuarios afectados
- Auditorías obligatorias posteriores al incidente

---

# 5. Relación con vulnerabilidades del laboratorio

En el contexto del laboratorio (entorno tipo DVWA), las vulnerabilidades analizadas tienen un impacto directo y crítico en una fintech como PagaFácil.

## SQL Injection
Permite la manipulación de consultas a la base de datos.  
En este contexto podría implicar:

- Acceso no autorizado a cuentas de usuarios
- Extracción de datos financieros y personales
- Modificación de saldos o transacciones

Impacto: **compromiso total de confidencialidad e integridad del sistema financiero**

---

## Cross-Site Scripting (XSS)
Permite inyectar scripts maliciosos en el navegador del usuario.

En PagaFácil puede ser utilizado para:

- Robo de sesiones activas
- Suplantación de identidad dentro del sistema
- Redirección a páginas de phishing

Impacto: **compromiso de credenciales y sesiones de usuarios**

---

## Command Injection
Permite ejecutar comandos en el servidor donde corre la aplicación.

En un entorno fintech podría derivar en:

- Control total del servidor backend
- Acceso a bases de datos internas
- Manipulación de archivos críticos del sistema

Impacto: **compromiso total de infraestructura y datos financieros**

---

# Conclusión del análisis

PagaFácil representa un sistema de alta criticidad dentro del ecosistema fintech, donde cualquier vulnerabilidad web tradicional se amplifica debido al impacto directo sobre dinero, identidad y datos personales.

Por esta razón, los ataques estudiados en el laboratorio no deben considerarse únicamente como fallos técnicos, sino como **riesgos de negocio de alto impacto**, capaces de afectar la continuidad operacional, la confianza del usuario y el cumplimiento regulatorio de la plataforma.