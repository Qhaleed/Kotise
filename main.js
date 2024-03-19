
var submit = document.getElementById("submit");

submit.addEventListener('click', function(event) {
  event.preventDefault();

  // Fetch input field values

  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("conPass").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("emails").value;
  var mobileNumber = document.getElementById("mobileNumber").value;

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
    name: name,
    email:email,
    mobileNumber: mobileNumber
  };

  //Send a POST request to the server
  fetch('/create-account', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
        throw new Error('Registration Unsuccessful');
    }
    return response.json();
})
  .then(data => {
      // Handle success response
      alert('Registration Successful');
      window.location.href = "components/LoginForm/main/index.html";
  })
  .catch(error => {
      // Handle error response
      alert(error.message);
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