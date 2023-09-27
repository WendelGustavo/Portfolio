import React from "react";

export const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">
                Minha <span>Jornada</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>

            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">
                        Formação<span className="animate scroll" style={{ "--i": 2 }}></span>
                    </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> 2023 - ATUALMENTE (CURSANDO)
                                </div>
                                <h3>Ciência da Computação - Bacharelado (FEEVALE)</h3>
                                <p>
                                    Cursando Ciência da Computação na Faculdade Feevale ( 2º
                                    Semestre ).
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> 2020 - 2023
                                </div>
                                <h3>Ensino Médio Técnico - Informática (CIMOL)</h3>
                                <p>
                                    Concluiu-se a formação após 3 anos de estudos de programação
                                    integrados ao ensino médio. Além disso, foram realizadas 400
                                    horas de estágio.
                                </p>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 3 }}></span>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">
                        Experiência<span className="animate scroll" style={{ "--i": 5 }}></span>
                    </h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> 2017 - 2018
                                </div>
                                <h3>Web Developer - Company</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Expedita corrupti ex eos commodi quibusdam quos quas optio
                                    explicabo dolor repellendus.
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> 2018 - 2019
                                </div>
                                <h3>Web Developer - Company</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Expedita corrupti ex eos commodi quibusdam quos quas optio
                                    explicabo dolor repellendus.
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> 2019 - 2020
                                </div>
                                <h3>Web Developer - Company</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Expedita corrupti ex eos commodi quibusdam quos quas optio
                                    explicabo dolor repellendus.
                                </p>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 6 }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
