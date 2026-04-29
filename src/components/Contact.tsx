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
        setStatus(" Message sent!");
        form.reset();
      } else {
        setStatus(" Something went wrong.");
      }
    } catch (error) {
      setStatus(" Network error.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        {status && <p style={styles.status}>{status}</p>}
      </div>
    </div>
  );
}

const green = "#285343";

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff", // white background
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: `1px solid ${green}`,
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: green,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: `2px solid ${green}`,
    background: "#ffffff",
    color: "#000",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: `2px solid ${green}`,
    background: "#ffffff",
    color: "#000",
    resize: "none",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: green,
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  status: {
    marginTop: "15px",
    textAlign: "center",
    color: green,
  },
};
