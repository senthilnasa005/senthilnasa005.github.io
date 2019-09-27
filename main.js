firebase.auth().onAuthStateChanged(function (user) {

  if (user == null) {
    window.location.href = "login.html";
    return;
  }


  var Mail = user.email;
  if(Mail.includes("hod")){
  var p = ['all','staff','hod'];

  }
  else if(Mail.includes("17")){
  var p = ['all','student'];

  }
   else if(Mail.includes("18")){
  var p = ['all','student'];

  }
   else if(Mail.includes("16")){
  var p = ['all','student'];

  }
   else if(Mail.includes("15")){
  var p = ['all','student'];

  }
   else if(Mail.includes("13")){
  var p = ['all','student'];

  }
   else if(Mail.includes("14")){
  var p = ['all','student'];

  }
   else if(Mail.includes("bitsathy.ac.in")){
  var p = ['all','staff'];

  }
  else{}


  var userMail = user.email.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");
  var userMail = userMail.replace(".", "");

  console.log(userMail);

  var database = firebase.database();
  var ref = database.ref('event');
  var b = [];

  
p.forEach(function(item){ 

 ref.orderByChild("event_for").equalTo(item).on("value", gotData, errData);
       
    }); 

 // ref.orderByChild("event_for").equalTo('staff').on("value", gotData, errData);


  function gotData(data) {
    var fruits = data.val();
    var keys = Object.keys(fruits);
    
    
    console.clear();

    for (var i = keys.length - 1; i >= 0; i--) {

      var j = i;
      var key = keys[j];
      var test = fruits[key];
      b.push(test);
     console.clear();
    }

  
 
  
    





    $(document).ready(function () {

      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: new Date(),
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events



        events: b
      });

    });
console.clear();


  }
  function errData(data) {
    console.log("database");


    console.log('err');


  }

});
