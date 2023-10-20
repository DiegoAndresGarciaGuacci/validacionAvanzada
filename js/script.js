function repContraseña() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    var errorAlert = document.getElementById("errorAlert");
    var successAlert = document.getElementById("successAlert");

    if (password1 !== password2) {
      errorAlert.style.display = "block";
      successAlert.style.display = "none";
    } else {
      errorAlert.style.display = "none";
      successAlert.style.display = "block";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const checkbox = document.getElementById("terminos");
    const submitButton = document.getElementById("submitButton");

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        submitButton.removeAttribute("disabled");
      } else {
        submitButton.setAttribute("disabled", "disabled");
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const isValid = form.checkValidity();

      if (isValid) {
        const registerSuccessAlert = document.getElementById("registerSuccessAlert");
        registerSuccessAlert.style.display = "block";
        form.reset();
      }
    });
  });