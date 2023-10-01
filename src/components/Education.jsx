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
                                Ensino Médio Técnico no curso de Informática, em conjunto com estágio de 400 horas, 
                                uma experiência que agregou um valor significativo à minha formação acadêmica e profissional.
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
                                    <i className="bx bxs-calendar"></i> Ago de 2023 - ATUALMENTE
                                </div>
                                <h3>Desenvolvedor Full Stack - Kabupi</h3>
                                <p>
                                Desenvolvimento de um sistema de Voucher, descontos e cashbacks, direcionado ao turismo da serra gaúcha.
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> Jan de 2023 - ATUALMENTE
                                </div>
                                <h3>Desenvolvedor Full Stack - CONSEPRO</h3>
                                <p>
                                    Desenvolvimento de um sistema de gestão de estacionamento rotativo da cidade de Taquara.
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
