
var submit = document.getElementById("submit");
var signUpForm = document.getElementById("signUpForm");
var signup = document.getElementById("signup");
submit.addEventListener('click', function(event) {
  event.preventDefault();

  // Fetch input field values

  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("conPass").value;
  

  // Validate input fields
  if (username === '' || password === '' || confirmPassword === '') {
    alert('All fields are required');
    return;
}

if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
}
  //create data object to send to the server
  var data = {
    username: username,
    password: password,
    
  };

  //Send a POST request to the server
  fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  })

  .then(response => {
    if (response.ok) {
      alert('Registration Successful');
      window.location.href = "components/LoginForm/main/index.html";
    } else {
      alert('Registration unsuccessful. Error 405');
      signup.textContent = "Please proceed to login page";
      setTimeout(() => {
        signup.textContent = "Redirecting..";
      }, 800);
      setTimeout(() => {
        window.location.href = "components/LoginForm/index.html";
      }, 1500);
    }
   
})

  .catch(error => {
      // Handle error response
      alert(error.message);
      alert('An error occurred. Please try again.');
});


})





































// function validation() {
//   var signup = document.getElementById('signup');
 
//   var username = document.getElementById("name").value;
//   var user = document.getElementById("user");
//   var pass = document.getElementById("pass");
//   var confirmPass = document.getElementById("conPass");
//   var mobileNumber = document.getElementById("mobileNumber").value;
//   var emails = document.getElementById("emails").value;
 

//   if (pass.value !== "" && user.value !== "" && username !== "" && confirmPass.value === pass.value) {
//     signup.textContent = "Registration Successful...";
//     setTimeout(() => {
//       signup.textContent = "The registration cannot properly work with backend service...  Redirecting... ";
      
//     }, 500);
//     setTimeout(() => {
//       window.location.href = "components/LoginForm/main/index.html";
//     }, 2000);
    
//   } else {
//     alert("Registration Unsuccessful");
//     signup.textContent = "Try again";
    
//   }
 
// }