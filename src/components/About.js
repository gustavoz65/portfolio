import React from "react";
import "./About.css";

const About = () => {
  const skills = [
    "Python",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Flask",
    "Bootstrap",
    "PL/SQL",
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>Sobre</h2>
        <div className="about-grid">
          <div className="about-content">
            <p>
              Sou um desenvolvedor full stack com experiência em desenvolvimento
              web e aplicações escaláveis. Busco constantemente aprender novas
              tecnologias para criar soluções inovadoras e eficientes.
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
              <span>Sem experiência formal na área</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📚</span>
              <span>Tecnólogo em Análise e Desenvolvimento de Sistemas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
