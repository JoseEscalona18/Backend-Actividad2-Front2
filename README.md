# **Tienda UVM, Tienda de Productos Electrónicos**

**Descripción:**
Es una aplicación web creada utilizando ReactJS con Vite como bundler, Tailwind CSS y el plugin Flowbite, dicha aplicación web se conecta a una base de datos para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre el inventario de la tienda. La aplicación web funciona como un SPA (Single Page Application) y utiliza programación reactiva para mostrar el inventario de productos que el usuario desee ver, agregar, modificar y eliminar.

# **Requisitos e instalación:**

1- Se necesitan los siguientes componentes: Node.JS, MongoDB y NPM

2- Se dirigen hacia la dirección de ambos Proyectos en Github: [https://github.com/JoseEscalona18/Frontend-Actividad2-Front2 y https://github.com/JoseEscalona18/Backend-Actividad2-Front2

3- Seleccionan a Code y Local, luego los descargamos en Download ZIP

4- A partir de esto, nos quedaria en ZIP cada uno y los extraemos, meteremos ambos en una misma carpeta

5- Luego, abrimos Visual Studio Code y pasamos/abrimos la carpeta dentro del programa, desde Archivo/Abrir Carpeta, y hacemos lo mismo en otra ventana, una para el back y otra para el front

5.5. Pasamos las variables de entornos, la de .env a el Backend y la de .env.local al Front-End

6- Ahora que tenemos nuestro proyecto colocado, tan solo tenemos que abrir consola con CTRL + Ñ o Desde Terminal/Abrir Terminal en cada una de las ventanas

6.5 - Recuerden que debemos usar MongoDB Compass o su similar, para crear asi la conexión con MongoDB, al crearla, automaticamente la base de datos sera creada por el backend, cuando ingreses un producto

7- Al iniciar la terminal, vamos a instalar los paquetes que tiene el proyecto, utilizando npm i o npm install esto debe hacerse en ambas ventanas
 
8- Luego usamos el comando npm run dev y el programa se ejecutara, esto debe hacerse en ambas ventanas

9- Vamos hacia http://localhost:3000 y ahí tendremos la página ejecutándose.

10- Recuerden usar MongoDB Compass u otra interfaz como un Plugin de VS para usar los archivos CSV, de users y productos que dejamos

11- El admin es admin@gmail.com , su contraseña es 123, para que puedan probar el modo Admin.

# **Uso:**

La aplicación es una SPA (Single Page Application), esta nos permite hacer un CRUD Básico desde una base de datos para gestionar el inventario:

- **Crear:** Desde la sección "crear" podremos agregar diferentes productos.

- **Leer:** Los productos se leerán de forma automática cada vez que se entre la página, y así mismo se volverán a leer cada vez que haya un cambio en el inventario.

- **Editar:** Al presionar el botón de "Editar" que se encuentra al lado de cada producto, podremos editar sus detalles y luego guardar. La tabla mostrará sus cambios a tiempo real sin necesidad de reiniciar.

- **Borrar:** Al presionar el botón de "Eliminar" que se encuentra al lado de cada producto, podremos borrar el producto y la tabla se actualizará a tiempo real sin necesidad de reiniciar la página.

- Login: Puedes loguearte como usuario, tendras el rol de usuario o puedes acceder con la cuenta de admin

- Registro: Puedes registrarte como un usuario, a partir de campos de datos, y luego accederas como usuario

- Favoritos: Puedes asignar productos favoritos al estar logueado y se veran reflejados en la BD

- Tabla Users: Puedes ver y modificar los usuarios, siendo admin

- Las rutas estan protegidas por permisos, dados desde el Front a partir de ciertos requisitos 

# **Estructura del Proyecto:**

**Carpeta Base**

Posee una gran mayoria de archivos de configuración, que van desde el archivo de la variable de entorno, el git ignore para ignorar ciertas partes del codigo a la hora de subirse al repositorio, los package-json con la información de nuestras dependencias y demas, entre otros

**Carpeta SRC**

Usamos el estilo Model-Controller-Route para la realización del Back-End, en el Model poseemos la gestión de los datos, en donde hacemos la interacción con la base de datos. El controller, funciona para ser como un intermediario entre modelo y route, es el que procesara las solicitudes, validara las peticiones y hara que los datos lleguen de mejor forma al Model. En cuanto a los Routes, Las rutas son responsables de definir los puntos finales (endpoints) de la aplicación web. Son encargadas de mapear las URL recibidas a funciones de controlador apropiada

En la carpeta, poseemos los archivos database y server para lograr la conexión con la DataBase de forma apropiada(ademas, de que el server posee las configuraciones del servidor, entre otros.), en conjunto con el index

# **Dependencias y DevDependencias**

**Dependencias:**

"cookie-parser: Middleware para analizar cookies en las solicitudes entrantes.

cors: Middleware que permite la configuración de encabezados HTTP de control de acceso (CORS) para permitir las solicitudes desde diferentes dominios.

dotenv: Carga las variables de entorno desde un archivo .env en las variables de proceso de Node.js.

express: Un framework web rápido y minimalista para Node.js.

express-handlebars: Un motor de plantillas para Express que permite generar vistas HTML dinámicas.

express-session: Middleware para gestionar sesiones en Express.

mongodb: El controlador oficial de MongoDB para Node.js.

mongoose: Una biblioteca de modelado de objetos de MongoDB para Node.js que proporciona una solución basada en esquemas para modelar los datos de la aplicación.

**DevDependencies:**

nodemon: Una herramienta que ayuda a desarrollar aplicaciones Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en los archivos.

# **Autores:**

- José Escalona / C.I: 28.206.133
- Maikel Villegas Rojas / C.I: 30.302.836
- Luis Monsalve / C.I: 30.380.310

# **Enlaces:**

- Proyecto en GitHub: [https://github.com/JoseEscalona18/Backend-Actividad2-Front2]

# **Muchas gracias por su atención**
