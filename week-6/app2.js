// Form validation
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const formMessage = document.getElementById("formMessage");
const resetButton = document.getElementById("resetBtn");

function showMessage(text, type = "error") {
  formMessage.textContent = text;
  if (type === "error") {
    formMessage.style.color = "red";
    formMessage.style.fontWeight = "bold";
    formMessage.style.backgroundColor = "white";
  } else {
    formMessage.style.color = "green";
    formMessage.style.fontWeight = "bold";
    formMessage.style.backgroundColor = "white";
  }
}

function clearMessage() {
  formMessage.innerHTML = "";
  formMessage.style.color = "";
}

function setFieldError(field, isError) {
  if (isError) {
    field.style.borderColor = "red";
  } else {
    field.style.borderColor = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userValue = username.value.trim();
  const passValue = password.value.trim();

  let ok = true;
  clearMessage();

  if (userValue === "") {
    setFieldError(username, true);
    showMessage("Please enter a username.", "error");
    ok = false;
  } else {
    setFieldError(username, false);
  }

  if (passValue === "") {
    setFieldError(password, true);
    formMessage.innerHTML = formMessage.innerHTML
      ? formMessage.innerHTML + " Password is required."
      : "Please enter a password.";
    formMessage.style.color = "red";
    ok = false;
  } else {
    setFieldError(password, false);
  }

  if (!ok) {
    return;
  }

  showMessage("Login successful!", "success");

  form.reset();
  setFieldError(username, false);
  setFieldError(password, false);
});

function FormReset() {
  form.reset();
  clearMessage();
  setFieldError(username, false);
  setFieldError(password, false);
}

resetButton.addEventListener("click", FormReset);
