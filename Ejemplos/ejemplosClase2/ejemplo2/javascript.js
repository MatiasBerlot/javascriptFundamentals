var username = document.getElementById("username");
var password = document.getElementById("password");

var form = {
	username: username.value,
	password: password.value
};


var propertyNames = Object.getOwnPropertyNames(form);

for(var i = 0; i < propertyNames.length; i++){
	alert(propertyNames[i] + ": " + form[propertyNames[i]]);
}