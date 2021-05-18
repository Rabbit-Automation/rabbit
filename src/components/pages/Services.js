import React from "react";
import CardItem from '../CardItem'

function Services() {
  return (
    <div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://creativetimblog.com/blog/wp-content/uploads/2017/10/opt_nud_thumbnail.jpg"
              text=" "
              label="Dashboard Demo"
              path="/dashboardExtrusora"
              marca="Demo 1"
            />
            <CardItem
              src="images/marcas/mitsubishi-electric.png"
              text=""
              label="Mitsubishi Electric"
              path="/marcas"
              marca="Mitsubishi Electric logo"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/marcas/siemens.png"
              text=""
              label="SIEMENS"
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
              src="images/marcas/color_plus.jpeg"
              text=""
              label="COLOR PLUS"
              path="/marcas"
              marca="SIEMENS logo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
