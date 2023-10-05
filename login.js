document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("email");
    const passwordInput = document.getElementById("pswd");
    const loginError = document.getElementById("loginError");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate authentication (replace with actual backend logic)
        const username = usernameInput.value;
        const password = passwordInput.value;

        // For demonstration purposes, consider 'username' and 'password' as valid
        if (username === "" && password === "") {
            // Failed login
            loginError.textContent = "Invalid login info.";
            loginError.style.color = "rgb(161, 0, 0)";
            loginError.style.backgroundColor = "white";
            loginError.style.padding = "15px";
            loginError.style.width = "100%";
            loginError.style.borderRadius = "20px";
            loginError.style.margin = "auto";
        } else if (username === "" || password === "") {
            // Failed login
            loginError.textContent = "Invalid login info.";
            loginError.style.color = "rgb(161, 0, 0)";
            loginError.style.backgroundColor = "white";
            loginError.style.padding = "15px";
            loginError.style.width = "100%";
            loginError.style.borderRadius = "20px";
            loginError.style.margin = "auto";
        } else {
            // Successful login
            loginError.textContent = "Login successful!";
            loginError.style.color = "green";
            // loginError.style.backgroundColor = "white";
            // loginError.style.padding = "15px";
            // loginError.style.width = "60%";
            // loginError.style.borderRadius = "20px";
            // loginError.style.margin = "auto";
            form.reset();
        }

    });
    usernameInput.addEventListener("input", function () {
        loginError.textContent = "";
        loginError.style.backgroundColor = "transparent";
    });
    passwordInput.addEventListener("input", function () {
        loginError.textContent = "";
        loginError.style.backgroundColor = "transparent";
    });
});
