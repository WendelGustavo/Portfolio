import React, { useEffect, useState } from "react";
import themes from "../util/DataThemes";

export const ThemeModal = ({ onOpen, setOpen }) => {
  const [opened, setOpened] = useState(false);
  const [ themeUser ] = useState(
    JSON.parse(localStorage.getItem("themeUser"))
  );

  useEffect(() => {
    if (onOpen) {
      setOpened(true);
    }
  }, [onOpen]);

  const closeModal = () => {
    setOpened(false);
    setOpen(false);
  };

  const TradeColorFunc = (theme) => {

    const root = document.documentElement;

    localStorage.setItem("theme", JSON.stringify(theme));

    root.style.setProperty("--bg-color", theme["--bg-color"]);
    root.style.setProperty("--second-bg-color", theme["--second-bg-color"]);
    root.style.setProperty("--text-color", theme["--text-color"]);
    root.style.setProperty("--main-color", theme["--main-color"]);
    root.style.setProperty("--second-color", theme["--second-color"]);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (opened && e.target.classList.contains("theme-modal-background")) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [opened]);

  const Item = ({ theme, index }) => (
    <div
      key={index}
      onClick={() => TradeColorFunc(theme)}
      className="theme-modal-item"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".3px solid black",
            backgroundColor: theme["--bg-color"],
            borderRadius: "50%",
            marginRight: "-10px",
            zIndex: 991,
            position: "relative",
          }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".3px solid black",
            backgroundColor: theme["--second-bg-color"],
            borderRadius: "50%",
            marginRight: "-10px",
            zIndex: 992,
            position: "relative",
          }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".3px solid black",
            backgroundColor: theme["--text-color"],
            borderRadius: "50%",
            marginRight: "-10px",
            zIndex: 993,
            position: "relative",
          }}
        ></div>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: ".3px solid black",
            backgroundColor: theme["--main-color"],
            borderRadius: "50%",
            zIndex: 994,
            position: "relative",
          }}
        ></div>
      </div>
    </div>
  );

  return (
    opened && (
      <div
        className="theme-modal-background"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 990,
        }}
      >
        <div className="modal-content">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2>Temas</h2>

            <div
              className="bx bx-x"
              id="menu-icon"
              onClick={() => closeModal()}
            >
              <span className="animate" style={{ "--i": 2 }}></span>
            </div>
          </div>
          <div>
            {themes.map((theme, index) => (
              <Item theme={theme} key={index} />
            ))}
            {themeUser &&
              Array.isArray(themeUser) &&
              themeUser.map((theme, index) => (
                <Item theme={theme} key={index} />
              ))}
          </div>
        </div>
      </div>
    )
  );
};
