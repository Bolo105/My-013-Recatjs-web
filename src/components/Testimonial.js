
import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testi from './images/testi.jpg'
import testi1 from './images/testi1.jpg'
import testi2 from './images/testi2.jpg'
import styled from 'styled-components';

// Estilos convertidos a styled-components
const TestimonialContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
`;

const OwlNavButton = styled.div`
  position: relative;
  margin: 0 5px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: var(--primary);
  font-size: 22px;
  border-radius: 45px;
  transition: .5s;

  &:hover {
    color: var(--dark);
  }
`;

const TestimonialCarouselItem = styled.div`
  img {
    width: 90px;
    height: 90px;
  }
`;

const Testimonials = () => {
    const owlOptions = {
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          <OwlNavButton key="prev">{"<i class='bi bi-arrow-left'></i>"}</OwlNavButton>,
          <OwlNavButton key="next">{"<i class='bi bi-arrow-right'></i>"}</OwlNavButton>,
        ],
      };
  useEffect(() => {
    // Inicializar Owl Carousel
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
      OwlCarousel.init({
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: [
          <OwlNavButton key="prev">{"<i class='bi bi-arrow-left'></i>"}</OwlNavButton>,
          <OwlNavButton key="next">{"<i class='bi bi-arrow-right'></i>"}</OwlNavButton>,
        ],
        ...owlOptions,
      });
    }

    // Limpieza al desmontar el componente
    return () => {
      if (testimonialCarousel) {
        testimonialCarousel.trigger('destroy.owl.carousel');
      }
    };
  }, ); // Se ejecuta solo una vez en el montaje

  return (
    <div className="container-fluid p-0 my-5">
      <div className="row g-0">
        <div className="col-lg-6" style={{ minHeight: '500px' }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute w-100 h-100"
              src={testi}
              style={{ objectFit: 'cover' }}
              alt="testimonial background"
            />
          </div>
        </div>
        <div className="col-lg-6 bg-dark p-5">
          <div className="mb-5">
            <h5 className="text-primary text-uppercase">Testimonial</h5>
            <h1 className="display-3 text-uppercase text-light mb-0">
              Our Client Say
            </h1>
          </div>
          <TestimonialContainer>
            <OwlCarousel className="testimonial-carousel">
              <TestimonialCarouselItem>
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={testi1}
                    alt="Client 1"
                  />
                  <div className="ps-4">
                    <h5 className="text-uppercase text-light">Client Name</h5>
                    <span className="text-uppercase text-secondary">
                      Profession
                    </span>
                  </div>
                </div>
              </TestimonialCarouselItem>
              <TestimonialCarouselItem>
                <p className="fs-4 fw-normal text-light mb-4">
                  <i className="fa fa-quote-left text-primary me-3"></i>
                  Dolores sed duo clita tempor justo dolor et stet lorem kasd
                  labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                  et labore et tempor diam tempor erat dolor rebum sit ipsum.
                </p>
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid rounded-circle"
                    src={testi2}
                    alt="Client 2"
                  />
                  <div className="ps-4">
                    <h5 className="text-uppercase text-light">Client Name</h5>
                    <span className="text-uppercase text-secondary">
                      Profession
                    </span>
                  </div>
                </div>
              </TestimonialCarouselItem>
            </OwlCarousel>
          </TestimonialContainer>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
