import React, { useState } from "react";
import { getLanguage } from "../util/language";

const language = getLanguage();

export const NavBar = ({ modal, componente }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const funcModalState = () => {
    setModalOpen(!modalOpen);
  };

  const chanceLanguage = (lang) => {
    const ActualLang = localStorage.getItem("language");

    if (ActualLang === lang) {
      return;
    }

    localStorage.setItem("language", lang);
    window.location.reload();
  };

  return (
    <>
      <header
        className="header"
        style={{
          width: "100%",
        }}
      >
        <a href="/" className="logo" style={{ textDecoration: "none" }}>
          {"<"} WendelDev {"/>"}
          <span className="animate" style={{ "--i": 1 }}></span>
        </a>

        <div
          className={menuOpen ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
          onClick={() => toggleMenu()}
        >
          <span className="animate" style={{ "--i": 2 }}></span>
        </div>

        <nav className={menuOpen ? "navbar active" : "navbar"}>
          {componente === "Home" ? (
            <>
              <a href="#home" className="active">
                {language.NavBar.HomeText}
              </a>
              <a href="#education">{language.NavBar.formationText}</a>
              <a href="#projects">{language.NavBar.ProjectsText}</a>
              <a href="#skills">{language.NavBar.SkillsText}</a>
              <a href="#contact">{language.NavBar.ContactText}</a>
              <a style={{ borderBottom: "none" }}>
                <div className="custom-select">
                  <span>
                    <img
                      src="https://flagcdn.com/36x27/br.png"
                      srcset="https://flagcdn.com/72x54/br.png 2x,https://flagcdn.com/108x81/br.png 3x"
                      width="36"
                      height="27"
                      onClick={() => chanceLanguage("pt")}
                      alt="Português"
                    />
                    <img
                      src="https://flagcdn.com/36x27/es.png"
                      srcset="https://flagcdn.com/72x54/es.png 2x,https://flagcdn.com/108x81/es.png 3x"
                      width="36"
                      height="27"
                      onClick={() => chanceLanguage("es")}
                      alt="Espanhol"
                    />
                    <img
                      src="https://flagcdn.com/36x27/us.png"
                      srcset="https://flagcdn.com/72x54/us.png 2x,https://flagcdn.com/108x81/us.png 3x"
                      width="36"
                      height="27"
                      onClick={() => chanceLanguage("en")}
                      alt="Inglês"
                    />
                  </span>
                </div>
              </a>

              <a
                className="theme"
                onClick={() => {
                  modal(!modalOpen);
                  funcModalState();
                }}
              >
                ⠀⠀⠀
              </a>
            </>
          ) : (
            <a href="/" className="active">
              Voltar
            </a>
          )}
          <span className="active-nav"></span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </nav>
      </header>
    </>
  );
};
