import React from 'react'
import gym1 from './images/gym1.jpg'
import styled from 'styled-components'

const HeroCla = styled.div`
    background: linear-gradient(rgba(34, 36, 41, .8), rgba(34, 36, 41, .8)), url(${gym1}) top center no-repeat;
    background-size: cover;
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
const A = styled.a`
   font-family: 'Oswald', sans-serif;
`;


export const HeroClass = () => {
  return (
    <div>
      <HeroCla className="container-fluid bg-primary p-5 bg-hero mb-5">
          <div className="row py-5">
            <div className="col-12 text-center">
                <Head1 className="display-2 text-uppercase text-white mb-md-4">Classes</Head1>
                <Btn href="/" className="btn py-md-3 px-md-5 me-3">Home</Btn>
                <A href="/" className="btn btn-light text-uppercase py-md-3 px-md-5">Classes</A>
            </div>
          </div>
        </HeroCla>
    </div>
  )
}
