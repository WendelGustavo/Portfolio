import React, { useState } from "react";
import { getLanguage } from '../util/language';

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
    <header className="header"
    style={{
      width: '100%',
    }}
    >
    
      <a href="/" className="logo" style={{ textDecoration: "none" }}>
           {'<'} WendelDev {'/>'}
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
      {componente === 'Home' ? (
        <>
        <a href="#home" className="active">
          {language.NavBar.HomeText}
        </a>
        <a href="#education">
          {language.NavBar.formationText}
        </a>
        <a href="#projects">
          {language.NavBar.ProjectsText}
        </a>
        <a href="#skills">
          {language.NavBar.SkillsText}
        </a>
        <a href="#contact">
          {language.NavBar.ContactText}
        </a>
        <a 
          style={{ borderBottom: 'none' }}
        >
        <div className="custom-select">
  <span>
      <img src="http://www.baixamais.net/resources/icones-png/bandeiras-de-paises/Brazil.png" alt="Bandeira do Brasil" 
        style={{width: 40, height: 40}}
        onClick={() => chanceLanguage('pt')}
      />
      <img src="https://www.baixamais.net/resources/icones-png/bandeiras-de-paises/United%20Kingdom(Great%20Britain).png" alt="Bandeira do Reino Unido" 
        style={{width: 40, height: 40}}
        onClick={() => chanceLanguage('en')}
      />
      <img src="https://www.baixamais.net/resources/icones-png/bandeiras-de-paises/Spain.png" alt="Bandeira da Espanha"
        style={{width: 40, height: 40}}
        onClick={() => chanceLanguage('es')}
     />
  </span>
</div>
        </a>
        
        <a className="theme" onClick={() => { modal(!modalOpen); funcModalState()}}>
          ⠀⠀⠀
        </a>
        </>
      )
        : (
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
