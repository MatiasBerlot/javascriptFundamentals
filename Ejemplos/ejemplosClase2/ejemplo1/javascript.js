//Create a script to get the values of the form inputs and puts them into an object created with {} (creation of objects usin {})
var username = document.getElementById("username");
var password = document.getElementById("password");

var form = {
	username: username.value,
  password: password.value
};

alert(form.username + " " + form.password);