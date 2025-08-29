# Guía Completa de Endpoints y Peticiones cURL

Este documento proporciona una guía detallada de todos los endpoints disponibles en la API, con su descripción y ejemplos de peticiones usando cURL para facilitar las pruebas.

### Configuración
Asegúrate de que la API esté corriendo antes de ejecutar los comandos.

* **URL Local:** `http://localhost:3000`
* **URL Desplegada:** Si has desplegado la API en AWS, reemplaza la URL local con la que te proporcionó el API Gateway.

---

## Módulo de Gatos

Endpoints para interactuar con la información de las razas de gatos.

### **`GET /cats/breeds`**
* **Descripción:** Obtiene una lista completa de todas las razas de gatos disponibles.
* **Comando:**
    ```bash
    curl -X GET http://localhost:3000/cats/breeds
    ```

### **`GET /cats/breeds/:breed_id`**
* **Descripción:** Obtiene la información de una raza de gato específica utilizando su ID.
* **Uso:** Reemplaza `:breed_id` en la URL con el ID de la raza que quieras consultar (ej. `abys`, `beng`, `siam`).
* **Comando de Ejemplo:**
    ```bash
    curl -X GET http://localhost:3000/cats/breeds/abys
    ```

### **`GET /cats/breeds/search`**
* **Descripción:** Busca razas de gatos cuyo nombre coincida con un término de búsqueda.
* **Uso:** Añade el parámetro de consulta `q` con el término que deseas buscar (ej. `siberian`).
* **Comando de Ejemplo:**
    ```bash
    curl -X GET "http://localhost:3000/cats/breeds/search?q=siberian"
    ```

---

## Módulo de Imágenes

Endpoint para obtener las imágenes de los gatos.

### **`GET /images/by-breed`**
* **Descripción:** Obtiene una lista de imágenes para una raza específica, identificada por su ID.
* **Uso:** Añade el parámetro de consulta `breed_id` con el ID de la raza (ej. `abys`).
* **Comando de Ejemplo:**
    ```bash
    curl -X GET "http://localhost:3000/images/by-breed?breed_id=abys"
    ```

---

## Módulo de Usuarios

Endpoints para el registro y la autenticación de usuarios.

### **`POST /users/register`**
* **Descripción:** Registra un nuevo usuario en la base de datos. Requiere un nombre, un correo electrónico y una contraseña en el cuerpo de la petición.
* **Comando de Ejemplo:**
    ```bash
    curl -X POST http://localhost:3000/users/register \
    -H "Content-Type: application/json" \
    -d '{
      "name": "Diego Ojeda",
      "email": "diego@example.com",
      "password": "password123"
    }'
    ```

### **`POST /users/login`**
* **Descripción:** Autentica a un usuario existente con su correo y contraseña. Si las credenciales son correctas, devuelve la información del usuario.
* **Comando de Ejemplo:**
    ```bash
    curl -X POST http://localhost:3000/users/login \
    -H "Content-Type: application/json" \
    -d '{
      "email": "diego@example.com",
      "password": "password123"
    }'
    ```