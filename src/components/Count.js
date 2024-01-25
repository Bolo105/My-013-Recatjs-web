import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import { FaStar, FaUsers, FaCheck, FaMugHot  } from "react-icons/fa";
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

const Counter = ({ end }) => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    setStartCounting(true);
  }, []);

  return (
    <CountUp end={end} duration={5} start={startCounting ? null : 0} />
  );
};

export const Count = () => {
  return (
    <div class="container-fluid bg-dark facts p-5 my-5">
        <div class="row gx-5 gy-4 py-5">
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <Box class="d-flex align-items-center text-center mb-3" >
                        <i class="fa fa-star fs-4 text-white"><FaStar fontSize='30px'/></i>
                    </Box>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Experience</h5>
                        <h1 class="display-5 text-white mb-0" style={{fontWeight: 'bold'}}>
                           <Counter end={12345} />
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <Box class="bg-primary d-flex text-center justify-content-center mb-3">
                        <i class="fa fa-users fs-4 text-white"><FaUsers fontSize='30px'/></i>
                    </Box>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Our Trainers</h5>
                        <h1 class="display-5 text-white mb-0" style={{fontWeight: 'bold'}}>
                          <Counter end={12345} />
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <Box class="bg-primary d-flex text-center justify-content-center mb-3">
                        <i class="fa fa-check fs-4 text-white"><FaCheck fontSize='30px'/></i>
                    </Box>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Complete Project</h5>
                        <h1 class="display-5 text-white mb-0" style={{fontWeight: 'bold'}}>
                           <Counter end={12345} />
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="d-flex">
                    <Box class="bg-primary d-flex text-center justify-content-center mb-3">
                        <i class="fa fa-mug-hot fs-4 text-white">< FaMugHot fontSize='30px'/></i>
                    </Box>
                    <div class="ps-4">
                        <h5 class="text-secondary text-uppercase">Happy Clients</h5>
                        <h1 class="display-5 text-white mb-0" style={{fontWeight: 'bold'}}>
                           <Counter end={12345} />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
