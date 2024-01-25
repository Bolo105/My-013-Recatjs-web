import React from 'react'
import { footer1 } from './Data'
import { footer2 } from './Data'
import { BsArrowRight, BsGeoAlt, BsEnvelopeOpen, BsTelephone  } from "react-icons/bs";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import styled from 'styled-components';

const Btn = styled.a`
   color: #FFFFFF;
   background-color: #0000ff;
   width: 38px;
   height: 38px;
   &:hover {
    color: #111;
    background-color: #0000ff;
   }
`;

const Wrapp = styled.div`
   a {
    color: #fff;
    text-decoration: none;
   }
   i {
    color: #0000ff;
   }
   p {
    color: #fff;
   }
`;
const Box = styled.div`
   background-color: #0000ff;
   height: 100;
   z-index: 1 !important;
`;
const FootEnd = styled.div`
   background: #111111;
`;
const Comp = styled.div`
   background-color: #0000ff;
`;

export const Footer = () => {
  return (
    <div>
    <div className="container-fluid bg-dark text-secondary px-5 mt-5">
    <div className="row gx-5">
        <div className="col-lg-8 col-md-6">
            <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                    <h4 className="text-uppercase text-light mb-4 text-start">Get In Touch</h4>
                    <Wrapp className="d-flex mb-2">
                        <i className="bi bi-geo-alt me-2"><BsGeoAlt /></i>
                        <p className="mb-0">123 Street, New York, USA</p>
                    </Wrapp>
                    <Wrapp className="d-flex mb-2">
                        <i className="bi bi-envelope-open me-2">< BsEnvelopeOpen  /></i>
                        <p className="mb-0">info@example.com</p>
                    </Wrapp>
                    <Wrapp className="d-flex mb-2">
                        <i className="bi bi-telephone me-2"><BsTelephone /></i>
                        <p className="mb-0">+012 345 67890</p>
                    </Wrapp>
                    <div className="d-flex mt-4">
                        <Btn className="btn  btn-square rounded-circle me-2" href="#/"><i className="fab fa-twitter"><FaTwitter /></i></Btn>
                        <Btn className="btn  btn-square rounded-circle me-2" href="#/"><i className="fab fa-facebook-f"><FaFacebookF /></i></Btn>
                        <Btn className="btn  btn-square rounded-circle me-2" href="#/"><i className="fab fa-linkedin-in"><FaLinkedinIn /></i></Btn>
                        <Btn className="btn  btn-square rounded-circle" href="#/"><i className="fab fa-instagram"><FaInstagram /></i></Btn>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                    <h4 className="text-uppercase text-light mb-4 text-start">Quick Links</h4>
                    <Wrapp className="d-flex flex-column text-start">
                       {footer1.map((val) => (
                        <a className="mb-2" href="#/"><i className="bi bi-arrow-right me-2"><BsArrowRight /></i>{val.text}</a>
                        ))}
                    </Wrapp>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                    <h4 className="text-uppercase text-light mb-4 text-start">Popular Links</h4>
                    <Wrapp className="d-flex flex-column text-start">
                        {footer2.map((val) => (
                        <a className="mb-2" href="#/"><i className="bi bi-arrow-right me-2"><BsArrowRight /></i>{val.text}</a>
                        ))}
                    </Wrapp>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <Box className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-5">
                <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
                <h6 className="text-uppercase text-white">Subscribe Our Newsletter</h6>
                <p className="text-light">Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                        <button className="btn btn-dark text-uppercase">Sign Up</button>
                    </div>
                </form>
            </Box>
        </div>
    </div>
</div>
<FootEnd className="container-fluid py-4 py-lg-0 px-5" >
    <div className="row gx-5">
        <div className="col-lg-8">
            <Wrapp className="py-lg-4 text-center">
                <p className="mb-0">&copy; <a className="text-light fw-bold" href="#/">Your Site Name</a>. All Rights Reserved.</p>
            </Wrapp>
        </div>
        <div className="col-lg-4">
            <Comp className="py-lg-4 text-center credit">
                <p className="mb-0" style={{color: '#fff'}}>Designed by <a className="text-light fw-bold" href="#/" style={{textDecoration: 'none'}}>Your Site Name</a></p>
            </Comp>
        </div>
    </div>
</FootEnd>
</div>
  )
}
