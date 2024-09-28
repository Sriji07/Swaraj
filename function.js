document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration successful!");
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login successful!");
});

document.getElementById("voteForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Vote cast successfully!");
});
