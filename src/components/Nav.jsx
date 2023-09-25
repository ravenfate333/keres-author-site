import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>
          BOOKS
          <ul>
            <li>
              <Link to={'/CrackedCoffins'}>THE CRACKED COFFINS SERIES</Link>
            </li>
          </ul>
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
