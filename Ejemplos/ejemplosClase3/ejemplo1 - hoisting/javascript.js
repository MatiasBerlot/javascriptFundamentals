foo();

function foo(){
	alert("foo being called");
}


try{
	variableFoo();
	var variableFoo = function(){ 
		alert("variableFoo being called") 
	};
} 
catch(error) {
	alert("Error calling variableFoo");
}