const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    formEl.reset();
  }
};

formEl.addEventListener("submit", onFormSubmit);
