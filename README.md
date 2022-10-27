# SuperheroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.
## Installing App

Para poder utilizar la apliación, necesitas Angular CLI versión 14.2.3. 

Una vez estemos en la raíz de la carpeta, usamos npm install.

Acto seguido, hacemos npm start, y nos dirigimos en el navegador a "http://localhost:4200"

Una vez cargue la web, ya es totalmente funcional, se utiliza lazy load y el routing para una sensación de página estática.

## Testing
La aplicación tiene los test realizados con Karma, para poder ver el coverage, solo hay que poner en la terminal ng test --code-coverage

## Walkthrough

Objetivos/Pasos a seguir:

- Pensar un layout para poder ver los superheroes (/home). ✓
- Pensar cuantos componentes (con los nombres) se necesitan. ✓
- Crear la estructura de carpetas (Crear todos los componentes/servicios/modelos/mocks). ✓
- Generar modelo de los datos ("Superheroe" al empezar). ✓
- Crear un mock inicial para poder iterar al entrar en la app (3-6-12 superheroes). ✓
- Generar el diseño principal de la página (todo SPA, barra de búsqueda, tarjetas de los superheroes, animaciones). ✓
- Iterar cada tarjeta de superheroe dependiendo de cuantos hayan en el mock inicial. ✓
- Paginar la lista, de tal forma que haya entre 3 y 12 a la vista ✓
- Generar un formulario simple para la búsqueda de los superheroes, al soltar la tecla, buscará si hay algo que se le parezca. ✓
- Generar un componente que se usará para crear/modificar/visualizar los superheroes. ✓
- Generar un modal que se usará tanto para la creación como para la modificación de estos superHeroes✓
- Dentro de ese modal, estará el botón de eliminar en la parte inferior izquierda. ✓
- Generar los test unitarios con Karma ✓

Posibles Mejoras
- Añadir animaciones al modal a la hora de abrirse/cerrarse para dar fluidez. ✓
- Implementar un spinner del estilo de facebook. X
- Añadir un checkbox escondido en la parte inferior derecha, que al presionarlo, y buscar superheroes o pasar de página, generará 1-2s de delay
  para testear el spinner. X


Componentes/Servicios/Modelos a Crear: 
 - main-home-component ✓
 - heroe-card-component ✓
 - search-component ✓
 - heroe-service ✓ 
 - heroe-model ✓
 - heroe-service-mock ✓

Realizar Test Unitarios de: 
- main-home-component ✓
 - heroe-card-component ✓
 - search-component ✓
 - heroe-service ✓ *En el coverage no se refleja, pero por consola si que pasa los test.
 - heroe-model ✓

## Validación del formulario (Modal) notificaciones y paginación.
El formulario del modal, tiene varias validaciones a parte de utilizar el nombre como identificador único. A continuación explico todo:
  - A la hora de añadir un SuperHeroe, el nombre no se puede repetir, en el caso de que lo intentes (Tanto en mayúsculas como en minúsculas), saldrá un mensaje al darle aceptar en el modal informándote que intentes con otro nombre. 
  - Tanto en añadir como en editar, el nombre, el superpoder, y la fecha, son obligatorios. En el caso de no estar rellenados, no se activará el botón para guardar.
  - A la hora de editar un superheroe, el nombre no se podrá cambiar. Esto lo he hecho para usarlo de identificador único y para que veáis que se como utilizar formularios reactivos y editarlo todo desde la parte de typescript.
  - Hay 3 tipos de notificaciones, todos controlados por un handler. "OK": De color verde, señala que todo ha salido bien. "INFO", De color Amarillo/Naranja, para informar por ejemplo del nombre de Heroe duplicado, "ERROR": De color rojo, para señalar un fallo y enseñar el mensaje proveído de back.
  - Tanto a la hora de añadir o eliminar, la paginación se resetea para volver al inicio. En el caso de edición, no es así.
  - La paginación es dinámica, hecha en local. Tiene 3 estados, para mostrar, 3, 6 o 12 elementos a la vez.

Como última cosa a añadir, es el tema de las imagenes. Al no disponer de un servicio backend y no poder subir las fotos al "servidor", he buscado 4 fotos por internet, y lo que he hecho es, randomizar un numero del 0 al 3, y a la hora de añadir, asignarle ese numero como foto (Guardado en un array como mock). Si tuviera ese servicio, hubiera añadido el poder seleccionar la foto, subirla al backend, y este que me pudiera proveer de la ruta, no es algo complicado, pero prefiero dejar constancia de que si sabría como realizarlo.

Cualquier duda, enviadme un correo a mi mail personal, si no, en mi Linkedin: Mario Carpallo
