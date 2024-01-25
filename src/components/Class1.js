import React, { useState } from 'react';
import { monday, tuesday, wednesday, thursday, friday, saturday, sunday } from './Data';
import styled from 'styled-components';

const HeadTit = styled.h5`
    color: #0000ff;
    font-weight: 500 !important;
    font-family: 'Oswald', sans-serif;
`;
const Head1 = styled.h1`
     font-family: 'Oswald', sans-serif;
     font-weight: bold !important;
`;
const Exe = styled.h5`
    color: #0000ff;
`;

export const Class1 = () => {
  const [activeTab, setActiveTab] = useState('tab-1'); // Estado para la pestaña activa

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderDaySchedule = (daySchedule) => {
    return (
      <div id='class1' className="row g-5">
        {daySchedule.map((val) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={val.title}>
            <div className="bg-dark rounded text-center py-5 px-3">
              <h6 className="text-uppercase text-light mb-3">{val.hours}</h6>
              <Exe className="text-uppercase">{val.title}</Exe>
              <p className="text-uppercase text-secondary mb-0">{val.trainer}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid p-5">
      <div className="mb-5 text-center">
        <HeadTit className="text-uppercase">Class Schedule</HeadTit>
        <Head1 className="display-3 text-uppercase mb-0">Working Hours</Head1>
      </div>
      <div className="tab-className text-center">
        <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-1' && 'active'}`}
              onClick={() => handleTabClick('tab-1')}
            >
              Monday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-2' && 'active'}`}
              onClick={() => handleTabClick('tab-2')}
            >
              Tuesday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-3' && 'active'}`}
              onClick={() => handleTabClick('tab-3')}
            >
              Wednesday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-4' && 'active'}`}
              onClick={() => handleTabClick('tab-4')}
            >
              Thursday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-5' && 'active'}`}
              onClick={() => handleTabClick('tab-5')}
            >
              Friday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-6' && 'active'}`}
              onClick={() => handleTabClick('tab-6')}
            >
              Saturday
            </a>
          </li>
          <li className="nav-item">
            <a href='#/'
              className={`nav-link rounded-pill text-white ${activeTab === 'tab-7' && 'active'}`}
              onClick={() => handleTabClick('tab-7')}
            >
              Sunday
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div id="tab-1" className={`tab-pane fade show p-0 ${activeTab === 'tab-1' && 'active'}`}>
          {renderDaySchedule(monday)}
        </div>
        <div id="tab-2" className={`tab-pane fade show p-0 ${activeTab === 'tab-2' && 'active'}`}>
          {renderDaySchedule(tuesday)}
        </div>
        <div id="tab-3" className={`tab-pane fade show p-0 ${activeTab === 'tab-3' && 'active'}`}>
          {renderDaySchedule(wednesday)}
        </div>
        <div id="tab-4" className={`tab-pane fade show p-0 ${activeTab === 'tab-4' && 'active'}`}>
          {renderDaySchedule(thursday)}
        </div>
        <div id="tab-5" className={`tab-pane fade show p-0 ${activeTab === 'tab-5' && 'active'}`}>
          {renderDaySchedule(friday)}
        </div>
        <div id="tab-6" className={`tab-pane fade show p-0 ${activeTab === 'tab-6' && 'active'}`}>
          {renderDaySchedule(saturday)}
        </div>
        <div id="tab-7" className={`tab-pane fade show p-0 ${activeTab === 'tab-7' && 'active'}`}>
          {renderDaySchedule(sunday)}
        </div>
      </div>
    </div>
  );
};