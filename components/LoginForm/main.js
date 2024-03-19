// Get the submit button and add a click event listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', validateForm);

// Define the validation function
function validateForm() {
  // Get the username and password input values
  const usernameInput = document.getElementById("user").value.trim();
  const passInput = document.getElementById("pass").value.trim();

  // Define a regular expression for validating the username and password
  const regex = /^[a-zA-Z0-9]{2,20}$/;

  // Validate the username and password input
  if (!regex.test(usernameInput)) {
    alert("Invalid username. Username must be between 2 and 20 characters and can only contain letters and numbers.");
    return false;
  }

  if (!regex.test(passInput)) {
    alert("Invalid password. Password must be between 5 and 20 characters and can only contain letters and numbers.");
    return false;
  }

  // Define the accounts array with plaintext passwords
  const accounts = [
    {
      username: 'user1',
      pass: 'password1'
    },
    {
      username: 'user2',
      pass: 'password2'
    }
  ];

  // Find the account with the matching username and password
  const account = accounts.find(account => account.username === usernameInput && account.pass === passInput);

  if (account) {
    // Redirect to the main page
    alert('Credentials Acknowledge')
    setTimeout(() => {
      window.location.href="main/index.html";
    }, 100);

    
  } else {
    alert("Invalid credentials");
  }

  return false;
}