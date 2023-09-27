import React from "react";

export const Home = () => {
  return (
    <section class="home show-animate" id="home">
      <div class="home-content">
        <h1>
          Olá, sou<span> Wendel Gustavo</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div class="text-animate">
          <h3>Full Stack Developer</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          at cupiditate laborum quae facere debitis ipsam quasi, natus quibusdam
          officiis fugit repellat veniam totam asperiores doloremque nobis.
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>

        <div class="btn-box">
          <a href="#" class="btn">
            Currículo⠀<i class="bx bx-download"></i>
          </a>
          <a href="#" class="btn">
            Projetos
          </a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>

      <div class="home-sci">
        <a
          href="https://www.instagram.com/wendel_gustaa/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://twitter.com/wendelgustaa"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wendel-fillmann-b87b4124a/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a
          href="https://github.com/WendelGustavo"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bx bxl-github"></i>
        </a>
        <span class="animate" style={{ "--i": 6 }}></span>
      </div>

      <div class="home-imgHover"></div>
      <span class="animate home-img" style={{ "--i": 7 }}></span>
    </section>
  );
};
