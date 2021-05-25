import React from "react";
import "./Footer.css";
import FooterContactInfo from "./FooterContactInfo";

function Footer() {
  return (
    <footer className="footer--wrap">
      <div className="container-box services-container">
        <h5>Nuestros Servicios</h5>
        <ul className="services--list">
          <li className="service--item">
            <p>Desarrollo de software</p>
          </li>
          <li className="service--item">
            <p>Codificación y trazabilidad</p>
          </li>
          <li className="service--item">
            <p>Venta de Refacciones Eléctricas e Industrial</p>
          </li>
        </ul>
        <h5>Ubicación</h5>
        <p id="locate">
          Antigua Carretera a la Griega 210, 76246 La Piedad, Qro.
        </p>
      </div>
      <div className="container-box contact-container">
        <h5>Contáctanos</h5>
        <FooterContactInfo
          name="Oscar Conejo"
          phone="442 457 5549"
          email="oconejo.rabbit@gmail.com"
        />
        <FooterContactInfo
          name="Gabriel Conejo"
          phone="712 195 9072"
          email="gconejo.rabbit@gmail.com"
        />
        <FooterContactInfo
          name="Josue Reyes"
          phone="55 2954 0933"
          email="rabbit.demos@gmail.com"
        />
      </div>
      <div className="container-box social-media-container">
        <h5>Siguenos en nuestras redes</h5>
        <a
          href="https://www.facebook.com/Rabbit-Automation-103113837911601"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UClYToirFDmVOk1mAh8I8-NQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="container-box logo-container">
        <div className="logo-footer">
          <img
            src="images/general/logo_b.png"
            alt="Rabbit Automation and Technologies logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
