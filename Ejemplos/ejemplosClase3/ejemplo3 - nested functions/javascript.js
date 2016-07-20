var a = 5;

function foo(){
	
	var b = 6;
	//I can access b and a
	alert("calling foo" + a + b);
	foo1();	
	
	function foo1(){
		
		var c = 7;
		//I can access a, b and c
		alert("calling foo1" + a + b + c);
		foo2();	
		
		
		function foo2(){
			var d = 8;
			//I can access a, b, c and d
			alert("calling foo2" + a + b + c + d);
		}
	}
}

foo();