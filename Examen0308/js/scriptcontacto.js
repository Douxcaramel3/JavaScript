const checkbox = document.getElementById('aceptoTerminos');
  const submitButton = document.getElementById('submitButton');


  checkbox.addEventListener('change', function() {

  
    if (this.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  const form = document.getElementById('formulario');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  })