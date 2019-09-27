
function m() {
  

firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
  var userMail = user.email;
 
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
var fo = document.getElementById('mai').value;
var tm = document.getElementById('type').value;
var ti = new Date();


if(tm == "circular")
{
  var color='green';
}
else
{
  var color ='blue';
}


var des = document.getElementById('des').value;
var de ="javascript:alert('"+des+"')";
console.log(de);
var td = document.getElementById('tod').value;

 console.clear();
  

var database = firebase.database().ref("event");
var newPostRef = database.push();
 window.alert("YOUR DATA HAS BEEN UPDATED !!!");
newPostRef.set({
'start': fd,
'title': name,
'end' : td,
'url' : de,
'color': color, 
'created_by': userMail,
'event_for': fo,
'time':ti

});

});

}

