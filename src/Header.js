import "./Header.css";
import logo from "./assets/logo.png";
import { useState } from "react";


const navItems = [
  { href: "#alpenrose", label: "Alpenrose Retreats" },
  { href: "#retreat", label: "Spring/Summer 2026" },
  { href: "#journey", label: "Your Journey" },
  { href: "#investment", label: "Investment" },
  { href: "#accommodations", label: "Accommodations" },
  { href: "#logistics", label: "Logistics" },
];




function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">

        <div className="header-tdl">
          <h1 className="title">Alpenrose Retreat</h1>
          <h2 className="date-location">May 30 - June 2</h2>
          <h2 className="date-location">Kremmling, Colorado</h2>
        </div>

        <div className="header-logo">
          <button
            className="logo-button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <img src={logo} alt="Logo" />
          </button>
        </div>

<nav className="header-nav">
  {navItems.map(({ href, label }) => (
    <a key={href} href={href}>
      {label}
    </a>
  ))}
</nav>

        <button className="list_close_btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu" >
          <i className="bi bi-list"></i>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav-overlay">
          <button className="list_close_btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu">
            <i className="bi bi-x-lg"></i>
          </button>

<nav className="mobile-nav">
  {navItems.map(({ href, label }) => (
    <a
      key={href}
      href={href}
      onClick={handleNavClick}
    >
      {label}
    </a>
  ))}
</nav>
        </div>
      )}
    </header>
  );
}

export default Header;
