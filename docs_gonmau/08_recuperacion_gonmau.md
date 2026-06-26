# 8. Mejora Tecnológica y Plan de Recuperación ante Desastres (Disaster Recovery Plan)

## 8.1 Introducción y Alcance Fintech

Las vulnerabilidades críticas identificadas en el portal web de **PagaFácil** (Inyección de Comandos, Inyección SQL y Cross-Site Scripting) evidencian la necesidad urgente de robustecer la infraestructura tecnológica y estructurar una estrategia de resiliencia operativa. En el ecosistema **Fintech**, la continuidad del negocio y la integridad inalterable de las transacciones son pilares mandatorios. Una indisponibilidad prolongada o la pérdida de registros financieros destruye la fe pública de la organización, gatilla sanciones regulatorias e inflige pérdidas económicas directas.

Este documento establece las propuestas de mejora tecnológica perimetral e interna y define el **Plan de Recuperación ante Desastres (DRP)** corporativo, diseñado para garantizar la restauración controlada y oportuna de los servicios críticos frente a incidentes de ciberseguridad catastróficos (como la toma de control del servidor a través del riesgo `R-01` o el compromiso de datos en `R-02`).

---

## 8.2 Propuestas de Mejora Tecnológica (Hardening e Infraestructura)

Para mitigar la superficie de ataque expuesta en la auditoría y dar cumplimiento a los marcos **CIS Controls** y **NIST Cybersecurity Framework (CSF)**, se determina la implementación obligatoria de las siguientes tecnologías:

### 8.2.1 Despliegue de Web Application Firewall (WAF)
*   **Mecanismo Técnico:** Implementación de un WAF en modo *Inline Block* para la inspección profunda de paquetes de la capa de aplicación (Capa 7 OSI).
*   **Objetivo:** Mitigar de forma perimetral firmas y patrones de inyección de comandos (`cat /etc/passwd`, operadores `;`, `&&`), estructuras maliciosas SQL (`' OR '1'='1`) y vectores de inyección de scripts en el DOM antes de que impacten al servidor web de PagaFácil.
*   **Alineación con Marcos:** CIS Control 16 (Application Software Security) y NIST CSF PR.PT-4.

### 8.2.2 Segmentación Arquitectónica de Red (Arquitectura 3-Tier)
*   **Mecanismo Técnico:** Aislar los activos lógicos y físicos mediante zonas de red claramente diferenciadas por firewalls de inspección de estado (Stateful Firewalls) y listas de control de acceso (ACL) estrictas:
    *   **DMZ (Zona Desmilitarizada):** Aloja exclusivamente el Servidor Web / Aplicación (DVWA). No posee conexión directa a la base de datos de producción.
    *   **Zona de Aplicaciones (Middleware):** Procesa la lógica de negocio y sanitización Fintech.
    *   **Zona de Datos Intrabastión:** Aloja de forma aislada la Base de Datos de Clientes y el Historial de Transacciones, permitiendo únicamente conexiones provenientes de la IP estática del servidor de aplicaciones bajo el puerto específico del motor (ej: TCP 3306).
*   **Alineación con Marcos:** CIS Control 4 (Secure Configuration of Enterprise Assets and Software).

### 8.2.3 Centralización de Logs y Correlación de Eventos (SIEM)
*   **Mecanismo Técnico:** Redirección mandatoria de logs de auditoría, eventos de sistema operativo (syslog), registros de consultas del motor de base de datos y logs de acceso web hacia un servidor de almacenamiento criptográfico e inalterable (SIEM centralizado).
*   **Objetivo:** Monitorear y alertar en tiempo real anomalías como el acceso al archivo `/etc/passwd` o la ejecución de comandos no autorizados por parte del usuario del sistema web (`www-data`).
*   **Alineación con Marcos:** CIS Control 8 (Audit Log Management) y NIST CSF DE.AE-1.

---

## 8.3 Plan de Recuperación ante Desastres (DRP)

El DRP de PagaFácil opera bajo la premisa de compromiso total de la infraestructura web debido a incidentes de severidad Crítica o Alta. Su objetivo es restablecer las operaciones financieras limitando la pérdida de datos al umbral mínimo tolerable por el negocio.

### 8.3.1 Estrategia de Respaldo Diferenciada por Activo
Para garantizar la consistencia de la información sin degradar el rendimiento del entorno transaccional, se definen políticas de respaldo automatizadas y cifradas bajo el algoritmo **AES-256**, aplicando la regla de respaldo **3-2-1** (3 copias, 2 medios distintos, 1 de ellos *off-site* / inmutable en la nube):

| ID Activo | Activo de Información | Tipo de Respaldo | Frecuencia de Ejecución | Política de Retención | Mecanismo de Seguridad |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **ACT-01** | Base de Datos de Clientes | Incremental / Snapshots | Cada 6 horas | Diario: 30 días<br>Mensual: 12 meses | Cifrado AES-256 + Control de acceso IAM estricto. |
| **ACT-02** | Historial de Transacciones | Diferencial / Transaccional | Cada 1 hora (60 min) | Diario: 90 días<br>Anual: 5 años | Almacenamiento inmutable (*Write Once, Read Many* - WORM). |
| **ACT-03** | Credenciales de Autenticación | Incremental | Cada 6 horas | Diario: 30 días | Almacenamiento en bóveda de llaves cifrada (Key Vault). |
| **ACT-04** | Servidor Web / Aplicación | Imagen de Sistema (AMI / ISO) | Semanal o ante cambios | Últimas 3 versiones estables | Imagen base endurecida (*Hardened*) libre de vulnerabilidades. |

---

### 8.3.2 Objetivos de Recuperación Operacional (RTO y RPO)

Para dar cumplimiento a los estándares de la industria Fintech y garantizar la resiliencia ante fraudes o secuestro de datos, se definen formalmente las siguientes métricas objetivo:

*   **RTO (Recovery Time Objective): 4 Horas**
    *   *Definición:* El tiempo máximo tolerable para restaurar la disponibilidad de la plataforma de cara a los clientes desde la declaración oficial del desastre. Cuatro horas es el límite crítico operativo antes de incurrir en pérdidas reputacionales severas y penalizaciones de entes reguladores financieros.
*   **RPO (Recovery Point Objective): 1 Hora**
    *   *Definición:* La cantidad máxima de datos transaccionales que la Fintech está dispuesta a perder en términos de tiempo. Al respaldar el Historial de Transacciones de forma horaria, ante un colapso total por inyección de comandos (`R-01`), la máxima pérdida de transacciones financieras registradas nunca superará los 60 minutos de operación.

---

### 8.3.3 Procedimiento de Recuperación ante Incidentes (Fases de Ejecución)

En caso de materializarse una intrusión exitosa que comprometa los activos del portal, el Equipo de Respuesta a Incidentes (CSIRT) de PagaFácil ejecutará de forma secuencial y obligatoria las siguientes fases bajo el marco **NIST SP 800-61 Rev. 2**: