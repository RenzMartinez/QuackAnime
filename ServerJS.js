// My Storage fr
if (!localStorage.getItem("user") || !localStorage.getItem("pass")) {
    localStorage.setItem("user", "DuDuckyHD");
    localStorage.setItem("pass", "1234");
}

function SignIn(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    // This part will save data is like omg data
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);

    alert("Sign-in successful!");
    location.replace("index.html");
    return true;
}

function LogIn(event) {
    event.preventDefault();

    let enteredUser = document.getElementById("User").value;
    let enteredPass = document.getElementById("Pass").value;

    // This part will get data from the sign in 
    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    if (enteredUser !== storedUser || enteredPass !== storedPass) {
        alert("Wrong Username or Password. Please try again.");
        return false;
    }

    alert("Log-in successful!");
    location.replace("Homepage.html");
    return true;
}
