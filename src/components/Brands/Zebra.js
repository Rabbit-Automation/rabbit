import React from "react";

function Zebra() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card-header text-center">
            <h3>Zebra</h3>
            <p>
              Brinde a sus trabajadores las mejores herramientas para aumentar
              la eficiencia.
            </p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5>
                  ¿Porqué usamos dispositivos <strong>zebra</strong>?
                </h5>
                <ul className="list-group">
                  <li>Rápido acceso a la información.</li>
                  <li>Desarrollo de aplicaciones Android optimas.</li>
                  <li>Lectura de QR-Code, DataMatrix, Barra.</li>
                  <li>Administración de inventarios.</li>
                  <li>Procesamiento de pedidos/devoluciones.</li>
                  <li>Automatizacion de almácenes.</li>
                </ul>
                <h5 className="pt-5">Industrias</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i class="fas fa-dolly-flatbed"></i> Venta minorista.
                  </li>
                  <li className="list-group-item">
                    <i class="fas fa-industry"></i> Fabricación.
                  </li>
                  <li className="list-group-item">
                    <i class="fas fa-warehouse"></i> Almacenes.
                  </li>
                  <li className="list-group-item">
                    <i class="fas fa-map-marker-alt"></i> Movilidad.
                  </li>
                  <li className="list-group-item">
                    <i class="fas fa-plane"></i> Transporte.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pt-5">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/marcas/zebra_img_1.jpg"
                        className="d-block w-100"
                        alt="dispositivos zebra"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/marcas/zebra_img_2.png"
                        className="d-block w-100"
                        alt="dispositivos zebra"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="images/marcas/zebra_img_3.jpg"
                        className="d-block w-100"
                        alt="dispositivos zebra"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zebra;
