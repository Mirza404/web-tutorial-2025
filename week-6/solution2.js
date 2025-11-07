// Form validation
const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const message = document.getElementById('formMessage');
const resetBtn = document.getElementById('resetBtn');

function showMessage(text, type = 'error') {
  message.innerHTML = text;
  if (type === 'error') {
    message.style.color = '#fecaca'; // red-300
  } else {
    message.style.color = '#bbf7d0'; // green-200
  }
}

function clearMessage() {
  message.innerHTML = '';
  message.style.color = '';
}

function setFieldError(field, isError) {
  if (isError) {
    field.style.borderColor = '#fca5a5'; // red-400
  } else {
    field.style.borderColor = '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userVal = username.value.trim();
  const passVal = password.value.trim();

  let ok = true;
  clearMessage();

  if (userVal === '') {
    setFieldError(username, true);
    showMessage('Please enter a username.', 'error');
    ok = false;
  } else {
    setFieldError(username, false);
  }

  if (passVal === '') {
    setFieldError(password, true);
    // If a previous message exists (username), append instead of overwrite
    message.innerHTML = message.innerHTML
      ? message.innerHTML + ' Password is required.'
      : 'Please enter a password.';
    message.style.color = '#fecaca';
    ok = false;
  } else {
    setFieldError(password, false);
  }

  if (!ok) {
    return;
  }

  // Success: show welcome message (no real auth here)
  showMessage(`Welcome, ${userVal}!`, 'success');

  // Optionally clear fields
  form.reset();
  setFieldError(username, false);
  setFieldError(password, false);
});

// UX: clear field error and messages on focus
[username, password].forEach((el) => {
  el.addEventListener('focus', () => {
    setFieldError(el, false);
    clearMessage();
  });

  el.addEventListener('blur', () => {
    // simple visual feedback when leaving a required empty field
    if (el.value.trim() === '') {
      setFieldError(el, true);
    } else {
      setFieldError(el, false);
    }
  });
});

resetBtn.addEventListener('click', () => {
  form.reset();
  clearMessage();
  setFieldError(username, false);
  setFieldError(password, false);
});