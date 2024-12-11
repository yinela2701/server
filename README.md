# Servidor de aplicación de gestión de películas

Este proyecto es la parte del backend de una aplicación de gestión de películas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos MySQL. El servidor está construido con Node.js y utiliza Express como framework principal.

---

## Características

- **Agregar películas**: Inserta un nuevo registro en la base de datos.
- **Listar películas**: Devuelve todos los registros almacenados.
- **Actualizar películas**: Modifica los detalles de una película específica.
- **Eliminar películas**: Elimina un registro por su ID.

---

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (v14 o superior recomendado)
- Una base de datos MySQL configurada con:
  - **Host**: `db` (en un contenedor Docker o según tu configuración)
  - **Usuario**: `root`
  - **Contraseña**: `1z2x3c`
  - **Base de datos**: `movies`

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd server
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

---

## Dependencias utilizadas

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Framework para manejar rutas y solicitudes HTTP.
- **MySQL**: Conexión y consultas a la base de datos.
- **Cors**: Middleware para manejar solicitudes de diferentes orígenes.

Estas dependencias se instalan automáticamente al ejecutar `npm install`.

---

## Configuración

1. Asegúrate de que la base de datos MySQL esté en funcionamiento y configurada con los siguientes detalles:
   - **Host**: `db` (o `localhost` si estás probando localmente).
   - **Usuario**: `root`
   - **Contraseña**: `1z2x3c`
   - **Base de datos**: `movies`

2. Si la base de datos no existe, créala manualmente:
   ```sql
   CREATE DATABASE movies;
   USE movies;
   CREATE TABLE peliculas (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nombre VARCHAR(255),
       director VARCHAR(255),
       descripcion TEXT,
       anio INT
   );
   ```

---

## Ejecución

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. El servidor estará disponible en el puerto `3001` por defecto:
   ```
   http://localhost:3001
   ```

---

## Endpoints disponibles

### 1. **Crear película**
- **POST** `/create`
- **Descripción**: Inserta una nueva película en la base de datos.
- **Cuerpo de la solicitud** (JSON):
  ```json
  {
    "nombre": "Nombre de la película",
    "director": "Director de la película",
    "descripcion": "Descripción de la película",
    "anio": 2023
  }
  ```

### 2. **Listar películas**
- **GET** `/peliculas`
- **Descripción**: Devuelve una lista de todas las películas.

### 3. **Actualizar película**
- **PUT** `/update`
- **Descripción**: Actualiza los detalles de una película existente.
- **Cuerpo de la solicitud** (JSON):
  ```json
  {
    "id": 1,
    "nombre": "Nombre actualizado",
    "director": "Director actualizado",
    "descripcion": "Descripción actualizada",
    "anio": 2024
  }
  ```

### 4. **Eliminar película**
- **DELETE** `/delete/:id`
- **Descripción**: Elimina una película específica por su ID.

---

## Estructura del proyecto

```plaintext
server/
├── node_modules/        # Dependencias instaladas
├── server.js            # Código principal del servidor
├── package.json         # Dependencias y scripts
└── ...
```

---

## Tecnologías utilizadas

- **Node.js**: Plataforma para ejecutar el backend.
- **Express**: Framework para la creación de aplicaciones web.
- **MySQL**: Base de datos relacional para almacenar información de películas.

---

## Contribuciones

Si deseas contribuir, abre un Issue o realiza un Pull Request en este repositorio.

---

## Licencia

Este proyecto está licenciado bajo los términos de la [MIT License](LICENSE).