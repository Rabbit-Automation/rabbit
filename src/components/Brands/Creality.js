import React from "react";
import CardItem from "../CardItem";
import "./Creality.css";

function Creality() {
  return (
    <>
      <div className="creality-backgroud-header">
        <img src="images/marcas/creality_background.jpg" alt="" />
      </div>
      <div className="background-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-header text-center">
                <h3>Impresión 3D para piezas mecánicas</h3>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card-header">
                          <h5>Optimización topológica</h5>
                        </div>
                        <div className="card-body">
                          <p>
                            Crea piezas mecánicas con formas complejas difíciles
                            o imposibles de fabricar mediante otros métodos de
                            manufacturación.
                          </p>
                          <p>
                            La <strong>impresión 3D</strong> ofrece amplias
                            posibilidades de diseño y optimización topológica ,
                            lo que te permite dar con la combinación óptima de{" "}
                            <strong>
                              resistencia, peso y costes de producción
                            </strong>
                            para tus piezas mecánicas.
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="container-col-6-img">
                          <img
                            src="images/marcas/creality_img_relleno.jpg"
                            alt="relleno de impresion"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="row row-reverse">
                      <div className="col-sm-6">
                        <div className="container-col-6-img">
                          <img
                            src="images/marcas/creality_gears.jpeg"
                            alt="relleno de impresion"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card-header">
                          <h5>Optimización del montaje</h5>
                        </div>
                        <div className="card-body">
                          <p>
                            La impresión 3D facilita la producción en lotes de
                            piezas formadas por varios componentes, logrando
                            minimizar las tareas de montaje y soldadura que en
                            ocasiones provocan impurezas y debilidad en las
                            zonas de ensamblaje.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-header text-center">
                <h3>Impresoras 3D</h3>
              </div>
              <div className="col-12">
                <div className="cards__container">
                  <div className="cards__wrapper">
                    <ul className="cards__items">
                      <CardItem
                        src="images/marcas/modelos_3D/ender_3_pro_3d_printer.jpg"
                        text=""
                        label="Ender 3 PRO"
                        path="#"
                        marca="Impresiones personalizadas"
                      />
                      <CardItem
                        src="images/marcas/modelos_3D/ender-3-V2.jpg"
                        text=""
                        label="Ender 3 V2"
                        path="#"
                        marca="Impresiones personalizadas"
                      />
                      <CardItem
                        src="images/marcas/modelos_3D/Ender-3Max_480x.jpg"
                        text=""
                        label="Ender 3 Max"
                        path="#"
                        marca="Impresiones personalizadas"
                      />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creality;
