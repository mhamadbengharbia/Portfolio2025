import React from 'react';
import './style.css';
import MyPic from '../src/Mypic.webp'
function Hero() {
  return (
    <div className="hero">
      <img src={MyPic}></img>
      <h1>Mhamed Ben Gharbia</h1>
      <h2>Systems and Network Technician</h2>
      <button>More Info</button>

    </div>
  );
}

export default Hero;
