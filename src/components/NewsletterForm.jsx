// src/components/NewsletterForm.js
import React, { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Collected Email:", email); // Replace with actual backend later
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="newsletter">
      <h2>Join the fan list</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Thanks for joining! 🎉</p>
      )}
    </div>
  );
}

export default NewsletterForm;