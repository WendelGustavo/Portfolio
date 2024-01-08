import React from 'react'
import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Projects } from './Projects';
import { ThemeModal } from './ThemeModal';

export const HomePage = ({navbar, cores}) => {

  const [menuOpen, setMenuOpen] = useState(false);  
  const [stateModal, setStateModal] = useState(false);

  if (cores !== undefined) {
    const root = document.documentElement;

    if (cores["--bg-color"] !== undefined) {
    root.style.setProperty("--bg-color", cores["--bg-color"]);
    }

    if (cores["--second-bg-color"] !== undefined) {
    root.style.setProperty("--second-bg-color", cores["--second-bg-color"]);
    }

    if (cores["--text-color"] !== undefined) {
    root.style.setProperty("--text-color", cores["--text-color"]);
    }

    if (cores["--main-color"] !== undefined) {
    root.style.setProperty("--main-color", cores["--main-color"]);
    }
  }



  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const handleScroll = () => {
      const top = window.scrollY;


      if (sections && navLinks) {
        sections.forEach((sec) => {
          const offset = sec.offsetTop - 450;
          const id = sec.getAttribute("id");
      
          if (top >= offset) {
            navLinks.forEach((link) => {
              if (link && document.querySelector(`header nav a[href*=${id}]`)) {
                link.classList.remove("active");
                document
                  .querySelector(`header nav a[href*=${id}]`)
                  .classList.add("active");
              }
            });
      
            sec.classList.add("show-animate");
          } else {
            sec.classList.remove("show-animate");
          }
        });
      }

      if (header) {
        header.classList.toggle("sticky", top > 100);
      }

      setMenuOpen(false);

      const scrolled = window.scrollY;
      
      if (footer) {
        if (Math.ceil(scrolled) >= scrollable) {
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
    <div className='background'>
       <NavBar modal={setStateModal} componente={navbar !== false ? 'Home' : 'previa'} />
        <Home />
        <Education />
        <Projects />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
    <ThemeModal onOpen={stateModal} setOpen={setStateModal} />
    </>
  )
}
