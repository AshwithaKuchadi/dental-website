// src/pages/Contact.jsx
import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageCharCount, setMessageCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      setMessageCharCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessageCharCount(0);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Us</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            <strong>Address:</strong> Hyderabad, Telangana
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> contact@dentalclinic.com
          </p>
        </div>
        <div className="col-md-6">
          <iframe
            title="clinic location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2689798869983!2d78.440190275153!3d17.443859501270303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973d6e9e0b3b%3A0xe158a99d4b61b540!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710216323082"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        {submitted && (
          <div className="alert alert-success">
            ✅ Message sent successfully! We'll get back to you soon.
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's your message about?"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>
          <div className="text-end text-muted small">
            {messageCharCount} / 500 characters
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
