document.getElementById("registrationForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("https://apex.oracle.com/pls/apex/mjlover/register_user//", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                name: name, 
                email: email, 
                password: password 
            })
        });

        const result = await response.json();
        console.log("Server Response:", result);  // Log response

        if (response.ok) {
            document.getElementById("message").textContent = "Registration successful!";
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").textContent = "Error registering. Please try again.";
            document.getElementById("message").style.color = "red";
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        document.getElementById("message").textContent = "Server error. Check console.";
        document.getElementById("message").style.color = "red";
    }
});

