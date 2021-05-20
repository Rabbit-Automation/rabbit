import React from "react";
/* import CardItem from "../CardItem"; */
import "./Colorplus.css";
import Carousel from "../Carousel";

function Colorplus() {
  return (
    <>
      <div className="color-plus-backgroud-header">
        <img src="images/marcas/color_plus_logo_header.png" alt="" />
      </div>
      <div className="container color-plus-margintop-header">
        <div className="col-12">
          <div className="card-header text-center">
            <h3>Impresión 3D para piezas mecánicas</h3>
          </div>
          <div className="card-body text-center">
            <p>
              Somos distribuidores autorizados de <strong>Color Plus </strong>
              elegimos usar filamentos Color Plus para impresoras 3D por su alta
              calidad, ya que es fabricado con altos estándares para tus
              impresiones en 3D.
            </p>
          </div>
        </div>
      </div>
      <section className="filament-features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-medal"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>GARANTIA PREMIUM</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Filamento de Alta calidad PREMIUM gracias a su
                            composición química lo cual hace de los filamentos
                            de los mejores en el mercado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-dumbbell"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>MEJOR RESISTENCIA</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Los filamentos Color Plus para impresora 3d brindan
                            gran resistencia a la hora de imprimir las piezas,
                            gracias a la gran calidad de fabricación.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-pen-fancy"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>GRAN DEFINICIÓN</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Filamento con altos estándares de fabricación lo que
                            hace de estos un producto PREMIUM gracias a su
                            composición química lo cual lo hace de los mejores
                            en el mercado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-palette"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>COLORES ÚNICOS</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Cuenta con 14 colores únicos dentro de los
                            filamentos PLA y ABS, con la gran variedad de
                            colores de Color Plus podrás crear piezas únicas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-gem"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>CALIDAD PREMIUM</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Gracias a su calidad PREMIUM, al momento de imprimir
                            no genera warping lo cual hace que la extensión
                            directa sea más eficaz.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i class="fas fa-pencil-ruler"></i>
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <div className="feature-card-header">
                          <p>DEFINICIÓN IMPRESIÓN 3D</p>
                        </div>
                        <div className="feature-card-text text-justify">
                          <p>
                            Los filamentos PREMIUM de Color Plus 3D son ideales
                            para impresoras 3D de código abierto, es momento que
                            uses calidad al momento de imprimir.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="filaments-type">
        <Carousel/>
      </section>
    </>
  );
}

export default Colorplus;
