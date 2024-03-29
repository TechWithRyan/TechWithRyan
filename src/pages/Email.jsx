import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../components/modal/Contact.css"

const Msg = () => {
  return <div>
    Meddelande skickat!
  </div>
}

const Email = () => {

  const form = useRef();
  const [message, showMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pmhi1d8', 'contact_form', form.current, '5W1Y5ag_ec8NtBokO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showMessage(true);
  };

  return (
    <>
    <h1 className='title is-4'>Kontakt</h1>
    <div className='form'>
      <form ref={form} onSubmit={sendEmail} className="box">
        <label>Namn</label>
        <input type="text" name="name" className="input" required/>
        <label>E-post</label>
        <input type="email" name="email" className="input" required/>
        <label>Företag</label>
        <input type="text" name="foretag" className="input" required/>
        <label>Meddelande</label>
        <textarea name="message" className="textarea" required/>
        <br />
        <input type="submit" value="Skicka" className="button is-primary" />
        <div>{message ? <Msg /> : null}</div>
        <p>ryan.cornelio@gmail.com</p>
      </form>
    </div>
    </>

  );
};

export default Email;