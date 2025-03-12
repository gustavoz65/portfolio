import React from "react";
import "./Certificates.css";

const Certificates = () => {
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
  );
};

export default Certificates;
