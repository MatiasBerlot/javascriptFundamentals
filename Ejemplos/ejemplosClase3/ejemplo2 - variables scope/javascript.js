var a = 6;

function foo(){
	var a = 5; //Creating own a
	alert(a);
}

function foo2(){
	var b = 7;
	alert(a); //Priting a from global scope
	alert(b);
	a = 8; //Editing a from global scope
}

//This will print 5
foo();
//This will print 6
alert(a);
//This will print 6 and then 7
foo2();
//This will now print 8
alert(a);

