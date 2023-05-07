document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value.toLowerCase();
    var message = document.getElementById("message").value;
    alert("Thank you "+name+ " your request is received, we will reach u at "+email)
});