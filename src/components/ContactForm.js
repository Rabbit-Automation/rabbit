import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
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
                      <input class="form-control" type="text" required />
                    </div>
                    <div className="form-group">
                      <label for="nombre">*Apellidos:</label>
                      <input class="form-control" type="text" required />
                    </div>
                    <div className="form-group">
                      <label for="nombre">*Telefono:</label>
                      <input class="form-control" type="text" required />
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
                        required
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        Nunca compartiremos su correo electrónico con nadie más.
                      </small>
                    </div>
                    <div class="form-group">
                      <label for="mensaje">*Mensaje:</label>
                      <textarea
                        class="form-control"
                        id="mensaje"
                        rows="4"
                        required
                      ></textarea>
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
            <p>Carretera la Piedad km 03, San José, 76246 La Piedad, Qro.</p>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.6252484109253!2d-100.25795978531798!3d20.57572464626962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d36993d607064f%3A0x92cfaa6b36da399!2sTortas%20Filos%20%22Originales%22!5e0!3m2!1ses-419!2smx!4v1621292024763!5m2!1ses-419!2smx"
              width="1000"
              height="600"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
