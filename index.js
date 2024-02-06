document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to load before adding event listener
    var signupLink = document.getElementById("signup-link");

    // Add click event listener
    signupLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = "signup.html";
    });
   
});