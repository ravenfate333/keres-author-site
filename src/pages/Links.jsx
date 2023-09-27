import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "../components/Nav";

function Links() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
      </div>
      <h1>Links Go Here</h1>
    </>
  );
}

export default Links;
