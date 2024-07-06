function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        World
      </a>
      <ul>
        <CustomLink href="/happenings" value="Happenings"/>
        <CustomLink href="/rules" value="Rules"/>
        <CustomLink href="/about" value="About"/>
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
