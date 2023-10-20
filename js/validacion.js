
    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

    
      
      function validarCheckbox() {
        var checkbox = document.getElementById("terminos");
        var validFeedback = document.getElementById("valid-feedback");
    
        if (checkbox.checked) {
            checkbox.classList.add("is-valid");
            validFeedback.style.display = "block";
        } else {
            checkbox.classList.remove("is-valid");
            validFeedback.style.display = "none";
        }
    }

    function validarRegistro() {
        var nombreInput = document.getElementById("nombre");
        var emailInput = document.getElementById("email");
        var apellidoInput = document.getElementById("apellido");
    
        if (nombreInput.value && emailInput.value && apellidoInput.value) {
            alert("Te has registrado");
            nombreInput.value = ''; // Borra el valor del campo Nombre
            emailInput.value = '';  // Borra el valor del campo Email
            apellidoInput.value  = '';
        } else {
            alert("Por favor, completa todos los campos antes de registrarte.");
        }
    }
    
    document.getElementById("submitButton").addEventListener("click", validarRegistro);
    

    