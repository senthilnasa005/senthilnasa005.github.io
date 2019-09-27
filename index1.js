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
   


   const dbRefobject = firebase.database().ref("users");
  //synic
   dbRefobject.once('value').then(function(snapshot){
   
    var ss=snapshot.val();
    console.log(ss);
    if(ss != null){
var usertype=ss.type;


  if (usertype =="admin") {

    window.location.href="admin.html";
  }

  else if (usertype =="user") {
    
    window.location.href="index1.html";
  }

  else{
     window.location.href="jo.html";
  }
}
else
 window.location.href="index1.html";
});



  } else {
 window.location.href="login.html";
    
  
  }
});
//gamil

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

