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
        // ---- Por enquanto ----
        else{
          event.preventDefault()
          alert("Formulário enviado com sucesso!")
        }
        // ----------------------
  
        form.classList.add('was-validated')
      }, false)
    })
})()

//  data-bs-toggle="modal" data-bs-target="#createModal"
//  data-bs-toggle="modal" data-bs-target="#feedbackModal"