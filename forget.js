 function sendPasswordReset() {
      var email = document.getElementById('email_field').value;

      firebase.auth().sendPasswordResetEmail(email).then(function() {
      
        alert('Password Reset Email Sent! Please do chech in snap also !!');

      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
       
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        
      });
      
    }