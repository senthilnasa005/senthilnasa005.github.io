firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      }


   var userMail= user.email.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   var userMail= userMail.replace(".","");
   


   const dbRefobject = firebase.database().ref("users/"+userMail);
   console.log(userMail);
  //synic
   dbRefobject.once('value').then(function(snapshot){
   
    var ss=snapshot.val();
    //console.log(ss);
    if(ss != null){
var usertype=ss;
console.log(usertype);
console.clear();

  if (usertype =="admin") {

   console.log(welcome admin);
  }

  else {  
   window.location.href="index.html";

  }
console.clear();
 
}
else{
   window.location.href="index.html";
  
}
});



  } else {
 window.location.href="login.html";
    
  
  }
});
//gamil


