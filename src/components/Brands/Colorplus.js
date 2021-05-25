import React from "react";
import CardItem from "../CardItem";
import "./Colorplus.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function CarouselWithItems(index_model) {
  const models = [
    [
      "PLA Skiin 1.75mm",
      "PLA Red Dragon 1.75mm",
      "PLA Blue Whale 1.75mm",
      "PLA Black Panther 1.75mm",
      "PLA Silver Wolf 1.75mm",
      "PLA Grey Rhino 1.75mm",
      "PLA Green Cocodrile 1.75mm",
      "PLA Brown Bear 1.75mm",
      "PLA Skiin 1.75mm",
      "PLA Orange Tiger 1.75mm",
      "PLA Yellow Bee 1.75mm",
      "PLA Purple Bat 1.75mm",
    ],
    [
      "ABS White Artic 1.75mm",
      "ABS White Artic 2.85mm",
      "ABS Black Cosmic 1.75mm",
      "ABS Black Cosmic 2.85mm",
      "ABS Blue Ocean 1.75mm",
      "ABS Blue Ocean 2.85mm",
      "ABS Red Lava 1.75mm",
      "ABS Red Lava 2.85mm",
    ],
  ];
  const item = [];

  let index = 0;

  while (index < models[index_model].length) {
    item.push(
      <CardItem
        key={index}
        key_li={index}
        src={
          "images/marcas/filamentos/" +
          /* ((index_model === 0 && "PLA") || (index_model === 1 && "ABS")) + */
          (index_model === 0 ? "PLA" : "ABS") +
          "/color_plus_filament_" +
          JSON.stringify(index + 1) +
          ".jpg"
        }
        cardInfo={false}
        label={models[index_model][index]}
        path="#"
        marca="Impresiones personalizadas"
      />
    );
    index++;
  }
  const componentCarousel = (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows
      autoPlay={false}
      autoPlaySpeed={10000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      customTransition="all 1s linear"
      dotListClass="custom-dot-list-style"
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
      sliderClass=""
      swipeable
      transitionDuration={100}
    >
      {item}
    </Carousel>
  );
  return componentCarousel;
}

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
              Somos impresores aprobados de <strong>Color Plus</strong>,
              imprimimos tus piezas con el mejor filamento premium de México y
              con ello ofrecerte un servicio de la mejor calidad con los mejores
              materiales.
            </p>
          </div>
        </div>
      </div>
      <section className="filament-features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-header text-center">
                <h3>Características</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-sm-2">
                        <div className="feature-card-image">
                          <i className="fas fa-medal"></i>
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
                          <i className="fas fa-dumbbell"></i>
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
                          <i className="fas fa-pen-fancy"></i>
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
                          <i className="fas fa-palette"></i>
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
                          <i className="fas fa-gem"></i>
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
                          <i className="fas fa-pencil-ruler"></i>
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
        <div className="col-12">
          <div className="card-header text-center">
            <h3>Filamentos Color Plus</h3>
          </div>
        </div>
        <div className="card-header">
          <h3>PLA</h3>
        </div>
        {CarouselWithItems(0)}
        <div className="card-header pt-5">
          <h3>ABS</h3>
        </div>
        {CarouselWithItems(1)}
      </section>
    </>
  );
}

export default Colorplus;
