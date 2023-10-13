import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "../styles/form.scss";

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

    emailjs
      .sendForm(
        "service_lo5w0ib",
        "template_j7wzdu7",
        e.target,
        "E1idq_3v-UwxpiTdr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          setErrorMessage("");
          setSuccessMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h1>Contact</h1>
      <p>Send me a message and I will get back to you as soon!</p>
      <form onSubmit={sendEmail}>
        <div className="text-fields">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{ name: "user_name" }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="dense"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{ name: "user_email" }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Message"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            inputProps={{ name: "message" }}
            fullWidth
          />
        </div>

        <Button
          className="send-button"
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#793438",
            "&:hover": { backgroundColor: "#3F3E3E" }, width: 'auto', margin: '0 100px'
          }}
          type="submit"
          endIcon={<SendIcon />}
        >
          Send
        </Button>

        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
