var alerter = (function(){
	var a = 5;
	
	return function(){
		alert('value of a: ' + a);
	}
})();


alerter();