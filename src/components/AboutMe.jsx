import React from "react";

export const AboutMe = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading" style={{ "--i": 1 }}>
                Sobre <span>Mim</span>
                <span className="animate scroll"></span>
            </h2>

                <div className="about-img">
                    <img src="/images/about.png" alt="" />
                    <span className="circle-spin"></span>
                    <span className="animate scroll" style={{ "--i": 2 }}></span>
                </div>

                <div className="about-content">
                    <h3 style={{ "--i": 3 }}>
                        Full Stack Developer!<span className="animate scroll"></span>
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
                        dolorum recusandae saepe magni eveniet provident voluptate cupiditate
                        sapiente vero numquam soluta non amet voluptatem ipsam eius quam
                        molestias pariatur, eaque a! Minus repudiandae sapiente asperiores
                        aliquid magnam iste vel quis officiis odio laudantium numquam minima,
                        dolorem officia esse, quidem ipsa.
                        <span className="animate scroll" style={{ "--i": 4 }}></span>
                    </p>

                    <div className="btn-box btns">
                        <a href="#" className="btn">
                            Read More
                        </a>
                        <span className="animate scroll" style={{ "--i": 5 }}></span>
                    </div>
                </div>
            </section>
        );
    };
