var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// To apply the default browser preference instead of explicitly setting it.
firebase.auth().useDeviceLanguage();
provider.setCustomParameters({
  'login_hint': 'user@bitsathy.ac.in'
});
function gsign(){

	firebase.auth().signInWithRedirect(provider);
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {

  	  console.log("test");
  	 
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
  
    // ...
  }
  // The signed-in user info.
  var user = result.user;
  if(user != null){
  	  window.location.href="lod.html";
  	}

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}