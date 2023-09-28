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

export const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);  
    const [stateModal, setStateModal] = useState(false);

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
        const offset = sec.offsetTop - 350;
        const id = sec.getAttribute("id");

        if (top >= offset) {
            console.log('id');
          navLinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector(`header nav a[href*=${id}]`)
              .classList.add("active");
          });
          sec.classList.add("show-animate");
        } else {
            console.log('id2'); 
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
    <div className='background'>
        <NavBar modal={setStateModal} />
        <Home />
        <Education />
        <Projects />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>

    <ThemeModal onOpen={stateModal} />
    </>
  )
}
