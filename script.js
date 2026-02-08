const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede envio real

  let valido = true;


// valida email
  const emailLimpo = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailLimpo)) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    valido = false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  }

  const senha = passwordInput.value

  // valida senha
  if (senha.leng < 8 || senha !== "12345678") {
    passwordInput.classList.add("is-invalid");
    passwordInput.classList.remove("is-valid");
    valido = false;
  } else {
    passwordInput.classList.remove("is-invalid");
    passwordInput.classList.add("is-valid");
  }

  if (valido) {
    alert("Login válido");
  }
});

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
