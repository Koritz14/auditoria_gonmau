# 6. Matriz de Riesgo y Mapa de Calor

## 6.1 Evaluación de Riesgos

Una vez identificadas las vulnerabilidades presentes en el portal web de PagaFácil, se realizó una evaluación de riesgos considerando dos variables fundamentales:

* **Probabilidad:** posibilidad de que una vulnerabilidad sea explotada por un atacante.
* **Impacto:** consecuencias que tendría la explotación sobre los activos de información y la continuidad del negocio.

La combinación de ambas variables permite determinar el nivel de riesgo de cada vulnerabilidad y establecer prioridades para su tratamiento.

Para esta auditoría se utilizaron cuatro niveles de clasificación.

| Probabilidad | Descripción                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Baja         | La explotación requiere condiciones poco comunes o conocimientos muy especializados.                                    |
| Media        | La explotación es posible, pero requiere ciertas condiciones o recursos adicionales.                                    |
| Alta         | La vulnerabilidad puede explotarse con relativa facilidad utilizando herramientas disponibles públicamente.             |
| Muy Alta     | La explotación puede realizarse fácilmente de forma remota, con pocas restricciones y alto potencial de automatización. |

| Impacto | Descripción                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------- |
| Bajo    | Afecta mínimamente la operación del negocio.                                                                              |
| Medio   | Produce afectaciones parciales en algunos activos o procesos.                                                             |
| Alto    | Compromete activos críticos y puede generar pérdidas económicas importantes.                                              |
| Crítico | Puede provocar el compromiso de la infraestructura, pérdida masiva de información o interrupción de servicios esenciales. |

---

## 6.2 Matriz de Riesgos

La siguiente tabla resume la evaluación realizada para cada una de las vulnerabilidades identificadas durante la auditoría.

| Vulnerabilidad             | Probabilidad | Impacto | Nivel de Riesgo | CVSS |
| -------------------------- | ------------ | ------- | --------------- | ---- |
| Inyección SQL              | Muy Alta     | Alto    | Alto            | 8.8  |
| Cross-Site Scripting (XSS) | Alta         | Medio   | Medio           | 6.8  |
| Inyección de Comandos      | Muy Alta     | Crítico | Crítico         | 9.8  |

### Justificación de la Evaluación

**Inyección SQL**

Presenta una probabilidad muy alta debido a que puede explotarse mediante simples peticiones HTTP manipuladas, sin requerir autenticación compleja. Su impacto es alto porque permite acceder o modificar información crítica almacenada en la base de datos, incluyendo datos personales, credenciales e información financiera.

**Cross-Site Scripting (XSS)**

Su probabilidad es alta debido a la facilidad con la que puede inyectarse código JavaScript cuando la aplicación no valida adecuadamente las entradas. No obstante, requiere interacción del usuario para ejecutarse, lo que reduce parcialmente su severidad. El impacto se considera medio, ya que afecta principalmente las sesiones de los usuarios y la información mostrada en el navegador.

**Inyección de Comandos**

Corresponde al riesgo más elevado identificado durante la auditoría. La vulnerabilidad permite ejecutar comandos directamente sobre el servidor sin autenticación, comprometiendo la confidencialidad, integridad y disponibilidad de la infraestructura tecnológica. Su impacto es crítico debido a la posibilidad de obtener control del sistema operativo y afectar todos los activos alojados en el servidor.

---

## 6.3 Mapa de Calor

El siguiente mapa de calor representa gráficamente la posición de cada vulnerabilidad según su probabilidad e impacto.

| Impacto / Probabilidad | Baja | Media | Alta       | Muy Alta                 |
| ---------------------- | ---- | ----- | ---------- | ------------------------ |
| **Crítico**            | 🟠   | 🔴    | 🔴         | 🔴 **Command Injection** |
| **Alto**               | 🟡   | 🟠    | 🟠         | 🟠 **SQL Injection**     |
| **Medio**              | 🟢   | 🟡    | 🟡 **XSS** | 🟠                       |
| **Bajo**               | 🟢   | 🟢    | 🟡         | 🟡                       |

**Leyenda**

* 🟢 Bajo
* 🟡 Medio
* 🟠 Alto
* 🔴 Crítico

El mapa evidencia que la Inyección de Comandos constituye la amenaza más severa para PagaFácil, seguida por la Inyección SQL. Aunque Cross-Site Scripting presenta un nivel de riesgo inferior, continúa siendo una vulnerabilidad relevante debido a su capacidad para comprometer sesiones de usuarios y facilitar ataques dirigidos.

---

## 6.4 Priorización de Vulnerabilidades

Con base en la evaluación de riesgos, la severidad CVSS, el impacto sobre el negocio y la facilidad de explotación, se establece el siguiente orden de prioridad para el tratamiento de las vulnerabilidades.

| Prioridad | Vulnerabilidad             | Justificación                                                                                                                                                                                                                                                 |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**     | Inyección de Comandos      | Permite la ejecución remota de comandos sobre el servidor, con potencial compromiso total de la infraestructura tecnológica y de los activos críticos de la organización. Presenta el mayor puntaje CVSS (9.8) y el impacto más alto sobre el negocio.        |
| **2**     | Inyección SQL              | Permite acceder, modificar o eliminar información almacenada en la base de datos, afectando directamente la confidencialidad e integridad de datos personales y financieros. Su explotación es sencilla y representa un alto riesgo para una empresa Fintech. |
| **3**     | Cross-Site Scripting (XSS) | Aunque puede provocar robo de sesiones y manipulación del contenido mostrado al usuario, requiere interacción de la víctima para su explotación, reduciendo parcialmente su criticidad frente a las demás vulnerabilidades.                                   |

---

## 6.5 Relación entre Riesgo Técnico y Riesgo de Negocio

Los resultados obtenidos muestran una relación directa entre la severidad técnica de las vulnerabilidades y el riesgo para la continuidad operacional de PagaFácil.

Las vulnerabilidades con mayor puntaje CVSS afectan directamente los activos más importantes de la organización, como la infraestructura tecnológica, las bases de datos y la información financiera de los clientes. Esto incrementa significativamente la probabilidad de pérdidas económicas, fraude, incumplimiento normativo y deterioro de la reputación corporativa.

En consecuencia, resulta prioritario implementar controles preventivos y correctivos sobre las vulnerabilidades de mayor criticidad antes de abordar aquellas con menor impacto.

---

## 6.6 Conclusión

La matriz de riesgos y el mapa de calor permitieron establecer una visión clara del nivel de exposición de PagaFácil frente a las vulnerabilidades identificadas durante la auditoría.

La Inyección de Comandos fue clasificada como el riesgo más crítico debido a su capacidad para comprometer completamente la infraestructura tecnológica. La Inyección SQL ocupa el segundo nivel de prioridad por el riesgo que representa para la información almacenada en la base de datos. Finalmente, Cross-Site Scripting, aunque presenta una severidad menor, continúa representando una amenaza importante para la seguridad de los usuarios y la integridad de la aplicación.

Esta priorización proporciona una base objetiva para definir las medidas de prevención, mitigación y fortalecimiento tecnológico que se desarrollan en las siguientes secciones del informe.
