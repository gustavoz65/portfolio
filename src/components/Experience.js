import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "NBS Informática",
      role: "Suporte Técnico em Sistemas",
      period: "2024 - Presente",
      description:
        "Responsável por fornecer suporte técnico e garantir a integridade dos sistemas.",
    },
    {
      company: "Log Lab",
      role: "Suporte Técnico em Sistemas",
      period: "2022 - 2023",
      description: "Reportava bugs e capacitava novos funcionários.",
    },
    // Adicione outras experiências conforme necessário
  ];

  return (
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
  );
};

export default Experience;
