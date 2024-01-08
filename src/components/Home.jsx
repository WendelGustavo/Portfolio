/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { getLanguage } from '../util/language';

const language = getLanguage();

export const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          {language.Home.introdctionText}<span> {language.Home.nameText}</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>{language.Home.jobText}</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          {language.Home.TextAbout}
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>

        <div className="btn-box">
          <a
          className="btn"
          href="https://drive.google.com/file/d/1gjM6Iw2WcCeazEjwUGENrasBjd9aZlho/view?usp=sharing"
          download="Wendel Gustavo - Curriculo.pdf"
          target="_blank" rel="noreferrer"
          >
            {language.Home.TextButton}⠀<i className="bx bx-download"></i>
          </a>
          <a href="#" className="btn">
            {language.Home.TextButton2}
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
