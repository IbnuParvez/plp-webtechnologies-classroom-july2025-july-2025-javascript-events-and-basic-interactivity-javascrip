// Part 1: Event Handling
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});

// Part 2: Interactive Elements
// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Part 3: Form Validation

const signupForm = document.getElementById("signupForm");
const formFeedback = document.getElementById("formFeedback");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Validate name (not empty)
  if (name === "") {
    errors.push("Name is required");
  }

  // Validate email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Invalid email address");
  }

  // Validate password (min 6 chars)
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  // Show feedback
  if (errors.length > 0) {
    formFeedback.style.color = "red";
    formFeedback.textContent = errors.join(", ");
  } else {
    formFeedback.style.color = "green";
    formFeedback.textContent = "Form submitted successfully!";
    signupForm.reset();
  }
});
