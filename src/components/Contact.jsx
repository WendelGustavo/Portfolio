import React, { useState } from "react";
import { getLanguage } from '../util/language';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const language = getLanguage();
export const Contact = () => {
    const [infoContact, setInfoContact] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const handleEmail = () => {
        if (infoContact.name === "" || infoContact.email === "" || infoContact.title === "" || infoContact.message === "") {
            Swal.fire({
                title: 'Opss!',
                text: 'Preencha todos os campos para enviar o email!',
                icon: 'error',
              })
            return;
        }

        const templateParams = {
            from_name: infoContact.name,
            email: infoContact.email,
            title: infoContact.title,
            message: infoContact.message,
        };

        emailjs.send("service_4ae9q69", "template_w1lxwva", templateParams, "LkCaMFKB4umYbkrfZ").then((response) => {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Email enviado com sucesso!',
                icon: 'success',
              })
            setInfoContact({
                name: "",
                email: "",
                title: "",
                message: "",
            });
        }, (err) => {
            Swal.fire({
                title: 'Opss!',
                text: 'Ocorreu um erro ao enviar o email, tente novamente mais tarde!',
                icon: 'error',
              })
        });
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