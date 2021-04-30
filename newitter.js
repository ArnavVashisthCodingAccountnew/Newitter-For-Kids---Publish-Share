
function addUser() {
    var checkBox = document.querySelector(".check");
    if (checkBox.checked == true) {
      staff_values= document.getElementById("staff").value;
      if (staff_values == 2942021){
        staff_values = true; 
        localStorage.setItem("staff", staff_values);
      }
      user_name = document.getElementById("user_name").value;
      password = document.getElementById("password").value;
        localStorage.setItem("user_name", user_name);
        localStorage.setItem("password", password);
          window.location = "newitter_room.html";
    } else {
       alert("Error. Made by Tchind Technologies.  Pls fill the captcha. ")
    }
      
  
  
     
    }
    
    
