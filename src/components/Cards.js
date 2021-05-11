import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards' id='conocenos'>
            <h2>Con&oacute;cenos</h2>            
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="card-body text-center">
										<p>Medimos el desempeño de cualquier proceso industrial con el fin de mejorar su eficiencia, rentabilidad y productividad desarrollando sistemas a la medida para sus sistemas de <strong>Smart Factory</strong></p>
									</div>
								</div>
							</div>
						</div>
						<div class="card-deck">
								<div class="card">
									<div className="card__icon">
										<i class="fas fa-database"></i>
									</div>
									<div className="card-body text-center">
										<strong className="card-title">Base de datos</strong>
									</div>
									<div className="card-footer card__description">
										<p>Last updated 3 mins ago</p>
									</div>
								</div>
								<div className="card">
									<div className="card__icon">
										<i className="fas fa-wifi"></i>
									</div>
									<div className="card-body text-center">
										<strong className="card-title">Conectividad</strong>
									</div>
								</div>
								<div className="card">
									<div className="card__icon">
										<i className="fas fa-desktop"></i>
									</div>
									<div className="card-body text-center">
										<strong className="card-title">Plataforma de monitoreo</strong>
									</div>
								</div>
								<div className="card">
									<div className="card__icon">
										<i className="fas fa-file-medical-alt"></i>
									</div>
									<div className="card-body text-center">
										<strong className="card-title">Reportes en tiempo real</strong>
									</div>
								</div>
								<div className="card">
									<div className="card__icon">
										<i className="fas fa-file-medical-alt"></i>
									</div>
									<div className="card-body text-center">
										<strong className="card-title">Reportes en tiempo real</strong>
									</div>
								</div>
						</div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
