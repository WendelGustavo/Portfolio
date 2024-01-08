import React from "react";
import language from "../util/language";

export const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">
                {language.Education.sectionTitle} <span>{language.Education.sectionTitle2}</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>

            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">
                    {language.Education.title} <span className="animate scroll" style={{ "--i": 2 }}></span>
                    </h3>

                    <div className="education-box">
                        {language.Education.formationArray.map((item, index) => (
                        <div className="education-content" key={index}>
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> {item.date}
                                </div>
                                <h3>{item.title}</h3>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        ))}
                        <span className="animate scroll" style={{ "--i": 3 }}></span>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">
                        {language.Education.titleJobs} <span className="animate scroll" style={{ "--i": 5 }}></span>
                    </h3>

                    <div className="education-box">
                        {language.Education.jobsArray.map((item, index) => (
                        <div className="education-content" key={index}>
                            <div className="content">
                                <div className="year">
                                    <i className="bx bxs-calendar"></i> {item.date}
                                </div>
                                <h3>{item.title}</h3>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                        ))}
                        <span className="animate scroll" style={{ "--i": 6 }}></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
