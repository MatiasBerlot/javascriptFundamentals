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
	
	//Ejercicio 5
	var endpoint3Callback = callMyNumbers3().catch(handleError);
	
	Promise.all([callMyNumbers1(), callMyNumbers2(), endpoint3Callback])
		.then(alertResults)
		.catch(handleError) //Should never enter here since the error was handled before
		.then(messurePerformance("Ejercicio 5"));
	
}());
