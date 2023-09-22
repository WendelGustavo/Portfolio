import './styles/style.css';
import { useEffect, useState } from 'react';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');
      const header = document.querySelector('header');
      const footer = document.querySelector('footer');
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  
      const handleScroll = () => {
        const top = window.scrollY;
  
        sections.forEach((sec) => {
          const offset = sec.offsetTop - 150;
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove('active');
              document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
            sec.classList.add('show-animate');
          } else {
            sec.classList.remove('show-animate');
          }
        });
  
        header.classList.toggle('sticky', top > 100);
  
        setMenuOpen(false);
  
        const scrolled = window.scrollY;
        if (Math.ceil(scrolled) === scrollable) {
          footer.classList.add('show-animate');
        } else {
          footer.classList.remove('show-animate');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [menuOpen]);
  
    const TradeTheme = () => {
      const root = document.documentElement;
      root.style.setProperty('--bg-color', '#281c54');
      root.style.setProperty('--second-bg-color', '#422d85');
      root.style.setProperty('--text-color', '#ededed');
      root.style.setProperty('--main-color', '#8a2be2');
    };

  return (
    <>
        <header class="header">
            <a href="/" className="logo" style={{ textDecoration: 'none' }}>Wendel Dev.<span className="animate" style={{ '--i': 1 }}></span></a>
    
            <div class={menuOpen ? 'bx bx-x' : 'bx bx-menu'} id="menu-icon" onClick={()=>toggleMenu()}><span className="animate" style={{'--i': 2}}></span></div>
    
            <nav class={menuOpen ? 'navbar active' : 'navbar'}>
                <a href="#home" class="active">Home</a>
                <a href="#about">Sobre</a>
                <a href="#education">Formação</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contato</a>
                <a class="theme" onClick={()=>TradeTheme()}>⠀⠀⠀</a>
    
                <span class="active-nav"></span>
                <span className="animate" style={{'--i': 2}}></span>
            </nav>
        </header>
    
        <section class="home show-animate" id="home">
            <div class="home-content">
                <h1>Olá, sou<span> Wendel Gustavo</span><span className="animate" style={{'--i': 2}}></span></h1>
                <div class="text-animate">
                    <h3>Full Stack Developer</h3>
                    <span className="animate" style={{'--i': 3}}></span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at cupiditate laborum quae facere
                    debitis ipsam quasi, natus quibusdam officiis fugit repellat veniam totam asperiores doloremque nobis.
                    <span className="animate" style={{'--i': 4}}></span>
                </p>
    
                <div class="btn-box">
                    <a href="#" class="btn">Currículo⠀<i class='bx bx-download'></i></a>
                    <a href="#" class="btn">Projetos</a>
                    <span className="animate" style={{'--i': 5}}></span>
                </div>
            </div>
    
            <div class="home-sci">
                <a href="https://www.instagram.com/wendel_gustaa/" target="_blank" rel="noreferrer"><i class='bx bxl-instagram'></i></a>
                <a href="https://twitter.com/wendelgustaa" target="_blank" rel="noreferrer"><i class='bx bxl-twitter'></i></a>
                <a href="https://www.linkedin.com/in/wendel-fillmann-b87b4124a/" target="_blank" rel="noreferrer"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/WendelGustavo" target="_blank" rel="noreferrer"><i class='bx bxl-github'></i></a>
                <span class="animate" style={{'--i': 6}}></span>
            </div>
    
            <div class="home-imgHover"></div>
            <span class="animate home-img" style={{'--i': 7}}></span>
        </section>
    
        <section class="about" id="about">
            <h2 class="heading" style={{'--i': 1}}>Sobre <span>Mim</span><span class="animate scroll"></span></h2>
    
            <div class="about-img">
                <img src='/images/about.png' alt="" />
                <span class="circle-spin"></span>
                <span className="animate scroll" style={{'--i': 2}}></span>
            </div>
    
            <div class="about-content">
                <h3 style={{'--i': 3}}>Full Stack Developer!<span class="animate scroll"></span></h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
                    eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
                    molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
                    odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
                    <span className="animate scroll" style={{'--i': 4}}></span>
                </p>
    
                <div class="btn-box btns">
                    <a href="#" class="btn">Read More</a>
                    <span class="animate scroll" style={{'--i': 5}}></span>
                </div>
            </div>
        </section>
    
        <section class="education" id="education">
            <h2 class="heading">Minha <span>Jornada</span><span class="animate scroll" style={{'--i': 1}}></span></h2>
    
            <div class="education-row">
                <div class="education-column">
                    <h3 class="title">Formação<span class="animate scroll" style={{'--i': 2}}></span></h3>
    
                    <div class="education-box">
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i> 2023 - ATUALMENTE (CURSANDO)</div>
                                <h3>Ciência da Computação - Bacharelado (FEEVALE)</h3>
                                <p>Cursando Ciência da Computação na Faculdade Feevale ( 2º Semestre ).
                                </p>
                            </div>
                        </div>
    
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i> 2020 - 2023</div>
                                <h3>Ensino Médio Técnico - Informática (CIMOL)</h3>
                                <p>Concluiu-se a formação após 3 anos de estudos de programação integrados ao ensino médio. Além disso, foram realizadas 400 horas de estágio.</p>
                            </div>
                        </div>
    
                        <span class="animate scroll" style={{'--i': 3}}></span>
                    </div>
                </div>
    
                <div class="education-column">
                    <h3 class="title">Experiência<span class="animate scroll" style={{'--i': 5}}></span></h3>
    
                    <div class="education-box">
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i> 2017 - 2018</div>
                                <h3>Web Developer - Company</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti ex eos commodi
                                    quibusdam quos quas optio explicabo dolor repellendus.</p>
                            </div>
                        </div>
    
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i> 2018 - 2019</div>
                                <h3>Web Developer - Company</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti ex eos commodi
                                    quibusdam quos quas optio explicabo dolor repellendus.</p>
                            </div>
                        </div>
    
                        <div class="education-content">
                            <div class="content">
                                <div class="year"><i class='bx bxs-calendar'></i> 2019 - 2020</div>
                                <h3>Web Developer - Company</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corrupti ex eos commodi
                                    quibusdam quos quas optio explicabo dolor repellendus.</p>
                            </div>
                        </div>
    
                        <span class="animate scroll" style={{'--i': 6}}></span>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="skills" id="skills">
            <h2 class="heading">My <span>Skills</span><span class="animate scroll" style={{'--i': 1}}></span></h2>
    
            <div class="skills-row">
                <div class="skills-column">
                    <h3 class="title">Coding Skills<span class="animate scroll" style={{'--i': 2}}></span></h3>
    
                    <div class="skills-box">
                        <div class="skills-content">
                            <div class="progress">
                                <h3>HTML <span>90%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>CSS <span>80%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>JavaScript <span>65%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>Python <span>75%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
                        </div>
    
                        <span class="animate scroll" style={{'--i': 3}}></span>
                    </div>
                </div>
    
                <div class="skills-column">
                    <h3 class="title">Professional Skills<span class="animate scroll" style={{'--i': 5}}></span></h3>
    
                    <div class="skills-box">
                        <div class="skills-content">
                            <div class="progress">
                                <h3>Web Design <span>95%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>Web Development <span>67%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>Graphic Design <span>85%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
    
                            <div class="progress">
                                <h3>SEO Marketing <span>60%</span></h3>
                                <div class="bar"><span></span></div>
                            </div>
                        </div>
    
                        <span class="animate scroll" style={{'--i': 6}}></span>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me!</span><span class="animate scroll" style={{'--i': 1}}></span></h2>
    
            <form action="#">
                <div class="input-box">
                    <div class="input-field">
                        <input type="text" placeholder="Full Name" required />
                        <span class="focus"></span>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Email Address" required />
                        <span class="focus"></span>
                    </div>
    
                    <span class="animate scroll" style={{'--i': 3}}></span>
                </div>
    
                <div class="input-box">
                    <div class="input-field">
                        <input type="number" placeholder="Mobile Number" required />
                        <span class="focus"></span>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Email Subject" required />
                        <span class="focus"></span>
                    </div>
    
                    <span class="animate scroll" style={{'--i': 5}}></span>
                </div>
    
                <div class="textarea-field">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <span class="focus"></span>
    
                    <span class="animate scroll" style={{'--i': 7}}></span>
                </div>
    
                <div class="btn-box btns">
                    <button type="submit" class="btn">Submit</button>
    
                    <span class="animate scroll" style={{'--i': 9}}></span>
                </div>
            </form>
        </section>
    
        <footer class="footer">
            <div class="footer-text">
                <p>Copyright &copy; 2023 by Wendel | All Rights Reserved.</p>
    
                <span class="animate scroll" style={{'--i': 1}}></span>
            </div>
    
            <div class="footer-iconTop">
                <a href="#"><i class='bx bx-up-arrow-alt'></i></a>
    
                <span class="animate scroll" style={{'--i': 3}}></span>
            </div>
        </footer>
        </>
  );
}

export default App;
