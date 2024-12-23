const button = document.getElementById("button");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

button.addEventListener("click", function (f) {
  if (username.value == "" || email.value == "" || password.value == "") {
    event.preventDefault();
    alert("All fields must be filled");
  }
});
