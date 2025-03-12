import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Gustavo Rodrigues da Silva</h1>
        <p className="subtitle">
          Desenvolvedor Full Stack apaixonado por criar soluções inovadoras.
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
  );
};

export default Hero;
