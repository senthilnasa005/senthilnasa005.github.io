 function toggleSignIn() {
      if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.GoogleAuthProvider();
       
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        
        firebase.auth().signInWithPopup(provider).then(function(result) {
      
          var token = result.credential.accessToken;
          
          var user = result.user;
          // [START_EXCLUDE]
         
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          
          var email = error.email;
          
          var credential = error.credential;
          
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
           
          } else {
            console.error(error);
          }
          
        });
        // [END signin]
      } else {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      }
      // [START_EXCLUDE]
      document.getElementById('quickstart-sign-in').disabled = true;
      // [END_EXCLUDE]
    }