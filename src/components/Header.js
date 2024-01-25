import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt  } from "react-icons/fa";
import styled from 'styled-components';

const Head1 = styled.h1`
    color: #0000ff !important;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
`;
const Box = styled.div`
  background: #BDBDBF;
`;
const A = styled.a`
    font-family: 'Rubik', sans-serif;
    margin-right: 30px;
    padding: 40px 0;
    color: #F4F5F8;
    font-size: 17px;
    text-transform: uppercase;
    outline: none;
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
export const Header = () => {
  return (
    <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
                <a href="index.html" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center" >
                    <Head1 className="m-0 display-4 text-uppercase">MrOlimpya</Head1>
                </a>
            </div>
            <div className="col-lg-9">
                <Box className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                            <i className="fa fa-envelope me-2"><FaEnvelope color='#0000ff'/></i>
                            <h6 className="mb-0">info@example.com</h6>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-2">
                            <i className="fa fa-phone-alt me-2"><FaPhoneAlt color='#0000ff'/></i>
                            <h6 className="mb-0">+012 345 6789</h6>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="d-inline-flex align-items-center py-2">
                            <a className="btn btn-light btn-square rounded-circle me-2" href="/">
                                <i className="fab fa-facebook-f"><FaFacebookF /></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="/">
                                <i className="fab fa-twitter"><FaTwitter /></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="/">
                                <i className="fab fa-linkedin-in"><FaLinkedinIn /></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle me-2" href="/">
                                <i className="fab fa-instagram"><FaInstagram /></i>
                            </a>
                            <a className="btn btn-light btn-square rounded-circle" href="/">
                                <i className="fab fa-youtube"><FaYoutube /></i>
                            </a>
                        </div>
                    </div>
                </Box>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand d-block d-lg-none">
                        <h1 className="m-0 display-4 text-primary text-uppercase">Gymster</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <Link to='/' style={{textDecoration: 'none'}}><A href="/" className="nav-item nav-link active">Home</A></Link>
                            <Link to='/about' style={{textDecoration: 'none'}}><A href="/" className="nav-item nav-link">About</A></Link>
                            <Link to='/class1' style={{textDecoration: 'none'}}><A href="/" className="nav-item nav-link">Classes</A></Link>
                            <Link to='/trainer' style={{textDecoration: 'none'}}><A href="/" className="nav-item nav-link">Trainers</A></Link>
                            <div className="nav-item dropdown">
                                <A href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{textDecoration: 'none'}}>Pages</A>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <Link to='/blog' style={{textDecoration: 'none'}}><a href="/" className="dropdown-item">Blog</a></Link>
                                    <Link to='/' style={{textDecoration: 'none'}}><a href="/" className="dropdown-item">Blog Detail</a></Link>
                                    <Link to='/' style={{textDecoration: 'none'}}><a href="/" className="dropdown-item">Testimonial</a></Link>
                                </div>
                            </div>
                            <Link to='/contact' style={{textDecoration: 'none'}}><A href="/" className="nav-item nav-link">Contact</A></Link>
                        </div>
                        <Btn href="/" className="btn py-md-3 px-md-5 d-none d-lg-block">Join Us</Btn>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
