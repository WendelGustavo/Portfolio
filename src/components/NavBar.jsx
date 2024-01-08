import React, { useState } from "react";
import language from "../util/language";

export const NavBar = ({ modal, componente }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('br'); 

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const funcModalState = () => {
    setModalOpen(!modalOpen);
  };

  const tradeStateSelectedOption = () => {

    const stateSelect = document.querySelector('.custom-select select');

    if (getComputedStyle(stateSelect).display === 'none') {
      stateSelect.style.display = 'block';
    } else {
      stateSelect.style.display = 'none';
    }

  }



  return (
    <>
    <header className="header"
    style={{
      width: componente === 'Home' ? '100%' : '70%',
    }}
    >
    
      <a href="/" className="logo" style={{ textDecoration: "none" }}>
        Wendel Dev. <span className="animate" style={{ "--i": 1 }}></span>
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
        <a>
        <div className="custom-select">
  <span>
    <img src="http://www.baixamais.net/resources/icones-png/bandeiras-de-paises/Brazil.png" alt="Bandeira do Brasil" 
    style={{width: 40, height: 40}}
    onClick={()=> tradeStateSelectedOption()}
     />
  </span>
  <div className="custom-select">
      <select value={selectedOption} onChange={handleChange}>
        <option value="br">Portugues</option>
        <option value="en">English</option> 
        <option value="es">Spanish</option>
      </select>
    </div>
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
