import React from 'react'
import { blog } from './Data'
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
const Img = styled.img`
    width: 100%;
    height: 400px;
    transition: .5s;
    &:hover {
        transform: scale(1.2);
    }
`;
const A = styled.a`
   text-decoration: none;
   text-align: start;
   font-family: 'Oswald', sans-serif;
`;
const Head5 = styled.h5`
   font-size: 18px;
   margin-top: 14px !important;
   font-family: 'Oswald', sans-serif;
`;

export const Blog = () => {
  return (

    <div id='blog' className="container-fluid p-5">
        <div className="mb-5 text-center">
            <HeadTit className="text-uppercase">Our Blog</HeadTit>
            <Head1 className="display-3 text-uppercase mb-0">Latest Blog Post</Head1>
        </div>
        <div className="row g-5">
           {blog.map((val) => (
            <div className="col-lg-4">
                <div className="blog-item">
                    <div className="position-relative overflow-hidden rounded-top">
                        <Img className="img-fluid" src={val.cover} alt="img" data-aos="flip-left"/>
                    </div>
                    <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                        <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                            <span>{val.num}</span>
                            <h6 className="text-light text-uppercase mb-0">{val.month}</h6>
                            <span>{val.year}</span>
                        </div>
                        <A className="h5 text-uppercase text-light" href="/"><Head5>{val.text}</Head5></A>
                    </div>
                </div>
            </div>
            ))}
        </div>
 </div>

   
  )
}
