//*******************************************//
//PARTE 1: Implementacion basica de herencia //
//*******************************************//

/*
Para el desarrollo del ejemplo que sigue utilizaremos conceptos de la clase anterior.

Utilizaremos self invoking functions en cada paso para no tener problemas con los nombres 
de las funciones.

Comenzaremos por crear una clase base, y mediante el uso de call o apply conseguiremos algo
similar a la herencia de clases en un lenguaje con tipos.

La operacion call y apply permiten settear el "this" the una funcion a un objeto que nosotros 
elijamos. La idea entonces es hacer que el "this" de una funcion padre se convierta en el 
"this" de uno de sus hijos para que agregue propeidades al mismo.

Comenzaremos por crear una funcion Persona que contendra un hijo Profesor y otro Alumno y compartiremos
un primer metodo.
*/
(function(){
    
    function Persona(nombre, apellido, dni){
        var self = this;
        
        self.obtenerNombre = obtenerNombre;
        
        function obtenerNombre(){
            return nombre + ', ' + apellido;
        }
        
    } 

    function Alumno(nombre, apellido, dni){
        var self = this;
        Persona.call(self, nombre, apellido, dni);
    } 

    function Profesor(nombre, apellido, dni){
        var self = this;
        Persona.apply(self, [nombre, apellido, dni]);
    }
    
    var alumno = new Alumno('Juan', 'Perez', 34464544);
    var profesor = new Profesor('Fulanito', 'Profe', 1323311);
    
    alert("El nombre de alumno es entonces: " + alumno.obtenerNombre());
    alert("El nombre de profesor es entonces: " + profesor.obtenerNombre());
    
}());

/*
Secuencia de acciones:

1 - Creamos alumno, la funcion Alumno se llama y como la llamamos con el operador 'new' un nuevo objeto 
se genera como "this".
2 - Alumno llama a persona utilizando "call" en vez de usando la notacion de parentesis, y pasa "self"
para reemplazar el "this" de Persona.
3 - La funcion Persona se ejecuta y asigna la funcion "obtenerNombre" a la propiedad "obtenerNombre" de 
si mismo, logrando que el "this" de Alumno contenga tambien esta funcion.
4 - Realizamos los mismos pasos para profesor pero utilizamos el operador "apply" para llamar a la funcion
en vez de call, el cual realiza lo mismo pero sos parametros de la funcion llamada se pasan en forma de 
array.
5 - Se llama a la funcion obtenerNombre que tiene tanto Alumno como Profesor "heredadas" de cierta forma 
desde Persona.
*/



//*********************************************//
//PARTE 2: Sobreescribir una funcion y getters //
//*********************************************//

/*
Hay veces en que no queremos dar acceso para edicion a ciertas propiedades de un objeto y por lo tanto
utilizamos propiedades de "solo lectura" o getters. Estos tambien sirven para dar comportamientos complejos
a la obtencion de una propiedad, por ejemplo, podriamos convertir la funcion obtener nombre en una propiedad.

En este caso comenzaremos por crear una propiedad llamada profesion y la sobreescribiremos en las subclases
para reemplazar su comportamiento inicial por otro distinto. De forma demostrativa convertiremos la funcion
obtenerNombre en una propiedad para ver la diferencia en sintaxis cuando se obtiene su valor.

El objeto Object provee de funciones utilitarias para trabajar con objetos. Podemos observar las funciones que 
provee aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
*/


(function(){
    
    function Persona(nombre, apellido, dni){
        var self = this;
        
        //Parametro 1: Cual sera el objeto que contiene la propiedad
        //Parametro 2: Cual sera el nombre de la propiedad
        //Parametro 3: Objeto de configuracion
        Object.defineProperty(self, 'nombreCompleto', {
            get: function(){
                return nombre + ', ' + apellido;
            }
        });
        
        Object.defineProperty(self, 'profesion', {
            configurable: true, //Sin esta propiedad no podriamos sobreescribir la propiedad profesion
            get: function(){
                return 'no definida';
            }
        });
        
    } 

    function Alumno(nombre, apellido, dni){
        var self = this;
        Persona.call(self, nombre, apellido, dni);
        
        Object.defineProperty(self, 'profesion', {
            configurable: true,
            get: function(){
                return 'alumno';
            }
        });
    } 

    function Profesor(nombre, apellido, dni){
        var self = this;
        Persona.apply(self, [nombre, apellido, dni]);
        
        Object.defineProperty(self, 'profesion', {
            configurable: true,
            get: function(){
                return 'profesor';
            }
        });
    }
    
    var alumno = new Alumno('Juan', 'Perez', 34464544);
    
    alert("El nombre de alumno es " + alumno.nombreCompleto + " y su profesion " + alumno.profesion);
    
    alumno.profesion = "profesor";
    
    alert("Aun luego de settear la profesion a algo mas, como la propiedad no tiene setter " +
     "el valor permanece igual: " + alumno.profesion);
    
}());

/*
Secuencia de acciones:

1 - Luego de ejecutar la funcion Persona desde Alumno, podemos observar que Alumno genera la misma propiedad
profesion para si mismo lo cual "sobreescribe" la propiedad anterior que tenia el self.
2 - Luego de configurar esta propiedad podemos observar que el alert muestra como profesion del alumno el string "alumno".
3 - Aun cuando intentamos cambiar esta propiedad no podemos observar este cambio, definimos solo el "get" de la popiedad, y no
un set. Podemos observar que creamos una propiedad read-only.
*/