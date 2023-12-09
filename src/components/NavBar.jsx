import React, { useState } from "react";

export const NavBar = ({ modal, componente }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const funcModalState = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
    <header className="header"
    style={{
      width: componente === 'Home' ? '100%' : '70%',
    }}
    >
    
      <a href="/" className="logo" style={{ textDecoration: "none" }}>
        {componente === 'Home' ? 'Wendel Dev.' : 'Pré visualização' } <span className="animate" style={{ "--i": 1 }}></span>
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
          Home
        </a>
        <a href="#education">Formação</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contato</a>
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
