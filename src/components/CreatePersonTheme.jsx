import React, { useEffect, useState } from "react";
import { HomePage } from "./HomePage";
import ColorPicker from 'react-best-gradient-color-picker';
import themes from "../util/DataThemes";

export const CreatePersonTheme = () => {

  const [colorText, setColorText] = useState('');
  const [colorBackground, setColorBackground] = useState('');
  const [colorMain, setColorMain] = useState('');
  const [colorSecond, setColorSecond] = useState('');
  const [AllColors] = useState({
    "--bg-color": colorBackground,
    "--second-bg-color": colorMain,
    "--text-color": colorText,
    "--main-color": colorSecond,
  });
  const [actualColor, setActualColor] = useState('bg-color');
  const [altura , setAltura] = useState(0);
  const [largura, setLargura] = useState(0);

  function handleResize() {
    const Newlargura = window.innerWidth;
    const Newaltura = window.innerHeight;
    if (Newaltura !== altura) {
      setAltura(Newaltura);
    }
    if (Newlargura !== largura) {
      setLargura(Newlargura);
    }
    console.log(`Largura: ${Newlargura}, Altura: ${Newaltura}`);
  }
  
  // Adiciona um ouvinte de evento de redimensionamento
  window.addEventListener('resize', handleResize);
  
  // Execute handleResize uma vez para obter o valor inicial
  handleResize();


  AllColors["--bg-color"] = colorBackground;
  AllColors["--second-bg-color"] = colorSecond;
  AllColors["--text-color"] = colorText;
  AllColors["--main-color"] = colorMain;


  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      setColorBackground(parsedTheme['--bg-color']);
      setColorSecond(parsedTheme['--second-bg-color']);
      setColorText(parsedTheme['--text-color']);
      setColorMain(parsedTheme['--main-color']);
    } else {
      setColorBackground(themes[5]['--bg-color']);
      setColorSecond(themes[5]['--second-bg-color']);
      setColorText(themes[5]['--text-color']);
      setColorMain(themes[5]['--main-color']);
    }
  }, []);

  const arrayColors = [
    { "variavel": "bg-color" },
    { "variavel": "text-color" },
    { "variavel": "main-color" },
    { "variavel": "second-bg-color" },
  ];


  const saveNewThme = (theme) => {

    const themesUser = JSON.parse(localStorage.getItem("themeUser"));

    if (themesUser) {
      themesUser.push(theme);
      localStorage.setItem("themeUser", JSON.stringify(themesUser));
    } else {
      localStorage.setItem("themeUser", JSON.stringify([theme]));
    }

    localStorage.setItem("theme", JSON.stringify(theme));

    window.location.href = "/";
  };

  const renderItem = (theme, index) => (
    <div key={index}>
    <div
      style={{
        width: "12rem",
        height: "12rem",
        border: ".3px solid white",
        backgroundColor: theme["variavel"] === "bg-color" ? colorBackground : theme["variavel"] === "second-bg-color" ? colorSecond : theme["variavel"] === "text-color" ? colorText : colorMain,
        borderRadius: "50%",
        marginRight: "-10px",
        zIndex: 2,
        position: "relative",
      }}
      onClick={() => setActualColor(theme["variavel"])}
    >
    </div>
    <h3
    style={{
      textAlign: "center",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginTop: "1rem",
    }}
    >
      {theme["variavel"] === "bg-color" ? "Cor de fundo" : theme["variavel"] === "second-bg-color" ? "Cor secundária" : theme["variavel"] === "text-color" ? "Cor do texto" : "Cor principal"}
    </h3>
    </div>
  );


  return (
    <div
      className="background"
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <HomePage navbar={false} cores={AllColors}  />
      </div>
      <div
        style={{
          flex: "30%",  
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
      className="theme-modal-item"
      style={{
        position: "fixed",
      }}
      >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          height: "20rem",
        }}
      >
        {arrayColors.map(renderItem)}
      </div>
        </div>
        <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
        }}
        >
        <div
        style={{
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          backgroundColor: "#fff",
          position: "fixed",
          top: "22rem",
          zIndex: 1,
        }}>
        <ColorPicker value={actualColor === 'bg-color' ? colorBackground : actualColor === 'second-bg-color' ? colorSecond : actualColor === 'text-color' ? colorText : colorMain} 
        onChange={actualColor === 'bg-color' ? setColorBackground : actualColor === 'second-bg-color' ? setColorSecond : actualColor === 'text-color' ? setColorText : setColorMain} 
        height={altura !== 0 && altura < 670? 100 : 200}
        hideColorTypeBtns
        hideInputs
        hidePresets={altura !== 0 ? altura < 670 : false}
        />
        </div>
        <div
            className="btn-box"
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              cursor: "pointer",
              position: "fixed",
              bottom: "2rem",
            }}
          >
        <a className="btn"
        onClick={()=> saveNewThme(AllColors)}
        >
          Salvar tema
        </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreatePersonTheme;
