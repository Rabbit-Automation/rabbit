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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
