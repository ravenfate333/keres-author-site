import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "../components/Nav";

function Contact() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
      </div>
      <div>
        <h1>Contact Page Goes Here</h1>
      </div>
    </>
  );
}

export default Contact;
