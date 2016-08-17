(function(){
	
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
	
	function callMyNumbers1(){
		return $.ajax('/myNumbers1').then(function(result){ return result.data; });
	}
	
	function callMyNumbers2(){
		return $.ajax('/myNumbers2').then(function(result){ return result.data; });
	}
	
	function callMyNumbers3(){
		return $.ajax('/myNumbers3').then(function(result){ return result.data; });
	}
	
	function unifyResults2(myNumbers1){
		return callMyNumbers2().then(function(myNumbers2){
			return [myNumbers1, myNumbers2];
		});
	}
	
	function unifyResults3(otherNumbers){
		return callMyNumbers3().then(function(myNumbers3){
			return otherNumbers.push(myNumbers3);
		});
	}
	
	function addResults(arrays){
		
		var result = [];
		
		for(var i = 0; i < arrays[0].length; i++)
		{
			result[i] = 0;
			
			arrays.forEach(function(array){
				result[i] += array[i]; 
			});
		}
		
		return result;
	}
	
	function alertResults(array){
		for(var i = 0; i < array.length; i++)
		{
			console.log("Result[" + i + "] = " + array[i]);
		}
	}
	
	function messurePerformance(ejercicio){
		
		var initial = performance.now();
		
		return function(){
			var final = performance.now();
			console.log(ejercicio + " - Performance:" + (final - initial));
		};	
	};
	
	function handleError(error){
		console.log(error);
	}

	//Ejercicio 3
	callMyNumbers1()
		.then(unifyResults2)
		.then(unifyResults3)
		.then(addResults)
		.then(alertResults)
		.catch(handleError)
		.then(messurePerformance("Ejercicio 3"));
}());
