import React from "react";
import Carousel from "react-bootstrap/Carousel"

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
               {/*  <h5 className="pt-5">Industrias</h5>
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
                </ul> */}
              </div>
              <div className="col-md-6">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/marcas/zebra_img_1.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/marcas/zebra_img_2.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/marcas/zebra_img_3.jpg"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zebra;
