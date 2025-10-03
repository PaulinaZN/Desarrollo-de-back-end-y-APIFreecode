# Timestamp Microservice - Full Stack

Este proyecto permite convertir fechas en formato legible a timestamps Unix y viceversa, a través de una API REST y una interfaz web sencilla.

---

## Tecnologías usadas

- Node.js
- Express
- HTML, CSS y JavaScript (frontend estático)

---

## Funcionalidad

- Si se accede a `/api/:date?` con un parámetro de fecha o timestamp, devuelve un JSON con la fecha en formato Unix y UTC.
- Si no se pasa parámetro, devuelve la fecha actual.
- Si la fecha es inválida, devuelve un JSON con un error.
- Interfaz web para ingresar fechas o timestamps y mostrar la respuesta.

---

## Instalación y uso

1. Clona o descarga este repositorio.

2. Instala las dependencias:

   ```bash
   npm install
