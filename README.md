# 🚀 REST API - Node.js + PostgreSQL + Vercel

**Live Demo:** [https://rest-api-nodejs-express-postre-sql.vercel.app/](https://rest-api-nodejs-express-postre-sql.vercel.app/)

Esta es una API REST profesional construida con **Node.js** y **Express 5**, diseñada para gestionar usuarios con persistencia de datos en **PostgreSQL (Neon Serverless)** y desplegada de forma optimizada en **Vercel**.

Incluye una interfaz de usuario (UI) moderna e interactiva con búsqueda en tiempo real, ordenamiento dinámico y operaciones CRUD completas.

Deploy: https://rest-api-nodejs-express-postre-sql.vercel.app/

## 🛠️ Tecnologías utilizadas

- **Backend:** Node.js (v24+), Express 5.
- **Base de Datos:** PostgreSQL (vía Neon Serverless con Pool de conexiones).
- **Frontend:** HTML5, JavaScript (Vanilla), Tailwind CSS.
- **Despliegue:** Vercel.

## 📋 Características

- **API RESTful:** Endpoints completos para GET, POST, PUT y DELETE.
- **UI Administrativa:**
  - Buscador dinámico por nombre o email (filtrado local eficiente).
  - Ordenamiento ascendente/descendente por cualquier columna.
  - Diseño responsivo y moderno con Tailwind CSS.
- **Optimización Serverless:** Configuración de `pg.Pool` ajustada (`max: 1`) para evitar el agotamiento de conexiones en Vercel.
- **Seguridad:** Prevención de SQL Injection mediante consultas parametrizadas.

## 🛣️ Documentación de la API (Endpoints)

La API está diseñada para responder con objetos JSON y utiliza códigos de estado HTTP estándar para indicar el éxito o error de las operaciones.

### 1. Obtener todos los usuarios

Lista todos los registros almacenados en la tabla `users`.

- **URL:** `/users`
- **Método:** `GET`
- **Respuesta Exitosa (200 OK):**
  ```json
  [
    { "id": 1, "name": "Diego", "email": "diego@example.com" },
    { "id": 2, "name": "Ana", "email": "ana@example.com" }
  ]
  ```

### 2. Obtener un usuario por ID

Busca un único usuario mediante su identificador único.

- **URL:** `/users/:id`
- **Método:** `GET`
- **Respuesta Exitosa (200 OK):** Objeto del usuario encontrado.
- **Error (404 Not Found):**
  ```json
  { "message": "Usuario no encontrado" }
  ```

### 3. Crear un nuevo usuario

Registra un nuevo usuario validando que el correo electrónico sea único.

- **URL:** `/users`
- **Método:** `POST`
- **Cuerpo (JSON):**
  ```json
  {
    "name": "Nombre Usuario",
    "email": "email@ejemplo.com"
  }
  ```
- **Respuesta Exitosa (200 OK):** Retorna el objeto creado incluyendo su `id`.
- **Error (409 Conflict):** Si el email ya existe en la base de datos.
  ```json
  { "message": "El email ya fue registrado" }
  ```

### 4. Actualizar usuario

Modifica los datos (nombre y email) de un usuario existente.

- **URL:** `/users/:id`
- **Método:** `PUT`
- **Cuerpo (JSON):**
  ```json
  {
    "name": "Nombre Actualizado",
    "email": "nuevo_email@ejemplo.com"
  }
  ```
- **Respuesta Exitosa (200 OK):** Retorna el objeto actualizado.

### 5. Eliminar usuario

Remueve permanentemente a un usuario del sistema.

- **URL:** `/users/:id`
- **Método:** `DELETE`
- **Respuesta Exitosa (204 No Content):** La operación fue exitosa pero no devuelve cuerpo.
- **Error (404 Not Found):** Si el ID no existe.
  ```json
  { "message": "Usuario no encontrado" }
  ```
