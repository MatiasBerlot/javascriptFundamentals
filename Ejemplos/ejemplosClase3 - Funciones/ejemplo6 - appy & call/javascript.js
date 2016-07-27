function foo(){
	this[arguments[0]] = arguments[1];
}

var b = {
	
};

foo.call(b, "a", 5);
alert(b.a);


var c = {
	
};

foo.apply(c, ["a", 8]);
alert(c.a);