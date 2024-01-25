import React from 'react'
import { programa } from './Data'
import styled from 'styled-components'
import { HiArrowNarrowRight } from "react-icons/hi";


const Box = styled.div`
   margin-bottom: 135px;
   &::after {
    position :absolute;
    content: "";
    width: 100%;
    height: calc(100% - 45px);
    top: 135px;
    left: 0;
    background: #222429;
    z-index: -1;
   }
`;
const Head3 = styled.h3`
   font-family: 'Oswald', sans-serif;
`;
const A1 = styled.a`
    text-decoration: none;
    color: #0000ff;
    font-weight: 600;
    &:hover {
      color: #f29807;
    }
`;
const A = styled.a`
   background: #0000ff;
   text-transform: uppercase;
   border: 1px solid #0000ff;
   font-weight: 700;
   &:hover {
    background: #FB5B21;
    border: 1px solid #0000ff;
    color: #000;
    font-weight: 700;
   }
`;

export const Program = () => {
  return (
    <Box className="container-fluid programe position-relative px-5 mt-5" >
      <div className="row g-5 gb-5">
        {programa.map((val) => (
        <div className="col-lg-4 col-md-6" data-aos="flip-left">
            <div className="bg-light rounded text-center p-5">
                <i className="flaticon-six-pack display-1">{val.icon}</i>
                <Head3 className="text-uppercase my-4">{val.title}</Head3>
                <p>{val.text}</p>
                <A1 className="text-uppercase" href="/">Read More <i className="bi bi-arrow-right"><HiArrowNarrowRight /></i></A1>
            </div>
        </div>
         ))}
        <div className="col-lg-12 col-md-6 text-center">
            <h1 className="text-uppercase text-light mb-4" data-aos="fade-left">30% Discount For This Summer</h1>
            <A href="/" className="btn btn-primary py-3 px-5" data-aos="zoom-in">Become A Member</A>
        </div>
      </div>
    </Box>
  )
}
