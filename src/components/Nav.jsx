import { Link } from "react-router-dom";
import "../styles/nav.scss"

function Nav() {
  return (
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

    <nav className="desktop-nav">
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
  )
}

export default Nav;
