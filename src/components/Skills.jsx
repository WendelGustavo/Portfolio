import React from "react";

export const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="heading">
                Minhas <span>Habilidades</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>

            <div className="skills-row">
                <div className="skills-column">
                    <h3 className="title">
                    Habilidades de programação
                        <span className="animate scroll" style={{ "--i": 2 }}></span>
                    </h3>

                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>
                                    HTML <span>90%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    CSS <span>80%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    JavaScript <span>65%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    Python <span>75%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 3 }}></span>
                    </div>
                </div>

                <div className="skills-column">
                    <h3 className="title">
                        Habilidades profissionais
                        <span className="animate scroll" style={{ "--i": 5 }}></span>
                    </h3>

                    <div className="skills-box">
                        <div className="skills-content">
                            <div className="progress">
                                <h3>
                                    Web Design <span>95%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    Web Development <span>67%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    Graphic Design <span>85%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>

                            <div className="progress">
                                <h3>
                                    SEO Marketing <span>60%</span>
                                </h3>
                                <div className="bar">
                                    <span></span>
                                </div>
                            </div>
                        </div>

                        <span className="animate scroll" style={{ "--i": 6 }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
