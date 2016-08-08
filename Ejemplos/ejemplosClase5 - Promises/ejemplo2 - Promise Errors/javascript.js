//misma estrutura que ejemplo 1
var promise = new Promise(promiseContructor);

promise.then(alert);

function promiseContructor(resolve, reject){
	var result = 2;
	if(result===1){
		setTimeout(function(){resolve(result);}, 5000);
	}
	else{
		reject(Error("something went wrong :("));
	}
}

//en este caso vemos que ademas de la funcion then existe la funcion catch que no es mas que sintactic sugar para then(undefined, function(){});
promise.catch(onError);

//aca podemos ver lo que mencionamos y como es mas claro leer el catch en vez de esto
promise.then(undefined, onError);

//funcion reutilizada en caso de error
function onError(error){
	alert('ERROR!! - ' + error);
}