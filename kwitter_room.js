


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJqgd17KOkJrK9a0rthqLYp3uJpagKhGg",
    authDomain: "newitter-7d77d.firebase.com",
    databaseURL: "https://newitter-7d77d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "newitter-7d77d",
    storageBucket: "newitter-7d77d.spot.com",
    messagingSenderId: "8091704970",
    appId: "1:8091704970:web:cd234328a2935875d71773",
    measurementId: "G-N4VL6VN337"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Namaste  " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "newitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "newitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "newitter.html";
}