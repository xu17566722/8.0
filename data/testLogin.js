$(document).ready(function(){

   $("#u185").click(function(){
   		var username = $("#u186_input").val();
   		var password = $("#u187_input").val();
   		alert("Login: "+username+" "+password);
   		createCookie("username",username,1);
	   		// window.localStorage.setItem("username",username);
   });
});