var alerter = (function(){
	var a = 5;
	
	return function(){
		alert(a)
	}
})();


alerter();