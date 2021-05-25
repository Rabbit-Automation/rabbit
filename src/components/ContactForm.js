import React from "react";
import "./ContactForm.css";
import FooterContactInfo from './FooterContactInfo';

function ContactForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card-header">
            <h3>Contacto</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 contact-page">
                <FooterContactInfo
                  name="Gabriel Conejo"
                  phone="712 195 9072"
                  email="gconejo.rabbit@gmail.com"
                />
              </div>
              <div className="col-md-4 contact-page">
                <FooterContactInfo
                  name="Oscar Conejo"
                  phone="442 457 5549"
                  email="oconejo.rabbit@gmail.com"
                />
              </div>
              <div className="col-md-4 contact-page">
                <FooterContactInfo
                  name="Josue Reyes"
                  phone="55 2954 0933"
                  email="rabbit.demos@gmail.com"
                />
              </div>
            </div>
          </div>

          <div className="card-header">
            <h3>Formulario de contacto</h3>
          </div>
          <div className="card-body">
            <form action="" method="post">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="nombre">*Nombre:</label>
                      <input class="form-control" type="text" name="nombre" required />
                    </div>
                    <div className="form-group">
                      <label for="apellidos">*Apellidos:</label>
                      <input class="form-control" type="text" name="apellidos" required />
                    </div>
                    <div className="form-group">
                      <label for="telefono">*Telefono:</label>
                      <input class="form-control" type="text" name="telefono" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="email">*Correo electronico:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="mensaje">*Mensaje:</label>
                      <textarea
                        class="form-control"
                        id="mensaje"
                        rows="4"
                        name="mensaje"
                        required
                      ></textarea>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        name="acepto_terminos"
                        required
                      />
                      <label class="form-check-label" for="defaultCheck1">
                        <small>
                          He leído y acepto los términos del{" "}
                          <a href="/privacy"> Aviso de Privacidad.</a>
                        </small>
                      </label>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-12">
            <div className="card-header">
              <h3>Ubicación</h3>
            </div>
          </div>
          <div className="card-body">
            <p>Antigua Carretera a la Griega 210, 76246 La Piedad, Qro.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
