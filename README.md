# Prueba Técnica: API de Gatos y Usuarios (NestJS)

**Autor:** Diego Fernando Ojeda Carmona

Este repositorio contiene la solución a la prueba técnica para el rol de Desarrollador NodeJS. El proyecto consiste en una API RESTful construida con **NestJS**, diseñada para ser desplegada en un entorno serverless en **AWS Lambda** utilizando contenedores **Docker** e Infraestructura como Código con el **Serverless Framework**.

---

## 🚀 Stack Tecnológico

* **Framework Backend:** NestJS
* **Lenguaje:** TypeScript
* **Base de Datos:** MongoDB (con Mongoose)
* **Contenedores:** Docker
* **Despliegue Serverless:** AWS Lambda + API Gateway
* **Infraestructura como Código (IaC):** Serverless Framework
* **Validación de Datos:** `class-validator` y `class-transformer`
* **Autenticación:** Hasheo de contraseñas con `bcrypt`

---

## ✨ Funcionalidades Principales

### Módulo de Gatos (`/cats`)
* Obtiene una lista de todas las razas de gatos desde la API pública [TheCatAPI](https://thecatapi.com/).
* Permite buscar una raza específica por su ID.
* Permite realizar una búsqueda de razas por nombre.

### Módulo de Imágenes (`/images`)
* Obtiene las imágenes asociadas a una raza específica de gato.

### Módulo de Usuarios (`/users`)
* **Registro:** Permite registrar nuevos usuarios en una base de datos MongoDB. La contraseña se almacena de forma segura utilizando un hash.
* **Login:** Valida las credenciales de un usuario y retorna su información si son correctas.

---

## 📋 Prerrequisitos para el Entorno Local

* Node.js (v18 o superior)
* NPM o Yarn
* Docker y Docker Compose
* Una instancia de MongoDB (local o en la nube como MongoDB Atlas)

---

## ⚙️ Instalación y Configuración Local

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
    ```env
    # Cadena de conexión a tu base de datos MongoDB
    MONGO_URI=mongodb://localhost:27017/cat-test

    # API Key obtenida de thecatapi.com
    CAT_API_KEY=tu_api_key_aqui
    ```

4.  **Levantar la aplicación:**
    ```bash
    npm run start:dev
    ```
    La API estará disponible en `http://localhost:3000`.

---

## 🕹️ Endpoints de la API

| Método | Ruta                                  | Descripción                                            | Body (Ejemplo)                                           |
| :----- | :------------------------------------ | :----------------------------------------------------- | :------------------------------------------------------- |
| `GET`  | `/cats/breeds`                        | Obtiene la lista de todas las razas de gatos.          | N/A                                                      |
| `GET`  | `/cats/breeds/:breed_id`              | Obtiene los detalles de una raza por su ID.            | N/A                                                      |
| `GET`  | `/cats/breeds/search?q={query}`       | Busca razas que coincidan con la consulta.             | N/A                                                      |
| `GET`  | `/images/by-breed?breed_id={id}`      | Obtiene imágenes de una raza específica.               | N/A                                                      |
| `POST` | `/users/register`                     | Registra un nuevo usuario.                             | `{ "name": "Tu Nombre", "email": "tu@correo.com", "password": "tu_password_segura" }` |
| `POST` | `/users/login`                        | Inicia sesión y valida las credenciales del usuario.   | `{ "email": "tu@correo.com", "password": "tu_password_segura" }` |

---

## ☁️ Despliegue en AWS (Serverless)

Este proyecto está configurado para un despliegue automatizado en AWS Lambda a través del Serverless Framework.

### Prerrequisitos de Despliegue
* Tener el [Serverless Framework](https://www.serverless.com/framework/docs/getting-started) instalado y configurado con tus credenciales de AWS.
* Tener Docker en ejecución.

### Comandos de Despliegue

* **Para desplegar la API:**
    Ejecuta el siguiente comando en la raíz del proyecto. Se encargará de construir la imagen, subirla a ECR, y desplegar la función Lambda y el API Gateway.
    ```bash
    serverless deploy
    ```
    Al finalizar, la terminal te proporcionará la URL pública de la API desplegada.

* **Para eliminar la API:**
    Para borrar todos los recursos creados en AWS y evitar costos, ejecuta:
    ```bash
    serverless remove
    ```
    Esto eliminará la función Lambda, el API Gateway, y el repositorio ECR.

---

## 🔒 Seguridad

* **Hasheo de contraseñas:** Las contraseñas de los usuarios se almacenan de forma segura utilizando bcrypt.
* **Variables de entorno:** Se utilizan variables de entorno para almacenar información sensible como claves de API y URIs de base de datos.

---

## 📝 Notas Adicionales

* **CORS:** El proyecto está configurado para permitir solicitudes desde cualquier origen. En entornos de producción, se recomienda restringir este acceso.
* **Rate Limiting:** Se ha implementado un límite básico de solicitudes para prevenir abusos.

---

## 👤 Autor

**Diego Fernando Ojeda Carmona**
* LinkedIn: [Diego Ojeda](https://www.linkedin.com/in/diego-ojeda-carmona-952444134/)
* Email: diegoojedacarmona@gmail.com

---

## 📜 Licencias

Copyright (c) 2024 Diego Fernando Ojeda Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.