var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("login");

submit.onclick = function(){
  var form = {
    username: username.value,
    password: password.value
  };
	alert(form.username + " " + form.password);
}