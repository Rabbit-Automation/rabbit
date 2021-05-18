import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "../Cards.css";

function Brands() {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src="images/marcas/siemens.png"
            text=""
            label="SIEMENS"
            path="/marcas"
            marca="SIEMENS logo"
          />
          <CardItem
            src="images/marcas/mitsubishi-electric.png"
            text=""
            label="Mitsubishi Electric"
            path="/marcas"
            marca="Mitsubishi Electric logo"
          />
          <CardItem
            src="images/marcas/color_plus.jpeg"
            text=""
            label="COLOR PLUS"
            path="/marcas"
            marca="SIEMENS logo"
          />
        </ul>
        <ul className="cards__items">
        <CardItem
            src="images/marcas/color_plus.jpeg"
            text=""
            label="COLOR PLUS"
            path="/marcas"
            marca="SIEMENS logo"
          />
          <CardItem
            src="https://www.logaster.com.es/blog/wp-content/uploads/sites/2/2020/06/t_zebra-logo_12.png"
            text=""
            label="ZEBRA"
            path="/marcas"
            marca="ZEBRA logo"
          />
          <CardItem
            src="images/marcas/allen-bradley.png"
            text=""
            label="Allen Bradley"
            path="/marcas"
            marca="Allen Bradley logo"
          />
        </ul>
      </div>
    </div>
  );
}

export default Brands;
