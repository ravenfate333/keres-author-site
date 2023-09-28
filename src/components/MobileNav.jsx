import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";


function MobileNav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen ? (
      <>
      <nav className="mobile-nav">
        <ul className="nav-links">
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
            <Link to={'/CrackedCoffins'}>THE CRACKED COFFINS SERIES</Link>
          </li>
          <li>
            <Link to={'/Bio'}>BIO</Link>
          </li>
          <li>
            <Link to={'/Contact'}>CONTACT</Link>
          </li>
        </ul>
      </nav>
      </>
      ) : null }
    </div>

  )
}

export default MobileNav;
