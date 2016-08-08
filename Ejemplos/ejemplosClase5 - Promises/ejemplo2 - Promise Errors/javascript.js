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

promise.catch(onError);

promise.then(undefined, onError);

function onError(error){
	alert('ERROR!! - ' + error);
}