import React, { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const TradeTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", "#281c54");
    root.style.setProperty("--second-bg-color", "#422d85");
    root.style.setProperty("--text-color", "#ededed");
    root.style.setProperty("--main-color", "#8a2be2");
  };

  return (
    <header className="header">
      <a href="/" className="logo" style={{ textDecoration: "none" }}>
        Wendel Dev.<span className="animate" style={{ "--i": 1 }}></span>
      </a>

      <div
        className={menuOpen ? "bx bx-x" : "bx bx-menu"}
        id="menu-icon"
        onClick={() => toggleMenu()}
      >
        <span className="animate" style={{ "--i": 2 }}></span>
      </div>

      <nav className={menuOpen ? "navbar active" : "navbar"}>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">Sobre</a>
        <a href="#education">Formação</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contato</a>
        <a className="theme" onClick={() => TradeTheme()}>
          ⠀⠀⠀
        </a>

        <span className="active-nav"></span>
        <span className="animate" style={{ "--i": 2 }}></span>
      </nav>
    </header>
  );
};
