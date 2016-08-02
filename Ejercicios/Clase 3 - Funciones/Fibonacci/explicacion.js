/*
Ejecutar el programa abriendo el archivo: explicacion.html, luego verificar que los mensajes
mostrados en pantalla siguen los conceptos explicados.


Sucesion de Fibonacci:

Definicion:
f(n) = f(n-1) + f(n-2)
Partiendo de que:
f(0) = 0
f(1) = 1

Se obtienen los siguientes numeros:
f(2) = 1
f(3) = 2
f(4) = 3
f(5) = 5

La implementacion basica de la funcion de Fibonacci en javascript es la siguiente utilizando recursion:
*/

function fibonacci(n){
    if(n === 0){
        return 0;
    }
    else if(n === 1){
        return 1;
    }
    
    return fibonacci(n-1) + fibonacci(n-2);
}

alert("Usando fibonacci basico obtenemos que fibonacci(5): " + fibonacci(5));





/*
El problema de esta funcion es que para n 'grandes' la performance empieza a sufrir, 
esto se debe a que se realizan muchos calculos innecesarios, aqui una medicion de 
performance usando performance.now();
*/

var performanceFibonacciBasicoInicial = performance.now();
var fibonacci40 = fibonacci(40);
var performanceFibonacciBasicoFinal = performance.now();
alert("Usando fibonacci basico obtenemos que fibonacci(40): " + fibonacci40);
alert("fibonacci(40) tardo en ejecutarse: " + (performanceFibonacciBasicoFinal - performanceFibonacciBasicoInicial) / 1000 + " segundos");




/*
Una mejora posible es agregar cacheo a la funcion de fibonacci, lo cual resulta muy 
simple si usamos un objeto de javascript y usamos la notacion de array para almacenar 
valores utilizando algo similar a un diccionario
*/

var cache = { "0": 0, "1": 1 };

function fibonacciConCache(n){
    //Revisamos el cache para ver si existe algun valor, recordar que cache[0] = 0 evaluaria falso al resultar igual a 0
    if(cache[n] || cache[n] === 0){
        return cache[n];
    }
    
    //Recordar que el operador = no solo asigna sino que tambien devuelve el valor de la expresion a la derecha
    return (cache[n] = fibonacciConCache(n-1) + fibonacciConCache(n-2));
}




/*
Ahora, si hacemos el mismo analisis de performance para este ejemplo notaremos la diferencia
*/

var performanceFibonacciConCacheInicial = performance.now();
var fibonacciConCache40 = fibonacciConCache(40);
var performanceFibonacciConCacheFinal = performance.now();
alert("Usando fibonacci con cache obtenemos que fibonacci(40): " + fibonacciConCache40);
alert("fibonacciConCache(40) tardo en ejecutarse: " + (performanceFibonacciConCacheFinal - performanceFibonacciConCacheInicial) / 1000 + " segundos");




/*
El ejemplo anterior sigue presentando un problema: nuestra variable cache es accesible desde el exterior de la funcion de fibonacci,
permitiendo que el cache se modifique desde el exterior y asi alterar el resultado de nuestra operacion. Por ejemplo:
*/

cache[40] = 2;
alert("Nuestro primer calculo dio como resultado " + fibonacciConCache40 + " el segundo dio como resultado " + fibonacciConCache(40));




/*
Para solucionar esto podemos utilizat una self invoking function. Su proposito es encapsular el contenido que queremos ocultar, 
la sintaxis es la siguiente:
*/

var resultadoSelfInvoking = (function(){
   
   //Esta seccion no es accesible desde el exterior, queda encapsulada dentro de la self invoking function
   var inaccesible = "inaccesible desde el exterior";
    
    //Esta funcion esta dentro de la self invoking function
    function leeInaccesible(){  
        /*Desde aqui podemos acceder a la variable inaccesible, ya que esta funcion es interior a la self invoking function.
          Recordar que las funciones pueden acceder a sus propias variables y las que esten por fuera de ellas que no esten 
          encapsuladas dentro de otra funcion*/
        alert(inaccesible);
    }; 
    
    return leeInaccesible; //Este es el resultado de la self invoking function y quedara almacenado en "resultadoSelfInvoking"
    
})();




/*
El resultado de la self invoking function fue una funcion (leeInaccesible), si llamamos a esta funcion observaremos el resultado
*/

resultadoSelfInvoking(); //Muestra "inaccesible desde el exterior" en pantalla

try{
    alert("El valor de la variable inaccesible desde fuera de la self invoked function es:" + inaccesible);
}
catch(ex){
    alert("La variable inaccesible no ha sido definida, por lo tanto no puede leerse y tira une exepcion. Esto se debe a que inaccesible no esta declarada desde el exterior de la self invoking function.")
}




/*
Poemos utilizar el mismo concepto para encapsular la variable cache de la funcion de fibonacci,
para ello creamos una self invoking function y ponemos el contenido de nuestra funcion de fibonacci anterior dentro
Luego ejecutaremos la funcion nos aseguraremos que nuestro cacheInterior es inaccesible desde afuera
*/

var fibonacciSelfInvoking = (function(){
    
    var cacheInterior = { "0": 0, "1": 1 };

    function fibonacci(n){
        if(cacheInterior[n] || cacheInterior[n] === 0){
            return cacheInterior[n];
        }
        
        return (cacheInterior[n] = fibonacci(n-1) + fibonacci(n-2));
    }
    
    return fibonacci;
    
})();

var fibonacciSelfInvoking40 = fibonacciSelfInvoking(40);
alert("Usando fibonacciSelfInvoking obtenemos que fibonacciSelfInvoking(40): " + fibonacciSelfInvoking40);

try{
    cacheInterior[40] = 2;
    alert("Nuestro primer calculo dio como resultado " + fibonacciSelfInvoking40 + " el segundo dio como resultado " + fibonacciSelfInvoking(40));
}
catch(ex){
    alert("La variable cacheInterior no ha sido definida, por lo tanto no puede leerse. Esto se debe a que cacheInterior no esta declarada desde el exterior de la self invoking function de fibonacci.")
}
