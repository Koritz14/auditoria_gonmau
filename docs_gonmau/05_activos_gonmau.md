# 5. Activos de Información y Riesgos del Negocio

## 5.1 Identificación de Activos de Información

Como empresa del sector **Fintech**, PagaFácil administra información de alto valor relacionada con servicios financieros digitales. La protección de estos activos resulta esencial para garantizar la continuidad operacional, la confianza de los clientes y el cumplimiento de las normativas aplicables.

Durante la auditoría se identificaron los siguientes activos críticos de información.

| Activo de Información         | Clasificación                      | Descripción                                                                                                                                            |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Base de datos de clientes     | Información crítica                | Almacena datos personales, información de contacto, identificadores de clientes y otros antecedentes utilizados por la plataforma.                     |
| Historial de transacciones    | Información financiera crítica     | Contiene registros de transferencias, pagos, movimientos de billeteras digitales y demás operaciones realizadas por los usuarios.                      |
| Credenciales de autenticación | Información confidencial           | Incluye nombres de usuario, contraseñas cifradas, tokens de autenticación y datos utilizados para controlar el acceso al sistema.                      |
| Infraestructura de servidores | Activo tecnológico crítico         | Comprende servidores web, servidores de aplicaciones, bases de datos y sistemas operativos que soportan la operación de la plataforma.                 |
| Información financiera        | Información altamente confidencial | Corresponde a saldos, cuentas asociadas, medios de pago y demás información utilizada para la gestión financiera de los clientes.                      |
| Registros de auditoría (Logs) | Información de soporte crítico     | Contienen evidencia de accesos, eventos de seguridad, actividades administrativas y operaciones relevantes para auditorías e investigaciones forenses. |

---

## 5.2 Relación de los Activos con el Rubro Fintech

Las empresas Fintech operan principalmente mediante plataformas digitales que procesan grandes volúmenes de información financiera y personal.

A diferencia de otros sectores, una interrupción de los servicios o una filtración de datos puede generar consecuencias inmediatas tanto para los clientes como para la organización, incluyendo pérdidas económicas, fraude financiero, sanciones regulatorias y daños reputacionales.

Por esta razón, los activos identificados constituyen el núcleo operativo de PagaFácil y requieren controles de seguridad que garanticen su protección frente a amenazas internas y externas.

---

## 5.3 Análisis según la Triada CIA

La seguridad de los activos fue evaluada considerando los principios fundamentales de la seguridad de la información: **Confidencialidad, Integridad y Disponibilidad (CIA)**.

| Activo                        | Confidencialidad | Integridad | Disponibilidad | Justificación                                                                                                                                 |
| ----------------------------- | ---------------- | ---------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Base de datos de clientes     | Alta             | Alta       | Alta           | Contiene información personal cuya divulgación, modificación o pérdida tendría un impacto significativo sobre la organización y los clientes. |
| Historial de transacciones    | Alta             | Muy Alta   | Alta           | Cualquier alteración podría afectar directamente la trazabilidad de operaciones financieras y generar pérdidas económicas.                    |
| Credenciales de autenticación | Muy Alta         | Alta       | Media          | El acceso no autorizado comprometería completamente las cuentas de los usuarios.                                                              |
| Infraestructura de servidores | Media            | Alta       | Muy Alta       | La indisponibilidad de los servidores impediría el funcionamiento de la plataforma y la prestación del servicio.                              |
| Información financiera        | Muy Alta         | Muy Alta   | Alta           | La exposición o modificación de datos financieros representa uno de los riesgos más críticos para una empresa Fintech.                        |
| Registros de auditoría        | Alta             | Muy Alta   | Media          | Son esenciales para detectar incidentes, realizar investigaciones y cumplir requisitos de auditoría y normativas.                             |

---

## 5.4 Relación entre Vulnerabilidades y Activos Afectados

Las vulnerabilidades identificadas durante la auditoría afectan distintos activos de información con diferentes niveles de impacto.

### SQL Injection

La vulnerabilidad de Inyección SQL compromete principalmente los activos almacenados en la base de datos.

Activos afectados:

* Base de datos de clientes.
* Historial de transacciones.
* Información financiera.
* Credenciales de autenticación.
* Registros de auditoría.

Impacto potencial:

* Exposición de información confidencial.
* Modificación de registros financieros.
* Eliminación de datos críticos.
* Acceso no autorizado a información sensible.

---

### Cross-Site Scripting (XSS)

La vulnerabilidad Cross-Site Scripting afecta principalmente la interacción entre los usuarios y la aplicación.

Activos afectados:

* Credenciales de autenticación.
* Información financiera visualizada por el usuario.
* Sesiones activas.
* Imagen y reputación corporativa.

Impacto potencial:

* Robo de sesiones.
* Captura de credenciales.
* Manipulación del contenido mostrado al usuario.
* Ejecución de acciones fraudulentas utilizando cuentas legítimas.

---

### Command Injection

La vulnerabilidad de Inyección de Comandos presenta el mayor impacto sobre la infraestructura tecnológica.

Activos afectados:

* Infraestructura de servidores.
* Base de datos.
* Información financiera.
* Archivos del sistema operativo.
* Credenciales del sistema.
* Registros de auditoría.

Impacto potencial:

* Ejecución de comandos arbitrarios.
* Acceso al sistema operativo.
* Escalamiento de privilegios.
* Robo de información sensible.
* Alteración o eliminación de archivos críticos.
* Interrupción de servicios esenciales.

---

## 5.5 Riesgos para el Negocio

La explotación de las vulnerabilidades identificadas no solo compromete activos tecnológicos, sino que también puede afectar directamente los objetivos estratégicos de PagaFácil.

Entre los principales riesgos de negocio se identifican:

* Pérdida de confidencialidad de la información de clientes y datos financieros.
* Alteración de registros de transacciones, afectando la integridad de las operaciones.
* Interrupción parcial o total de los servicios ofrecidos a los clientes.
* Incremento del riesgo de fraude financiero y acceso no autorizado a cuentas.
* Daño a la reputación corporativa y pérdida de confianza de clientes y socios comerciales.
* Posibles sanciones regulatorias por incumplimiento de normativas de protección de datos y seguridad de la información.
* Costos asociados a la recuperación de sistemas, investigaciones forenses y respuesta ante incidentes.

Debido a la naturaleza del negocio Fintech, donde la disponibilidad de los servicios y la protección de la información financiera son fundamentales, la materialización de cualquiera de estas amenazas podría generar un impacto significativo tanto operativo como económico.

---

## 5.6 Conclusión

El análisis de activos realizado demuestra que PagaFácil administra información de alto valor cuya protección resulta esencial para la continuidad del negocio.

Las vulnerabilidades identificadas durante la auditoría afectan activos críticos relacionados con datos personales, información financiera, infraestructura tecnológica y mecanismos de autenticación. Entre ellas, la Inyección de Comandos representa el mayor riesgo al comprometer directamente el servidor y potencialmente todos los activos alojados en él, seguida por la Inyección SQL, que afecta principalmente la base de datos, y finalmente Cross-Site Scripting, cuyo impacto se concentra en los usuarios y sus sesiones.

La correcta identificación de estos activos y su relación con las vulnerabilidades constituye la base para la evaluación de riesgos presentada en la siguiente sección, donde se establecerán las prioridades de tratamiento mediante una matriz de riesgos y un mapa de calor.
