// adding Link from react-router-dom for internal linking
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "../components/Nav";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          {isOpen ? <Nav /> : null}
        </div>
      </div>
      <h1>HOME</h1>
      <p>This will be the home page</p>
    </>
  );
}

export default App;
