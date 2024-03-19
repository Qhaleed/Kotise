
var submit = document.getElementById("submit");

submit.addEventListener('click', validation)

function validation() {
  var signup = document.getElementById('signup');
 
  var username = document.getElementById("name").value;
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  var confirmPass = document.getElementById("conPass");
  var mobileNumber = document.getElementById("mobileNumber").value;
  var emails = document.getElementById("emails").value;
 

  if (pass.value !== "" && user.value !== "" && username !== "" && confirmPass.value === pass.value) {
    signup.textContent = "Registration Successful...";
    setTimeout(() => {
      window.location.href = "components/LoginForm/main/index.html";
    }, 500);
    
  } else {
    alert("Registration Unsuccessful");
    signup.textContent = "Try again";
    
  }
 
}