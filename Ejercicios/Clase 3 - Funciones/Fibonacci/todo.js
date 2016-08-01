var inicio = performance.now();

//We create a function that executes itself afterwards
//and returns another function
var fibonacci = (function(){
    
    //This object serves as cache for results
    //This variable is not accesible from outside the fibonacci function
    var cache = { "0": 1, "1": 1 };

    //This is the fibonacci function implementation returned by the self invoked function
    return function(n){
        
        //If the result is into the cache do not calculate it, return it directly
        if(cache[n] || cache[n] === 0){
            return cache[n]; 
        }
        
        //If the result is not witihn the cache, calculate it and assign it to the cache
        //The = operator assigns a value to a variable and then returns that value (alert(a = "a") shows "a" into a dialog)
        return (cache[n] = fibonacci(n-1) + fibonacci(n-2));
    }
    
})(); //Here we are executing the self invoked function, do not forget the semicolons (;)

var result = fibonacci(200);
var final =  performance.now();

alert(result);
//Time in miliseconds
alert(final - inicio);