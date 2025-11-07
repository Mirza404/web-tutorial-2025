# Task 1: Dynamic Style and Content Changer

Goal: Practice DOM selection and manipulation methods (getElementById, querySelector, .style, .innerHTML).

Description:
Create a section with a paragraph and a button. When the user clicks the button, change the paragraph text and color. Optionally toggle between two states (for example, Light Mode and Dark Mode).

Key concepts:
- document.getElementById() or querySelector()
- .innerHTML to change text
- .style to modify CSS dynamically
- addEventListener('click', ...) to handle user actions

Example:

```html
<p id="message">Welcome to JavaScript DOM practice!</p>
<button id="changeBtn">Change Style</button>

<script>
  const btn = document.getElementById('changeBtn');
  const msg = document.getElementById('message');

  btn.addEventListener('click', () => {
    msg.innerHTML = "You clicked the button!";
    msg.style.color = msg.style.color === 'blue' ? 'green' : 'blue';
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === 'black' ? 'white' : 'black';
  });
</script>
```

# Task 2: Simple Form Validation

Goal: Work with form elements and events (submit, focus, blur).

Description:
Create a simple login form with username and password fields. On submit, prevent the default behavior, check both fields are filled, and display a message if validation fails or succeeds.

Key concepts:
- document.getElementById() to access form fields
- Event handling (submit, preventDefault())
- Basic form validation logic

Example:

```html
<form id="loginForm">
  <input type="text" id="username" placeholder="Username"><br>
  <input type="password" id="password" placeholder="Password"><br>
  <button type="submit">Login</button>
</form>

<script>
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (user === "" || pass === "") {
      alert("Please fill in both fields.");
    } else {
      alert(`Welcome, ${user}!`);
    }
  });
</script>
```