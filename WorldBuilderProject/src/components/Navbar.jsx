import { Link } from "react-router"

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        World
      </a>
      <ul>
        <Link to="/happenings" value="Happenings">Happenings</Link>
        <Link to="/rules" value="Rules">Rules</Link>
        <Link to="/about" value="About">About</Link>
      </ul>
    </nav>
  )
}

function CustomLink({ href, value, ...props}) {
  const path = window.location.pathname

  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {value}
      </a>
    </li>
  )
}

export default Navbar;
