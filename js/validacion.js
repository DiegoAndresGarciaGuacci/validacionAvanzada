
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

    document.getElementById("submitButton").addEventListener("click", function() {
        alert("Te has registrado");
    });
