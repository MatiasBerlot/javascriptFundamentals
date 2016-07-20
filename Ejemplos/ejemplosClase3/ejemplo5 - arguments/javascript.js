function foo(){
	for(var a = 0; a < arguments.length; a++){
		alert(arguments[a]);
	}
}

foo("a", "b", "c");
