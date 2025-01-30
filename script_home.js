// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Grab the form element
  const form = document.getElementById("formElem");

  // Grab the injectionOutput element
  const output = document.getElementById("injectionOutput");

  if (form) {
    // Add an event listener to handle the form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Get the values entered in the username and password fields
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Check for SQL injection payloads (simple example)
      if (password.includes("'") || password.toLowerCase().includes("or")) {
        output.textContent = "[{\"username\":\"admin\",\"password\":\"@dmin#1234\",\"email\":\"admin@fakebank.org\",\"phone\":\"123-555-0678\",\"social\":\"111-111-1122\",\"checking\":\"$0.00\",\"savings\":\"$0.00\"}]";
      } else if (username === "admin" && password === "@dmin#1234") {
        output.textContent = "Login successful!";
      } else {
        output.textContent = "Invalid username or password.";
      }
    });
  }
});
