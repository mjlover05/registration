document.getElementById("registrationForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("https://apex.oracle.com/pls/apex/mjlover/register_user//", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const message = document.getElementById("message");

    if (response.ok) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Error registering. Please try again.";
        message.style.color = "red";
    }
});
