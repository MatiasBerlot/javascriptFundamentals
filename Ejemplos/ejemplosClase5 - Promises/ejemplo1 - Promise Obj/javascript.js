//creacion de nueva instancia del objeto Promise, la cual recibe como parametro una funcion que es ejecutada inmediatamente.
var promise = new Promise(promiseContructor);

//El objeto promise expone un metodo .then el cual recibe como parametros dos funciones, una para el caso en que se resuleve exitosamente y el segundo en el caso de error
//el ejemplo de la siguiente linea solo se pasa un parametro para el caso en que se resuelve exitosamente
promise.then(alert);

//funcion que se pasa como parametro al objeto Promise de la primer linea del ejemplo, recibe como parametros una funcion para resolver y la otra para rechazar la promesa
function promiseContructor(resolve, reject){
	var result = 1;
	if(result===1){
		//seteando un retraso de ejecucion para simular procesamiento	
		setTimeout(function(){
			//resolviendo la promesa
			resolve(result);
		}, 5000);//5 segundos
	}
	else{
		//rechazando la promesa
		reject(Error("something went wrong :("));
	}
}

//el ejemplo de la siguiente linea solo se pasa un parametro para el caso en que se resuelve exitosamente
//todos los thens que realizen sobre una promesa van a aguardar a que la promesa se cumpla (ya sea que se resuelva o se rechaze) para ejecutarse
//las promesas solo pueden estar en uno de dos posibles estados, resulta o rechazada, una vez cumplida su estado no puede ser cambiado
//las promesas son ejecutadas una sola vez, si se ejecuta algun then despues de que fue resuelta va a retornar el valor con el cual se resolvio (o rechazo)
promise.then(alert);
