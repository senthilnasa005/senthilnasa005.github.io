window.alert("stop2");
function m() {
  

firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
 
   var userMail= user.email.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");

var name = document.getElementById('name').value;
var fd = document.getElementById('fod').value;
var td = document.getElementById('tod').value;
var  = document.getElementById('tod').value;
var td = document.getElementById('tod').value;

 window.alert("YOUR DATA HAS BEEN UPDATED !!!");
 console.clear();
  

var database = firebase.database().ref("event");
var newPostRef = database.push();
newPostRef.set({
'start': fd,
'title': name,
'end' : td

});

});

}

