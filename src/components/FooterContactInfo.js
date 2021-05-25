import React from "react";
import "./Footer.css";

function FooterContactInfo(props) {
  const whatsappNumber = "https://api.whatsapp.com/send?phone=+52" + props.phone /* + "&text=Hola me gustaría realizar la cotización de un proyecto" */;
  const call = "tel:" + props.phone;
  const mail = "mailto:" + props.email;

  return (
    <div className="contact">
      <p className="name">{props.name} | Software y Desarrollo</p>
      <a href={call} rel="noopener noreferrer">
        <i className="fas fa-phone"></i> {props.phone}
      </a>
      <br />
      <a href={mail} rel="noopener noreferrer">
        <i className="far fa-envelope"></i> {props.email}
      </a>
      <br />
      <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i> Enviar whatsapp
      </a>
    </div>
  );
}

export default FooterContactInfo;
