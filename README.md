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
