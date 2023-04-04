const form = document.getElementById("inscription-form");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

form.addEventListener("submit", (event) => {
  if (password.value !== passwordConfirm.value) {
    event.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Les mots de passe ne correspondent pas.',
    })
  } 
  else {
    event.preventDefault();
    Swal.fire}
})
  
  
  
     
