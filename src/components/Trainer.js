import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { team } from './Data';
import styled from 'styled-components';

const TeamContainer = styled.div`
  padding: 5rem;
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

const TeamRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0rem;
`;

const TeamItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: 0.5s !important;

  img {
    width: 100%;
    height: 700px;
  }

  &:hover {
    img {
      transition: 0.5s !important;
      transform: scale(1.2);
    }

    .team-overlay {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 1;
    }
  }
`;

const TeamOverlay = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 36, 41, 0.9);
  transition: 0.5s;
  opacity: 0;
`;

const SocialButton = styled.a`
  background-color: #fff; 
  border: none;
  border-radius: 50% !important;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  cursor: pointer;

  svg {
    color: #000; 
  }
`;
const Box = styled.div`
   background-color: rgba(34, 36, 41, .9) !important;
`;

export const Trainer = () => {
  return (
  <TeamContainer id='trainer' className="container-fluid p-5">
    <div className="mb-5 text-center">
        <HeadTit className="text-uppercase">The Team</HeadTit>
        <Head1 className="display-3 text-uppercase mb-0">Expert Trainers</Head1>
    </div>
    <TeamRow className="row g-5">
       {team.map((val) => (
        <div className="col-lg-4 col-md-6">
            <TeamItem className="team-item position-relative" data-aos="zoom-in">
                <div className="position-relative overflow-hidden rounded">
                    <img className="img-fluid w-100" src={val.cover} alt="" />
                    <TeamOverlay className="team-overlay">
                        <div className="d-flex align-items-center justify-content-start">
                            <SocialButton className="btn btn-light btn-square rounded-circle mx-1" href="#/"><i className="fab fa-twitter"><FaTwitter /></i></SocialButton>
                            <SocialButton className="btn btn-light btn-square rounded-circle mx-1" href="#/"><i className="fab fa-facebook-f"><FaFacebookF /></i></SocialButton>
                            <SocialButton className="btn btn-light btn-square rounded-circle mx-1" href="#/"><i className="fab fa-linkedin-in"><FaLinkedinIn /></i></SocialButton>
                        </div>
                    </TeamOverlay>
                </div>
                <Box className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{backgroundColor: 'rgba(34, 36, 41, .9)'}}>
                    <h5 className="text-uppercase text-light">{val.name}</h5>
                    <p className="text-uppercase text-secondary m-0">{val.job}</p>
                </Box>
            </TeamItem>
        </div>
        ) )}
    </TeamRow>
</TeamContainer>
  )
}
