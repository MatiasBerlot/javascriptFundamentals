var promise = new Promise(promiseContructor);

//la funcion then siempre devuelve otra promesa por eso podemos encadenar los thens como se muestra a continuacion
promise.then(addTwo)
		//la promesa que retorna un then se va a resolver con lo que se retorna en la misma promesa
		//por eso este metodo puede ser utilizado para modificar el resultado de una promesa y pasar ese procesamiento a la proxima.
		.then(alert)
		//por ultimo si alguna de las promesas falla el codigo va a ir directamente a la primer promesa que tenga una funcion para manejar el rechazo de la cadena de promesas.
		.catch(onError);

function promiseContructor(resolve, reject){
	var result = 1;
	if(result===1){
		setTimeout(function(){resolve(result);}, 3000);
	}
	else{
		reject(Error("something went wrong :("));
	}
}

function addTwo(val){
	return val+2;
	//throw 'I can count to potato';
}

function onError(error){
	alert('ERROR!! - ' + error);
}