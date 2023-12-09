import React, { useEffect } from "react";
import themes from "./util/DataThemes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import "./styles/style.css";
import { CreatePersonTheme } from "./components/CreatePersonTheme";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const theme = localStorage.getItem('theme');
    if (theme) {
      const parsedTheme = JSON.parse(theme);
      root.style.setProperty('--bg-color', parsedTheme['--bg-color']);
      root.style.setProperty('--second-bg-color', parsedTheme['--second-bg-color']);
      root.style.setProperty('--text-color', parsedTheme['--text-color']);
      root.style.setProperty('--main-color', parsedTheme['--main-color']);
    } else {
      root.style.setProperty('--bg-color', themes[5]['--bg-color']);
      root.style.setProperty('--second-bg-color', themes[5]['--second-bg-color']);
      root.style.setProperty('--text-color', themes[5]['--text-color']);
      root.style.setProperty('--main-color', themes[5]['--main-color']);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/create-theme" exact element={<CreatePersonTheme />} />
      </Routes>
    </Router>
  );
}

export default App;
