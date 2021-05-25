import React from "react";
/* import CardItem from "../CardItem"; */
import "../../App.css";
import "./Services.css";
import { Button, Card } from 'react-bootstrap';

function Services() {
  return (
    <div>
      <div className="services-backgroud-header">
        <img
          src="images/general/background_services_1.jpg"
          alt="Servicios Rabbit Automation"
        />
        <h3 className="services-header-title">Nuestros servicios</h3>
      </div>
      <div className="container__mt">
        <div className="header-section text-center">
        <h3 >Integración de servicios a tu medida</h3>
          <h5>Desarrollamos sistemas a la medida para sus sistemas de Smart Factory.</h5>
        </div>
          
        <div className="services-container-wrap-reverse demos">
          <div className="container-box-service">
            <img src="images/general/demo_eficiencia.png" alt="" />
          </div>
          <div className="container-box-service">
            <Card style={{ background: 'transparent' }}>
              <Card.Body>
                <Card.Title>Monitoreo industrial</Card.Title>
                <Card.Text style={{ fontWeight: '200'}}>
                Medimos el desempeño de cualquier proceso industrial con el fin de mejorar su eficiencia, rentabilidad y productividad desarrollando sistemas a la medida para sus sistemas de Smart Factory
                </Card.Text>
                <Button href="#" disabled>Ver demo</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="services-container-wrap demos">
          <div className="container-box-service">
            <Card style={{ background: 'transparent' }}>
              <Card.Body>
                <Card.Title>Control de almacén</Card.Title>
                <Card.Text style={{ fontWeight: '200'}}>
                Conozca en todo momento sus stocks y el valor del inmovilizado.
                <ul className="pl-5">
                  <li>Control detallado de las existencias y su ubicación</li>
                  <li>Múltiples almacenes y varias unidades de medida</li>
                  <li>Trazabilidad de lotes y números de serie</li>
                  <li>Automatización del almacén</li>
                </ul>
                </Card.Text>
                <Button href="#" disabled>Ver demo</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="container-box-service">
            <img src="images/general/demo_almacenes_descripcion.jpg" alt="" />
          </div>
        </div>
        <div className="header-section text-center pt-5">
        <h3>Equipo industrial</h3>
          <h5>Manejamos las mejores herramientas para el <strong>armado de tableros y reparación de equipos indutriales</strong>, ofreciendoles a nuestros clientes una alternativa garantizada de mantener sus equipos al 100%</h5>
        </div>

        <div className="services-container-wrap">
          <div className="container-box-service armado">
            reparacion
          </div>
          <div className="container-box-service armado">
            armado
          </div>
          <div className="container-box-service armado">
            automatizacion
          </div>
        </div>
        <div className="services-container-wrap">
          <div className="container-box-service armado">
            programacion
          </div>
          <div className="container-box-service armado">
            diseño e impresion
          </div>
          <div className="container-box-service armado">
            vision artificial
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
