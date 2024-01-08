import React from "react";
import language from "../util/language";

export const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
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
      name: "TypeScript",
      icon: "bx bxl-typescript",
      URL: "https://www.typescriptlang.org/",
    },
    {
      name: "Git",
      icon: "bx bxl-git",
      URL: "https://git-scm.com/",
    },
    {
      name: "MySql",
      icon: "bx bxs-data",
      URL: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
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
    }
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
                <i className={`${skill.icon} bx-md`}></i>
                <h1 style={{marginLeft : '2px'}}>{skill.name}</h1>
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
