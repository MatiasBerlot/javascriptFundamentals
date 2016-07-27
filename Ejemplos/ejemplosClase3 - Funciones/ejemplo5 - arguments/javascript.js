function foo(){
	for(var a = 0; a < arguments.length; a++){
		alert('the value of argument ' + a + ' is ' + arguments[a]);
	}
}

foo("a", "b", "c");
