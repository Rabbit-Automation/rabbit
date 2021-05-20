import React from "react";
import "./Footer.css";

function FooterContactInfo(props) {
  const whatsappNumber = "https://api.whatsapp.com/send?phone=" + props.phone;
  const call = "tel:" + props.phone;
  const mail = "mailto:" + props.email;

  return (
    <div className="contact">
      <p className="name">{props.name} | Software y Desarrollo</p>
      <a href={call} /* target="_blank" */ rel="noopener noreferrer">
        <i class="fas fa-phone"></i> {props.phone}
      </a>
      <br />
      <a href={mail} /* target="_blank" */ rel="noopener noreferrer">
        <i class="far fa-envelope"></i> {props.email}
      </a>
      <br />
      <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
        <i class="fab fa-whatsapp"></i> Enviar whatsapp
      </a>
    </div>
  );
}

export default FooterContactInfo;
