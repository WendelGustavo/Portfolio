import React from "react";

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">
                Converse <span>Comigo!</span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
            </h2>

            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Nome" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email" required />
                        <span className="focus"></span>
                    </div>

                    <span className="animate scroll" style={{ "--i": 3 }}></span>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Assunto" required />
                        <span className="focus"></span>
                    </div>

                    <span className="animate scroll" style={{ "--i": 5 }}></span>
                </div>

                <div className="textarea-field">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Sua Mensagem"
                        required
                    ></textarea>
                    <span className="focus"></span>

                    <span className="animate scroll" style={{ "--i": 7 }}></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn">
                        Enviar
                    </button>

                    <span className="animate scroll" style={{ "--i": 9 }}></span>
                </div>
            </form>
        </section>
    );
};