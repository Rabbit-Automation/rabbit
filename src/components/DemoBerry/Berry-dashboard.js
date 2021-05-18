import React from "react";

function BerryDashboard() {
  return (
    <div>
      <body className="background">
        <div className="navbar-wrapper">
          <h3 className="text__center">EXTRUSORA</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 card__padding">
              <div className="card card__custom">
                <div className="card-header text__center">
                  <p>Producción Acumulada</p>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div className="chart-area">
                        Aqui va la grafica
                        <canvas id="myChart1"></canvas>
                      </div>
                    </div>
                    <div className="col-6 text__center">
                      <p>Producción Acumulada</p>
                      <h3>34KG</h3>
                      <p>Desperdicio [kg]</p>
                      <h3>5KG</h3>
                    </div>
                  </div>
                </div>
                <div className="card-footer text__center">
                  <div className="row">
                    <div className="col-6">
                      <h5 id="productkg_h">Producción Kg/h: 1871</h5>
                    </div>
                    <div className="col-6">
                      <h5>Meta: 1962</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 card__padding">
              <div className="card card__custom">
                <div className="card-header">
                  <div className="row text__center">
                    <div className="col-6">
                      <p>Velocidad Actual</p>
                    </div>
                    <div className="col-6">
                      <p>Meta</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>Aqui va otra grafica</p>
                      <canvas id="myChart2"></canvas>
                    </div>
                    <div className="col-6 text__center">
                      <h2>310 m/min</h2>
                    </div>
                  </div>
                </div>
                <div className="card-footer text__center">
                  <div className="row">
                    <div className="col-6">
                      <h5 id="velocidadActual">DFG</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 card__padding">
              <div className="card card__custom">
                <div className="card-header text__center">
                  <div className="row">
                    <div className="col-6">
                      <h6>INDICADORES (Diario)</h6>
                    </div>
                    <div className="col-6">
                      <h6>VALOR ACTUAL</h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h6 id="metaFPY">DFG</h6>
                      <h6 id="metaUPT">DFGD</h6>
                      <h6>NY 99.0%</h6>
                    </div>
                    <div className="col-6 text__right">
                      <div className="row">
                        <div className="col-6">
                          <h6 id="icon-FPY">DFG</h6>
                          <h6 id="icon-UPT">
                            <span className="icon-arrow-right"></span>
                          </h6>
                          <h6>
                            <span className="icon-arrow-down"></span>
                          </h6>
                        </div>
                        <div className="col-6">
                          <h6 id="fpy">SDF</h6>
                          <h6 id="uptime">SDF</h6>
                          <h6>87.2%</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text__center">
                  <h6>13 gsm SSMMS HFO</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-8 card__padding">
              <div className="card card__custom">
                <div className="card-header text__center">
                  <h5>Historial velocidad </h5>
                </div>
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="HistorialVelocidad"></canvas>
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default BerryDashboard;
