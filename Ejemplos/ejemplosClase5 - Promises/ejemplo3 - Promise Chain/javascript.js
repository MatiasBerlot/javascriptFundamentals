var promise = new Promise(promiseContructor);

promise.then(addTwo)
		.then(alert)
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