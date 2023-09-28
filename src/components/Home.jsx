import React from "react";

export const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Olá, sou<span> Wendel Gustavo</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>Full Stack Developer</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          Sou um Desenvolvedor Full Stack com 1 ano de experiência.
          Estou cursando Ciência da Computação na Faculdade Feevale ( 2º Semestre ).
          Atualmente trabalhando como desenvolvedor Full Stack em um projeto associado a Faculdade Faccat.
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>

        <div className="btn-box">
          <a href="#" className="btn">
            Currículo⠀<i className="bx bx-download"></i>
          </a>
          <a href="#" className="btn">
            Projetos
          </a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>

      <div className="home-sci">
        <a
          href="https://www.instagram.com/wendel_gustaa/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          href="https://twitter.com/wendelgustaa"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wendel-fillmann-b87b4124a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/WendelGustavo"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <span className="animate" style={{ "--i": 6 }}></span>
      </div>

      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{ "--i": 7 }}></span>
    </section>
  );
};
