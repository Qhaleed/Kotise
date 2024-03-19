
   
    var submit = document.getElementById("submit");
    var username = document.getElementById("name").value;
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");
    var confirmPass = document.getElementById("conPass");
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;
    var signup = document.getElementById('signup');


    submit.addEventListener('click', validation)

function validation() {
  if (pass.value != "" && user.value != "" ) {
    alert("Registration successful");
    window.location.href = "components/LoginForm/main/index.html";
  } else {
    alert("Registration Unsuccessful");
    
  }
 
}