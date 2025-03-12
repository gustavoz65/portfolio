import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <div className="social-links">
          <a href="https://github.com" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com" className="social-link">
            LinkedIn
          </a>
          <a href="mailto:gustavo@email.com" className="social-link">
            Email
          </a>
        </div>
        <p className="contact-text">
          Estou sempre aberto a novas oportunidades e parcerias. Vamos trabalhar
          juntos para criar algo incrível?
        </p>
      </div>
    </section>
  );
};

export default Contact;
