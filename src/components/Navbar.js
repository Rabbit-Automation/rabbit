import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="/images/general/logo_b.png"
              alt="Rabbit Automation and Technologies logo"
              width="100"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/marcas"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Marcas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demos" className="nav-links" onClick={closeMobileMenu}>
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SOLUCIONES</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
