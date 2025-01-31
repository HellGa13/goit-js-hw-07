const registerForm = document.querySelector('.form');
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();


  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return; 
  }

  const formInfor = {
    email: email,
    password: password
  };

  console.log(formInfor);
  event.currentTarget.reset(); 
    
};

