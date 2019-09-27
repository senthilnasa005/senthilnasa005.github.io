firebase.auth().onAuthStateChanged(function(user) {

  if(user==null){
  window.location.href="login.html";
  return;
  }
  var Mail= user.email;
  document.getElementById("mail").innerHTML = Mail;
  var userMail= user.email.split('@')[0];
  var users= user.email.replace(".","");
  document.getElementById("name").innerHTML = userMail;
  
  var imga = 'user/img/'+userMail+'.jpg';
      console.log(imga);
      document.querySelector('img').src = imga;
  
 var database = firebase.database();

  ref.on("value", gotData1, errData);


   


  function gotData1(data) {
  
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

 console.log(keys);
    var phone = fruits.number;
    var add = fruits.Address;
    
     document.getElementById("phone").innerHTML = phone;
     document.getElementById("add").innerHTML = add;
     console.log('test1');
     //Photo of the user
    
    

  }

  function errData(data) {
  
  console.log(err);
  console.log('err');

  
  }
});
