import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone  } from "react-icons/fa";
import styled from 'styled-components';

const Box = styled.div`
   width: 60px; 
   height: 60px;
   background: #0000ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center; 
`;

const HeadTit = styled.h5`
    color: #0000ff;
    font-weight: 500 !important;
    font-family: 'Oswald', sans-serif;
`;
const Head1 = styled.h1`
     font-family: 'Oswald', sans-serif;
     font-weight: bold !important;
`;
const Head5 = styled.h5`
     color: #0000ff;
     font-family: 'Oswald', sans-serif;
`;
const Btn = styled.button`
     background: #0000ff;
     text-transform: uppercase;
     font-family: 'Oswald', sans-serif;
     color: #fff;
     &:hover {
        background: #0000ff;
        color: #000;
     }
`;

export const Contact = () => {
  return (
    <div id='contact'>
       <div className="container-fluid p-5">
        <div className="mb-5 text-center">
            <HeadTit className="text-uppercase">Contact Us</HeadTit>
            <Head1 className="display-3 text-uppercase mb-0">Get In Touch</Head1>
        </div>
        <div className="row g-5 mb-5">
            <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
                    <Box className="rounded-circle d-flex align-items-center justify-content-center mb-3">
                        <i className="fa fa-map-marker-alt fs-4 text-white"><FaMapMarkerAlt /></i>
                    </Box>
                    <Head5 className="text-uppercase">Visit Us</Head5>
                    <p className="text-secondary mb-0">123 Street, New York, USA</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
                    <Box className="rounded-circle d-flex align-items-center justify-content-center mb-3" >
                        <i className="fa fa-envelope fs-4 text-white"><FaEnvelope /></i>
                    </Box>
                    <Head5 className="text-uppercase">Email Us</Head5>
                    <p className="text-secondary mb-0">info@example.com</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex flex-column align-items-center bg-dark rounded text-center py-5 px-3">
                    <Box className="rounded-circle d-flex align-items-center justify-content-center mb-3" >
                        <i className="fa fa-phone fs-4 text-white"><FaPhone /></i>
                    </Box>
                    <Head5 className="text-uppercase">Call Us</Head5>
                    <p className="text-secondary mb-0">+012 345 6789</p>
                </div>
            </div>
        </div>
        <div className="row g-0">
            <div className="col-lg-6">
                <div className="bg-dark p-5">
                    <form>
                        <div className="row g-3">
                            <div className="col-6">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name"  />{/* style="height: 55px;"*/}
                            </div>
                            <div className="col-6">
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email"  />{/* style="height: 55px;"*/}
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Subject"  />{/* style="height: 55px;"*/}
                            </div>
                            <div className="col-12">
                                <textarea className="form-control bg-light border-0 px-4 py-3" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <Btn className="btn w-100 py-3" type="submit">Send Message</Btn>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
            <iframe className="position-relative w-100 h-100"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
            </div>
        </div>
    </div>
    </div>
  )
}
