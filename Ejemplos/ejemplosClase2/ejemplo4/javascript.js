function LoginFormManager() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var submit = document.getElementById("login");
  
  var self = this;
  
  self.getUsername = function(){
  	return username.value;
  };
  
  self.getPassword = function(){
  	return password.value;
  }

  submit.onclick = function(event){
    alert(self.getUsername() + " " + self.getPassword());
    event.preventDefault();
  }
}

var manager = new LoginFormManager();
 alert(manager.getUsername() + " " + manager.getPassword());