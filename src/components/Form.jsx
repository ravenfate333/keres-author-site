import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
        setErrorMessage("All fields are required.");
        return;
      }
  
      if (!email.includes("@")) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }

    emailjs.sendForm('service_lo5w0ib', 'template_j7wzdu7', e.target, 'E1idq_3v-UwxpiTdr')
      .then((result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setErrorMessage("");
          setSuccessMessage("Email sent successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
    
      <input type="submit" value="Send" />
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default ContactUs;
