function LoginFormManager(historyTracker) {
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
    historyTracker.newLogin({username: self.getUsername(), password: self.getPassword()});
	event.preventDefault();
  }
}

function LoginHistoryTracker(){
	var self = this;
	var historyList = document.getElementById("history");
	var loginHistory = [];
	
	self.newLogin = function(loginData){
		loginHistory.push(loginData);
		createNewEntry(loginData);
	}
	
	function createNewEntry(loginData){
		var newElement = document.createElement("li");
		newElement.innerHTML = loginData.username + " " + loginData.password;
		historyList.appendChild(newElement);
	}
}

var historyTracker = new LoginHistoryTracker();
var manager = new LoginFormManager(historyTracker);