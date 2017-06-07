$(document).ready(function(){
	var loggedIn = false;
	if (getCookie("username")!=null){
		loggedIn = true;
	}
	
	function showUserPage(){
	   if (loggedIn) {
		   var username = getCookie("username")
		   console.log("Logged In!" + username);
	  		//44,186,46,187,184 is code for Uname, Uname Input, Pw, Pw input, login
	  		$("#loginSect").replaceWith("<div id='u46' class='ax_default box_2'><div id='u46_div' class=''></div><div id='u47' class='text' style='visibility: visible;'><p><span>"+"Welcome, "+username+" !"+"</span></p></div></div>");
	  }
	}
	
	showUserPage();
   $("#u185").click(function(){
   		var username = $("#u186_input").val();
   		var password = $("#u187_input").val();
   		
   		//TODO: verify username and password with the server
   		alert("Login: "+username+" "+password);
   		
   		createCookie("username",username,1);
   		loggedIn = true;
   		showUserPage();
   });

	eraseCookie("username");

});