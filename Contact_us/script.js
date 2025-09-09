document.addEventListener("DOMContentLoaded", () => {
  const name = document.getElementById("Full_Name");
  const Email = document.getElementById("Email_Address");
  const Phone = document.getElementById("Phone_Number");

  const form = document.querySelector("form");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (!/[A-Z]/.test(name.value)) {
      nameError.textContent =
        "Your name must contain at least one capital letter. ";
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    if (!/@/.test(Email.value)) {
      emailError.textContent = "Your email must contain @.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    if(isValid){
        alert("Form submitted successfully");
        form.submit();
    }
  });
});
