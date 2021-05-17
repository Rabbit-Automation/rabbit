import React from "react";
import "./Footer.css";

function FooterContactInfo(props) {
  const whatsappNumber = "https://api.whatsapp.com/send?phone=" + props.phone;

  return (
    <div className="contact">
      <p className="name">{props.name} | Software y Desarrollo</p>
      <a href={whatsappNumber} target="_blank" rel="noopener noreferrer">
        <i class="fab fa-whatsapp"></i> {props.phone}
      </a>
      <p>
        <i class="far fa-envelope"></i> {props.email}
      </p>
    </div>
  );
}

export default FooterContactInfo;
