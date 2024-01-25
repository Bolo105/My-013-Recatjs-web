import React from 'react'
import blog1 from './images/blog1.jpg'
import styled from 'styled-components'

const HeadTit = styled.h5`
    color: #0000ff;
    font-weight: 500 !important;
    font-family: 'Oswald', sans-serif;
`;
const Head1 = styled.h1`
     font-family: 'Oswald', sans-serif;
     font-weight: bold !important;
`;
const Box = styled.div`
   min-height: 500px;
   position: relative;
`;
const Img = styled.img`
   object-fit: cover !important;
   width: 100%;
   height: 56vh;
`;
const ActiveNavLink = styled.a`
  &.active {
    background-color: #0000ff !important;
  }
`;

export const About = () => {
  return (
    <div id='about' className="container-fluid p-5">
    <div className="row gx-5">
        <Box className="col-lg-5 mb-5 mb-lg-0" >
            <div className="h-100">
                <Img className=" rounded img-fluid" src={blog1} alt='img' data-aos="zoom-in"/>
            </div>
        </Box>
        <div className="col-lg-7">
            <div className="mb-4">
                <HeadTit className="text-uppercase text-start" data-aos="zoom-in" >About Us</HeadTit>
                <Head1 className="display-3 text-uppercase mb-0 text-start" data-aos="fade-left">Welcome to MrOlimpya</Head1>
            </div>
            <h4 className="text-body mb-4 text-start" data-aos="fade-left">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
            <p className="mb-4 text-start" data-aos="fade-left">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
            <div className="rounded bg-dark p-5">
                <ul className="nav nav-pills mb-3">
                    <li className="nav-item w-50" >
                        <ActiveNavLink className="nav-link text-uppercase text-center text-white w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</ActiveNavLink>
                    </li>
                    <li className="nav-item w-50">
                            <ActiveNavLink className="nav-link text-uppercase text-center text-white w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</ActiveNavLink>
                    </li>
                </ul>
                <div className="tab-content" data-aos="zoom-in">
                    <div className="tab-pane fade show active" id="pills-1">
                        <p className="text-white mb-0 text-start">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    </div>
                    <div className="tab-pane fade" id="pills-2">
                        <p className="text-white mb-0 text-start">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
