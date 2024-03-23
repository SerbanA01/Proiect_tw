function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const username = document.querySelector("#loginUsername").value;
        const password = document.querySelector("#loginPassword").value;
        
        const storedUser = localStorage.getItem("user");
        
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.username === username || user.email === username && user.password === password) {
            setFormMessage(loginForm, "success", "Autentificare reușită!");
            const currentPath = window.location.pathname;
            const newPagePath = currentPath.replace("login.html", "test.proiect2_copie.html");
            window.location.pathname = newPagePath;
          } 
          else {
            setFormMessage(loginForm, "error", "Date de autentificare incorecte!");
          }
        } 
        else {
          setFormMessage(loginForm, "error", "Utilizatorul nu este înregistrat!");
        }
        
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        var username = document.getElementById("signupUsername").value;
        var email = document.getElementById("signupEmail").value;
        var password = document.getElementById("signupPassword").value;
        var confirmPassword = document.getElementById("signupPassword_confirm").value;

        if (username.length < 10) {
            setInputError(document.getElementById("signupUsername"), "Username must be at least 10 characters in length");
        }

        if (!validateEmail(email)) {
            setInputError(document.getElementById("signupEmail"), "Invalid email address");
        }

        if (password !== confirmPassword) {
            setInputError(document.getElementById("signupPassword_confirm"), "Passwords do not match");
        }

        if (username && password && email && password === confirmPassword) {
            var user = {
                username: username,
                password: password,
                email: email,
            };
            localStorage.setItem("user", JSON.stringify(user));
            
        }

    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
    
});
