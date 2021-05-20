import React from "react";
import "../../App.css";
import CardItem from "../CardItem";
import "../Cards.css";

function Brands() {
  return (
    <>
    <div className="container">
      <div className="col-12">
        <div className="card-header text-center">
          <h3>Marcas</h3>
        </div>
      </div>
    </div>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
        <CardItem
            src="images/marcas/zebra.png"
            text=""
            label="ZEBRA"
            path="/zebra"
            marca="ZEBRA logo"
          />
          <CardItem
            src="images/marcas/mitsubishi-electric.png"
            text=""
            label="Mitsubishi Electric"
            path="/mitsubishi"
            marca="Mitsubishi Electric logo"
          />
           <CardItem
            src="images/marcas/allen-bradley.png"
            text=""
            label="Allen Bradley"
            path="/allenBradley"
            marca="Allen Bradley logo"
          />
        </ul>
        <ul className="cards__items">
        <CardItem
            src="images/marcas/siemens.png"
            text=""
            label="SIEMENS"
            path="/siemens"
            marca="SIEMENS logo"
          />
          <CardItem
            src="images/marcas/color-plus.png"
            text=""
            label="COLOR PLUS"
            path="/colorplus"
            marca="COLOR PLUS logo"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="images/marcas/tronxy.png"
            text=""
            label="TRONXY"
            path="/tronxy"
            marca="TRONXY logo"
          />
          <CardItem
            src="images/marcas/creality.jpeg"
            text=""
            label="CREALITY"
            path="/creality"
            marca="CREALITY logo"
          />
        </ul>
      </div>
    </div>
    </>
  );
}

export default Brands;
