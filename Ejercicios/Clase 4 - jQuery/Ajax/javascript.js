$.ajax = function(url, options){
    var deferred = $.Deferred();
    
    if(url === "/myNumbers1"){
	setTimeout(function(){
		deferred.resolve({ data: [1,2,3] });
	}, 3000);	
    } else if(url === "/myNumbers2"){
	setTimeout(function(){
		deferred.resolve({ data: [3,4,5] });
	}, 3000);	
    } else {
	setTimeout(function(){
		deferred.reject("There was an error");
	}, 3000);	
    }
    
    return deferred.promise();
}


/*Ejercicios aqui*/