// Function to display current time in milliseconds
function updateTime() {
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update once at load
updateTime();

// Optional: update every second for live ticking (not required, but nice)
setInterval(updateTime, 1000);


const form = document.getElementById("contact-form");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Reset all messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  successMessage.textContent = "";

  // Collect inputs
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let valid = true;

  // Validation rules
  if (!name) {
    showError("name", "Full name is required");
    valid = false;
  }

  if (!email) {
    showError("email", "Email is required");
    valid = false;
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    showError("email", "Please enter a valid email (e.g. name@example.com)");
    valid = false;
  }

  if (!subject) {
    showError("subject", "Subject is required");
    valid = false;
  }

  if (!message) {
    showError("message", "Message is required");
    valid = false;
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters long");
    valid = false;
  }

  // Success message
  if (valid) {
    successMessage.textContent = "Message sent successfully!";
    form.reset();
  }
});

// Helper to show inline errors
function showError(fieldId, message) {
  const errorField = document.getElementById(`error-${fieldId}`);
  errorField.textContent = message;
}


/// Select toggle button and nav links container
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
} else {
  console.warn('Navbar toggle or nav links not found!');
}

// Optional: Highlight active link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

