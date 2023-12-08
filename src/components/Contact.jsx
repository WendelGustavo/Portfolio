import React, { useState } from "react";

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
                Converse <span>Comigo!</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>
            <form action="">
                <div className="input-box">
                    <div className="input-field">
                        <input
                           type="text"
                           placeholder="Nome"
                           value={infoContact.name}
                           onChange={(e) => setInfoContact({ ...infoContact, name: e.target.value })}
                           required 
                        />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder="Email" 
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
                            placeholder="Título"
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
                        placeholder="Sua Mensagem"
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
                        Enviar
                    </button>

                    <span className="animate scroll" style={{ "--i": 9 }}></span>
                </div>
            </form>
        </section>
    );
};