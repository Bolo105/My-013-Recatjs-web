import React from 'react'
import hero1 from './images/hero1.jpg'
import hero3 from './images/hero3.jpg'
import styled from 'styled-components'

const CarCap = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 36, 41, .8); 
    z-index: 1;
`;
const Head1 = styled.h1`
    font-weight: 500 !important;
    font-family: 'Rubik', sans-serif;
    font-weight: bold !important;
`;
const Btn = styled.a`
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    transition: .5s;
    color: #fff;
    background-color: #0000ff;
    &:hover {
        background-color: #0000ff;
        color: #000;
    }
`;
const Box = styled.div`
   max-width: 900px;
`;
const CarCont = styled.button`
    width: 10%;
`;
const A = styled.a`
   font-family: 'Oswald', sans-serif;
`;

export const Hero = () => {
  return (
    <div className="container-fluid p-0 mb-5" >
    <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="w-100" src={hero1} alt="Ima" />
                <CarCap className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <Box className="p-3">
                        <h5 className="text-white text-uppercase">Best Gym Center</h5>
                        <Head1 className="display-2 text-white text-uppercase mb-md-4">Build Your Body Strong With Gymster</Head1>
                        <Btn href="/" className="btn py-md-3 px-md-5 me-3">Join Us</Btn>
                        <A href="/" className="btn btn-light text-uppercase py-md-3 px-md-5">Contact Us</A>
                    </Box>
                </CarCap>
            </div>
            <div className="carousel-item">
                <img className="w-100" src={hero3} alt="Ima" />
                <CarCap className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <Box className="p-3" >
                        <h5 className="text-white text-uppercase">Best Gym Center</h5>
                        <Head1 className="display-2 text-white text-uppercase mb-md-4">Grow Your Strength With Our Trainers</Head1>
                        <Btn href="/" className="btn py-md-3 px-md-5 me-3">Join Us</Btn>
                        <A href="/" className="btn btn-light text-uppercase py-md-3 px-md-5">Contact Us</A>
                    </Box>
                </CarCap>
            </div>
        </div>
        <CarCont className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <spam className="carousel-control-prev-icon" aria-hidden="true"></spam>
            <span className="visually-hidden">Previous</span>
        </CarCont>
        <CarCont className="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <spam className="carousel-control-next-icon" aria-hidden="true"></spam>
            <span className="visually-hidden">Next</span>
        </CarCont>
    </div>
</div>
  )
}
