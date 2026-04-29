import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwvaglwg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("✅ Message sent!");
        form.reset();
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("⚠️ Network error.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Send Message</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
}
