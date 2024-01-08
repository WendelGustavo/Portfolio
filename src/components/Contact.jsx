import React, { useState } from "react";
import language from "../util/language";

export const Contact = () => {
    const [infoContact, setInfoContact] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const handleEmail = () => {
        console.log(infoContact);
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                {language.Contact.sectionTitle} <span>{language.Contact.sectionTitle2}</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>
            <form action="">
                <div className="input-box">
                    <div className="input-field">
                        <input
                           type="text"
                           placeholder={language.Contact.placHolders.name}
                           value={infoContact.name}
                           onChange={(e) => setInfoContact({ ...infoContact, name: e.target.value })}
                           required 
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder={language.Contact.placHolders.email}
                            value={infoContact.email}
                            onChange={(e) => setInfoContact({ ...infoContact, email: e.target.value })}
                            required
                        />
                        <span className="focus"></span>
                    </div>

                    <span className="animate scroll" style={{ "--i": 3 }}></span>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input 
                            type="text"
                            placeholder={language.Contact.placHolders.title}
                            value={infoContact.title}
                            onChange={(e) => setInfoContact({ ...infoContact, title: e.target.value })}
                            required
                        />
                        <span className="focus"></span>
                    </div>

                    <span className="animate scroll" style={{ "--i": 5 }}></span>
                </div>

                <div className="textarea-field">
                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        value={infoContact.message}
                        onChange={(e) => setInfoContact({ ...infoContact, message: e.target.value })}
                        placeholder={language.Contact.placHolders.message}
                        required
                    ></textarea>
                    <span className="focus"></span>

                    <span className="animate scroll" style={{ "--i": 7 }}></span>
                </div>

                <div className="btn-box btns">
                    <button 
                     type="button"
                     className="btn"
                     onClick={() => {handleEmail()}}
                     >
                        {language.Contact.buttonSend}
                    </button>

                    <span className="animate scroll" style={{ "--i": 9 }}></span>
                </div>
            </form>
        </section>
    );
};