function checkUsername() {
  // Declare function
  var elMsg = document.getElementById("feedback"); // Get feedback element
  if (this.value.length < 5) {
    // If username too short
    elMsg.textContent = "Username must be 5 characters or more"; // Set msg
  } else {
    // Otherwise
    elMsg.textContent = ""; // Clear message
  }
}

var name = document.getElementById("name"); // Get username input
elUsername.onblur = checkUsername; // When it loses focus call checkuserName()

// using event listeners
name.addEventListener("blur", checkUsername);

function dispalyName() {
    elMsg.innerHTML = this.value;
}

btn.addEventListener('click', dispalyName)