import React from "react";
import { getLanguage } from '../util/language';

const language = getLanguage();

export const Skills = () => {
  const skills = [
    {
      name: "Java Script",
      icon: "bx bxl-javascript",
      URL: "https://www.javascript.com/",
    },
    {
      name: "React JS",
      icon: "bx bxl-react",
      URL: "https://pt-br.reactjs.org/",
    },
    {
      name: "Node JS",
      icon: "bx bxl-nodejs",
      URL: "https://nodejs.org/en/",
    },
    {
      name: "Type Script",
      icon: "bx bxl-typescript",
      URL: "https://www.typescriptlang.org/",
    },
    {
      name: "Git",
      icon: "bx bxl-git",
      URL: "https://git-scm.com/",
    },
    {
      name: "React Native",
      icon: "bx bxl-react",
      URL: "https://reactnative.dev/",
    },
    {
      name: "SQL",
      icon: "bx bxs-data",
      URL: "https://www.mysql.com/",
    },
    {
      name: "Postgre SQL",
      icon: "bx bxl-postgresql",
      URL: "https://www.postgresql.org/",
    },
    {
      name: "Python",
      icon: "bx bxl-python",
      URL: "https://www.python.org/",
    },
    {
      name: "Java",
      icon: "bx bxl-java",
      URL: "https://www.java.com/pt-BR/",
    },
    {
      name: "HTML",
      icon: "bx bxl-html5",
      URL: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: "bx bxl-css3",
      URL: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        {language.Skills.sectionTitle} <span>{language.Skills.sectionTitle2}</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <div className="skills-box">
            {skills.map((skill, index) => (
              <div className="skills-content" key={index}>
                <div className="cursor-pointer" onClick={()=> window.open(skill.URL, '_blank')}>
                <i className={`${skill.icon} bx-lg`}></i>
                <h1>{skill.name}</h1>
                </div>      
              </div>
            ))}
            <span className="animate scroll" style={{ "--i": 2 }}></span>
          </div>
        </div>
      </div>
    </section>
  );
};
