import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact">
      <section className="contact-box">
        <h1>Contact Us</h1>

        <p className="contact-intro">
          For general inquiries, service requests, or business discussions,
          please use the contact details or form below.
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> info@mycompany.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Address:</strong> Mohali, Punjab, India</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <h2>Send a Message</h2>

            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="Your email" />
            </label>

            <label>
              Message
              <textarea rows="4" placeholder="Your message"></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
