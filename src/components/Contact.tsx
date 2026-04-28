<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .form-container {
      background: #1e293b;
      padding: 2rem;
      border-radius: 10px;
      width: 100%;
      max-width: 400px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 6px;
      border: none;
    }

    button {
      margin-top: 15px;
      padding: 10px;
      width: 100%;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background: #2563eb;
    }

    .success, .error {
      margin-top: 10px;
      font-size: 14px;
    }

    .success { color: #22c55e; }
    .error { color: #ef4444; }
  </style>
</head>

<body>

  <div class="form-container">
    <h2>Contact Us</h2>

    <form id="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

      <button type="submit">Send Message</button>
      <div id="form-status"></div>
    </form>
  </div>

  <script>
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const data = new FormData(form);

      try {
        const response = await fetch("https://formspree.io/f/xwvaglwg", {
          method: "POST",
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          status.innerHTML = "<p class='success'>✅ Message sent successfully!</p>";
          form.reset();
        } else {
          status.innerHTML = "<p class='error'>❌ Something went wrong. Try again.</p>";
        }
      } catch (error) {
        status.innerHTML = "<p class='error'>⚠️ Network error. Please try later.</p>";
      }
    });
  </script>

</body>
</html>
                   
