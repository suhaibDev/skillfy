let username = document.getElementById("userName");
let user = JSON.parse(localStorage.getItem('user'));
let regBtn = document.getElementById("registerBtn")
let isLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
let logoutBtn = document.getElementById("logoutBtn")

username.innerText = isLoggedIn ? user.name : ""
regBtn.style.display = isLoggedIn ? "none" : "block";
logoutBtn.style.display = isLoggedIn ? "block" : "none";


document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Create user object
    var user = {
      name: name,
      dob: dob,
      gender: gender,
      phone: phone,
      email: email,
      username: username,
      password: password
    };
    console.log(user)
    // Store user object in local storage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userLoggedIn",true);
    alert("User is registered succesfully")
    window.location.href = "/home.html"
});

function logout(){
    localStorage.setItem("userLoggedIn",false);
}