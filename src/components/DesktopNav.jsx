import { Link } from "react-router-dom";


function DesktopNav() {
  return (
    <>
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

export default DesktopNav;
