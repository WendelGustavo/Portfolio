import "./styles/style.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);  

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector(`header nav a[href*=${id}]`)
              .classList.add("active");
          });
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });

      if (header) {
        header.classList.toggle("sticky", top > 100);
      }

      setMenuOpen(false);

      const scrolled = window.scrollY;
      if (footer) {
        if (Math.ceil(scrolled) === scrollable) {
          footer.classList.add("show-animate");
        } else {
          footer.classList.remove("show-animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
