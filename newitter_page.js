 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCLGpxZs2pD9mqZCrFwuOI0gYPdRWN5Ksw",
    authDomain: "kwitter-6abca.firebase.com",
    databaseURL: "https://kwitter-6abca-default-rtdb.firebaseio.com",
    projectId: "kwitter-6abca",
    storageBucket: "kwitter-6abca.appspot.com",
    messagingSenderId: "231606977400",
    appId: "1:231606977400:web:d2d2878892c4b97584fe8d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
           console.log(firebase_message_id);
             console.log(message_data);
             name_ = message_data['name'];
             message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name_ +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
           like_button =" <hr> <button class='btn btn-warning'  id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>  </hr>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span>" + "<br>" ;


          row = "<input type='text' id='PIN' placeholder='Only for support'> </input>" + name_with_tag + message_with_tag +like_button + span_with_tag ;       
          document.getElementById("output").innerHTML += row;
  //End code
        } });  }); }
  getData();
  
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
      button_id = message_id;
      document.getElementById("PIN").innerHTML = PIN;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
  
      firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes  
       });
if (PIN = 45213 ){
  firebase.database().ref(room_name).child(message_id).update({
    message : "This Post has been deleted due to malcontent."  
 });
}
      
    
  
       
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("newitter.html");
  }

 
