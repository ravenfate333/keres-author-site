import { Outlet } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen ? <Nav /> : null}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;