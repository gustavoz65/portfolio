import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript Básico",
    "Flask",
    "Bootstrap",
    "PL/SQL",
  ];

  const experiences = [
    {
      company: "NBS Informática",
      role: "Suporte Técnico em Sietemas",
      period: "2024 - Presente",
      description:
        "Como suporte técnico na NBS Informática, com experiência em PL/SQL e SQL Server, sou responsável por fornecer suporte tecnico aos clientes, garantindo a integridade e confiabilidade dos sistemas.",
    },
    {
      company: "Log Lab",
      role: "Suporte Técnico em Sietemas",
      period: "2022 - 2023",
      description:
        "Na Log Lab eu relatava bugs e capacitava novos funcionários das unidades.",
    },
    {
      company: "...",
      role: "...",
      period: "... - ...",
      description: "...",
    },
  ];

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-123456",
    },
    {
      title: "Python Professional Certification",
      organization: "Python Institute",
      date: "2023",
      credentialId: "PY-789012",
    },
    {
      title: "Full Stack Web Development",
      organization: "Digital Innovation One",
      date: "2023",
      credentialId: "FS-345678",
    },
    {
      title: "Scrum Fundamentals Certified",
      organization: "ScrumStudy",
      date: "2022",
      credentialId: "SCR-901234",
    },
  ];

  return (
    <div className="portfolio">
      {/* Header */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            GR
          </a>
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#experience">Experiência</a>
            </li>
            <li>
              <a href="#certificates">Certificados</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Gustavo Rodrigues da Silva</h1>
          <p className="subtitle">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras
          </p>
          <div className="button-group">
            <a href="#contact" className="button primary">
              Contato
            </a>
            <a href="#experience" className="button secondary">
              Ver Experiência
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Sobre</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                Sou um desenvolvedor full stack com experiência em
                desenvolvimento web e aplicações escaláveis. Especializado em
                Python, React e Node.js, busco constantemente aprender novas
                tecnologias e metodologias para criar soluções inovadoras e
                eficientes.
              </p>
              <div className="skills">
                <h3>Habilidades Técnicas</h3>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-info">
              <div className="info-item">
                <span className="info-icon">👤</span>
                <span>Desenvolvedor Júnior</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <span>sem experiência na área de desenvolvimento ainda</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📚</span>
                <span>
                  Técnologo Em Ánalise e Desnvolvimento de Sistemas - Unic Beira
                  Rio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experiência Profissional</h2>
          <div className="experience-grid">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates">
        <div className="container">
          <h2>Certificados</h2>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <h3>{cert.title}</h3>
                <p className="organization">{cert.organization}</p>
                <p className="date">{cert.date}</p>
                <p className="credential">ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contato</h2>
          <div className="social-links">
            <a
              href="https://github.com/gustavoz65/portfolio"
              className="social-link"
            >
              GitHub
            </a>
            <a href="https://www.linkedin.com/feed/" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:gustavo@email.com" className="social-link">
              Email
            </a>
          </div>
          <p className="contact-text">
            Estou sempre aberto a novas oportunidades e parcerias. Vamos
            trabalhar juntos para criar algo incrível?
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            © 2024 Gustavo Rodrigues da Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
