
let username = document.getElementById("userName");
let user = JSON.parse(localStorage.getItem('user'));
let regBtn = document.getElementById("registerBtn")
let isLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'));
let logoutBtn = document.getElementById("logoutBtn")

username.innerText = isLoggedIn ? user.name : ""
regBtn.style.display = isLoggedIn ? "none" : "block";
logoutBtn.style.display = isLoggedIn ? "block" : "none";

if(localStorage.getItem("userLoggedIn")){
    regBtn.style.display = "none"
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var registeredUser =  JSON.parse(localStorage.getItem("user"));
    console.log(registeredUser)
    // Create user object
    if(registeredUser?.username === username && registeredUser?.password === password){
        // Store user object in local storage
        localStorage.setItem("userLoggedIn", true);
        alert("User is logged in succesfully")
        window.location.href = "/home.html"
    }else{
        alert("Invalid Credential")
    }


});

function logout(){
    localStorage.setItem("userLoggedIn",false);
}